export default function GuaranteeSection() {
  return (
    <section className="py-24 px-4 bg-[#030011]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 bg-[#5e25fa]/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#e7e6ee] mb-8">Built for Operators Who Want to Scale</h2>
        <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">
          We built DetailPro to grow with you — not extract fees and disappear. You license the software upfront. We only participate long-term through a revenue share on ads. That means we&apos;re incentivized to build systems that actually:{' '}
          <strong className="text-[#5e25fa] underline">
            turn leads into booked jobs, create predictable demand, and support real operations, not vanity metrics.
          </strong>
        </p>
        <p className="text-[#a3a3a3] text-lg mb-10">No hype. No shortcuts. Just systems designed to scale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {['Structured 90-Day Onboarding', 'Performance Based Pricing', 'Built For Detailers By Detailers'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#5e25fa] rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[#e7e6ee] text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
