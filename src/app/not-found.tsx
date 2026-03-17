import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-8xl font-black text-[#5e25fa] mb-4">404</h1>
          <h2 className="text-2xl font-bold text-[#e7e6ee] mb-4">Page not found</h2>
          <p className="text-[#a3a3a3] mb-8">This page doesn&apos;t exist or has been moved.</p>
          <Link href="/" className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-semibold px-8 py-3 rounded-full transition-colors">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
