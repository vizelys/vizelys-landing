'use client'

import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { DC } from '@/lib/data'

export default function PourQui() {
  return (
    <section className="section" id="pour-qui">
      <div className="wrap">
        <SectionHead
          eyebrow="Pour qui"
          title="Des processus récurrents, un problème chiffrable."
          qualif={DC.nichesQualif}
        />
        <div className="niche-grid" style={{ marginTop: 48 }}>
          {DC.niches.map((n, i) => (
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
