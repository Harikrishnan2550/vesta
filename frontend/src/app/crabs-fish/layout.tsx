import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Seagull — Crab & Fish Hatchery | Marine Aquaculture Systems | Vesta Future',
  description:
    'The Seagull Crab & Fish Hatchery is the dedicated marine aquaculture division of Vesta Future Pvt Ltd. Specializing in scientific mud crab seed production, biofloc freshwater tanks, and recirculating aquaculture systems (RAS).',
  keywords: [
    'The Seagull Crab and Fish Hatchery',
    'Crab Hatchery Kerala',
    'Mud Crab Farming India',
    'Fish Hatchery Kerala',
    'Freshwater Biofloc Tanks',
    'RAS Aquaculture Systems Kerala',
    'Aquaculture Cheppad Alappuzha',
    'Commercial Crab Farming India',
    'Vesta Future Aquaculture',
  ],
  alternates: {
    canonical: 'https://vestafuture.in/crabs-fish',
  },
  openGraph: {
    title: 'The Seagull — Crab & Fish Hatchery | Scientific Marine Aquaculture',
    description:
      'Scientific crab and fish seed cultivation, biofloc ecosystem management, and advanced marine aquaculture systems in Kerala.',
    url: 'https://vestafuture.in/crabs-fish',
    siteName: 'Vesta Future Pvt Ltd',
    images: [
      {
        url: '/images/hero/crabs-fish.jpg',
        width: 1200,
        height: 630,
        alt: 'The Seagull Crab & Fish Hatchery Aquaculture Facility',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Seagull — Crab & Fish Hatchery | Scientific Marine Aquaculture',
    description:
      'Scientific crab and fish seed cultivation, biofloc ecosystem management, and advanced marine aquaculture systems in Kerala.',
    images: ['/images/hero/crabs-fish.jpg'],
  },
};

export default function CrabsFishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
