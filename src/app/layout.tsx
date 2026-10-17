import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Rolling Rooster | Islamabad - Crispy Broast, Zingers, Pizza & Rooftop Dining',
  description:
    'Experience Islamabad’s juiciest 18-spice pressure broast, crunchy zinger burgers, stone-baked artisan pizzas, loaded fries & open-sky rooftop dining in Sector I-11/2.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Caveat:wght@700&family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FCFAF7] text-[#1C1917] antialiased overflow-x-hidden selection:bg-[#C8102E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
