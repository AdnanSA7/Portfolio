import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
})

const siteUrl = 'https://saiyedadnan.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Saiyed Adnan — Software Engineer',
    template: '%s | Saiyed Adnan',
  },
  description:
    'Software Engineer specializing in full-stack development with Java, Spring Boot, Angular, Flutter, and modern web technologies. Building reliable enterprise applications.',
  keywords: [
    'software engineer',
    'full stack developer',
    'Java',
    'Spring Boot',
    'Angular',
    'Flutter',
    'Next.js',
    'TypeScript',
    'web developer',
  ],
  authors: [{ name: 'Saiyed Adnan' }],
  creator: 'Saiyed Adnan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Saiyed Adnan',
    title: 'Saiyed Adnan — Software Engineer',
    description:
      'Software Engineer specializing in full-stack development with Java, Spring Boot, Angular, Flutter, and modern web technologies.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Saiyed Adnan — Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saiyed Adnan — Software Engineer',
    description:
      'Software Engineer specializing in full-stack development with Java, Spring Boot, Angular, Flutter, and modern web technologies.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f5fa' },
    { media: '(prefers-color-scheme: dark)', color: '#08090d' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light')}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Saiyed Adnan',
              jobTitle: 'Software Engineer',
              email: 'mailto:abc@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dhaka',
                addressCountry: 'BD',
              },
            }).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <div className="grain" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
