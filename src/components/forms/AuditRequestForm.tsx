'use client';

import { useState } from 'react';
import type { FormState } from '@/lib/types';
import FormStatus from '@/components/shared/FormStatus';

interface AuditRequestFormProps {
  source?: string;
  context?: 'homepage' | 'ads-page';
}

export default function AuditRequestForm({
  source = 'audit_request',
  context = 'homepage',
}: AuditRequestFormProps) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');

  const headline =
    context === 'ads-page'
      ? 'Not sure if ads are right for you?'
      : "Let's take a look at your setup";
  const subhead =
    context === 'ads-page'
      ? "Drop your info and I'll record a personal Loom video reviewing your shop, your market, and whether ads make sense for you right now."
      : "Share your info and we'll review what you've got. If there's a clear opportunity, we'll reach out directly.";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (formState === 'loading' || formState === 'success') return;
    setFormState('loading');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: firstName, phone, websiteUrl, source }),
      });
      setFormState(res.ok ? 'success' : 'error');
    } catch {
      setFormState('error');
    }
  }

  if (formState === 'success') {
    return (
      <div className="bg-white/4 border border-white/8 rounded-3xl p-8 text-center">
        <div className="w-12 h-12 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="h-6 w-6 text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#e7e6ee] mb-2">Got it — we'll be in touch.</h3>
        <p className="text-[#a3a3a3] text-sm">
          We'll take a look at your website and reach out personally within a day or two.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/4 border border-white/8 rounded-3xl p-8">
      <h3 className="text-2xl font-bold text-[#e7e6ee] mb-2">{headline}</h3>
      <p className="text-[#a3a3a3] text-sm mb-6">{subhead}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your best email"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone (optional)"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60"
          />
          <input
            type="text"
            required
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            placeholder="Your website URL"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60"
          />
        </div>
        <button
          type="submit"
          disabled={formState === 'loading'}
          className="w-full bg-[#5e25fa] hover:bg-[#4d1fe0] disabled:opacity-60 text-white font-semibold py-3 rounded-full transition-colors mt-1"
        >
          {formState === 'loading' ? 'Sending...' : context === 'ads-page' ? 'Request My Free Ads Review' : 'Send My Info'}
        </button>
        <FormStatus state={formState} />
        <p className="text-[#a3a3a3] text-xs text-center">Free. No pitch, no pressure — just a real look at your business.</p>
      </form>
    </div>
  );
}
