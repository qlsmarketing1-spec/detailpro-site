'use client';
import { openCalendly } from '@/lib/calendly';

interface CalendlyButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function CalendlyButton({ children, className }: CalendlyButtonProps) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    openCalendly();
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'calendly_open');
    }
  }

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
