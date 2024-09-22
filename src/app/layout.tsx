import './globals.css';
import React from 'react';
import { Providers } from './providers';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen justify-between">
        <Providers>
          <TopNavBar />
          <div className="container mx-auto px-4 py-8 flex-grow">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}