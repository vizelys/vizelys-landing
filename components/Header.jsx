'use client'

import BrandMark from './BrandMark'
import { Icon } from '@/lib/icons'
import { VIZ } from '@/lib/data'

export default function Header({ theme, onToggleTheme, onOpenMenu, scrolled }) {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav">
        <a href="#top" className="brand">
          <BrandMark /> Vizelys
        </a>
        <nav className="nav-links">
          {VIZ.nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Changer de thème">
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a href="#contact" className="btn btn-primary btn-sm">
            Prendre rendez-vous
          </a>
          <button className="icon-btn burger" onClick={onOpenMenu} aria-label="Menu">
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  )
}
