'use client'

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ابو يوسف',
    alternateName: 'Abo Yousef',
    url: 'https://aboyousef.com',
    logo: 'https://aboyousef.com/logo.webp',
    description: 'متجر ابو يوسف لقطع غيار وأكسسوارات الموتوسيكلات في مصر',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+20-1144747314',
      contactType: 'Customer Service',
      areaServed: 'EG',
      availableLanguage: ['ar', 'en'],
    },
    sameAs: [
      'https://www.facebook.com/aboyousef',
      'https://www.instagram.com/01144747314',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
      addressLocality: 'Cairo',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
