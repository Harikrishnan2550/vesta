import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'De Sports Infrastructure | Turnkey Turfs, Stadiums & Courts | Vesta Future',
  description:
    'Vesta Future De Sports Infrastructure Pvt. Ltd. delivers end-to-end turnkey sports arenas, FIFA-standard artificial football turfs, BWF sprung wooden badminton courts, indoor stadiums, and athletic facilities across India.',
  keywords: [
    'Sports Turf Construction Kerala',
    'Football Turf Builders India',
    'Indoor Badminton Court Construction',
    'Synthetic Turf Installation Kerala',
    'Vesta Future De Sports Infrastructure',
    'Multi-sport Arena Construction',
    'Futsal Turf Construction',
    'Indoor Stadium Builders',
    'BWF Badminton Flooring India',
  ],
  alternates: {
    canonical: 'https://vestafuture.in/sports',
  },
  openGraph: {
    title: 'Vesta Future De Sports Infrastructure | Turnkey Sports Facilities & Turfs',
    description:
      '10+ years of sports turf construction experience. FIFA-grade artificial grass, BWF hardwood badminton courts, and indoor stadium EPC.',
    url: 'https://vestafuture.in/sports',
    siteName: 'Vesta Future Pvt Ltd',
    images: [
      {
        url: '/images/hero/sports.jpg',
        width: 1200,
        height: 630,
        alt: 'Vesta Future De Sports Infrastructure Arena Panorama',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vesta Future De Sports Infrastructure | Turnkey Sports Facilities & Turfs',
    description:
      '10+ years of sports turf construction experience. FIFA-grade artificial grass, BWF hardwood badminton courts, and indoor stadium EPC.',
    images: ['/images/hero/sports.jpg'],
  },
};

export default function SportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
