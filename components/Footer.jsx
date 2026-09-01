import BrandMark from './BrandMark'
import { DC } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <BrandMark /> Vizelys
            </a>
            <p>{DC.footer.tagline}</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {DC.nav.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Offres</h4>
            <ul>
              {DC.footer.offers.map((o) => (
                <li key={o}><a href="#offres">{o}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${DC.footer.email}`}>{DC.footer.email}</a></li>
              <li><a href="#contact">{DC.cta}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{DC.footer.copyright}</span>
          <span>
            <a href="/mentions-legales">Mentions légales</a>
            {' · '}
            <a href="/politique-de-confidentialite">Confidentialité</a>
            {' · '}
            <a href="/presence-en-ligne">Présence en ligne pour entreprises locales →</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
