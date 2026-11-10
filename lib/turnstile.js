// Vérification côté serveur du jeton Cloudflare Turnstile.
// Sans TURNSTILE_SECRET_KEY, la vérification est désactivée (le formulaire marche comme avant).
export async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true
  if (typeof token !== 'string' || !token) return false
  const form = new URLSearchParams({ secret, response: token })
  if (ip) form.set('remoteip', ip)
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: form,
      signal: AbortSignal.timeout(5000),
    })
    const data = await res.json()
    return data.success === true
  } catch {
    // Cloudflare injoignable : on laisse passer plutôt que de perdre un vrai prospect ;
    // les autres filtres (champ piège, délai, e-mail, liens) restent actifs.
    return true
  }
}
