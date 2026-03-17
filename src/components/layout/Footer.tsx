'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <Image
              src="https://storage.googleapis.com/detail_pro_main/Logos/DetailPro_FinalLogos-13-cropped.svg"
              alt="DetailPro Logo"
              width={140}
              height={35}
              unoptimized
            />
            <p className="text-[#a3a3a3] text-sm">
              © 2026 DetailPro Technologies. Built by operators for operators.
            </p>
          </div>

          {/* Center — Social */}
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.tiktok.com/@detailprogrowth" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#5e25fa] transition-colors">
              <Icon icon="ic:baseline-tiktok" className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/detailprogrowth" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#5e25fa] transition-colors">
              <Icon icon="mdi:instagram" className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/111829166" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#5e25fa] transition-colors">
              <Icon icon="mdi:linkedin" className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#a3a3a3] hover:text-[#5e25fa] transition-colors">
              <Icon icon="mdi:facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#a3a3a3] hover:text-[#5e25fa] transition-colors">
              <Icon icon="ri:twitter-x-fill" className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@DetailProGrowth" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#5e25fa] transition-colors">
              <Icon icon="mdi:youtube" className="w-5 h-5" />
            </a>
          </div>

          {/* Right — Links */}
          <div className="flex items-center justify-end gap-6">
            <Link href="/blog" className="text-[#a3a3a3] hover:text-white transition-colors text-sm">Blog</Link>
            <Link href="/terms" className="text-[#a3a3a3] hover:text-white transition-colors text-sm">Terms</Link>
            <Link href="/privacy" className="text-[#a3a3a3] hover:text-white transition-colors text-sm">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
