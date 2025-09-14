import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://agnabyte.tech'),
  title: {
    default: 'Agnabyte Technologies - Digital Transformation for Local Businesses',
    template: '%s | Agnabyte Technologies'
  },
  description: 'Practical digital transformation, clear analytics, and scalable SaaS—built for real businesses and real results. Transform your local business into a digital success story.',
  keywords: [
    'digital transformation', 
    'local business', 
    'SaaS', 
    'data analytics', 
    'web development', 
    'business growth',
    'small business technology',
    'business automation',
    'digital marketing',
    'business consulting',
    'cloud solutions',
    'business intelligence'
  ],
  authors: [{ name: 'Agnabyte Technologies', url: 'https://agnabyte.tech' }],
  creator: 'Agnabyte Technologies',
  publisher: 'Agnabyte Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Agnabyte Technologies - Digital Transformation for Local Businesses',
    description: 'Practical digital transformation, clear analytics, and scalable SaaSbuilt for real businesses and real results.',
    url: 'https://agnabyte.tech',
    siteName: 'Agnabyte Technologies',
    images: [
      {
        url: '/images/agnabyte-logo.png',
        width: 1200,
        height: 630,
        alt: 'Agnabyte Technologies - Digital Transformation for Local Businesses',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agnabyte Technologies - Digital Transformation for Local Businesses',
    description: 'Practical digital transformation, clear analytics, and scalable SaaSbuilt for real businesses and real results.',
    images: ['/images/agnabyte-logo.png'],
    creator: '@agnabyte',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/agnabyte-favicon.png" />
        <link rel="apple-touch-icon" href="/images/agnabyte-logo.png" />
        <meta name="theme-color" content="#d97706" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://agnabyte.tech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Agnabyte",
              "url": "https://agnabyte.tech",
              "logo": "https://agnabyte.tech/images/agnabyte-favicon.png",
              "description": "Practical digital transformation, clear analytics, and scalable SaaS—built for real businesses and real results.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-866-743-0428",
                "contactType": "customer service",
                "email": "info@agnabyte.tech"
              },
              "sameAs": [
                "https://twitter.com/agnabyte",
                "https://linkedin.com/company/agnabyte"
              ],
              "services": [
                "Digital Transformation",
                "Data Analytics", 
                "SaaS Development",
                "Business Intelligence",
                "Web Development"
              ]
            })
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
