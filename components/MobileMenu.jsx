'use client'

import BrandMark from './BrandMark'
import { Icon } from '@/lib/icons'
import { VIZ } from '@/lib/data'

export default function MobileMenu({ open, onClose, theme, onToggleTheme }) {
  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`}>
      <div className="mm-top">
        <a href="#top" className="brand" onClick={onClose}>
          <BrandMark /> Vizelys
        </a>
        <button className="icon-btn" onClick={onClose} aria-label="Fermer">
          <Icon name="cross" />
        </button>
      </div>
      <nav>
        {VIZ.nav.map((n) => (
          <a key={n.href} href={n.href} onClick={onClose}>
            {n.label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="btn btn-primary" onClick={onClose}>
        Prendre rendez-vous
      </a>
      <button
        className="btn btn-ghost"
        style={{ marginTop: 14 }}
        onClick={onToggleTheme}
      >
        <Icon name={theme === 'dark' ? 'sun' : 'moon'} style={{ width: 18, height: 18 }} />
        {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
      </button>
    </div>
  )
}
