import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Executive Admin Portal | Vesta Future Pvt Ltd',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
