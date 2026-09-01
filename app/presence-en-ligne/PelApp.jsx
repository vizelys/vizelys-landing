'use client'

import { useState, useEffect } from 'react'
import Reveal from '@/components/Reveal'
import BrandMark from '@/components/BrandMark'
import { MockAfter, MockBefore } from '@/components/MockSite'
import { Icon } from '@/lib/icons'
import { VIZ } from '@/lib/data'

function PelHeader({ theme, onToggleTheme, scrolled, menuOpen, onOpenMenu }) {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav">
        <a href="#top" className="brand">
          <BrandMark /> Vizelys
        </a>
        <nav className="nav-links">
          {VIZ.nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
          <a href="/" style={{ color: 'var(--accent-ink)' }}>← vizelys.fr</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Changer de thème">
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a href="#contact" className="btn btn-primary btn-sm">Prendre rendez-vous</a>
          <button className="icon-btn burger" onClick={onOpenMenu} aria-label="Menu">
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  )
}

function PelMobileMenu({ open, onClose, theme, onToggleTheme }) {
  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`}>
      <div className="mm-top">
        <a href="#top" className="brand" onClick={onClose}><BrandMark /> Vizelys</a>
        <button className="icon-btn" onClick={onClose} aria-label="Fermer">
          <Icon name="cross" />
        </button>
      </div>
      <nav>
        {VIZ.nav.map((n) => (
          <a key={n.href} href={n.href} onClick={onClose}>{n.label}</a>
        ))}
        <a href="/" onClick={onClose} style={{ color: 'var(--accent-ink)' }}>← vizelys.fr</a>
      </nav>
      <a href="#contact" className="btn btn-primary" onClick={onClose}>Prendre rendez-vous</a>
      <button className="btn btn-ghost" style={{ marginTop: 12 }} onClick={onToggleTheme}>
        <Icon name={theme === 'dark' ? 'sun' : 'moon'} style={{ width: 18, height: 18 }} />
        {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
      </button>
    </div>
  )
}

function SectionHead({ eyebrow, title, sub, center }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`}>
      <Reveal as="span" className={`eyebrow ${center ? 'center' : ''}`}>{eyebrow}</Reveal>
      <Reveal as="h2" delay={60}>{title}</Reveal>
      {sub && <Reveal as="p" delay={120}>{sub}</Reveal>}
    </div>
  )
}

function PelHero() {
  return (
    <section className="hero" id="top" style={{ overflow: 'hidden', position: 'relative' }}>
      <div className="hero-glow" />
      <div className="wrap">
        <div className="hero-center">
          <Reveal as="span" className="eyebrow center">Refonte web · SEO local</Reveal>
          <Reveal as="h1" delay={60}>
            Une présence en ligne claire et crédible{' '}
            <em>pour les entreprises locales.</em>
          </Reveal>
          <Reveal as="p" className="hero-lead" delay={120}>
            Vizelys aide les entreprises locales à transformer leur réputation, leurs preuves
            et leur savoir-faire en contacts concrets : appels, devis et rendez-vous.
          </Reveal>
          <Reveal delay={180}>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Prendre rendez-vous
                <Icon name="arrow" className="arr" style={{ width: 18, height: 18 }} />
              </a>
              <a href="#services" className="btn btn-ghost">Voir notre approche</a>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-wide" delay={140}>
          <div className="browser">
            <div className="browser-bar">
              <div className="browser-dots"><i /><i /><i /></div>
              <div className="browser-url">maisonrenaud-annecy.fr</div>
            </div>
            <div className="browser-body">
              <MockAfter />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PelConstat() {
  return (
    <section className="section" id="constat">
      <div className="wrap constat-grid">
        <SectionHead
          eyebrow="Le constat"
          title="Vos clients vous cherchent avant d'appeler."
        />
        <div className="frictions">
          {VIZ.frictions.map((f, i) => (
            <Reveal className="friction" key={f.t} delay={i * 80}>
              <span className="fnum">0{i + 1}</span>
              <div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PelApproche() {
  return (
    <section className="section section--alt" id="approche">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Notre approche"
          title="De votre métier à votre présence en ligne."
        />
        <Reveal className="steps" style={{ marginTop: 52 }}>
          {VIZ.steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function PelServices() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHead eyebrow="Services" title="Ce que nous faisons concrètement." />
        <div className="svc-grid" style={{ marginTop: 48 }}>
          {VIZ.services.map((s, i) => (
            <Reveal className="svc" key={s.t} delay={i * 70}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="svc-tag">
                <Icon name="check" style={{ width: 15, height: 15 }} />
                {s.tag}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PelAvantApres() {
  const [state, setState] = useState('after')
  const isAfter = state === 'after'
  const data = VIZ.beforeAfter[state]

  return (
    <section className="section section--alt" id="avant-apres">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Avant / Après"
          title="Ce que change une présence bien pensée."
        />
        <Reveal style={{ marginTop: 44, display: 'flex', justifyContent: 'center' }}>
          <div className="ba-toggle">
            <span
              className="ba-thumb"
              style={{
                left: 4,
                width: 'calc(50% - 6px)',
                transform: isAfter ? 'translateX(calc(100% + 4px))' : 'none',
              }}
            />
            <button aria-pressed={!isAfter} onClick={() => setState('before')}>Avant</button>
            <button aria-pressed={isAfter} onClick={() => setState('after')}>Après</button>
          </div>
        </Reveal>
        <Reveal className="ba-panel" delay={60}>
          <div>
            <p className="ba-state-label">{data.label}</p>
            <div className="ba-list">
              {data.items.map((item, i) => (
                <div key={i} className={`ba-item ${isAfter ? 'pos' : 'neg'}`}>
                  <div className="ba-ic">
                    <Icon name={isAfter ? 'check' : 'cross'} />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="browser">
              <div className="browser-bar">
                <div className="browser-dots"><i /><i /><i /></div>
                <div className="browser-url">{data.url}</div>
              </div>
              <div className="browser-body">
                {isAfter ? <MockAfter /> : <MockBefore />}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PelPourQui() {
  return (
    <section className="section" id="pour-qui">
      <div className="wrap">
        <SectionHead eyebrow="Pour qui" title="Les entreprises locales qui vivent de la confiance." />
        <div className="niche-grid" style={{ marginTop: 48 }}>
          {VIZ.niches.map((n, i) => (
            <Reveal className="niche" key={n.t} delay={i * 60}>
              <h3>{n.t}</h3>
              <p>{n.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PelFaq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section section--alt" id="faq">
      <div className="wrap faq-grid">
        <SectionHead eyebrow="FAQ" title="Questions fréquentes." />
        <Reveal className="faq-list">
          {VIZ.faq.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  {f.q}<span className="faq-ic" />
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? 300 : 0 }}>
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

function PelContact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const fd = new FormData(e.target)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    fd.get('name'),
          email:   fd.get('email'),
          secteur: fd.get('activite'),
          taille:  '< 20 collaborateurs',
          message: fd.get('message'),
        }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError('Une erreur est survenue. Écrivez-nous à contact@vizelys.fr')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <div>
          <SectionHead eyebrow="Contact" title="Parlons de votre projet." sub="Un premier échange sans engagement pour voir si on peut vous aider." />
          <div className="contact-steps">
            {VIZ.contactSteps.map((step, i) => (
              <Reveal className="cstep" key={i} delay={i * 70}>
                <div className="cs-num">0{i + 1}</div>
                <div>
                  <h3>{step.t}</h3>
                  <p>{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={80}>
          <div className="form">
            {sent ? (
              <div className="form-success">
                <div className="fs-ic"><Icon name="check" /></div>
                <h3>Message envoyé !</h3>
                <p>Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">Votre nom</label>
                  <input id="name" name="name" type="text" placeholder="Prénom Nom" required />
                </div>
                <div className="field">
                  <label htmlFor="activite">Votre activité</label>
                  <select id="activite" name="activite" required defaultValue="">
                    <option value="" disabled>Sélectionnez votre secteur</option>
                    {VIZ.niches.map((n) => <option key={n.t}>{n.t}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="vous@exemple.fr" required />
                </div>
                <div className="field">
                  <label htmlFor="message">Votre projet</label>
                  <textarea id="message" name="message" placeholder="Décrivez votre activité et ce que vous souhaitez améliorer…" rows={4} />
                </div>
                {error && <p className="form-note" style={{ color: 'var(--accent-ink)', marginBottom: 8 }}>{error}</p>}
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
                  {!loading && <Icon name="arrow" className="arr" style={{ width: 18, height: 18 }} />}
                </button>
                <p className="form-note">Réponse sous 24h · Aucun engagement</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PelFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand"><BrandMark /> Vizelys</a>
            <p>Une présence en ligne claire et crédible pour les entreprises locales qui vivent de la confiance.</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>{VIZ.nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>{VIZ.services.map((s) => <li key={s.t}><a href="#services">{s.t}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#contact">Prendre rendez-vous</a></li>
              <li><a href="mailto:contact@vizelys.fr">contact@vizelys.fr</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Vizelys — Refonte web &amp; référencement local.</span>
          <span>
            <a href="/mentions-legales">Mentions légales</a>
            {' · '}
            <a href="/politique-de-confidentialite">Confidentialité</a>
            {' · '}
            <a href="/">← Retour à vizelys.fr</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default function PelApp() {
  const [theme, setTheme] = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('vz-theme') || 'light'
    setTheme(stored)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('vz-theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <PelHeader
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenMenu={() => setMenuOpen(true)}
        scrolled={scrolled}
      />
      <PelMobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <PelHero />
        <PelConstat />
        <PelApproche />
        <PelServices />
        <PelAvantApres />
        <PelPourQui />
        <PelFaq />
        <PelContact />
      </main>
      <PelFooter />
    </>
  )
}
