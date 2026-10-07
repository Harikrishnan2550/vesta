import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloat } from '@/components/common/WhatsAppFloat';
import { GlobalWaveCurrent } from '@/components/common/GlobalWaveCurrent';
import { Preloader } from '@/components/common/Preloader';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: 'Vesta Future Pvt Ltd | Diversified Corporate Group | Kerala',
    template: '%s | Vesta Future Pvt Ltd',
  },
  description:
    'Vesta Future Pvt Ltd is a premier multi-sector corporate group in Alappuzha, Kerala, operating across Construction & Real Estate, The Seagull Crabs & Fish Aquaculture, and Sports Infrastructure.',
  keywords: [
    'Vesta Future Pvt Ltd',
    'Vesta Future Builders and Developers',
    'The Seagull Crabs and Fish',
    'Vesta Sports Infrastructure',
    'Construction Kerala',
    'Aquaculture Cheppad Alappuzha',
    'Sports Turfs Kerala',
  ],
  authors: [{ name: 'Vesta Future Pvt Ltd' }],
  openGraph: {
    title: 'Vesta Future Pvt Ltd | Diversified Corporate Group',
    description:
      'Engineering Excellence, Sustainable Aquaculture, and Modern Sports Infrastructure across Kerala.',
    url: 'https://vestafuture.com',
    siteName: 'Vesta Future Pvt Ltd',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/vesta-group.svg" type="image/svg+xml" />
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
