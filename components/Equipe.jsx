import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { DC } from '@/lib/data'

export default function Equipe() {
  const m = DC.teamMethod
  return (
    <section className="section section--alt" id="equipe">
      <div className="wrap">
        <SectionHead
          eyebrow="L'équipe"
          title="Deux profils, un seul objectif."
          sub="Fiabiliser vos données et construire l'intelligence par-dessus."
        />
        <div className="team-grid">
          {DC.team.map((p, i) => (
            <Reveal className="team-card" key={p.name} delay={i * 80}>
              <div className="tc-head">
                <span className="tc-name">{p.name}</span>
                <span className="tc-label">{p.label}</span>
                <span className="tc-tagline">{p.tagline}</span>
                <span className="tc-role">{p.role}</span>
              </div>
              <ul className="tc-list">
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="team-method" delay={160}>
          <div className="tm-header">
            <span className="tm-label">Méthode Vizelys</span>
            <em className="tm-tagline">{m.tagline}</em>
          </div>
          <p className="tm-sub">{m.sub}</p>
          <p className="tm-steps">{m.steps}</p>
          <p className="tm-punchline">{m.punchline}</p>
        </Reveal>
      </div>
    </section>
  )
}
