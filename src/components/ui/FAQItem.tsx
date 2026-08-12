'use client';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  theme?: 'dark' | 'light';
}

export default function FAQItem({ question, answer, theme = 'dark' }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const isLight = theme === 'light';

  return (
    <div className={`border rounded-2xl overflow-hidden ${isLight ? 'border-black/10' : 'border-white/10'}`}>
      <button
        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isLight ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}
        onClick={() => setOpen(!open)}
      >
        <span className={`font-semibold pr-4 ${isLight ? 'text-[#050119]' : 'text-[#e7e6ee]'}`}>{question}</span>
        <span className={`text-[#5e25fa] text-2xl font-light flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className={`px-6 pb-6 leading-relaxed ${isLight ? 'text-[#6b6b76]' : 'text-[#a3a3a3]'}`}>
          {answer}
        </div>
      )}
    </div>
  );
}
