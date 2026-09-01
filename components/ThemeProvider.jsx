'use client'

import { useState, useEffect } from 'react'
import Header from './Header'
import MobileMenu from './MobileMenu'
import Hero from './Hero'
import Constat from './Constat'
import Methode from './Methode'
import Services from './Services'
import AvantApres from './AvantApres'
import PourQui from './PourQui'
import Preuves from './Preuves'
import Offres from './Offres'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'

export default function ThemeProvider() {
  const [theme, setTheme] = useState('light')
  const [palette, setPalette] = useState('clarity')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('vz-theme') || 'light'
    setTheme(stored)
    const storedPalette = localStorage.getItem('vz-palette') || 'clarity'
    setPalette(storedPalette)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('vz-theme', theme)
  }, [theme])

  useEffect(() => {
    if (palette === 'heritage') {
      document.documentElement.setAttribute('data-palette', 'heritage')
    } else {
      document.documentElement.removeAttribute('data-palette')
    }
    localStorage.setItem('vz-palette', palette)
  }, [palette])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  const togglePalette = () => setPalette((p) => (p === 'heritage' ? 'clarity' : 'heritage'))

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenMenu={() => setMenuOpen(true)}
        scrolled={scrolled}
        palette={palette}
        onTogglePalette={togglePalette}
      />
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <Constat />
        <Methode />
        <Services />
        <AvantApres />
        <PourQui />
        <Preuves />
        <Offres />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
