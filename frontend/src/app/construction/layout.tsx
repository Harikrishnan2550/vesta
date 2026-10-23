import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Builders & Developers | Residential Construction & Turnkey Homes | Vesta Future',
  description:
    'Vesta Future Builders & Developers provides residential villa construction, 2D/3D elevations, renovations, interior design, and turnkey packages starting at ₹1,999/sqft across Kerala with a 12-year warranty.',
  keywords: [
    'Residential Construction Kerala',
    'Vesta Future Builders and Developers',
    'Turnkey House Construction Kerala',
    'House Plans 3D Elevations Kerala',
    'Home Builders Alappuzha',
    'Budget Homes Kerala',
    'Construction Cost per sqft Kerala',
    'Home Renovation Kerala',
    'Interior Design Kerala',
  ],
  alternates: {
    canonical: 'https://vestafuture.in/construction',
  },
  openGraph: {
    title: 'Vesta Future Builders & Developers | Residential Construction in Kerala',
    description:
      'Turnkey residential homes, 2D/3D architectural elevations, and transparent construction packages starting at ₹1,999/sqft.',
    url: 'https://vestafuture.in/construction',
    siteName: 'Vesta Future Pvt Ltd',
    images: [
      {
        url: '/images/hero/construction.jpg',
        width: 1200,
        height: 630,
        alt: 'Vesta Future Builders & Developers Residential Project',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vesta Future Builders & Developers | Residential Construction in Kerala',
    description:
      'Turnkey residential homes, 2D/3D architectural elevations, and transparent construction packages starting at ₹1,999/sqft.',
    images: ['/images/hero/construction.jpg'],
  },
};

export default function ConstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
