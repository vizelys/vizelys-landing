'use client'

import { useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Icon } from '@/lib/icons'
import { DC } from '@/lib/data'

function SheetVisual() {
  return (
    <div className="sheet" role="img" aria-label="Valeurs contradictoires issues de plusieurs fichiers">
      {DC.beforeAfter.cells.map((c, i) => (
        <div className="cell" key={i}>
          <b>{c.v}</b>
          <small>{c.s}</small>
        </div>
      ))}
    </div>
  )
}

function KpiVisual() {
  const k = DC.beforeAfter.kpi
  return (
    <div className="kpi" role="img" aria-label="Un indicateur unique, daté et sourcé">
      <span className="kpi-label">{k.label}</span>
      <span className="kpi-value">{k.value}<i /></span>
      <span className="kpi-meta">{k.meta}</span>
    </div>
  )
}

export default function AvantApres() {
  const [state, setState] = useState('after')
  const isAfter = state === 'after'
  const items = isAfter ? DC.beforeAfter.after : DC.beforeAfter.before

  return (
    <section className="section section--alt" id="avant-apres">
      <div className="wrap">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <SectionHead
            eyebrow="Avant / Après"
            title="La même donnée, deux réalités."
            sub="Ce qui change : la fiabilité de ce que vous regardez."
          />
          <Reveal delay={120}>
            <div className="ba-toggle">
              <span
                className="ba-thumb"
                style={{
                  left: 4,
                  width: 'calc(50% - 6px)',
                  transform: isAfter ? 'translateX(calc(100% + 4px))' : 'none',
                }}
              />
              <button aria-pressed={!isAfter} onClick={() => setState('before')}>Avant</button>
              <button aria-pressed={isAfter} onClick={() => setState('after')}>Après</button>
            </div>
          </Reveal>
        </div>
        <div className="ba-panel">
          <Reveal key={state}>
            <div className="ba-state-label">{isAfter ? 'Avec Vizelys' : 'Situation courante'}</div>
            <div className="ba-list">
              {items.map((it, i) => (
                <div className={`ba-item ${isAfter ? 'pos' : 'neg'}`} key={i}>
                  <span className="ba-ic">
                    <Icon name={isAfter ? 'check' : 'cross'} />
                  </span>
                  <p>{it}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80} key={state + '-v'}>
            {isAfter ? <KpiVisual /> : <SheetVisual />}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
