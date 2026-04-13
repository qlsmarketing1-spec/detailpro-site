import type { Metadata } from 'next';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQItem from '@/components/ui/FAQItem';
import MiniLeadForm from '@/components/forms/MiniLeadForm';

export const metadata: Metadata = {
  title: 'Detailing Website Build — $597 One-Time | DetailPro',
  description:
    'A Next.js website that actually books jobs — delivered in 48 hours for $597 one-time. SEO-optimized, Contentful CMS, mobile-first. One ceramic coating job pays for the whole thing.',
  alternates: { canonical: 'https://www.detailpro.tech/website' },
};

const included = [
  {
    title: 'Next.js — loads in under 1 second',
    desc: "Built on the same framework used by Fortune 500 companies. Your site loads faster than any Wix or WordPress competitor. Google rewards it with higher rankings.",
  },
  {
    title: 'Contentful CMS — you own your content',
    desc: "Edit your services, prices, and gallery without touching code. No developer needed. No monthly CMS fee.",
  },
  {
    title: 'Local SEO setup',
    desc: "Title tags, meta descriptions, structured data, and sitemap — all configured for your city and services. You'll rank for searches like 'ceramic coating [your city]' from day one.",
  },
  {
    title: 'Deployed in 48 hours',
    desc: "Not 6 weeks. Not a discovery call and a proposal and a revision cycle. You send us your details on Monday, you're live by Wednesday.",
  },
  {
    title: 'Mobile-first, booking-optimized',
    desc: "Most detailing searches happen on phones. Your site is designed mobile-first with a clear booking flow — quote request or online booking — visible without scrolling.",
  },
  {
    title: 'Vercel hosting included',
    desc: "Global CDN, automatic SSL, 99.9% uptime. No shared hosting, no FTP, no cPanel. Hosting is included for the first year.",
  },
];

const faqs = [
  {
    question: 'Does this include hosting?',
    answer:
      "Yes — Vercel hosting is included for the first year. After that it's $20/mo directly to Vercel, or we can bundle it into a DetailPro CRM subscription at no additional cost.",
  },
  {
    question: 'Can I edit the content myself after launch?',
    answer:
      "Yes. The site uses Contentful as a CMS. You can edit your services, pricing, photos, and any text through a simple dashboard — no code required.",
  },
  {
    question: 'How fast will the site rank on Google?',
    answer:
      "New sites typically start getting local traffic within 4–12 weeks depending on your market. We set up all the technical SEO foundations on day one. The CMS also supports SEO blog articles — we can help you build content that ranks over time.",
  },
  {
    question: "What if I don't have professional photos?",
    answer:
      "We can work with iPhone photos — they perform fine for most detailing sites. The goal is authentic work photos, not stock imagery. Google Business Profile benefits more from real photos anyway.",
  },
  {
    question: 'What happens after the 48 hours?',
    answer:
      "You get login credentials for Contentful (content editing) and Vercel (hosting). We hand off with a short Loom walkthrough so you know exactly how to manage it. If you later want help with ads or lead automation, we can layer those in.",
  },
];

export default function WebsitePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#050119] overflow-hidden pt-24 pb-20 px-4">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#5e25fa]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative">
            <span className="inline-block bg-[#5e25fa]/15 border border-[#5e25fa]/30 text-[#a78bfa] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Website Build · $597 one-time
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#e7e6ee] mb-6 leading-tight">
              A website that actually<br className="hidden md:block" /> books jobs.
            </h1>
            <p className="text-[#a3a3a3] text-lg md:text-xl max-w-2xl mx-auto mb-4">
              Next.js, SEO-optimized, Contentful CMS. Deployed in 48 hours. One ceramic coating job pays for the whole thing.
            </p>
            <p className="text-[#a78bfa] font-semibold text-sm mb-10">$597 one-time. No monthly fee. No contract.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://www.detailprocrm.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-semibold px-10 py-4 rounded-full transition-colors text-lg"
              >
                Get My Website — $597
              </a>
            </div>
            <div className="max-w-md mx-auto">
              <MiniLeadForm
                source="website_hero"
                headline="See example detailing sites first →"
                buttonText="Send Examples"
                successMessage="Check your inbox — examples are on the way."
              />
            </div>
          </div>
        </section>

        {/* Pain */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-12">
              Your website is costing you bookings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Wix and Squarespace hurt credibility',
                  desc: 'Customers judge the quality of your detailing by the quality of your website. A slow, template-looking site signals amateur — before they even see your work.',
                },
                {
                  title: 'Slow sites lose jobs silently',
                  desc: 'If your page takes over 3 seconds to load, most visitors leave. They don't call, they don't text — they just bounce to your competitor who loaded faster.',
                },
                {
                  title: 'Agency websites cost too much',
                  desc: '$1,900–$3,200 setup + $199–$349/month from detailing-specific agencies. That's $5,000+ in the first year for a site that looks like every other ceramic shop.',
                },
              ].map((p) => (
                <div key={p.title} className="bg-white/3 border border-white/8 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 min-h-[40px] bg-red-500/60 rounded-full shrink-0 mt-1" />
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

        {/* What's included */}
        <section className="py-20 px-4 bg-white/2 border-y border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">Everything included</p>
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-12">What you get for $597</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {included.map((i) => (
                <div key={i.title} className="bg-gradient-to-br from-[#5e25fa]/10 to-[#280aa5]/5 border border-[#5e25fa]/20 rounded-2xl p-6">
                  <h3 className="font-bold text-[#e7e6ee] mb-2 text-sm">{i.title}</h3>
                  <p className="text-[#a3a3a3] text-sm leading-relaxed">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#e7e6ee] text-center mb-12">How we compare</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-[#a3a3a3] font-medium"></th>
                    <th className="py-3 px-4 text-[#a78bfa] font-bold">DetailPro</th>
                    <th className="py-3 px-4 text-[#a3a3a3] font-medium">Detailing Agency</th>
                    <th className="py-3 px-4 text-[#a3a3a3] font-medium">DIY (Wix)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Setup cost', '$597', '$1,900–$3,200', 'Free–$300'],
                    ['Monthly fee', 'None', '$199–$349/mo', '$17–$35/mo'],
                    ['Year 1 total', '$597', '$4,300–$7,400', '$200–$720'],
                    ['Build time', '48 hours', '4–8 weeks', '2–4 weeks (DIY)'],
                    ['Page speed', '⚡ <1 second', 'Varies', '🐢 2–5 seconds'],
                    ['SEO setup', '✓ Included', 'Often extra', '✗ None'],
                    ['CMS included', '✓ Contentful', 'Varies', '✓ Basic'],
                    ['You own it', '✓ Always', '✓ Usually', '✓ Always'],
                  ].map(([label, dp, agency, diy]) => (
                    <tr key={label} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                      <td className="py-3 px-4 text-[#a3a3a3]">{label}</td>
                      <td className="py-3 px-4 text-[#e7e6ee] font-semibold text-center">{dp}</td>
                      <td className="py-3 px-4 text-[#a3a3a3] text-center">{agency}</td>
                      <td className="py-3 px-4 text-[#a3a3a3] text-center">{diy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ROI frame */}
        <section className="py-16 px-4 bg-[#050119]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-5xl font-black text-[#a78bfa] mb-4">"One ceramic coating job<br className="hidden md:block" /> pays for the whole site."</p>
            <p className="text-[#a3a3a3]">At $597, the cost equals one mid-tier ceramic coating appointment. After that, every booking the site generates is pure upside.</p>
          </div>
        </section>

        {/* Examples form */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#e7e6ee] mb-3">See example builds before you decide</h2>
            <p className="text-[#a3a3a3] text-sm mb-8">Drop your email and we'll send you 3–5 examples of sites we've built for other detailers.</p>
            <MiniLeadForm
              source="website_examples"
              headline=""
              buttonText="Send Me Examples"
              successMessage="Examples are on the way. Check your inbox."
            />
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
              Ready to have a website that books jobs?
            </h2>
            <p className="text-[#a3a3a3] mb-8">$597 one-time. Live in 48 hours.</p>
            <a
              href="https://www.detailprocrm.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-semibold px-10 py-4 rounded-full transition-colors text-lg mb-4"
            >
              Get My Website — $597
            </a>
            <p className="text-[#a3a3a3] text-sm">No monthly fees. No contract. No waiting 6 weeks.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
