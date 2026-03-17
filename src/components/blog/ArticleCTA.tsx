import CalendlyButton from '@/components/ui/CalendlyButton';

export default function ArticleCTA() {
  return (
    <div className="mt-16 bg-gradient-to-br from-[#5e25fa]/20 to-[#280aa5]/10 border border-[#5e25fa]/30 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-[#e7e6ee] mb-3">Want to implement these systems?</h3>
      <p className="text-[#a3a3a3] mb-6">
        Our growth platform helps shops scale from $10k to $30k+ per month with automated follow-ups and high-intent ads.
      </p>
      <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4a1db8] text-white font-semibold px-8 py-3 rounded-full transition-colors">
        Book A Demo
      </CalendlyButton>
    </div>
  );
}
