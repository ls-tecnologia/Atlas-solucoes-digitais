import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Atlas Soluções Digitais | Criação de Sites em São Paulo e SEO Local',
  description: 'Agência digital em São Paulo especializada em criação de sites estratégicos e SEO para negócios locais. Aumente suas vendas com a Atlas.',
  keywords: ['criação de sites São Paulo', 'agência digital SP', 'SEO local', 'sites estratégicos', 'marketing digital São Paulo'],
  openGraph: {
    title: 'Atlas Soluções Digitais | Sites que Vendem',
    description: 'Transforme visitantes em clientes com sites de alta conversão.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Atlas Soluções Digitais',
    image: 'https://atlas.com.br/logo.png', // Placeholder
    description: 'Agência especializada em criação de sites e SEO local em São Paulo.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Paulista, 1000',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01310-100',
      addressCountry: 'BR',
    },
    telephone: '+5511999999999',
    url: 'https://atlas.com.br',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-50 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
