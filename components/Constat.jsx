'use client'

import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { VIZ } from '@/lib/data'

export default function Constat() {
  return (
    <section className="section" id="constat">
      <div className="wrap constat-grid">
        <SectionHead
          eyebrow="Le constat"
          title="Aujourd'hui, on se renseigne avant de vous contacter."
          sub="Le bouche-à-oreille passe désormais par internet. Quand votre présence en ligne est floue, le client hésite — et appelle quelqu'un d'autre."
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
