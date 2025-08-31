import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Agnabyte - Digital Transformation',
    short_name: 'Agnabyte',
    description: 'Practical digital transformation, clear analytics, and scalable SaaS—built for real businesses and real results.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#d97706',
    icons: [
      {
        src: '/images/agnabyte-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/agnabyte-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
