import Script from 'next/script'

interface SEOStructuredDataProps {
  type?: 'organization' | 'article' | 'blogPosting'
  data?: any
}

export function SEOStructuredData({ type = 'organization', data }: SEOStructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
            "name": "Agnabyte Technologies",
          "url": "https://agnabyte.tech",
            "logo": "https://agnabyte.tech/images/agnabyte-logo.png",
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
        }
      
      case 'article':
      case 'blogPosting':
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": data?.title,
          "description": data?.excerpt,
          "author": {
            "@type": "Person",
            "name": data?.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Agnabyte Technology",
            "logo": {
              "@type": "ImageObject",
              "url": "https://agnabyte.tech/images/agnabyte-logo.png"
            }
          },
          "datePublished": data?.date,
          "dateModified": data?.date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://agnabyte.tech/blog/${data?.id}`
          },
          "keywords": data?.tags?.join(', '),
          "articleSection": "Technology",
          "wordCount": data?.content?.split(' ').length || 0
        }
      
      default:
        return {}
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}
