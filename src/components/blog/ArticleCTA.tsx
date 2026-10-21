import Link from 'next/link';

export default function ArticleCTA() {
  return (
    <div className="mt-16 bg-gradient-to-br from-[#5e25fa]/20 to-[#280aa5]/10 border border-[#5e25fa]/30 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-[#e7e6ee] mb-2">Build a business that runs without you.</h3>
      <p className="text-[#a3a3a3] mb-6">
        Service Pro builds the whole system in four weeks and runs it after launch. Ads bring the calls, every call gets answered, and the job gets booked. You keep 100% of your business, and we get paid when you get paid.
      </p>
      <Link
        href="/apply"
        className="inline-block bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105"
      >
        Apply Now
      </Link>
      <p className="text-[#a3a3a3] text-sm mt-4">We only take one partner per trade in each market.</p>
    </div>
  );
}
