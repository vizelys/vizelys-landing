'use client'

import Reveal from './Reveal'

export default function SectionHead({ eyebrow, title, sub, center, qualif }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`}>
      <Reveal as="span" className={`eyebrow ${center ? 'center' : ''}`}>{eyebrow}</Reveal>
      <Reveal as="h2" delay={60}>{title}</Reveal>
      {sub && <Reveal as="p" delay={120}>{sub}</Reveal>}
      {qualif && <Reveal as="p" className="qualif" delay={160}>{qualif}</Reveal>}
    </div>
  )
}
