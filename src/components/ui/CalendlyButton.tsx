'use client';
import { openCalendly } from '@/lib/calendly';

interface CalendlyButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function CalendlyButton({ children, className }: CalendlyButtonProps) {
  return (
    <button
      onClick={(e) => { e.preventDefault(); openCalendly(); }}
      className={className}
    >
      {children}
    </button>
  );
}
