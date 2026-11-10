// Filtrage anti-spam du formulaire de contact (côté serveur).
// Les robots reçoivent une réponse « ok » sans que rien ne soit transmis : on ne leur
// indique pas ce qui les a trahis.

const MIN_FILL_MS = 3000 // un humain met plus de 3 s à remplir le formulaire
const MAX = { name: 100, email: 200, secteur: 100, taille: 50, message: 3000 }

// Domaines d'adresses jetables ou utilisés par des campagnes de spam.
const BLOCKED_EMAIL_DOMAINS = [
  'probox.my.id', 'mailinator.com', 'yopmail.com', 'yopmail.fr', 'guerrillamail.com',
  'sharklasers.com', 'trashmail.com', '10minutemail.com', 'tempmail.com', 'temp-mail.org',
  'dispostable.com', 'getnada.com', 'maildrop.cc', 'throwawaymail.com',
]
// Suffixes de sous-domaines gratuits, sans usage professionnel plausible ici.
const BLOCKED_EMAIL_SUFFIXES = ['.my.id']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const URL_RE = /\b(?:https?:\/\/|www\.)\S+|\b[a-z0-9-]+\.(?:online|site|xyz|top|click|link|live|shop|my\.id)\b\S*/i

/** Renvoie { spam: true } pour un envoi à jeter, sinon { spam: false, suspect, reasons }. */
export function screenLead(body) {
  // Champ piège invisible : un humain ne le voit pas, un robot le remplit.
  if (typeof body.website === 'string' && body.website.trim() !== '') return { spam: true }

  // Envoyé trop vite, ou sans passer par la page (appel direct de l'API).
  const startedAt = Number(body.startedAt)
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) return { spam: true }

  for (const [field, max] of Object.entries(MAX)) {
    if (typeof body[field] === 'string' && body[field].length > max) return { spam: true }
  }

  const email = String(body.email || '').trim().toLowerCase()
  if (!EMAIL_RE.test(email)) return { spam: true }
  const domain = email.split('@')[1]
  if (BLOCKED_EMAIL_DOMAINS.includes(domain) || BLOCKED_EMAIL_SUFFIXES.some((s) => domain.endsWith(s))) {
    return { spam: true }
  }

  // Un vrai prospect n'envoie presque jamais de lien dans son premier message :
  // on le transmet, mais signalé et avec des liens non cliquables.
  const reasons = []
  if (URL_RE.test(String(body.message || ''))) reasons.push('contient un lien')
  return { spam: false, suspect: reasons.length > 0, reasons }
}

/** Rend les liens non cliquables (Discord, Notion) : hxxps://exemple[.]com */
export function defang(text) {
  return String(text || '')
    .replace(/https?:\/\//gi, (m) => m.replace(/^http/i, 'hxxp'))
    .replace(/www\./gi, 'www[.]')
    .replace(/([a-z0-9-])\.(?=[a-z]{2,}\b)/gi, '$1[.]')
}
