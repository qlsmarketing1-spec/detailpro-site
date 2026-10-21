import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CompaniesHero from '@/components/companies/CompaniesHero';
import CompanyShowcase from '@/components/companies/CompanyShowcase';

export const metadata: Metadata = {
  title: 'Companies',
  description:
    'The owner-operated local service businesses Service Pro builds alongside: Shine Squad, Reset Auto Detailing, and Spotless Detailing.',
  alternates: { canonical: 'https://www.detailpro.tech/companies' },
  openGraph: {
    title: 'Companies | Service Pro',
    description: 'The owner-operated local service businesses Service Pro builds alongside: Shine Squad, Reset Auto Detailing, and Spotless Detailing.',
    url: 'https://www.detailpro.tech/companies',
    images: ['/og/companies.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/og/companies.jpg'] },
};

const COMPANIES = [
  {
    label: 'Shine Squad — car and boat detailing',
    logo: {
      src: '/images/clients/shine-squad/shine-squad-logo.webp',
      alt: 'Shine Squad logo — car and boat detailing',
      width: 400,
      height: 373,
    },
    hero: {
      src: '/images/clients/shine-squad/shine-squad-technicians-detailing-rv-camper-on-ladders.webp',
      alt: 'Two Shine Squad technicians on ladders detailing a large RV camper at a campsite',
      width: 1024,
      height: 768,
      focal: '45% 45%',
    },
    portrait: {
      src: '/images/clients/shine-squad/shine-squad-technician-foam-washing-black-jeep.webp',
      alt: 'A Shine Squad technician foam-washing a black Jeep in a customer driveway',
      width: 768,
      height: 1024,
      focal: '55% 45%',
    },
  },
  {
    label: 'Reset Auto Detailing — excellence in every detail',
    logo: {
      src: '/images/clients/reset-auto-detailing/reset-auto-detailing-logo.webp',
      alt: 'Reset Auto Detailing logo — excellence in every detail',
      width: 320,
      height: 320,
    },
    hero: {
      src: '/images/clients/reset-auto-detailing/reset-auto-detailing-technician-foam-washing-mercedes-suv.webp',
      alt: 'A Reset Auto Detailing technician in a branded shirt foam-washing a white Mercedes SUV in a suburban driveway',
      width: 1200,
      height: 678,
      focal: '42% 45%',
    },
    portrait: {
      src: '/images/clients/reset-auto-detailing/reset-auto-detailing-black-bmw-x3-mirror-finish.webp',
      alt: 'A freshly detailed black BMW X3 with a mirror finish in a residential driveway',
      width: 796,
      height: 957,
      focal: '50% 55%',
    },
  },
  {
    label: 'Spotless Detailing — car detailing',
    logo: {
      src: '/images/clients/spotless-detailing/spotless-detailing-logo.webp',
      alt: 'Spotless Detailing logo',
      width: 610,
      height: 443,
    },
    hero: {
      src: '/images/clients/spotless-detailing/spotless-detailing-bmw-suv-foam-wash-driveway.webp',
      alt: 'A foam-covered BMW SUV mid-wash in a residential driveway, with traffic cones marking the work area',
      width: 1200,
      height: 800,
      focal: '45% 55%',
    },
    portrait: {
      src: '/images/clients/spotless-detailing/spotless-detailing-foam-covered-wheel-closeup.webp',
      alt: 'Close-up of a foam-covered wheel and fender on a freshly washed vehicle',
      width: 850,
      height: 1115,
      focal: '50% 55%',
    },
  },
];

export default function CompaniesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pb-10">
        <CompaniesHero count={COMPANIES.length} />

        {COMPANIES.map((company, i) => (
          <CompanyShowcase
            key={company.label}
            label={company.label}
            logo={company.logo}
            hero={company.hero}
            portrait={company.portrait}
            flip={i % 2 === 1}
            priority={i === 0}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
