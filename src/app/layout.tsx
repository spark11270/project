import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Retail Inventory Management System',
  description: 'Project for CS 338',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        </AppRouterCacheProvider>  
      </body>
    </html>
  );
}
