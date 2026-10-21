import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const LINKS = [
  { label: 'The System', href: '/system' },
  { label: 'Companies', href: '/companies' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-white relative overflow-hidden">
        <div className="absolute -top-32 -left-24 w-[600px] h-[600px] bg-[#5e25fa]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto px-6 py-28 md:py-36 text-center">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-6">Error 404</p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-[#050119] leading-[1.1] tracking-tight mb-5">
            This page wandered off the schedule.
          </h1>
          <p className="text-[#6b6b76] text-lg mb-10">
            The page you&apos;re after doesn&apos;t exist or has moved. Here&apos;s where to go next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/"
              className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-bold px-9 py-4 rounded-full transition-all hover:scale-105 text-center"
            >
              Back to Home
            </Link>
            <Link
              href="/apply"
              className="border border-black/15 hover:border-[#5e25fa]/40 text-[#050119] font-semibold px-9 py-4 rounded-full transition-all hover:bg-black/5 text-center"
            >
              Apply Now
            </Link>
          </div>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[#6b6b76] hover:text-[#050119] transition-colors text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
