'use client';

import MiniLeadForm from '@/components/forms/MiniLeadForm';
import CalendlyButton from '@/components/ui/CalendlyButton';

export default function ArticleCTA() {
  return (
    <div className="mt-16 bg-gradient-to-br from-[#5e25fa]/20 to-[#280aa5]/10 border border-[#5e25fa]/30 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-[#e7e6ee] mb-2">Want to implement these systems?</h3>
      <p className="text-[#a3a3a3] mb-6">
        Get the exact 5-minute lead follow-up SOP we give every new client — free.
      </p>
      <MiniLeadForm
        source="blog_article_cta"
        headline=""
        buttonText="Send It Free"
        successMessage="Check your inbox — it's on the way."
      />
      <p className="text-[#a3a3a3] text-sm mt-4">
        Rather talk it through?{' '}
        <CalendlyButton className="text-[#e7e6ee]/70 underline underline-offset-2 hover:text-[#e7e6ee] transition-colors bg-transparent p-0 font-normal">
          Book a free demo
        </CalendlyButton>
      </p>
    </div>
  );
}
