import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trivanest',
  description: 'Your Mental Health Buddy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
