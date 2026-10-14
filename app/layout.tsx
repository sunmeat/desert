import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import './flower-atlas.css'

const siteUrl = 'https://rosol.vercel.app'
const siteTitle = 'Rosas do Deserto | Coleção Botânica'
const siteDescription =
  'Explore uma coleção especial de rosas do deserto (Adenium), com flores marcantes, formas esculturais e a beleza singular da natureza brasileira.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: 'Rosas do Deserto',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Rosas do Deserto',
    title: siteTitle,
    description: siteDescription,
    locale: 'pt_BR',
    images: [
      {
        url: '/images/adenium-hero.png',
        width: 1200,
        height: 630,
        alt: 'Rosas do deserto em uma coleção botânica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/images/adenium-hero.png',
        alt: 'Rosas do deserto em uma coleção botânica',
      },
    ],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0d0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
