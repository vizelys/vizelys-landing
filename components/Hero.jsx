'use client'

import Reveal from './Reveal'
import SitePreview from './SitePreview'
import { Icon } from '@/lib/icons'

function HeroTrust() {
  return (
    <div className="hero-trust">
      <span>Refonte web</span>
      <span className="dot" />
      <span>Référencement local</span>
      <span className="dot" />
      <span>Basés en France</span>
    </div>
  )
}

function HeroCTA() {
  return (
    <div className="hero-cta">
      <a href="#contact" className="btn btn-primary">
        Prendre rendez-vous
        <Icon name="arrow" className="arr" style={{ width: 18, height: 18 }} />
      </a>
      <a href="#approche" className="btn btn-ghost">
        Voir notre approche
      </a>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div
        className="hero-glow"
        style={{ right: 'auto', left: '50%', transform: 'translateX(-50%)', top: '-40%' }}
      />
      <div className="wrap">
        <div className="hero-center">
          <Reveal as="span" className="eyebrow center">
            Refonte web · SEO local
          </Reveal>
          <Reveal as="h1" delay={60}>
            Mieux compris, mieux perçu,
            <br />
            <em>plus facilement contacté.</em>
          </Reveal>
          <Reveal as="p" className="hero-lead" delay={120}>
            Vizelys donne aux entreprises locales une présence en ligne claire et crédible —
            pour transformer la confiance en appels, devis et rendez-vous.
          </Reveal>
          <Reveal delay={180}>
            <HeroCTA />
          </Reveal>
          <Reveal delay={240}>
            <HeroTrust />
          </Reveal>
        </div>
        <Reveal className="hero-wide" delay={140}>
          <SitePreview url="vizelys.fr/votre-activite" label="aperçu du site client" />
        </Reveal>
      </div>
    </section>
  )
}
