import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'AI SMM Агентство - Автоматизация SMM в Москве | 10X Рост Охвата',
  description: 'Первое AI SMM агентство в России. Автоматизация контента 24/7, 10X рост охвата, 70% экономия времени. Бесплатная консультация в Москве.',
  keywords: 'AI SMM, автоматизация SMM, SMM агентство Москва, искусственный интеллект маркетинг',
  authors: [{ name: 'AI SMM Agency' }],
  creator: 'AI SMM Agency',
  publisher: 'AI SMM Agency',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://ai-smm-agency.ru',
    title: 'AI SMM Агентство - Автоматизация SMM в Москве',
    description: 'Первое AI SMM агентство в России. Автоматизация контента 24/7, 10X рост охвата, 70% экономия времени.',
    siteName: 'AI SMM Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SMM Агентство - Автоматизация SMM в Москве',
    description: 'Первое AI SMM агентство в России. Автоматизация контента 24/7, 10X рост охвата, 70% экономия времени.',
  },
  other: {
    'geo.region': 'RU-MOW',
    'geo.placename': 'Moscow',
    'geo.position': '55.7558;37.6176',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AI SMM Agency",
              "description": "Первое AI SMM агентство в России. Автоматизация контента 24/7.",
              "url": "https://ai-smm-agency.ru",
              "logo": "https://ai-smm-agency.ru/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Москва",
                "addressCountry": "RU"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+7-495-000-00-00",
                "contactType": "customer service",
                "availableLanguage": "Russian"
              },
              "sameAs": [
                "https://t.me/aismmagency"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}