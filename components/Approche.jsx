'use client'

import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { VIZ } from '@/lib/data'

export default function Approche() {
  return (
    <section className="section section--alt" id="approche">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Notre approche"
          title="Une méthode simple, en quatre temps."
          sub="Pas de recette toute faite : on part de votre métier pour construire une présence qui vous ressemble et qui travaille pour vous."
        />
        <Reveal className="steps" style={{ marginTop: 56 }}>
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
