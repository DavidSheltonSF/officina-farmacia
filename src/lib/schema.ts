import { siteConfig } from '@/lib/config';
import { units } from '@/data/units';
import { faqItems } from '@/data/faq';
import { business } from '@/data/business';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    email: business.email,
    sameAs: [
      'https://instagram.com/officinamanipulacao',
      'https://facebook.com/officinamanipulacao',
      'https://linkedin.com/company/officinamanipulacao',
    ],
  };
}

export function buildLocalBusinessSchema() {
  return units.map((unit) => ({
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness', 'Pharmacy'],
    '@id': `${siteConfig.url}/#${unit.id}`,
    name: `${siteConfig.name} - ${unit.name}`,
    image: `${siteConfig.url}/og-image.jpg`,
    telephone: unit.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: unit.address,
      addressLocality: unit.city,
      addressRegion: unit.state,
      postalCode: unit.zipCode,
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: unit.latitude,
      longitude: unit.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    url: siteConfig.url,
  }));
}

export function buildFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Laboratórios Parceiros',
        item: `${siteConfig.url}#laboratorios`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Ativos Manipulados',
        item: `${siteConfig.url}#ativos`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Unidades',
        item: `${siteConfig.url}#unidades`,
      },
    ],
  };
}
