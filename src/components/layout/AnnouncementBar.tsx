import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#280aa5] py-2 px-4 text-center text-sm">
      <span className="font-bold uppercase tracking-widest text-white">One partner per trade in each market:</span>
      {' '}
      <span className="text-[#e7e6ee]">We only take owners we believe will succeed.</span>
      {' '}
      <Link href="/apply" className="underline text-white font-semibold ml-2 whitespace-nowrap hover:text-[#e7e6ee] transition-colors">
        Apply Now
      </Link>
    </div>
  );
}
