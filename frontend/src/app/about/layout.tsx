import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vesta Future Pvt Ltd | Corporate Legacy, Leadership & Vision',
  description:
    'Explore the 10+ year trajectory of Vesta Future Pvt Ltd. From our 2015 roots in architectural construction to specialized sports infrastructure and sustainable marine aquaculture across Kerala, Tamil Nadu, Puducherry, and Dubai.',
  keywords: [
    'About Vesta Future',
    'Vesta Future Leadership',
    'Vesta Future Pvt Ltd History',
    'Corporate Group Kerala',
    'Vesta Future Cheppad Alappuzha',
    'Kerala Business Group',
  ],
  alternates: {
    canonical: 'https://vestafuture.in/about',
  },
  openGraph: {
    title: 'About Vesta Future Pvt Ltd | Corporate Legacy & Multi-Sector Vision',
    description:
      'A decade of engineering discipline, world-class sports facilities, and scientific aquaculture systems under incorporated corporate governance.',
    url: 'https://vestafuture.in/about',
    siteName: 'Vesta Future Pvt Ltd',
    images: [
      {
        url: '/images/hero/corporate.jpg',
        width: 1200,
        height: 630,
        alt: 'Vesta Future Corporate Headquarters & Leadership',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vesta Future Pvt Ltd | Corporate Legacy & Multi-Sector Vision',
    description:
      'A decade of engineering discipline, world-class sports facilities, and scientific aquaculture systems.',
    images: ['/images/hero/corporate.jpg'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
