'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { openCalendly } from '@/lib/calendly';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050119]/90 backdrop-blur-md border-b border-white/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="https://storage.googleapis.com/detail_pro_main/Logos/DetailPro_FinalLogos-13-cropped.svg"
            alt="DetailPro Logo"
            width={160}
            height={40}
            priority
            unoptimized
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/blog" className="hidden md:block text-[#e7e6ee] hover:text-white transition-colors text-sm font-medium">
            Blog
          </Link>
          <button className="hidden md:block text-[#e7e6ee] hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button
            onClick={() => openCalendly()}
            className="bg-white text-[#050119] font-semibold px-4 py-2 rounded-full text-sm hover:bg-[#e7e6ee] transition-colors"
          >
            Book A Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
