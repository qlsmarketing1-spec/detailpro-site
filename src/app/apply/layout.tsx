import type { Metadata } from 'next';
import { APPLY_FAQS, faqJsonLd } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Apply',
  description:
    'Apply to build a real local service business with Service Pro. We build the whole system in four weeks, run it after launch, and only get paid when you do. One partner per trade in each market.',
  alternates: { canonical: 'https://www.detailpro.tech/apply' },
  openGraph: {
    title: 'Apply | Service Pro',
    description: 'We only take owners we believe will succeed. One partner per trade in each market.',
    url: 'https://www.detailpro.tech/apply',
    images: ['/og/apply.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/og/apply.jpg'] },
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(APPLY_FAQS)) }} />
      {children}
    </>
  );
}
