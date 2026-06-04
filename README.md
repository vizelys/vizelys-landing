# Vizelys — Landing Page

Landing page for **Vizelys**, a French local web agency specialising in website redesign and local SEO. The site serves as a credibility asset after a sales call — a local business owner should be able to browse it and immediately understand what Vizelys does and picture the result for their own activity.

Built with **Next.js 16 (App Router)** — server-rendered for SEO, zero dependencies beyond React and Next.js.

## Stack

- **Next.js 16** — App Router, server components, static export ready
- **React 19** — client components for interactive sections
- **CSS custom properties** — full design system with dark/light mode, no CSS framework
- **next/font** — self-hosted Google Fonts (Spectral, Hanken Grotesk, JetBrains Mono)

## Sections

| Section | Description |
|---|---|
| Hero | Centered headline with site preview mockup and CTA |
| Le constat | Three friction cards (the problem) |
| Notre approche | Four-step method grid |
| Services | Four service cards (redesign, SEO, proof, contact) |
| Avant / Après | Interactive before/after toggle |
| Pour qui | Six niche cards (artisans, services, retail, etc.) |
| Témoignages | Featured quote + two testimonial cards |
| FAQ | Accordion with six questions |
| Contact | Booking form with success state |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.jsx       # Root layout — fonts, metadata, theme flash script
  page.jsx         # Entry point — renders ThemeProvider
  globals.css      # Full design system (tokens, components, layout, responsive)

components/
  ThemeProvider    # Client wrapper — theme, scroll, mobile menu state
  Header           # Sticky nav with theme toggle
  MobileMenu       # Full-screen mobile nav
  Hero             # Centered hero variant
  Constat          # Problem frictions
  Approche         # Four-step method
  Services         # Service cards
  AvantApres       # Before/after toggle
  PourQui          # Niche grid
  Temoignages      # Testimonials
  FAQ              # Accordion
  Contact          # Booking form
  Footer           # Four-column footer
  Reveal           # Scroll-reveal animation wrapper
  SectionHead      # Reusable eyebrow + h2 + subtitle
  BrandMark        # SVG logo mark
  SitePreview      # Browser mockup placeholder

lib/
  data.js          # All copy and content (French)
  icons.jsx        # SVG icon components
```

## Design system

Colours are defined as CSS custom properties and swap automatically between dark (default) and light mode. The user's preference is persisted in `localStorage` and applied before first paint to avoid any flash.

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#090b0c` | `#f1f4f6` |
| `--text` | `#ededed` | `#0e1a21` |
| `--accent` | `#5894bb` | `#5894bb` |
| `--card` | `#10171c` | `#ffffff` |

Fonts are loaded via `next/font/google` and injected as CSS variables so the stylesheet can reference them directly:

| Variable | Font |
|---|---|
| `--font-serif` | Spectral (headings) |
| `--font-sans` | Hanken Grotesk (body) |
| `--font-sans-alt` | Schibsted Grotesk (sans heading variant) |
| `--font-mono` | JetBrains Mono (labels, eyebrows) |

## Content

All copy lives in `lib/data.js` — edit that file to update text, FAQ answers, testimonials, service descriptions, and navigation links without touching any component.

## Deployment

The project deploys to Vercel with zero configuration — import the GitHub repo at [vercel.com/new](https://vercel.com/new) and click Deploy.

```bash
# Production build
npm run build
npm run start
```
