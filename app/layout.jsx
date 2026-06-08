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
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect x='6' y='6' width='52' height='52' rx='16' fill='%2313284a'/%3E%3Cellipse cx='32' cy='50' rx='10' ry='2.8' fill='none' stroke='%2328bdcb' stroke-width='2.8' stroke-linecap='round'/%3E%3Cpath d='M19 22 L32 47 L45 22' fill='none' stroke='%23f3f6f8' stroke-width='5.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='32' cy='20' r='5' fill='%2328bdcb'/%3E%3C/svg%3E",
  },
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
