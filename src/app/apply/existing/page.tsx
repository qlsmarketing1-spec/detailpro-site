'use client';

import { useState } from 'react';
import QuizShell from '@/components/quiz/QuizShell';
import QuizOptionList, { QuizOption } from '@/components/quiz/QuizOptionList';
import { openCalendly } from '@/lib/calendly';

interface QuizQuestion {
  id: string;
  section: string;
  text: string;
  highlight?: boolean;
  type: 'single' | 'multi';
  options: QuizOption[];
}

const TRADE_LABELS: Record<string, string> = {
  plumbing: 'plumbing', hvac: 'HVAC', electrical: 'electrical', roofing: 'roofing',
  landscaping: 'landscaping', detailing: 'auto detailing', painting: 'painting',
  cleaning: 'cleaning', pest: 'pest control', handyman: 'handyman', other: 'service',
};

const QUESTIONS: QuizQuestion[] = [
  { id: 'e1', section: 'Your Business', text: 'What does your business do?', type: 'single', options: [
    { value: 'plumbing', label: 'Plumbing' },
    { value: 'hvac', label: 'HVAC' },
    { value: 'electrical', label: 'Electrical' },
    { value: 'roofing', label: 'Roofing' },
    { value: 'landscaping', label: 'Landscaping / Lawn Care' },
    { value: 'detailing', label: 'Auto Detailing' },
    { value: 'painting', label: 'Painting' },
    { value: 'cleaning', label: 'Cleaning' },
    { value: 'pest', label: 'Pest Control' },
    { value: 'handyman', label: 'Handyman Services' },
    { value: 'other', label: 'Other' },
  ]},
  { id: 'e2', section: 'Your Business', text: 'What is your current monthly recurring revenue (MRR)?', type: 'single', options: [
    { value: 'a', label: '$0–$5k/mo' },
    { value: 'b', label: '$5k–$15k/mo' },
    { value: 'c', label: '$15k–$50k/mo' },
    { value: 'd', label: '$50k–$250k/mo' },
    { value: 'e', label: '$250k+/mo' },
  ]},
  { id: 'e3', section: 'Your Business', text: 'How long have you been in business?', type: 'single', options: [
    { value: 'under1', label: 'Under 1 year' },
    { value: '1to3', label: '1–3 years' },
    { value: '3to10', label: '3–10 years' },
    { value: '10to20', label: '10–20 years' },
    { value: '20plus', label: '20+ years' },
  ]},
  { id: 'e4', section: 'Your Business', text: 'How many people work in the business today, including you?', type: 'single', options: [
    { value: 'solo', label: 'Just me' },
    { value: 'small', label: '2–5 people' },
    { value: 'mid', label: '6–15 people' },
    { value: 'large', label: '16+ people' },
  ]},
  { id: 'e5', section: 'Current Systems', text: 'How is the day-to-day of your business currently run?', type: 'single', options: [
    { value: 'paper', label: 'Paper / spreadsheets' },
    { value: 'crm_unset', label: 'A CRM I never fully set up' },
    { value: 'crm_ok', label: 'A CRM that works okay' },
    { value: 'systemized', label: 'Fully systemized already' },
  ]},
  { id: 'e6', section: 'Current Systems', text: 'Where do most new customers come from right now?', type: 'single', options: [
    { value: 'referrals', label: 'Referrals / word of mouth' },
    { value: 'seo', label: 'Google / SEO' },
    { value: 'ads', label: 'Paid ads' },
    { value: 'social', label: 'Social media' },
    { value: 'unsure', label: 'Honestly not sure' },
  ]},
  { id: 'e7', section: 'Current Systems', text: 'When a new lead comes in, what happens?', type: 'single', options: [
    { value: 'me', label: 'I respond myself, right away' },
    { value: 'sits', label: 'It sits until I get to it' },
    { value: 'staff', label: 'Staff handles it' },
    { value: 'automated', label: "It's automated already" },
  ]},
  { id: 'e8', section: 'Current Systems', text: 'Do you have a website today?', type: 'single', options: [
    { value: 'no', label: 'No' },
    { value: 'weak', label: "Yes, but it doesn't really bring in leads" },
    { value: 'strong', label: 'Yes, and it converts well' },
  ]},
  { id: 'e9', section: 'The Vacation Test', highlight: true, text: 'If you took a 2-week vacation with your phone off, what happens to the business?', type: 'single', options: [
    { value: 'runs', label: 'Runs fine without me' },
    { value: 'slows', label: 'Slows down but survives' },
    { value: 'stops', label: 'Basically stops' },
  ]},
  { id: 'e10', section: "Where You're Headed", text: "What's the end goal for this business?", type: 'single', options: [
    { value: 'income', label: 'Grow it as my main income' },
    { value: 'sell', label: 'Build it to sell' },
    { value: 'family', label: 'Hand it down to family' },
    { value: 'steady', label: 'Keep it steady, not chasing growth' },
  ]},
  { id: 'e11', section: "Where You're Headed", text: 'How much would you be able/willing to invest to get this fully systemized?', type: 'single', options: [
    { value: 't0', label: 'Under $2,500' },
    { value: 't1', label: '$2,500–$5,000' },
    { value: 't2', label: '$5,000–$10,000' },
    { value: 't3', label: '$10,000+' },
  ]},
  { id: 'e12', section: 'Almost There', text: "What's kept you from building these systems already?", type: 'multi', options: [
    { value: 'time', label: 'Too busy running the business day-to-day' },
    { value: 'tried', label: "Tried before, it didn't stick" },
    { value: 'agency', label: "Tried an agency or tool that didn't work out" },
    { value: 'cost', label: "Wasn't sure it was worth the cost" },
    { value: 'systems', label: "Didn't know what systems I actually needed" },
    { value: 'none', label: 'Nothing really — just needed the right partner', exclusive: true },
  ]},
  { id: 'e13', section: 'Last Question', text: 'If we built and ran this entire system for you — website, local search, ads, and follow-up automation — how interested would you be?', type: 'single', options: [
    { value: 'extreme', label: 'Extremely interested, tell me more' },
    { value: 'interested', label: 'Interested, but I have questions' },
    { value: 'unsure', label: 'Not sure yet, I want to learn more first' },
  ]},
];

const EXISTING_OBJECTION_COPY: Record<string, string> = {
  time: "You said you're too busy running the business to build this yourself — that's exactly why we build and run it for you.",
  tried: "You tried building this before and it didn't stick — this isn't a DIY tool, it's a done-for-you system.",
  agency: "An agency or tool let you down before — we're not a vendor you have to manage, we're a partner accountable to results.",
  cost: "Cost held you back before — we're structured so our incentive is tied to your growth, not a flat fee regardless of results.",
  systems: 'You weren\'t sure what systems you actually needed — website, local search, ads, and follow-up automation, all built together.',
};

type Answers = Record<string, string | string[] | undefined>;
type Screen = 'question' | 'contact' | 'loading' | 'confirmation';

export default function ApplyExistingPage() {
  const [screen, setScreen] = useState<Screen>('question');
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState({ name: '', email: '', phone: '', why: '' });
  const [ticketNumber] = useState(() => 'SP-' + Math.floor(100000 + Math.random() * 899999));
  const [submitError, setSubmitError] = useState(false);

  const TOTAL_STEPS = QUESTIONS.length;

  function handleSelect(q: QuizQuestion, opt: QuizOption) {
    if (q.type === 'single') {
      setAnswers((prev) => ({ ...prev, [q.id]: opt.value }));
      setTimeout(advance, 220);
    } else {
      setAnswers((prev) => {
        const cur = (prev[q.id] as string[]) || [];
        let next: string[];
        if (opt.exclusive) {
          next = cur.includes(opt.value) ? [] : [opt.value];
        } else if (cur.includes(opt.value)) {
          next = cur.filter((v) => v !== opt.value);
        } else {
          next = [...cur.filter((v) => { const o = q.options.find((o) => o.value === v); return !(o && o.exclusive); }), opt.value];
        }
        return { ...prev, [q.id]: next };
      });
    }
  }

  function advance() {
    setQIndex((i) => {
      if (i < TOTAL_STEPS - 1) return i + 1;
      setScreen('contact');
      return i;
    });
  }

  function back() {
    if (qIndex > 0) setQIndex((i) => i - 1);
  }

  async function submitLead() {
    setSubmitError(false);
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ticket: ticketNumber,
          path: 'existing',
          contact,
          answers: { ...answers, why: contact.why },
          email: contact.email,
          name: contact.name,
          phone: contact.phone,
        }),
      });
      if (!res.ok) setSubmitError(true);
    } catch {
      setSubmitError(true);
    }
  }

  function handleContactSubmit() {
    if (!contact.name || !contact.email) return;
    submitLead();
    setScreen('loading');
    setTimeout(() => setScreen('confirmation'), 1200);
  }

  const ruler = screen === 'question' ? { section: QUESTIONS[qIndex].section, index: qIndex, total: TOTAL_STEPS } : null;

  return (
    <QuizShell ticketNumber={ticketNumber} ruler={ruler}>
      {screen === 'question' && (
        <QuestionScreen
          question={QUESTIONS[qIndex]}
          answer={answers[QUESTIONS[qIndex].id]}
          isFirst={qIndex === 0}
          isLast={qIndex === TOTAL_STEPS - 1}
          onSelect={(opt) => handleSelect(QUESTIONS[qIndex], opt)}
          onBack={back}
          onNext={advance}
        />
      )}
      {screen === 'contact' && (
        <ContactScreen contact={contact} setContact={setContact} onSubmit={handleContactSubmit} submitError={submitError} />
      )}
      {screen === 'loading' && <LoadingScreen />}
      {screen === 'confirmation' && <ConfirmationScreen answers={answers} name={contact.name} />}
    </QuizShell>
  );
}

function QuestionScreen({
  question, answer, isFirst, isLast, onSelect, onBack, onNext,
}: {
  question: QuizQuestion;
  answer: string | string[] | undefined;
  isFirst: boolean;
  isLast: boolean;
  onSelect: (opt: QuizOption) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const isSelected = (value: string) => (question.type === 'single' ? answer === value : ((answer as string[]) || []).includes(value));
  const hasSelection = question.type === 'multi' && Array.isArray(answer) && answer.length > 0;

  return (
    <div>
      <div className="qz-eyebrow">{question.section}</div>
      <h2>{question.text}</h2>
      <QuizOptionList type={question.type} options={question.options} isSelected={isSelected} onToggle={onSelect} />
      <div className="qz-btn-row">
        {!isFirst && (
          <button className="qz-btn qz-btn-ghost" onClick={onBack}>← Back</button>
        )}
        {question.type === 'multi' && (
          <button className="qz-btn qz-btn-primary" disabled={!hasSelection} onClick={onNext}>
            {isLast ? 'Continue →' : 'Next →'}
          </button>
        )}
      </div>
    </div>
  );
}

function ContactScreen({
  contact, setContact, onSubmit, submitError,
}: {
  contact: { name: string; email: string; phone: string; why: string };
  setContact: React.Dispatch<React.SetStateAction<{ name: string; email: string; phone: string; why: string }>>;
  onSubmit: () => void;
  submitError: boolean;
}) {
  const canSubmit = contact.name.trim() && contact.email.trim();
  return (
    <div>
      <div className="qz-eyebrow">Almost Done</div>
      <h2>Where should we send your assessment?</h2>
      <p>Enter your info and we&apos;ll follow up personally to book your strategy call.</p>

      <div className="qz-field">
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" value={contact.name} onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))} />
      </div>
      <div className="qz-field">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" value={contact.email} onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))} />
      </div>
      <div className="qz-field">
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" type="tel" value={contact.phone} onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))} />
      </div>
      <div className="qz-field">
        <label htmlFor="why">Why are you interested in Service Pro? (optional)</label>
        <textarea id="why" value={contact.why} onChange={(e) => setContact((c) => ({ ...c, why: e.target.value }))} />
      </div>

      <button className="qz-btn qz-btn-primary qz-btn-block qz-btn-lg" style={{ marginTop: 8 }} onClick={onSubmit}>
        {canSubmit ? 'See My Results →' : 'Please fill in name + email'}
      </button>
      {submitError && <p className="qz-sub-note" style={{ marginTop: 10 }}>Something went wrong saving your info — you can still book below.</p>}
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="qz-loading-wrap">
      <div className="qz-stamp-spin" />
      <h3>Reviewing your answers…</h3>
      <p>Lining up where Service Pro plugs into your business.</p>
    </div>
  );
}

function ConfirmationScreen({ answers, name }: { answers: Answers; name: string }) {
  const trade = TRADE_LABELS[answers.e1 as string] || 'service';
  const interest = answers.e13;
  const objSelected = (answers.e12 as string[]) || [];
  const vacationAnswer = answers.e9;

  let headline = "Let's map out your system.";
  let body = `We'll walk through exactly how Service Pro plugs into your ${trade} business and where the biggest gaps are.`;
  if (interest === 'extreme') {
    headline = "You're ready. Let's build it.";
    body = `Book your free strategy call — we'll map out exactly how Service Pro plugs into your ${trade} business.`;
  } else if (interest === 'unsure') {
    headline = "Let's talk through your questions.";
    body = 'No pressure — book a free call and we\'ll answer everything before you decide on anything.';
  }

  return (
    <div>
      <div className="qz-stamp">Reviewed</div>
      <h1>{name ? `You're all set, ${name.split(' ')[0]}.` : "You're all set."}</h1>

      {vacationAnswer === 'stops' && (
        <div className="qz-license-note">
          You told us the business basically stops without you — that&apos;s exactly the kind of
          owner-dependency Service Pro is built to remove.
        </div>
      )}

      {objSelected.length > 0 && (
        <>
          <h3>What This Solves For You</h3>
          <ul className="qz-why-list">
            {objSelected.map((v) => EXISTING_OBJECTION_COPY[v] && (
              <li key={v}><span className="qz-check">✓</span><span>{EXISTING_OBJECTION_COPY[v]}</span></li>
            ))}
          </ul>
        </>
      )}

      <hr className="qz-section-divider" />

      <div className="qz-cta-block">
        <h2>{headline}</h2>
        <p>{body}</p>
        <button className="qz-btn qz-btn-primary qz-btn-lg" style={{ display: 'inline-block' }} onClick={() => openCalendly()}>
          Book My Free Strategy Call →
        </button>
      </div>
    </div>
  );
}
