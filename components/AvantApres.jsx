'use client'

import { useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { MockAfter, MockBefore } from './MockSite'
import { Icon } from '@/lib/icons'
import { VIZ } from '@/lib/data'

export default function AvantApres() {
  const [state, setState] = useState('after')
  const isAfter = state === 'after'
  const data = VIZ.beforeAfter[state]

  return (
    <section className="section section--alt" id="avant-apres">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Avant / Après"
          title="Ce que change une présence bien pensée."
        />
        <Reveal style={{ marginTop: 44, display: 'flex', justifyContent: 'center' }}>
          <div className="ba-toggle">
            <span
              className="ba-thumb"
              style={{
                left: isAfter ? 'calc(50% + 0px)' : 5,
                width: 'calc(50% - 7px)',
              }}
            />
            <button
              aria-pressed={!isAfter}
              onClick={() => setState('before')}
            >
              Avant
            </button>
            <button
              aria-pressed={isAfter}
              onClick={() => setState('after')}
            >
              Après
            </button>
          </div>
        </Reveal>
        <Reveal className="ba-panel" delay={60}>
          <div className="ba-content">
            <p className="ba-state-label">{data.label}</p>
            <div className="ba-list">
              {data.items.map((item, i) => (
                <div key={i} className={`ba-item ${isAfter ? 'pos' : 'neg'}`}>
                  <div className="ba-ic">
                    <Icon name={isAfter ? 'check' : 'cross'} />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="ba-visual">
            <div className="browser">
              <div className="browser-bar">
                <div className="browser-dots"><i /><i /><i /></div>
                <div className="browser-url">{data.url}</div>
              </div>
              <div className="browser-body">
                {isAfter ? <MockAfter /> : <MockBefore />}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
