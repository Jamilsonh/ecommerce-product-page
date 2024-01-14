import type { Metadata } from 'next';
import { Inter, Kumbh_Sans } from 'next/font/google';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const mainFontFamily = Kumbh_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-main',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mainFontFamily.className}>{children}</body>
    </html>
  );
}
