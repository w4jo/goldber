import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import { ORG } from '@/components/content'

const geistSans = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Goldber Real Estate — Investments in Real Estate and Green Energy',
  description:
    'Selective investments across European real estate, solar and wind projects, and a luxury fleet offering for partners and clients.',
  openGraph: {
    title: 'Goldber Real Estate',
    description:
      'Selective investments across European real estate, solar and wind projects.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Goldber Real Estate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goldber Real Estate',
    description: 'Investments in real estate and green energy',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta content="Goldberg" name="apple-mobile-web-app-title" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <a
          className="sr-only fixed top-2 left-2 z-50 rounded bg-foreground px-3 py-2 text-background focus:not-sr-only"
          href="#main"
        >
          Skip to content
        </a>
        {/* JSON-LD */}
        {(() => {
          const jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: ORG.name,
            url: 'https://goldber.example.com',
            email: ORG.email,
            telephone: ORG.phone,
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'CZ',
              addressLocality: 'Prague',
            },
          }
          return (
            <script suppressHydrationWarning type="application/ld+json">
              {JSON.stringify(jsonLd)}
            </script>
          )
        })()}
        {children}
      </body>
    </html>
  )
}
