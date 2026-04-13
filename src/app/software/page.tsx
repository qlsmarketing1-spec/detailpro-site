import type { Metadata } from 'next';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CalendlyButton from '@/components/ui/CalendlyButton';
import FAQItem from '@/components/ui/FAQItem';
import MiniLeadForm from '@/components/forms/MiniLeadForm';

export const metadata: Metadata = {
  title: 'CRM Software for Auto Detailers — DetailPro',
  description:
    'Stop losing leads in your texts. DetailPro CRM automates speed-to-lead follow-up, manages detailing pipelines, and grows fleet accounts — $197/mo.',
  alternates: { canonical: 'https://www.detailpro.tech/software' },
};

const features = [
  {
    title: 'Speed-to-lead SMS',
    desc: 'An automated text fires within 30 seconds of a new inquiry — before a competitor even picks up the phone. One touchpoint that stops the bleeding.',
  },
  {
    title: 'Detailing pipelines',
    desc: 'Consumer jobs, ceramic coatings, PPF, and maintenance — tracked separately with their own boards. Not a generic "lead → closed" funnel.',
  },
  {
    title: 'Fleet account pipeline',
    desc: 'A dedicated system for prospecting, nurturing, and landing commercial fleet accounts. The most predictable revenue in the detailing business.',
  },
  {
    title: 'Automated review requests',
    desc: 'Every completed job triggers a Google review request. Detailers who ask consistently rank higher. Nobody remembers to ask manually.',
  },
];

const painPoints = [
  {
    title: 'Jobber quotes go to spam',
    desc: "Estimates sent from jobbermail.com hit the junk folder. Over 60% of quotes are never opened. You're sending proposals into a black hole.",
  },
  {
    title: 'HCP outages and billing fights',
    desc: 'VoIP outages lasting 30+ days. Held funds. Billing practices operators call predatory. That's your business running on someone else's reliability.',
  },
  {
    title: 'Leads lost in DMs and texts',
    desc: "Your personal phone is your CRM. Leads fall through when you're under a car. You can't close jobs you've forgotten about.",
  },
  {
    title: 'Generic CRMs charge for automation',
    desc: "Most tools paywall follow-up sequences at $500+/month. They treat a $50 wash the same as a $2,000 ceramic coating. DetailPro doesn't.",
  },
];

const faqs = [
  {
    question: 'How is this different from Jobber or Housecall Pro?',
    answer:
      "Jobber and HCP are built for field service businesses broadly — plumbers, HVAC, landscaping. DetailPro is built specifically for detailing. That means pipelines that match how detailing actually works (ceramic coatings are not the same as a wash), fleet account tracking, and speed-to-lead automation designed for the 5-minute window that decides whether you get the booking.",
  },
  {
    question: 'What does the speed-to-lead SMS actually send?',
    answer:
      "One automated message that acknowledges the inquiry, shares basic pricing information, and pushes the customer toward booking. Due to messaging regulations, the automation is limited to this one initial response — you follow up personally from there. The value is in the speed: getting there in under 30 seconds before the customer texts your competitor.",
  },
  {
    question: 'Do I need a website to use the CRM?',
    answer:
      "No. The CRM works with any existing website, Google Business Profile, or social media presence. If you don't have a website or want a better one, we build them separately for $597 one-time.",
  },
  {
    question: 'Is there a contract or setup fee?',
    answer:
      "$197/month, no contract, no setup fee. Cancel anytime. If you also sign up for ads management, the CRM subscription is bundled in at no extra cost.",
  },
  {
    question: 'What happens if I want to cancel?',
    answer:
      "You can cancel anytime — no cancellation fees, no holdbacks. Your data remains accessible for 30 days after cancellation so you can export anything you need.",
  },
];

export default function SoftwarePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#050119] overflow-hidden pt-24 pb-20 px-4">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#5e25fa]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative">
            <span className="inline-block bg-[#5e25fa]/15 border border-[#5e25fa]/30 text-[#a78bfa] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              CRM Software · $197/mo
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#e7e6ee] mb-6 leading-tight">
              Stop losing leads<br className="hidden md:block" /> in your texts.
            </h1>
            <p className="text-[#a3a3a3] text-lg md:text-xl max-w-2xl mx-auto mb-10">
              DetailPro automates speed-to-lead follow-up, manages your detailing pipelines, and builds your fleet account base — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-base">
                Book a Free Demo
              </CalendlyButton>
            </div>
            <div className="max-w-md mx-auto">
              <MiniLeadForm
                source="software_hero"
                headline="Or get a 2-minute dashboard walkthrough →"
                buttonText="Send It"
                successMessage="Check your inbox — walkthrough is on its way."
              />
            </div>
          </div>
        </section>

        {/* Pain */}
        <section className="py-20 px-4 bg-[#050119]">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">Why detailers switch</p>
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-12">
              Your current tools are costing you jobs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {painPoints.map((p) => (
                <div key={p.title} className="bg-white/3 border border-white/8 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-full min-h-[40px] bg-red-500/60 rounded-full shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#e7e6ee] mb-1">{p.title}</h3>
                      <p className="text-[#a3a3a3] text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">What's included</p>
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-12">
              Built for how detailing actually works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="bg-gradient-to-br from-[#5e25fa]/10 to-[#280aa5]/5 border border-[#5e25fa]/20 rounded-2xl p-6">
                  <h3 className="font-bold text-[#e7e6ee] mb-2">{f.title}</h3>
                  <p className="text-[#a3a3a3] text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-16 px-4 bg-white/2 border-y border-white/6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-[#a78bfa] mb-2">$5k → $22k</p>
              <p className="text-[#a3a3a3] text-sm">monthly revenue in 90 days</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#a78bfa] mb-2">&lt; 30s</p>
              <p className="text-[#a3a3a3] text-sm">speed-to-lead response time</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#a78bfa] mb-2">Fleet added</p>
              <p className="text-[#a3a3a3] text-sm">first commercial account in 30 days</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4">
          <div className="max-w-lg mx-auto">
            <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">Simple pricing</p>
            <div className="bg-white/4 border border-white/10 rounded-3xl p-8">
              <div className="text-center mb-6">
                <p className="text-5xl font-black text-[#e7e6ee]">$197</p>
                <p className="text-[#a3a3a3] text-sm mt-1">per month · cancel anytime</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Speed-to-lead SMS (30-second response)',
                  'Consumer + ceramic + fleet pipelines',
                  'Automated review requests',
                  'Unified dashboard',
                  'No setup fee',
                  'No contract',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#e7e6ee]">
                    <svg className="h-4 w-4 text-[#5e25fa] shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <CalendlyButton className="w-full bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-semibold py-3.5 rounded-full transition-colors">
                Start Your Demo
              </CalendlyButton>
              <p className="text-center text-[#a3a3a3] text-xs mt-3">
                Compare: Jobber starts at $69/mo with no automation. HCP at $129/mo with outage risk.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-[#050119]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-10">Common questions</h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#e7e6ee] mb-4">
              Ready to stop losing leads?
            </h2>
            <p className="text-[#a3a3a3] mb-8">
              Book a free demo and see the full dashboard in under 30 minutes.
            </p>
            <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-semibold px-10 py-4 rounded-full transition-colors text-lg mb-6">
              Book A Demo
            </CalendlyButton>
            <div className="max-w-md mx-auto">
              <MiniLeadForm
                source="software_final_cta"
                headline="Not ready to talk? Get the walkthrough instead →"
                buttonText="Send It"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
