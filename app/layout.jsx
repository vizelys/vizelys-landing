import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata = {
  title: 'Vizelys — Conseil & ingénierie Data, IA & logiciels métier',
  description:
    "Vizelys aide les PME et ETI à prendre des décisions défendables, chiffres à l'appui : données fiables, processus automatisés, outils sur mesure. Diagnostic Discover à 2 900 € HT.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect x='6' y='6' width='52' height='52' rx='16' fill='%23101214'/%3E%3Cellipse cx='32' cy='50' rx='10' ry='2.8' fill='none' stroke='%2322B883' stroke-width='2.8' stroke-linecap='round'/%3E%3Cpath d='M19 22 L32 47 L45 22' fill='none' stroke='%23F4F5F2' stroke-width='5.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='32' cy='20' r='5' fill='%2322B883'/%3E%3C/svg%3E",
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      data-theme="light"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
              var th=localStorage.getItem('vz-theme')||'light';
              document.documentElement.setAttribute('data-theme',th);
              var pa=localStorage.getItem('vz-palette');
              if(pa==='heritage')document.documentElement.setAttribute('data-palette','heritage');
            }catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
