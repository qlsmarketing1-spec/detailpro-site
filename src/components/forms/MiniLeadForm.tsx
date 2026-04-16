'use client';

import { useState } from 'react';
import type { FormState } from '@/lib/types';
import FormStatus from '@/components/shared/FormStatus';

interface MiniLeadFormProps {
  source: string;
  headline?: string;
  buttonText?: string;
  showName?: boolean;
  successMessage?: string;
}

export default function MiniLeadForm({
  source,
  headline = 'Get the 5-minute lead follow-up SOP — free',
  buttonText = 'Send It Free',
  showName = false,
  successMessage = "You're in. Check your inbox.",
}: MiniLeadFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (formState === 'loading' || formState === 'success') return;
    setFormState('loading');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: showName ? name : undefined, source }),
      });
      if (res.ok) {
        setFormState('success');
        if (typeof window !== 'undefined') {
          if ((window as any).fbq) {
            (window as any).fbq('track', 'Lead', { content_name: source });
          }
          if ((window as any).gtag) {
            (window as any).gtag('event', 'generate_lead', { source });
          }
        }
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

  if (formState === 'success') {
    return (
      <div className="flex items-center gap-2 text-green-400 text-sm py-2">
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        {successMessage}
      </div>
    );
  }

  return (
    <div>
      {headline && (
        <p className="text-[#e7e6ee]/70 text-sm mb-3">{headline}</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        {showName && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name"
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60"
          />
        )}
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your best email"
          className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60"
        />
        <button
          type="submit"
          disabled={formState === 'loading'}
          className="bg-[#5e25fa] hover:bg-[#4d1fe0] disabled:opacity-60 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
        >
          {formState === 'loading' ? 'Sending...' : buttonText}
        </button>
      </form>
      {formState === 'error' && (
        <FormStatus state="error" />
      )}
    </div>
  );
}
