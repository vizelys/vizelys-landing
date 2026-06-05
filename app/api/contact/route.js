export async function POST(request) {
  const body = await request.json()
  const { name, email, tel, activite, message } = body

  const errors = []
  if (!name?.trim()) errors.push('name')
  if (!email?.trim()) errors.push('email')
  if (!activite?.trim()) errors.push('activite')
  if (errors.length) {
    return Response.json({ error: 'Champs manquants', fields: errors }, { status: 400 })
  }

  const notionToken = process.env.NOTION_TOKEN
  const notionDbId = process.env.NOTION_DATABASE_ID
  const discordWebhook = process.env.DISCORD_WEBHOOK_URL

  const now = new Date().toISOString()

  // — Notion ——————————————————————————————————————————————
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
          Nom:       { title:        [{ text: { content: name } }] },
          Email:     { email:        email },
          Téléphone: { phone_number: tel || null },
          Secteur:   { select:       { name: activite } },
          Message:   { rich_text:    [{ text: { content: message || '' } }] },
          Date:      { date:         { start: now } },
          Statut:    { select:       { name: 'Nouveau' } },
        },
      }),
    })
  }

  // — Discord ——————————————————————————————————————————————
  if (discordWebhook) {
    await fetch(discordWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'Vizelys Leads',
        avatar_url: 'https://vizelys.fr/favicon.ico',
        embeds: [{
          title: `📥 Nouveau lead — ${name}`,
          color: 0x5894bb,
          fields: [
            { name: '✉️ Email',    value: email,             inline: true },
            { name: '📞 Tél',      value: tel || '—',        inline: true },
            { name: '🏢 Secteur',  value: activite,          inline: true },
            { name: '💬 Message',  value: message || '—',    inline: false },
          ],
          timestamp: now,
          footer: { text: 'vizelys.fr' },
        }],
      }),
    })
  }

  return Response.json({ ok: true })
}
