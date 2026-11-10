'use client'

import { useRef, useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Icon } from '@/lib/icons'
import { DC } from '@/lib/data'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const startedAt = useRef(Date.now()) // anti-spam : un robot envoie en moins de 3 s

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
          secteur: fd.get('secteur'),
          taille:  fd.get('taille'),
          message: fd.get('message'),
          website: fd.get('website'),   // champ piège invisible
          startedAt: startedAt.current,
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
          <SectionHead
            eyebrow="Contact"
            title="Parlons de votre situation."
            sub="Un échange direct, sans engagement. On vous dit si un Discover a du sens — et sinon, pourquoi."
          />
          <div className="contact-steps">
            {DC.contactSteps.map((c, i) => (
              <Reveal className="cstep" key={i} delay={i * 80}>
                <span className="cs-num">0{i + 1}</span>
                <div>
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={100}>
          <div className="form">
            {sent ? (
              <div className="form-success">
                <div className="fs-ic">
                  <Icon name="check" />
                </div>
                <h3>Bien reçu.</h3>
                <p>Nous revenons vers vous sous 24 h ouvrées pour un premier échange.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
                  <label htmlFor="website">Ne pas remplir</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">Votre nom</label>
                    <input id="name" name="name" type="text" placeholder="Prénom et nom" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email professionnel</label>
                    <input id="email" name="email" type="email" placeholder="vous@entreprise.fr" required />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="secteur">Votre secteur</label>
                    <select id="secteur" name="secteur" defaultValue="" required>
                      <option value="" disabled>Choisissez</option>
                      {DC.niches.map((n) => (
                        <option key={n.t}>{n.t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="taille">Taille de l&apos;entreprise</label>
                    <select id="taille" name="taille" defaultValue="" required>
                      <option value="" disabled>Choisissez</option>
                      <option>&lt; 20 collaborateurs</option>
                      <option>20 – 100 collaborateurs</option>
                      <option>100 – 500 collaborateurs</option>
                      <option>&gt; 500 collaborateurs</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">Votre situation</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="La décision qui pose problème, les données concernées, ce que vous avez déjà tenté…"
                    rows={4}
                  />
                </div>
                {error && (
                  <p className="form-note" style={{ color: 'var(--accent-ink)', marginBottom: 8 }}>
                    {error}
                  </p>
                )}
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Envoi en cours…' : 'Demander un cadrage'}
                  {!loading && <Icon name="arrow" className="arr" style={{ width: 18, height: 18 }} />}
                </button>
                <p className="form-note">Réponse sous 24 h · Premier échange sans engagement</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
