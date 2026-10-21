import type { Metadata } from 'next';
import { IBM_Plex_Sans, Newsreader } from 'next/font/google';
import Script from 'next/script';
import AnalyticsListeners from '@/components/shared/AnalyticsListeners';
import '@/styles/globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const SITE_URL = 'https://www.detailpro.tech';
const DEFAULT_TITLE = 'Service Pro | Building the Next Generation of Local Service Businesses';
const DEFAULT_DESCRIPTION =
  'Service Pro builds and runs the whole operating system of a local service business: ads, 24/7 call answering, booking, and follow-up. You keep 100% of your business, and we get paid when you get paid.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Service Pro',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: 'Service Pro',
  keywords: [
    'local service business',
    'start a local service business',
    'home service business growth',
    'AI call answering for contractors',
    'local service business systems',
    'service business revenue share',
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: 'website',
    siteName: 'Service Pro',
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: '/og/default.jpg', width: 1200, height: 630, alt: 'Service Pro: building the next generation of local service businesses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og/default.jpg'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Service Pro',
  alternateName: ['ServicePro', 'DetailPro'],
  legalName: 'MOTO Technology, LLC',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logos/service-pro-logo.webp`,
  description: DEFAULT_DESCRIPTION,
  email: 'info@detailpro.tech',
  founder: { '@id': `${SITE_URL}/about#brady-schlapkohl` },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6925 Lake Harrison Cir',
    addressLocality: 'Chanhassen',
    addressRegion: 'MN',
    postalCode: '55317',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.instagram.com/serviceprogrowth/',
    'https://www.tiktok.com/@serviceprogrowth',
    'https://www.youtube.com/@DetailProGrowth',
    'https://www.linkedin.com/company/111829166',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Service Pro',
  alternateName: 'DetailPro',
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-[#050119] text-[#e7e6ee] antialiased overflow-x-hidden selection:bg-[#5e25fa] selection:text-[#e7e6ee] font-sans">
        {children}
        <AnalyticsListeners />
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '984837834043174');
            fbq('track', 'PageView');`}
        </Script>
      </body>
    </html>
  );
}
