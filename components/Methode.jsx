'use client'

import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { DC } from '@/lib/data'

export default function Methode() {
  return (
    <section className="section section--alt" id="methode">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Méthode"
          title="Comprendre avant de construire."
          sub="Cadrer avant de développer. Mesurer ce qu'on livre."
        />
        <Reveal className="steps" style={{ marginTop: 52 }}>
          {DC.steps.map((s) => (
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
