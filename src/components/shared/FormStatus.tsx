'use client';

import type { FormState } from '@/lib/types';

interface FormStatusProps {
  state: FormState;
  successMessage?: string;
  errorMessage?: string;
}

export default function FormStatus({
  state,
  successMessage = 'You\'re in. Check your inbox.',
  errorMessage = 'Something went wrong. Please try again.',
}: FormStatusProps) {
  if (state === 'loading') {
    return (
      <div className="flex items-center gap-2 text-[#a3a3a3] text-sm">
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
        Sending...
      </div>
    );
  }

  if (state === 'success') {
    return (
      <div className="flex items-center gap-2 text-green-400 text-sm">
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        {successMessage}
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className="flex items-center gap-2 text-red-400 text-sm">
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        {errorMessage}
      </div>
    );
  }

  return null;
}
