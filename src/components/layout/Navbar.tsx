'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { openCalendly } from '@/lib/calendly';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-center h-16">
        {/* Desktop: links + logo as one centered cluster */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-[#050119] hover:text-[#5e25fa] transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/companies" className="text-[#050119] hover:text-[#5e25fa] transition-colors text-sm font-medium">
              Companies
            </Link>
          </div>

          <Link href="/" className="flex items-center">
            <Image
              src="/images/service-pro-icon.png"
              alt="ServicePro Logo"
              width={53}
              height={40}
              priority
            />
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/partners" className="text-[#050119] hover:text-[#5e25fa] transition-colors text-sm font-medium">
              Partners
            </Link>
            <Link href="/blog" className="text-[#050119] hover:text-[#5e25fa] transition-colors text-sm font-medium">
              Resources
            </Link>
          </div>
        </div>

        {/* Mobile: just the logo, centered */}
        <Link href="/" className="md:hidden flex items-center" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/service-pro-icon.png"
            alt="ServicePro Logo"
            width={53}
            height={40}
            priority
          />
        </Link>

        {/* Right: CTA (desktop) / hamburger (mobile) — pinned to the edge */}
        <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 flex items-center">
          <button
            onClick={() => openCalendly()}
            className="hidden md:inline-flex bg-[#5e25fa] text-white font-semibold px-4 py-2 rounded-full text-sm hover:bg-[#4a1db8] transition-colors"
          >
            Book a Strategy Call
          </button>

          <button
            className="md:hidden text-[#050119] p-1"
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
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-black/10 px-4 py-4 flex flex-col gap-1">
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2.5 text-[#050119] text-sm font-medium hover:bg-black/5 rounded-xl transition-colors"
          >
            About
          </Link>
          <Link
            href="/companies"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2.5 text-[#050119] text-sm font-medium hover:bg-black/5 rounded-xl transition-colors"
          >
            Companies
          </Link>
          <Link
            href="/partners"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2.5 text-[#050119] text-sm font-medium hover:bg-black/5 rounded-xl transition-colors"
          >
            Partners
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2.5 text-[#050119] text-sm font-medium hover:bg-black/5 rounded-xl transition-colors"
          >
            Resources
          </Link>
          <div className="border-t border-black/10 my-2" />
          <button
            onClick={() => { setMobileOpen(false); openCalendly(); }}
            className="bg-[#5e25fa] text-white font-semibold px-4 py-2.5 rounded-full text-sm hover:bg-[#4a1db8] transition-colors"
          >
            Book a Strategy Call
          </button>
        </div>
      )}
    </nav>
  );
}
