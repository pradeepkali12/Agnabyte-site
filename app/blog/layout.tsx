import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Digital Transformation Insights',
  description: 'Latest insights on digital transformation, SaaS development, and business growth strategies for local businesses.',
  openGraph: {
    title: 'Agnabyte Blog - Digital Transformation Insights',
    description: 'Latest insights on digital transformation, SaaS development, and business growth strategies for local businesses.',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
