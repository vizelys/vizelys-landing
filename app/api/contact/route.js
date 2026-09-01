export async function POST(request) {
  const body = await request.json()
  const { name, email, secteur, taille, message } = body

  const errors = []
  if (!name?.trim()) errors.push('name')
  if (!email?.trim()) errors.push('email')
  if (!secteur?.trim()) errors.push('secteur')
  if (!taille?.trim()) errors.push('taille')
  if (errors.length) {
    return Response.json({ error: 'Champs manquants', fields: errors }, { status: 400 })
  }

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
          Message: { rich_text: [{ text: { content: message || '' } }] },
          Date:    { date:      { start: now } },
          Statut:  { select:    { name: 'Nouveau' } },
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
          title: `📥 Nouveau lead — ${name}`,
          color: 0x22B883,
          fields: [
            { name: '✉️ Email',    value: email,             inline: true },
            { name: '🏭 Secteur',  value: secteur,           inline: true },
            { name: '👥 Taille',   value: taille,            inline: true },
            { name: '💬 Situation', value: message || '—',   inline: false },
          ],
          timestamp: now,
          footer: { text: 'vizelys.fr — Aide à la décision' },
        }],
      }),
    }).catch(() => {})
  }

  return Response.json({ ok: true })
}
