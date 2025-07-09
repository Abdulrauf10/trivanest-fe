import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavbarPublic from '@/components/NavbarPublic';

export const metadata: Metadata = {
  title: 'Trivanest',
  description: 'Your Mental Health Buddy',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <NavbarPublic />
        {children}
      </body>
    </html>
  );
}
