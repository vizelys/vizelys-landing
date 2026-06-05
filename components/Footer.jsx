import BrandMark from './BrandMark'
import { VIZ } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <BrandMark /> Vizelys
            </a>
            <p>
              Une présence en ligne claire et crédible pour les entreprises locales qui vivent de la
              confiance.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {VIZ.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Refonte de site</a>
              </li>
              <li>
                <a href="#services">Référencement local</a>
              </li>
              <li>
                <a href="#services">Mise en valeur des preuves</a>
              </li>
              <li>
                <a href="#services">Parcours de contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="#contact">Prendre rendez-vous</a>
              </li>
              <li>
                <a href="mailto:vizelys@proton.me">vizelys@proton.me</a>
              </li>
              <li>
                <a href="#contact">Demander un devis</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Vizelys — Refonte web &amp; référencement local.</span>
          <span>
            <a href="/mentions-legales">Mentions légales</a>
            {' · '}
            <a href="/politique-de-confidentialite">Confidentialité</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
