'use client'

import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Icon } from '@/lib/icons'
import { VIZ } from '@/lib/data'

export default function PourQui() {
  return (
    <section className="section" id="pour-qui">
      <div className="wrap">
        <SectionHead
          eyebrow="Pour qui"
          title="Des entreprises locales qui vivent de la confiance."
          sub="Vous êtes visible dans votre quartier, recommandé par vos clients, reconnu pour votre sérieux — mais votre présence en ligne ne le montre pas encore."
        />
        <div className="niche-grid" style={{ marginTop: 52 }}>
          {VIZ.niches.map((niche, i) => (
            <Reveal className="niche" key={niche.t} delay={i * 60}>
              <div className="niche-ic">
                <Icon name={niche.ic} style={{ width: 40, height: 40 }} />
              </div>
              <h3>{niche.t}</h3>
              <p>{niche.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
