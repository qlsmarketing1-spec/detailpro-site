import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const steps = [
  {
    number: '01',
    title: 'Apply',
    description:
      'Tell us about your business and your market. If it looks like a fit, we talk through where you are and what to build first.',
    detail: 'A short application, then a conversation',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'We set up your website, ads, and automations, build them around your company, and show you how to run it.',
    detail: 'Website, ads, SMS, and reviews connected',
  },
  {
    number: '03',
    title: 'Grow',
    description:
      'The system handles follow-up, reviews, and rebooking while we maintain it and keep advising as you expand.',
    detail: 'Ongoing maintenance and mentorship',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">The Process</p>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-[44px] font-medium text-[#050119] leading-[1.15] tracking-tight">
            Apply. Build. Grow.
          </h2>
        </Reveal>

        <div className="relative">
          {/* Connector line between step markers (desktop only) */}
          <div
            className="hidden md:block absolute top-7 h-px"
            style={{
              left: 'calc((100% - 6rem) / 6)',
              right: 'calc((100% - 6rem) / 6)',
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(94,37,250,0.35) 0, rgba(94,37,250,0.35) 8px, transparent 8px, transparent 16px)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 120} className="flex flex-col h-full">
                <div className="flex md:justify-center mb-6">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#5e25fa] flex items-center justify-center font-bold text-white text-lg shadow-[0_0_0_6px_white]">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 bg-white border border-black/10 rounded-3xl p-7 transition-all duration-300 hover:border-[#5e25fa]/30 hover:shadow-lg hover:shadow-[#5e25fa]/5 motion-safe:hover:-translate-y-1">
                  <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-2">Step {i + 1}</p>
                  <h3 className="font-serif text-2xl font-medium text-[#050119] mb-3">{step.title}</h3>
                  <p className="text-[#6b6b76] leading-relaxed mb-6">{step.description}</p>
                  <div className="border-t border-black/10 pt-4">
                    <p className="text-[#050119]/60 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#5e25fa] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {step.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="flex justify-center mt-14">
          <Link
            href="/apply"
            className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-bold px-9 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(94,37,250,0.45)] active:scale-95 text-center"
          >
            Apply Now
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
