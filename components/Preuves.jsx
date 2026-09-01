'use client'

import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { DC } from '@/lib/data'

export default function Preuves() {
  return (
    <section className="section section--alt" id="preuves">
      <div className="wrap">
        <SectionHead eyebrow="Preuves" title="Expérience de l'équipe" />
        <Reveal className="stats-band">
          {DC.stats.map((s) => (
            <div className="stat" key={s.l}>
              <b>{s.v}</b>
              <span>{s.l}</span>
            </div>
          ))}
        </Reveal>
        <Reveal as="p" className="stats-note" delay={80}>{DC.statsNote}</Reveal>
      </div>
    </section>
  )
}
