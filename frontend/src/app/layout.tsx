import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloat } from '@/components/common/WhatsAppFloat';
import { GlobalWaveCurrent } from '@/components/common/GlobalWaveCurrent';
import { Preloader } from '@/components/common/Preloader';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://vestafuture.in'),
  title: {
    default: 'Vesta Future Pvt Ltd | Construction • Sports Infrastructure • Crab & Fish Hatchery',
    template: '%s | Vesta Future Pvt Ltd',
  },
  description:
    'Vesta Future Pvt Ltd is an established multi-sector business group headquartered in Cheppad, Alappuzha, Kerala. Operating across Vesta Future Builders & Developers, Vesta Future De Sports Infrastructure, and The Seagull Crab & Fish Hatchery.',
  keywords: [
    'Vesta Future Pvt Ltd',
    'Vesta Future',
    'Vesta Future Builders and Developers',
    'Vesta Future De Sports Infrastructure',
    'The Seagull Crab and Fish Hatchery',
    'Construction Companies Kerala',
    'Turnkey Builders Alappuzha',
    'Sports Turf Construction Kerala',
    'BWF Badminton Court Flooring India',
    'Crab Hatchery Kerala',
    'Aquaculture Cheppad Alappuzha',
    'Mud Crab Farming India',
    'Vesta Future Cheppad',
    'Kerala Business Group',
  ],
  authors: [{ name: 'Vesta Future Pvt Ltd', url: 'https://vestafuture.in' }],
  creator: 'Vesta Future Pvt Ltd',
  publisher: 'Vesta Future Pvt Ltd',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://vestafuture.in',
  },
  openGraph: {
    title: 'Vesta Future Pvt Ltd | Construction • Sports Infrastructure • Marine Aquaculture',
    description:
      'Engineering excellence in residential construction, world-class turnkey sports arenas, and scientific aquaculture systems in Kerala, India.',
    url: 'https://vestafuture.in',
    siteName: 'Vesta Future Pvt Ltd',
    images: [
      {
        url: '/logos/vesta-group.png',
        width: 1200,
        height: 630,
        alt: 'Vesta Future Pvt Ltd Corporate Brand',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vesta Future Pvt Ltd | Corporate Group Kerala',
    description:
      'Engineering excellence in residential construction, turnkey sports arenas, and scientific marine aquaculture.',
    images: ['/logos/vesta-group.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Corporation',
        '@id': 'https://vestafuture.in/#corporation',
        name: 'Vesta Future Pvt Ltd',
        legalName: 'Vesta Future Pvt. Ltd.',
        url: 'https://vestafuture.in',
        logo: 'https://vestafuture.in/logos/vesta-group.png',
        image: 'https://vestafuture.in/logos/vesta-group.png',
        description:
          'A multi-sector corporate enterprise operating across residential construction, turnkey sports infrastructure, and scientific marine aquaculture.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'NH 66, Pulimootil Building',
          addressLocality: 'Cheppad P.O., Cheppad',
          addressRegion: 'Kerala',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 9.2482,
          longitude: 76.4716,
        },
        telephone: '+91 95668 66144',
        email: 'info@vestafuture.in',
        sameAs: ['https://instagram.com/vestafuture'],
        foundingDate: '2015',
        subOrganization: [
          {
            '@type': 'GeneralContractor',
            name: 'Vesta Future Builders & Developers',
            url: 'https://vestafuture.in/construction',
            description:
              'Residential construction, 2D/3D elevations, renovations, and turnkey budget to premium homes in Kerala.',
          },
          {
            '@type': 'SportsActivityLocation',
            name: 'Vesta Future De Sports Infrastructure Pvt. Ltd.',
            url: 'https://vestafuture.in/sports',
            description:
              'Turnkey sports arena construction, FIFA-standard artificial football turfs, and BWF sprung wooden badminton courts.',
          },
          {
            '@type': 'LocalBusiness',
            name: 'The Seagull — Crab & Fish Hatchery',
            url: 'https://vestafuture.in/crabs-fish',
            description:
              'Scientific marine aquaculture, high-survival mud crab seed cultivation, and biofloc fish farming.',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://vestafuture.in/#website',
        url: 'https://vestafuture.in',
        name: 'Vesta Future Pvt Ltd',
        publisher: {
          '@id': 'https://vestafuture.in/#corporation',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/vesta-group.png" type="image/png" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Cheppad, Alappuzha" />
        <meta name="geo.position" content="9.2482;76.4716" />
        <meta name="ICBM" content="9.2482, 76.4716" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <GlobalWaveCurrent />
        <Navbar />
        <main style={{ minHeight: '80vh', position: 'relative', zIndex: 1 }}>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
