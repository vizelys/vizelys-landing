import { Spectral, Hanken_Grotesk, Schibsted_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spectral = Spectral({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans-alt',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata = {
  title: 'Vizelys — Refonte web & référencement local',
  description:
    'Vizelys aide les entreprises locales à transformer leur réputation et leur savoir-faire en contacts : appels, devis et rendez-vous. Une présence en ligne claire et crédible.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      data-theme="dark"
      data-heading="serif"
      suppressHydrationWarning
      className={`${spectral.variable} ${hankenGrotesk.variable} ${schibstedGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var th=localStorage.getItem('vizelys-theme')||'dark';document.documentElement.setAttribute('data-theme',th);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <div suppressHydrationWarning>{children}</div>
      </body>
    </html>
  )
}
