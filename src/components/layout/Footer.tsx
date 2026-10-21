'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const SOCIALS = [
  { label: 'Service Pro on TikTok', href: 'https://www.tiktok.com/@serviceprogrowth', icon: 'ic:baseline-tiktok' },
  { label: 'Service Pro on Instagram', href: 'https://www.instagram.com/serviceprogrowth/', icon: 'mdi:instagram' },
  { label: 'Service Pro on LinkedIn', href: 'https://www.linkedin.com/company/111829166', icon: 'mdi:linkedin' },
  { label: 'Service Pro on YouTube', href: 'https://www.youtube.com/@DetailProGrowth', icon: 'mdi:youtube' },
];

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Companies', href: '/companies' },
  { label: 'Case Studies', href: '/case-studies' },
];

const RESOURCE_LINKS = [
  { label: 'The System', href: '/system' },
  { label: 'Blog', href: '/blog' },
  { label: 'Apply', href: '/apply' },
];

const LINK_CLASS = 'text-[#6b6b76] hover:text-[#050119] transition-colors text-sm';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] gap-x-8 gap-y-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4 items-start">
            <Image
              src="/images/logos/service-pro-logo.webp"
              alt="Service Pro – growth systems for local service businesses"
              width={175}
              height={49}
            />
            <a href="mailto:info@detailpro.tech" className={LINK_CLASS}>
              info@detailpro.tech
            </a>
            <div className="flex items-center gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-[#6b6b76] hover:text-[#5e25fa] transition-colors"
                >
                  <Icon icon={s.icon} className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <nav aria-label="Company">
            <p className="text-[#050119] font-semibold text-sm mb-4">Company</p>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} className={LINK_CLASS}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources">
            <p className="text-[#050119] font-semibold text-sm mb-4">Resources</p>
            <ul className="flex flex-col gap-3">
              {RESOURCE_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} className={LINK_CLASS}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[#6b6b76] text-sm">
            © {new Date().getFullYear()} MOTO Technology LLC dba ServicePro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className={LINK_CLASS}>Terms</Link>
            <Link href="/privacy" className={LINK_CLASS}>Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
