'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { openCalendly } from '@/lib/calendly';

const services = [
  { label: 'Fill My Calendar', href: '/ads', desc: 'Marketing partnership for detailers that want serious growth' },
  { label: 'Software', href: '/software', desc: 'Stop losing jobs to slow follow-up' },
  { label: 'Website Build', href: '/website', desc: 'Turn clicks into customers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050119]/90 backdrop-blur-md border-b border-white/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <Image
            src="https://storage.googleapis.com/detail_pro_main/Logos/DetailPro_FinalLogos-13-cropped.svg"
            alt="DetailPro Logo"
            width={160}
            height={40}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          {/* Services dropdown */}
          <div className="group relative">
            <button className="text-[#e7e6ee] hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
              Services
              <svg className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#0d0630] border border-white/10 rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 shadow-xl shadow-black/40">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <span className="text-[#e7e6ee] text-sm font-medium block">{s.label}</span>
                  <span className="text-[#a3a3a3] text-xs">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/blog" className="text-[#e7e6ee] hover:text-white transition-colors text-sm font-medium">
            Blog
          </Link>
          <button
            onClick={() => openCalendly()}
            className="bg-white text-[#050119] font-semibold px-4 py-2 rounded-full text-sm hover:bg-[#e7e6ee] transition-colors"
          >
            Book A Demo
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#e7e6ee] p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d0630] border-b border-white/10 px-4 py-4 flex flex-col gap-1">
          <p className="text-[#a3a3a3] text-xs uppercase tracking-widest px-3 mb-1">Services</p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
            >
              <span className="text-[#e7e6ee] text-sm font-medium block">{s.label}</span>
              <span className="text-[#a3a3a3] text-xs">{s.desc}</span>
            </Link>
          ))}
          <div className="border-t border-white/10 my-2" />
          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2.5 text-[#e7e6ee] text-sm font-medium hover:bg-white/5 rounded-xl transition-colors"
          >
            Blog
          </Link>
          <button
            onClick={() => { setMobileOpen(false); openCalendly(); }}
            className="mt-2 bg-white text-[#050119] font-semibold px-4 py-2.5 rounded-full text-sm hover:bg-[#e7e6ee] transition-colors"
          >
            Book A Demo
          </button>
        </div>
      )}
    </nav>
  );
}
