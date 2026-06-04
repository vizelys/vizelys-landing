'use client'

import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { VIZ } from '@/lib/data'

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
              <div className="ph circle" style={{ width: 52, height: 52 }} />
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
                <div className="ph circle" style={{ width: 42, height: 42 }} />
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
