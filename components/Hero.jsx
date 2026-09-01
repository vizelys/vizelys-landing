'use client'

import Reveal from './Reveal'
import { Icon } from '@/lib/icons'
import { DC } from '@/lib/data'

function FlowDiagram() {
  return (
    <div className="flow" role="img" aria-label="Des sources dispersées consolidées en un indicateur unique">
      <div className="flow-in">
        {DC.hero.flowIn.map((s) => (
          <span className="fin" key={s}>{s}</span>
        ))}
      </div>
      <svg className="flow-lines" viewBox="0 0 340 46" fill="none" aria-hidden="true">
        <path d="M40 4 C40 30 150 22 168 42 M130 4 C130 26 160 26 168 42 M210 4 C210 26 178 26 170 42 M300 4 C300 30 190 22 170 42" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M165 36l4 7 4-7" fill="none" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
      <div className="flow-node">{DC.hero.flowNode}</div>
      <div className="flow-drop" />
      <div className="flow-out">
        <i />
        {DC.hero.flowOut}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <Reveal as="span" className="hero-badge-line">
            <i />{DC.hero.badge}
          </Reveal>
          <Reveal as="h1" delay={60}>
            Vos données existent. Vos décisions méritent mieux qu&apos;un Excel <em>reconsolidé à la main.</em>
          </Reveal>
          <Reveal as="p" className="hero-lead" delay={120}>{DC.hero.lead}</Reveal>
          <Reveal delay={180}>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                {DC.cta}
                <Icon name="arrow" className="arr" style={{ width: 18, height: 18 }} />
              </a>
              <a href="#offres" className="btn btn-ghost">Voir nos offres</a>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-trust">
              {DC.hero.trust.map((t, i) => (
                <>
                  {i > 0 && <span className="dot" key={`dot-${i}`} />}
                  <span key={t}>{t}</span>
                </>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <FlowDiagram />
        </Reveal>
      </div>
    </section>
  )
}
