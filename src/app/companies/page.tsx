import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Companies',
};

export default function CompaniesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[50vh] flex items-center justify-center px-4 py-24">
        <p className="text-[#a3a3a3] text-lg">Coming soon.</p>
      </main>
      <Footer />
    </>
  );
}
