'use client'

import { useRef, useState, useEffect } from 'react'

function ScaledMock({ w = 1200, h = 720, children }) {
  const ref = useRef(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => {
      const cw = el.clientWidth
      if (cw > 0) setScale(cw / w)
    }
    measure()
    ;[60, 200, 600].forEach((t) => setTimeout(measure, t))
    let ro
    if (window.ResizeObserver) {
      ro = new ResizeObserver(measure)
      ro.observe(el)
    }
    window.addEventListener('resize', measure)
    return () => {
      if (ro) ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [w])

  return (
    <div
      className="mock-viewport"
      ref={ref}
      style={{
        height: scale ? h * scale : undefined,
        aspectRatio: scale ? undefined : `${w} / ${h}`,
      }}
    >
      <div
        className="mock-stage"
        style={{ width: w, height: h, transform: `scale(${scale || 0.0001})` }}
      >
        {children}
      </div>
    </div>
  )
}

const mDrop  = <svg viewBox="0 0 24 24" fill="none"><path d="M12 3c4 5 6.5 8 6.5 11a6.5 6.5 0 11-13 0C5.5 11 8 8 12 3z" fill="currentColor"/></svg>
const mPhone = <svg viewBox="0 0 24 24" fill="none"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16 16 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
const mFlame = <svg viewBox="0 0 24 24" fill="none"><path d="M12 3c3 4 5 6 5 9a5 5 0 11-10 0c0-2 1.5-3.5 2.5-2C9 8 10 6 12 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>
const mPipe  = <svg viewBox="0 0 24 24" fill="none"><path d="M5 9V7a3 3 0 013-3h1v5M5 9h6V4M5 9v11M19 15v2a3 3 0 01-3 3h-1v-5M19 15h-6v5M19 15V4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
const mBath  = <svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16v3a4 4 0 01-4 4H8a4 4 0 01-4-4v-3zM7 12V6a2 2 0 012-2c1 0 1.5.5 1.8 1.2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
const mBolt  = <svg viewBox="0 0 24 24" fill="none"><path d="M13 3L5 13h6l-1 8 8-11h-6l1-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>

export function MockAfter() {
  return (
    <ScaledMock w={1200} h={720}>
      <div className="mock-site ms">
        <div className="ms-nav">
          <div className="ms-logo">{mDrop} Maison Renaud</div>
          <nav className="ms-links">
            <span>Services</span><span>Réalisations</span><span>Avis</span>
            <span>Zone d&apos;intervention</span><span>Contact</span>
          </nav>
          <div className="ms-navcta">
            <span className="ms-phone">{mPhone} 04 50 27 18 40</span>
            <a className="ms-btn">Devis gratuit</a>
          </div>
        </div>
        <div className="ms-hero">
          <div className="ms-hero-l">
            <span className="ms-eyebrow">Artisan certifié RGE · Annecy &amp; alentours</span>
            <h1>Votre confort, entre de bonnes mains depuis 2009.</h1>
            <p>Plomberie, chauffage et dépannage d&apos;urgence. Une équipe locale, des devis clairs et un travail soigné.</p>
            <div className="ms-cta">
              <a className="ms-btn lg">Demander un devis</a>
              <a className="ms-btn ghost lg">Voir nos réalisations</a>
            </div>
            <div className="ms-trust">
              <span className="ms-stars">★★★★★</span> <b>4,9/5</b> · 187 avis Google
              <span className="ms-sep" /> 15 ans d&apos;expérience
              <span className="ms-sep" /> Intervention sous 48 h
            </div>
          </div>
          <div className="ms-hero-r">
            <div className="ms-photo" />
            <div className="ms-reviewcard">
              <span className="ms-stars">★★★★★</span>
              <b>« Rapide, propre et de bon conseil. »</b>
              <span>Claire D. · Annecy-le-Vieux</span>
            </div>
          </div>
        </div>
        <div className="ms-strip">
          <div className="ms-svc"><div className="ms-svc-ic">{mFlame}</div><b>Chauffage</b><span>Installation &amp; entretien</span></div>
          <div className="ms-svc"><div className="ms-svc-ic">{mPipe}</div><b>Plomberie</b><span>Dépannage &amp; rénovation</span></div>
          <div className="ms-svc"><div className="ms-svc-ic">{mBath}</div><b>Salle de bain</b><span>Création clé en main</span></div>
          <div className="ms-svc"><div className="ms-svc-ic">{mBolt}</div><b>Urgence 24/7</b><span>Fuite, panne, gel</span></div>
        </div>
      </div>
    </ScaledMock>
  )
}

export function MockBefore() {
  return (
    <ScaledMock w={1200} h={720}>
      <div className="mock-site bs">
        <div className="bs-banner">
          <div className="bs-title">PLOMBERIE RENAUD</div>
          <div className="bs-tel">Tel : 04.50.27.18.40 — Fax sur demande</div>
          <div className="bs-new">NOUVEAU !</div>
        </div>
        <div className="bs-menubar">
          <u>Accueil</u> | <u>Nos services</u> | <u>Photos</u> | <u>Liens utiles</u> | <u>Livre d&apos;or</u> | <u>Nous contacter</u>
        </div>
        <div className="bs-body">
          <div className="bs-aside">
            <div className="bs-clip">[ photo<br/>chantier.jpg ]</div>
            <div className="bs-construction">🚧 Page en construction 🚧</div>
            <div className="bs-counter">Visiteur n° 0004213</div>
          </div>
          <div className="bs-main">
            <h2>Bienvenue sur notre site internet !!!</h2>
            <p>La société PLOMBERIE RENAUD, située à Annecy, est à votre disposition pour tous vos travaux de plomberie et de chauffage. Nous intervenons chez les particuliers et les professionnels dans toute la région.</p>
            <p>Pour nous joindre, <a href="#">cliquez ici</a> ou envoyez un mail à plomberie.renaud@wanadoo.fr — réponse sous quelques jours.</p>
            <ul className="bs-list">
              <li>- Plomberie générale</li>
              <li>- Chauffage et chaudières</li>
              <li>- Dépannage divers</li>
              <li>- Devis sur demande</li>
            </ul>
            <div className="bs-foot">
              <span className="bs-ie">Site optimisé pour Internet Explorer 6 · 800×600</span>
              <span>© 2011 — Tous droits réservés</span>
            </div>
          </div>
        </div>
      </div>
    </ScaledMock>
  )
}
