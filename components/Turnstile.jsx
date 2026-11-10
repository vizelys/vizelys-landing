'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

// Cloudflare Turnstile : captcha le plus souvent invisible (mode choisi dans le tableau de bord
// Cloudflare). Sans NEXT_PUBLIC_TURNSTILE_SITE_KEY, rien n'est affiché et le formulaire marche
// comme avant. Le jeton est ajouté au formulaire dans un champ caché « cf-turnstile-response ».
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

export default function Turnstile() {
  const el = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!SITE_KEY || !ready || !el.current || !window.turnstile) return
    const id = window.turnstile.render(el.current, { sitekey: SITE_KEY, appearance: 'interaction-only' })
    return () => window.turnstile.remove(id)
  }, [ready])

  if (!SITE_KEY) return null
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onReady={() => setReady(true)}
      />
      <div ref={el} style={{ marginBottom: 8 }} />
    </>
  )
}

/** Un jeton ne sert qu'une fois : à rappeler après un envoi en échec. */
export function resetTurnstile() {
  if (typeof window !== 'undefined') window.turnstile?.reset()
}
