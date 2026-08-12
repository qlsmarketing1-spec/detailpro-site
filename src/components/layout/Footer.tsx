'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <Image
              src="/images/service-pro-logo.png"
              alt="Service Pro Logo"
              width={175}
              height={49}
            />
            <p className="text-[#6b6b76] text-sm">
              © 2026 ServicePro Technologies.
            </p>
          </div>

          {/* Center — Social */}
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.tiktok.com/@detailprogrowth" target="_blank" rel="noopener noreferrer" className="text-[#6b6b76] hover:text-[#5e25fa] transition-colors">
              <Icon icon="ic:baseline-tiktok" className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/detailprogrowth" target="_blank" rel="noopener noreferrer" className="text-[#6b6b76] hover:text-[#5e25fa] transition-colors">
              <Icon icon="mdi:instagram" className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/111829166" target="_blank" rel="noopener noreferrer" className="text-[#6b6b76] hover:text-[#5e25fa] transition-colors">
              <Icon icon="mdi:linkedin" className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#6b6b76] hover:text-[#5e25fa] transition-colors">
              <Icon icon="mdi:facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#6b6b76] hover:text-[#5e25fa] transition-colors">
              <Icon icon="ri:twitter-x-fill" className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@DetailProGrowth" target="_blank" rel="noopener noreferrer" className="text-[#6b6b76] hover:text-[#5e25fa] transition-colors">
              <Icon icon="mdi:youtube" className="w-5 h-5" />
            </a>
          </div>

          {/* Right — Links */}
          <div className="flex items-center justify-end flex-wrap gap-x-6 gap-y-2">
            <Link href="/software" className="text-[#6b6b76] hover:text-[#050119] transition-colors text-sm">Software</Link>
            <Link href="/ads" className="text-[#6b6b76] hover:text-[#050119] transition-colors text-sm">Ads</Link>
            <Link href="/blog" className="text-[#6b6b76] hover:text-[#050119] transition-colors text-sm">Blog</Link>
            <Link href="/terms" className="text-[#6b6b76] hover:text-[#050119] transition-colors text-sm">Terms</Link>
            <Link href="/privacy" className="text-[#6b6b76] hover:text-[#050119] transition-colors text-sm">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
