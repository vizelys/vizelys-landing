'use client'

import { useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { VIZ } from '@/lib/data'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <SectionHead
            eyebrow="FAQ"
            title="Questions fréquentes."
            sub="Tout ce que vous voulez savoir avant de vous lancer."
          />
          <Reveal className="faq-list" delay={60}>
            {VIZ.faq.map((item, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  {item.q}
                  <span className="faq-ic" aria-hidden="true" />
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: open === i ? '400px' : '0' }}
                >
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
