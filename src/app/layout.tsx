import type { Metadata } from 'next';
import { IBM_Plex_Sans, Newsreader } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.detailpro.tech'),
  title: {
    default: 'DetailPro - #1 Auto Detailing Software & Growth Platform',
    template: '%s | DetailPro',
  },
  description:
    'DetailPro is the #1 growth platform for auto detailers. Scale with automated lead follow-ups, high-intent ads, and a custom CRM built for detailing shops.',
  keywords: [
    'auto detailing software',
    'detailing crm',
    'detailing marketing',
    'scale detailing business',
    'ceramic coating business',
    'detailing automation',
  ],
  alternates: {
    canonical: 'https://www.detailpro.tech/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.detailpro.tech',
    title: 'DetailPro - #1 Auto Detailing Software & Growth Platform',
    description:
      "Automate your detailing shop's growth. High-converting ads and lead follow-up systems for serious operators.",
    images: ['https://storage.googleapis.com/detail_pro_main/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DetailPro - #1 Auto Detailing Software & Growth Platform',
    description:
      'Scale your detailing business from $5k to $20k+ per month with our automated growth engine.',
    images: ['https://storage.googleapis.com/detail_pro_main/og-image.jpg'],
  },
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'DetailPro',
  operatingSystem: 'Web-based',
  applicationCategory: 'BusinessApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free demo available for detailing shop operators.',
  },
  description:
    'High-performance growth software and lead automation platform for auto detailing and ceramic coating businesses.',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DetailPro',
  url: 'https://www.detailpro.tech',
  logo: 'https://storage.googleapis.com/detail_pro_main/Logos/DetailPro_FinalLogos-02-cropped.svg',
  sameAs: [
    'https://www.instagram.com/detailprogrowth',
    'https://www.tiktok.com/@detailprogrowth',
    'https://www.youtube.com/@DetailProGrowth',
    'https://www.linkedin.com/company/111829166',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${newsreader.variable}`}>
      <head>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-[#050119] text-[#e7e6ee] antialiased overflow-x-hidden selection:bg-[#5e25fa] selection:text-[#e7e6ee] font-sans">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JSBR62E0WZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JSBR62E0WZ');`}
        </Script>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
