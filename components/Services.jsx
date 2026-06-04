'use client'

import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Icon } from '@/lib/icons'
import { VIZ } from '@/lib/data'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHead
          eyebrow="Ce que nous faisons"
          title="Quatre leviers pour une présence qui inspire confiance."
          sub="Chaque levier répond à une question simple : est-ce que vos futurs clients vous comprennent, vous trouvent, et vous contactent facilement ?"
        />
        <div className="svc-grid" style={{ marginTop: 52 }}>
          {VIZ.services.map((s, i) => (
            <Reveal className="svc" key={s.t} delay={i * 70}>
              <div className="svc-ic">
                <Icon name={s.ic} />
              </div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="svc-tag">
                <Icon name="check" style={{ width: 15, height: 15 }} />
                {s.tag}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
