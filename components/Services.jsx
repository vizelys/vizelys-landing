'use client'

import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Icon } from '@/lib/icons'
import { DC } from '@/lib/data'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHead
          eyebrow="Ce que nous faisons"
          title="Quatre terrains, un objectif : des décisions exécutables."
        />
        <div className="svc-grid" style={{ marginTop: 48 }}>
          {DC.services.map((s, i) => (
            <Reveal className="svc" key={s.t} delay={i * 70}>
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
