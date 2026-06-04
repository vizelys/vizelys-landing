'use client'

import { useState, useEffect } from 'react'
import Header from './Header'
import MobileMenu from './MobileMenu'
import Hero from './Hero'
import Constat from './Constat'
import Approche from './Approche'
import Services from './Services'
import AvantApres from './AvantApres'
import PourQui from './PourQui'
import Temoignages from './Temoignages'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'

export default function ThemeProvider() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('vizelys-theme') || 'dark'
    setTheme(stored)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('vizelys-theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenMenu={() => setMenuOpen(true)}
        scrolled={scrolled}
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
        <Approche />
        <Services />
        <AvantApres />
        <PourQui />
        <Temoignages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
