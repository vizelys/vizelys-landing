'use client'

import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { DC } from '@/lib/data'

export default function Constat() {
  return (
    <section className="section" id="constat">
      <div className="wrap constat-grid">
        <SectionHead
          eyebrow="Le constat"
          title="Trop de chiffres, pas assez de décisions."
          sub={DC.constat.sub}
        />
        <div className="frictions">
          {DC.constat.items.map((f, i) => (
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
