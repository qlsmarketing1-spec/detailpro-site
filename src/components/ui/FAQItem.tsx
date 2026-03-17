'use client';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-[#e7e6ee] pr-4">{question}</span>
        <span className={`text-[#5e25fa] text-2xl font-light flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-[#a3a3a3] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
