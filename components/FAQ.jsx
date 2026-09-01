'use client'

import { useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { DC } from '@/lib/data'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section section--alt" id="faq">
      <div className="wrap faq-grid">
        <SectionHead
          eyebrow="FAQ"
          title="Ce qu'on nous demande avant de signer."
          sub="Une question manquante ? Posez-la, on répond clairement."
        />
        <Reveal className="faq-list">
          {DC.faq.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={i}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {f.q}
                  <span className="faq-ic" />
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? 300 : 0 }}>
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
