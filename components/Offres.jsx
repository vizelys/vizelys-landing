'use client'

import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Icon } from '@/lib/icons'
import { DC } from '@/lib/data'

function RoadmapVisual() {
  const rows = [
    { j: "J+30", t: "Fiabiliser l'indicateur de marge", roi: "ROI estimé : 15 j/an", tag: "GO" },
    { j: "J+60", t: "Automatiser la saisie des factures", roi: "ROI estimé : −70 % de temps", tag: "GO" },
    { j: "J+90", t: "Pilote recherche documentaire (LLM)", roi: "À valider par pilote", tag: "PILOTE" },
  ]
  return (
    <div className="roadmap" role="img" aria-label="Extrait anonymisé d'une roadmap 90 jours issue d'un Discover">
      <div className="rm-head">Roadmap 90 jours — extrait de restitution</div>
      {rows.map((r) => (
        <div className="rm-row" key={r.j}>
          <span className="rm-j">{r.j}</span>
          <span className="rm-t">{r.t}</span>
          <span className="rm-roi">{r.roi}</span>
          <span className="rm-tag">{r.tag}</span>
        </div>
      ))}
      <div className="rm-note">Exemple anonymisé · chaque opportunité est chiffrée et priorisée</div>
    </div>
  )
}

export default function Offres() {
  const o = DC.offers
  return (
    <section className="section" id="offres">
      <div className="wrap">
        <SectionHead
          eyebrow="Offres"
          title="Un point d'entrée unique : le Discover."
          sub="On chiffre d'abord. La suite, si le diagnostic la justifie."
        />

        <Reveal className="offer-main">
          <div className="om-head">
            <h3>{o.discover.name}</h3>
            <span className="om-price">{o.discover.price}</span>
          </div>
          <p className="om-sub">{o.discover.sub}</p>
          <div className="om-body">
            <ul className="om-list">
              {o.discover.list.map((l) => <li key={l}>{l}</li>)}
            </ul>
            <div className="om-cta">
              <a href="#contact" className="btn btn-primary">
                {DC.cta}
                <Icon name="arrow" className="arr" style={{ width: 18, height: 18 }} />
              </a>
              <span className="om-deal">{o.discover.deal}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} style={{ marginTop: 16 }}>
          <RoadmapVisual />
        </Reveal>

        <Reveal className="offer-second" delay={80}>
          <h3>{o.prove.name}</h3>
          <span className="os-price">{o.prove.price}</span>
          <p>{o.prove.sub}</p>
          <span className="os-verdict">
            {o.prove.verdict} <b>GO</b> · <b>ADJUST</b> · <b>STOP</b>
          </span>
        </Reveal>

        <Reveal as="p" className="offer-next" delay={140}>
          {o.next}
        </Reveal>
      </div>
    </section>
  )
}
