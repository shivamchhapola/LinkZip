import CustomCursor from '@/components/others/CustomCursor';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LinkZip',
  description: 'Create and analyze short links',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} cursor-none`}>
        {children}
        <CustomCursor color="#fff" size={28} />
      </body>
    </html>
  );
}
