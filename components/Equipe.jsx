import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { DC } from '@/lib/data'

export default function Equipe() {
  return (
    <section className="section section--alt" id="equipe">
      <div className="wrap">
        <SectionHead
          eyebrow="L'équipe"
          title="Deux profils, un seul objectif."
          sub="Fiabiliser vos données et construire l'intelligence par-dessus."
        />
        <div className="team-grid">
          {DC.team.map((m, i) => (
            <Reveal className="team-card" key={m.name} delay={i * 80}>
              <div className="tc-head">
                <span className="tc-name">{m.name}</span>
                <span className="tc-role">{m.role}</span>
              </div>
              <ul className="tc-list">
                {m.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="team-method" delay={160}>
          <span className="tm-label">Méthode</span>
          {DC.teamMethod}
        </Reveal>
      </div>
    </section>
  )
}
