'use client'

import { useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Icon } from '@/lib/icons'
import { VIZ } from '@/lib/data'

export default function Contact() {
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
          name:     fd.get('name'),
          email:    fd.get('email'),
          tel:      fd.get('tel'),
          activite: fd.get('activite'),
          message:  fd.get('message'),
        }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError('Une erreur est survenue. Écrivez-nous à vizelys@proton.me')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section section--alt" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <SectionHead
              eyebrow="Contact"
              title="Parlons de votre projet."
              sub="Un premier échange sans engagement pour voir si on peut vous aider."
            />
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
                  <div className="fs-ic">
                    <Icon name="check" />
                  </div>
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
                      <option>Artisanat / bâtiment</option>
                      <option>Service local</option>
                      <option>Commerce spécialisé</option>
                      <option>Cabinet / indépendant</option>
                      <option>TPE / PME</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" placeholder="vous@exemple.fr" required />
                    </div>
                    <div className="field">
                      <label htmlFor="tel">Téléphone</label>
                      <input id="tel" name="tel" type="tel" placeholder="06 xx xx xx xx" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Votre projet</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre activité et ce que vous souhaitez améliorer…"
                      rows={4}
                    />
                  </div>
                  {error && <p className="form-note" style={{ color: 'var(--accent-text)', marginBottom: 8 }}>{error}</p>}
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
                    {!loading && <Icon name="arrow" className="arr" style={{ width: 18, height: 18 }} />}
                  </button>
                  <p className="form-note">
                    Réponse sous 24h · Aucun engagement
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
