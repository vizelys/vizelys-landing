'use client'

import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { VIZ } from '@/lib/data'

function Avatar({ name = "" }) {
  const initials = name.replace(/^(Dr|Me|M\.|Mme)\s+/i, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase()
  return <div className="tm-avatar" aria-hidden="true">{initials}</div>
}

export default function Temoignages() {
  const { feature, cards } = VIZ.testimonials

  return (
    <section className="section section--alt" id="temoignages">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Témoignages"
          title="Ce que disent nos clients."
        />
        <Reveal style={{ marginTop: 52 }}>
          <div className="tm-feature">
            <div className="quote-mark">&ldquo;</div>
            <blockquote>{feature.q}</blockquote>
            <div className="tm-author">
              <Avatar name={feature.name} />
              <div>
                <b>{feature.name}</b>
                <span>{feature.role}</span>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="tm-row">
          {cards.map((card, i) => (
            <Reveal className="tm-card" key={i} delay={i * 80}>
              <p>{card.q}</p>
              <div className="tm-author">
                <Avatar name={card.name} />
                <div>
                  <b>{card.name}</b>
                  <span>{card.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
