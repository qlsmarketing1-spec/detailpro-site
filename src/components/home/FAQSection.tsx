import FAQItem from '@/components/ui/FAQItem';
import { HOME_FAQS } from '@/data/faqs';

export default function FAQSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#050119]">
            Owners ask us&hellip;
          </h2>
        </div>
        <div className="space-y-3">
          {HOME_FAQS.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} theme="light" />
          ))}
        </div>
      </div>
    </section>
  );
}
