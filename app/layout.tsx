import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ModelProvider } from '@/data/Models/ModelProvider';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/layout/Header'; // Import Header
import Footer from '@/components/layout/Footer'; // Import Footer if you have one
import FloatingContact from "@/components/FloatingContact";
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daqin Auto - Premium Chinese Vehicle Exporter',
  description: 'Xi\'an Daqin Daorui International Trade Co., Ltd. supplies quality vehicles from China.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
            <ModelProvider>
          <main >{children}</main>
           <FloatingContact />
          <Footer /> 
</ModelProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}