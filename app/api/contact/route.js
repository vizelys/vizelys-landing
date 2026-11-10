import { screenLead, defang } from '@/lib/antispam'

export async function POST(request) {
  const body = await request.json().catch(() => ({}))
  const { name, email, secteur, taille, message } = body

  const errors = []
  if (!name?.trim()) errors.push('name')
  if (!email?.trim()) errors.push('email')
  if (!secteur?.trim()) errors.push('secteur')
  if (!taille?.trim()) errors.push('taille')
  if (errors.length) {
    return Response.json({ error: 'Champs manquants', fields: errors }, { status: 400 })
  }

  // Robots : réponse « ok » sans rien transmettre.
  const screen = screenLead(body)
  if (screen.spam) return Response.json({ ok: true })
  const suspect = screen.suspect
  const flag = suspect ? `⚠️ Lead suspect (${screen.reasons.join(', ')}) — ne pas cliquer de lien` : null

  const notionToken = process.env.NOTION_TOKEN
  const notionDbId = process.env.NOTION_DATABASE_ID
  const discordWebhook = process.env.DISCORD_WEBHOOK_URL
  const now = new Date().toISOString()

  if (notionToken && notionDbId) {
    await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${notionToken}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: notionDbId },
        properties: {
          Nom:     { title:     [{ text: { content: name } }] },
          Email:   { email:     email },
          Secteur: { select:    { name: secteur } },
          Taille:  { select:    { name: taille } },
          Message: { rich_text: [{ text: { content: suspect ? defang(message) : (message || '') } }] },
          Date:    { date:      { start: now } },
          Statut:  { select:    { name: suspect ? 'Suspect' : 'Nouveau' } },
        },
      }),
    }).catch(() => {})
  }

  if (discordWebhook) {
    await fetch(discordWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'Vizelys Leads',
        embeds: [{
          title: `${suspect ? '⚠️ Lead suspect' : '📥 Nouveau lead'} — ${defang(name)}`.slice(0, 256),
          description: flag || undefined,
          color: suspect ? 0xE0A100 : 0x22B883,
          fields: [
            { name: '✉️ Email',    value: email,             inline: true },
            { name: '🏭 Secteur',  value: secteur,           inline: true },
            { name: '👥 Taille',   value: taille,            inline: true },
            // Liens rendus non cliquables : un lien dans un premier message est un signal d'hameçonnage.
            { name: '💬 Situation', value: (defang(message) || '—').slice(0, 1024), inline: false },
          ],
          timestamp: now,
          footer: { text: 'vizelys.fr — Aide à la décision' },
        }],
      }),
    }).catch(() => {})
  }

  return Response.json({ ok: true })
}
