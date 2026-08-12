'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QuizShell from '@/components/quiz/QuizShell';
import QuizOptionList, { QuizOption } from '@/components/quiz/QuizOptionList';
import { openCalendly } from '@/lib/calendly';

/* ================================================================
   QUESTION BANK — ported from the original quiz funnel, unchanged.
   ================================================================ */
interface QuizQuestion {
  id: string;
  section: string;
  text: string;
  sub?: string;
  highlight?: boolean;
  type: 'single' | 'multi';
  options: QuizOption[];
}

const QUESTIONS: QuizQuestion[] = [
  { id: 'q1', section: 'Working Style', text: 'When you picture your ideal workday, which sounds most satisfying?', type: 'single', options: [
    { value: 'outdoor', label: 'Being outside, physically active, seeing visible results' },
    { value: 'detail', label: 'Working with your hands on detailed, precise tasks' },
    { value: 'people', label: 'Talking to people, building relationships, closing deals' },
    { value: 'ops', label: 'Managing systems and making sure everything runs smoothly' },
  ]},
  { id: 'q2', section: 'Working Style', text: 'Which of these feels more like "you"?', type: 'single', options: [
    { value: 'solo', label: 'I like working alone or with a small, tight crew' },
    { value: 'team', label: 'I like the idea of eventually managing a team of employees' },
  ]},
  { id: 'q3', section: 'Working Style', text: 'How do you feel about physical labor?', type: 'single', options: [
    { value: 'love', label: 'Love it — I want to be moving and working with my body' },
    { value: 'some', label: "I'm fine with some, but I don't want it to be the whole job" },
    { value: 'avoid', label: "I'd rather avoid physical strain if possible" },
  ]},
  { id: 'q4', section: 'Your Skills', text: 'Have you ever done any of the following, even informally?', type: 'multi', options: [
    { value: 'clean', label: 'Cleaning, organizing, or detail work' },
    { value: 'yard', label: 'Yard work, gardening, or landscaping' },
    { value: 'paint', label: 'Painting, staining, or home improvement projects' },
    { value: 'repair', label: 'Repairing or fixing things (appliances, cars, equipment)' },
    { value: 'sales', label: 'Sales, customer service, or client-facing work' },
    { value: 'manage', label: 'Managing a team, scheduling, or operations' },
    { value: 'none', label: "None of the above — I'm starting fresh", exclusive: true },
  ]},
  { id: 'q4b', section: 'Your Skills', highlight: true, text: 'Have you ever worked professionally — even part-time, seasonal, or as a helper — in any of these trades?', sub: "Answer honestly even if it was a while ago. This one matters more than you'd think.", type: 'multi', options: [
    { value: 'roofing', label: 'Roofing' },
    { value: 'hvac', label: 'HVAC' },
    { value: 'electrical', label: 'Electrical' },
    { value: 'plumbing', label: 'Plumbing' },
    { value: 'carpentry', label: 'Carpentry / framing / general construction' },
    { value: 'flooring', label: 'Flooring installation' },
    { value: 'detailing', label: 'Auto detailing / auto body' },
    { value: 'landscape_pro', label: 'Landscaping or lawn care, on a professional crew' },
    { value: 'paint_pro', label: 'Painting, on a professional crew' },
    { value: 'none', label: 'None of the above', exclusive: true },
  ]},
  { id: 'q5', section: 'Your Skills', text: 'How comfortable are you with talking to strangers, cold outreach, or asking someone for the sale?', type: 'single', options: [
    { value: 'comfortable', label: 'Very comfortable — I actually enjoy it' },
    { value: 'ok', label: "I can do it, but it's not natural for me" },
    { value: 'prefer_leads', label: "I'd rather the business generate leads for me" },
  ]},
  { id: 'q6', section: 'Your Why', text: "What's pulling you toward starting a business right now?", type: 'single', options: [
    { value: 'escape', label: 'I want to escape my current job' },
    { value: 'income', label: 'I want more financial freedom / extra income' },
    { value: 'own', label: 'I want to build something I own long-term' },
    { value: 'control', label: 'I want more control over my time and schedule' },
  ]},
  { id: 'q7', section: 'Your Why', text: 'In 3 years, what does success look like to you?', type: 'single', options: [
    { value: 'replace', label: 'Replacing my current income and having freedom' },
    { value: 'simple', label: 'Running a small, simple, low-stress operation' },
    { value: 'company', label: 'Building a real company with employees and systems' },
    { value: 'sellable', label: 'Building something I could eventually sell' },
  ]},
  { id: 'q8', section: 'Reality Check', text: 'How much time can you realistically commit per week right now?', type: 'single', options: [
    { value: 'under10', label: 'Nights/weekends only (under 10 hrs)' },
    { value: 'parttime', label: 'Part-time (10–25 hrs)' },
    { value: 'near_full', label: 'Nearly full-time (25–40 hrs)' },
    { value: 'full', label: "I'm ready to go all-in full-time" },
  ]},
  { id: 'q9', section: 'Reality Check', text: 'How much are you able/willing to invest to get this business fully set up and running?', type: 'single', options: [
    { value: 't0', label: 'Under $2,500' },
    { value: 't1', label: '$2,500–$5,000' },
    { value: 't2', label: '$5,000–$10,000' },
    { value: 't3', label: '$10,000+' },
  ]},
  { id: 'q10', section: 'Reality Check', text: "What's your target monthly income from this business in year one?", type: 'single', options: [
    { value: 'side', label: '$2,000–$5,000/month (side income)' },
    { value: 'replace_job', label: '$5,000–$10,000/month (replace a job)' },
    { value: 'wealth', label: '$10,000+/month (build wealth)' },
  ]},
  { id: 'q11', section: 'Reality Check', text: 'Do you already have any savings, credit access, or funding set aside for this?', type: 'single', options: [
    { value: 'funded', label: 'Yes, fully funded and ready to go' },
    { value: 'some', label: "Some — I'd need to budget carefully" },
    { value: 'not_yet', label: "Not yet — I'd need to save up or find financing" },
  ]},
  { id: 'q12', section: 'Deal-Breakers', text: "Is there anything you know for sure you DON'T want to do?", type: 'multi', options: [
    { value: 'physical', label: 'Physical labor' },
    { value: 'phone', label: 'Talking to customers on the phone' },
    { value: 'weekends', label: 'Working weekends' },
    { value: 'outdoors', label: 'Working outdoors in bad weather' },
    { value: 'messes', label: 'Cleaning up messes (trash, waste, grime)' },
    { value: 'employees', label: 'Managing employees' },
    { value: 'none', label: "None — I'm open to anything", exclusive: true },
  ]},
  { id: 'q13', section: 'Almost There', text: "What's stopped you from starting a business until now?", type: 'multi', options: [
    { value: 'which', label: "I don't know which business is right for me" },
    { value: 'customers', label: "I don't know how to get customers" },
    { value: 'systems', label: "I don't know what systems/tools I need" },
    { value: 'time', label: "I don't have time to figure it all out" },
    { value: 'burned', label: "I've been burned by a course or coaching program before" },
    { value: 'push', label: 'I just needed a push' },
  ]},
  { id: 'q14', section: 'Last Question', text: 'If we could build and set up the entire business for you — website, CRM, ads, payments, scheduling, everything — so you just show up and run it, how interested would you be?', type: 'single', options: [
    { value: 'extreme', label: 'Extremely interested, tell me more' },
    { value: 'interested', label: 'Interested, but I have questions' },
    { value: 'unsure', label: 'Not sure yet, I want to learn more first' },
  ]},
];

/* ================================================================
   BUSINESS DATA — ported from the original quiz funnel, unchanged.
   ================================================================ */
interface Business {
  name: string;
  tagline: string;
  arr: string;
  budgetTier: number;
  physical: boolean;
  timeFlex: boolean;
  dislikeElim: string[];
  tradeGate: string | null;
  licensed?: boolean;
}

const BUSINESSES: Record<string, Business> = {
  pw: { name: 'Pressure Washing', tagline: 'Blast years of grime off driveways, siding, and fleets — fast to learn, high margin.', arr: '$60K–150K solo · $300K–800K scaled', budgetTier: 1, physical: true, timeFlex: true, dislikeElim: ['physical', 'outdoors'], tradeGate: null },
  wc: { name: 'Window Cleaning', tagline: 'Recurring residential and commercial routes that build real repeat revenue.', arr: '$50K–120K solo · $250K–600K scaled', budgetTier: 0, physical: false, timeFlex: true, dislikeElim: ['outdoors'], tradeGate: null },
  jr: { name: 'Junk Removal', tagline: 'Show up with a truck, haul it away, get paid the same day.', arr: '$80K–180K solo · $400K–1M+ scaled', budgetTier: 2, physical: true, timeFlex: true, dislikeElim: ['physical', 'messes', 'outdoors'], tradeGate: null },
  md: { name: 'Mobile Detailing', tagline: 'Bring the shine to driveways, offices, and dealer lots.', arr: '$50K–130K solo · $250K–600K scaled', budgetTier: 1, physical: false, timeFlex: true, dislikeElim: [], tradeGate: null },
  pwr: { name: 'Pet Waste Removal', tagline: 'Subscription routes that practically run themselves.', arr: '$40K–90K solo · $150K–350K scaled', budgetTier: 0, physical: false, timeFlex: true, dislikeElim: ['messes'], tradeGate: null },
  lc: { name: 'Lawn Care', tagline: 'The highest recurring-revenue ceiling on this list, once you build route density.', arr: '$80K–200K solo · $400K–1M+ scaled', budgetTier: 2, physical: true, timeFlex: false, dislikeElim: ['physical', 'outdoors'], tradeGate: null },
  hc: { name: 'House Cleaning', tagline: 'Recurring, in-demand, and built to scale with hires.', arr: '$70K–180K solo · $350K–900K scaled', budgetTier: 1, physical: false, timeFlex: false, dislikeElim: ['messes'], tradeGate: null },
  pc: { name: 'Pool Cleaning', tagline: 'Steady monthly recurring revenue in the right climate.', arr: '$60K–150K solo · $300K–700K scaled', budgetTier: 2, physical: false, timeFlex: false, dislikeElim: [], tradeGate: null },
  pt: { name: 'Painting', tagline: 'The highest single-ticket business on this list.', arr: '$100K–250K solo · $500K–1.5M scaled', budgetTier: 3, physical: true, timeFlex: false, dislikeElim: ['physical'], tradeGate: null },
  hm: { name: 'Handyman Services', tagline: 'Broad, in-demand work with strong repeat-customer potential.', arr: '$70K–160K solo · $250K–600K scaled', budgetTier: 3, physical: true, timeFlex: false, dislikeElim: ['physical'], tradeGate: null },
  rf: { name: 'Roofing Repair', tagline: 'Your background means you already have the hardest part covered — we build the business around it.', arr: '$150K–400K solo · $700K–2M+ scaled', budgetTier: 2, physical: true, timeFlex: false, dislikeElim: ['physical'], tradeGate: 'roofing', licensed: true },
  hvac: { name: 'HVAC Maintenance & Light Repair', tagline: 'A trade you already know, matched with the business systems you never had.', arr: '$130K–350K solo · $600K–1.8M scaled', budgetTier: 2, physical: true, timeFlex: false, dislikeElim: ['physical'], tradeGate: 'hvac', licensed: true },
  el: { name: 'Electrical (Handyman Scope)', tagline: 'Turn real electrical experience into a business you own outright.', arr: '$120K–300K solo · $500K–1.5M scaled', budgetTier: 2, physical: false, timeFlex: false, dislikeElim: [], tradeGate: 'electrical', licensed: true },
  pl: { name: 'Plumbing (Drain & Small Repair)', tagline: 'Skip the years of building a client base from scratch — you already know the trade.', arr: '$120K–300K solo · $550K–1.6M scaled', budgetTier: 2, physical: true, timeFlex: false, dislikeElim: ['physical'], tradeGate: 'plumbing', licensed: true },
};

const BUDGET_TIER_INDEX: Record<string, number> = { t0: 0, t1: 1, t2: 2, t3: 3 };

type Answers = Record<string, string | string[] | undefined>;

/* ================================================================
   SCORING RULES — ported from the original quiz funnel, unchanged.
   ================================================================ */
function scoreAll(answers: Answers) {
  const scores: Record<string, number> = {};
  Object.keys(BUSINESSES).forEach((k) => { scores[k] = 0; });
  const eliminated = new Set<string>();

  const budgetTier = BUDGET_TIER_INDEX[answers.q9 as string];
  Object.entries(BUSINESSES).forEach(([k, b]) => {
    if (budgetTier < b.budgetTier) eliminated.add(k);
  });

  if (answers.q3 === 'avoid') {
    Object.entries(BUSINESSES).forEach(([k, b]) => { if (b.physical) eliminated.add(k); });
  }

  if (answers.q8 === 'under10') {
    Object.entries(BUSINESSES).forEach(([k, b]) => { if (!b.timeFlex) eliminated.add(k); });
  }

  const dislikes = (answers.q12 as string[]) || [];
  Object.entries(BUSINESSES).forEach(([k, b]) => {
    if (b.dislikeElim.some((d) => dislikes.includes(d))) eliminated.add(k);
  });

  const trades = (answers.q4b as string[]) || [];
  Object.entries(BUSINESSES).forEach(([k, b]) => {
    if (b.tradeGate && !trades.includes(b.tradeGate)) eliminated.add(k);
  });

  const q1map: Record<string, string[]> = {
    outdoor: ['pw', 'lc', 'jr', 'wc'],
    detail: ['md', 'pt', 'hm', 'pc'],
    people: ['hc', 'hm', 'pt'],
    ops: ['lc', 'hc', 'pc'],
  };
  (q1map[answers.q1 as string] || []).forEach((k) => { scores[k] += 15; });

  const q2map: Record<string, string[]> = { solo: ['wc', 'md', 'pwr', 'hm'], team: ['lc', 'hc', 'pt', 'pc', 'jr'] };
  (q2map[answers.q2 as string] || []).forEach((k) => { scores[k] += 10; });

  const q4map: Record<string, string[]> = { clean: ['hc', 'wc', 'md'], yard: ['lc', 'pc'], paint: ['pt'], repair: ['hm', 'pc'], manage: ['lc', 'hc', 'jr'] };
  ((answers.q4 as string[]) || []).forEach((v) => (q4map[v] || []).forEach((k) => { scores[k] += 12; }));
  if (((answers.q4 as string[]) || []).includes('none')) { ['pw', 'jr', 'wc', 'pwr'].forEach((k) => { scores[k] += 8; }); }

  const q4bMap: Record<string, Record<string, number>> = {
    roofing: { rf: 40, hm: 10 }, hvac: { hvac: 40, hm: 10 }, electrical: { el: 40, hm: 10 }, plumbing: { pl: 40, hm: 10 },
    carpentry: { hm: 20, pt: 10 }, flooring: { hm: 15 }, detailing: { md: 30 }, landscape_pro: { lc: 30 }, paint_pro: { pt: 30 },
  };
  ((answers.q4b as string[]) || []).forEach((v) => { const m = q4bMap[v]; if (m) Object.entries(m).forEach(([k, pts]) => { scores[k] += pts; }); });

  const q5map: Record<string, string[]> = { comfortable: ['hm', 'pt', 'pc'], prefer_leads: ['pw', 'wc', 'jr', 'pwr', 'lc'] };
  (q5map[answers.q5 as string] || []).forEach((k) => { scores[k] += 8; });

  const q7map: Record<string, string[]> = { replace: ['wc', 'md', 'pwr'], simple: ['pw', 'wc', 'pwr', 'md'], company: ['lc', 'hc', 'pt', 'jr'], sellable: ['lc', 'hc', 'pc'] };
  (q7map[answers.q7 as string] || []).forEach((k) => { scores[k] += 10; });

  if (dislikes.includes('employees')) ['lc', 'hc', 'pt', 'pw'].forEach((k) => { scores[k] -= 8; });
  if (dislikes.includes('phone')) ['hm', 'pt', 'pc'].forEach((k) => { scores[k] -= 8; });

  return Object.keys(BUSINESSES)
    .filter((k) => !eliminated.has(k))
    .map((k) => ({ key: k, score: scores[k], budgetGap: budgetTier - BUSINESSES[k].budgetTier }))
    .sort((a, b) => {
      if (Math.abs(b.score - a.score) > 5) return b.score - a.score;
      if (a.budgetGap !== b.budgetGap) return a.budgetGap - b.budgetGap;
      return b.score - a.score;
    });
}

const OBJECTION_COPY: Record<string, string> = {
  which: "You weren't sure which business was right for you — that's exactly what this match just solved.",
  customers: 'You said getting customers was the scary part — Google Ads, Meta Ads, and SEO are already built into your package.',
  systems: "You didn't know what tools or systems you'd need — your CRM, scheduling, payments, and automations are already built and connected.",
  time: "You don't have time to figure it all out from scratch — we've already done the figuring out. You just run it.",
  burned: "You've been burned by a course before — this isn't a course. It's the actual business, built and handed to you.",
  push: 'You said you just needed a push — consider this it.',
};

type Screen = 'intro' | 'branch' | 'question' | 'contact' | 'loading' | 'results';

export default function ApplyPage() {
  const router = useRouter();
  const [screen, setScreen] = useState<Screen>('intro');
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
  const [ticketNumber] = useState(() => 'SP-' + Math.floor(100000 + Math.random() * 899999));
  const [submitError, setSubmitError] = useState(false);

  const TOTAL_STEPS = QUESTIONS.length;

  function handleBranchSelect(value: 'yes' | 'no') {
    if (value === 'yes') {
      router.push('/apply/existing');
      return;
    }
    setScreen('question');
    setQIndex(0);
  }

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
    else setScreen('branch');
  }

  async function submitLead(resultKey: string) {
    setSubmitError(false);
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ticket: ticketNumber,
          path: 'new',
          result: BUSINESSES[resultKey]?.name,
          contact,
          answers,
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
    const ranked = scoreAll(answers);
    const primaryKey = ranked[0] ? ranked[0].key : 'pw';
    submitLead(primaryKey);
    setScreen('loading');
    setTimeout(() => setScreen('results'), 1400);
  }

  const ruler = screen === 'question' ? { section: QUESTIONS[qIndex].section, index: qIndex, total: TOTAL_STEPS } : null;

  return (
    <QuizShell ticketNumber={ticketNumber} ruler={ruler}>
      {screen === 'intro' && <IntroScreen onStart={() => setScreen('branch')} />}
      {screen === 'branch' && <BranchScreen onSelect={handleBranchSelect} />}
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
      {screen === 'results' && <ResultsScreen answers={answers} />}
    </QuizShell>
  );
}

/* ================================================================
   SCREENS
   ================================================================ */
function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div>
      <span className="qz-intro-badge">Business Match Quiz</span>
      <h1>Which local service business is actually right for you?</h1>
      <p>
        Answer a few honest questions about your skills, your time, and your budget — whether
        you&apos;re starting from scratch or already running one. At the end, we&apos;ll tell you
        exactly where you stand and what it would take to have it fully built for you.
      </p>
      <ul className="qz-intro-list">
        <li><span className="qz-n">01</span> Takes about 2 minutes</li>
        <li><span className="qz-n">02</span> No generic advice — a specific match</li>
        <li><span className="qz-n">03</span> See real income potential for your match</li>
      </ul>
      <button className="qz-btn qz-btn-primary qz-btn-block qz-btn-lg" onClick={onStart}>
        Start My Business Match →
      </button>
    </div>
  );
}

function BranchScreen({ onSelect }: { onSelect: (value: 'yes' | 'no') => void }) {
  return (
    <div>
      <div className="qz-eyebrow">Getting Started</div>
      <h2>Do you currently own or operate a local service business?</h2>
      <QuizOptionList
        type="single"
        options={[
          { value: 'no', label: "No — I'm starting from scratch" },
          { value: 'yes', label: 'Yes — I already own/operate one' },
        ]}
        isSelected={() => false}
        onToggle={(opt) => onSelect(opt.value as 'yes' | 'no')}
      />
    </div>
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
      {question.sub && <p className="qz-sub-note">{question.sub}</p>}
      <QuizOptionList type={question.type} options={question.options} isSelected={isSelected} onToggle={onSelect} />
      <div className="qz-btn-row">
        {!isFirst && (
          <button className="qz-btn qz-btn-ghost" onClick={onBack}>← Back</button>
        )}
        {question.type === 'multi' && (
          <button className="qz-btn qz-btn-primary" disabled={!hasSelection} onClick={onNext}>
            {isLast ? 'See My Match →' : 'Next →'}
          </button>
        )}
      </div>
    </div>
  );
}

function ContactScreen({
  contact, setContact, onSubmit, submitError,
}: {
  contact: { name: string; email: string; phone: string };
  setContact: React.Dispatch<React.SetStateAction<{ name: string; email: string; phone: string }>>;
  onSubmit: () => void;
  submitError: boolean;
}) {
  const canSubmit = contact.name.trim() && contact.email.trim();
  return (
    <div>
      <div className="qz-eyebrow">Almost Complete</div>
      <h2>Your match is ready. Where should we send it?</h2>
      <p>Enter your info to unlock your personalized business match and income potential.</p>

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

      <button className="qz-btn qz-btn-primary qz-btn-block qz-btn-lg" style={{ marginTop: 8 }} onClick={onSubmit}>
        {canSubmit ? 'Show Me My Business Match →' : 'Please fill in name + email'}
      </button>
      {submitError && <p className="qz-sub-note" style={{ marginTop: 10 }}>Something went wrong saving your info — you can still see your match below.</p>}
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="qz-loading-wrap">
      <div className="qz-stamp-spin" />
      <h3>Processing your work order…</h3>
      <p>Matching your skills, budget, and goals against 14 business models.</p>
    </div>
  );
}

function ResultsScreen({ answers }: { answers: Answers }) {
  const ranked = scoreAll(answers);
  const primaryKey = ranked[0] ? ranked[0].key : 'pw';
  const alt1 = ranked[1];
  const alt2 = ranked[2];
  const primary = BUSINESSES[primaryKey];
  const objSelected = (answers.q13 as string[]) || [];
  const interest = answers.q14;

  let ctaHeadline = 'Ready to have your business built for you?';
  let ctaBody = `Book a free call and we'll walk through exactly what it takes to launch your ${primary.name.toLowerCase()} business.`;
  if (interest === 'extreme') {
    ctaHeadline = "You're ready. Let's build it.";
    ctaBody = `Book your free build call — we'll map out your exact launch plan for your ${primary.name.toLowerCase()} business.`;
  } else if (interest === 'unsure') {
    ctaHeadline = "Got questions? Let's talk it through.";
    ctaBody = "No pressure — book a free call and we'll answer everything before you decide on anything.";
  }

  return (
    <div>
      <div className="qz-stamp">Approved</div>
      <h1>{primary.name}</h1>

      <div className="qz-result-primary">
        <div className="qz-arr">Est. Annual Revenue Potential: {primary.arr}</div>
        <p>{primary.tagline}</p>
        {primary.licensed && (
          <div className="qz-license-note">
            Heads up: this trade typically requires state-specific licensing or certification.
            We&apos;ll walk through exactly what&apos;s required for your state before anything is set up.
          </div>
        )}
      </div>

      {objSelected.length > 0 && (
        <>
          <h3>Why This Match Actually Solves Your Problem</h3>
          <ul className="qz-why-list">
            {objSelected.map((v) => OBJECTION_COPY[v] && (
              <li key={v}><span className="qz-check">✓</span><span>{OBJECTION_COPY[v]}</span></li>
            ))}
          </ul>
        </>
      )}

      {(alt1 || alt2) && (
        <>
          <h3>You&apos;d Also Do Well With</h3>
          <div className="qz-alt-row">
            {[alt1, alt2].filter(Boolean).map((a) => {
              const b = BUSINESSES[a!.key];
              return (
                <div key={a!.key} className="qz-alt-card">
                  <div className="qz-eyebrow">Alternate Match</div>
                  <h3>{b.name}</h3>
                  <div className="qz-arr">{b.arr}</div>
                </div>
              );
            })}
          </div>
        </>
      )}

      <hr className="qz-section-divider" />

      <h2>Here&apos;s Exactly How This Works</h2>
      <p>Watch this quick video to see how we build your {primary.name.toLowerCase()} business from the ground up — website, CRM, ads, and all.</p>
      <div className="qz-vsl-frame">
        <div className="qz-play-btn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
        </div>
        <div className="qz-vsl-caption">VSL PLACEHOLDER — swap for a real embed before this goes live</div>
      </div>

      <hr className="qz-section-divider" />

      <h2>People Who Started Exactly Where You Are</h2>
      <div className="qz-testi-grid">
        {[
          { stars: '★★★★★', quote: '"I had zero business experience. Within a few weeks I had a real website, a CRM, and my first paying customers — I just showed up and did the work."', who: '— Sample testimonial, Pressure Washing owner' },
          { stars: '★★★★★', quote: '"I kept overthinking which business to start. The quiz matched me to something that actually fit my skills, and having the systems already built saved me months."', who: '— Sample testimonial, Lawn Care owner' },
          { stars: '★★★★★', quote: '"I had already worked in the trade for years but never had the business side figured out. This gave me the missing half."', who: '— Sample testimonial, Roofing owner' },
        ].map((t) => (
          <div key={t.who} className="qz-testi-card">
            <div className="qz-stars">{t.stars}</div>
            <p>{t.quote}</p>
            <div className="qz-who">{t.who}</div>
          </div>
        ))}
      </div>

      <hr className="qz-section-divider" />

      <div className="qz-cta-block">
        <h2>{ctaHeadline}</h2>
        <p>{ctaBody}</p>
        <button
          className="qz-btn qz-btn-primary qz-btn-lg"
          style={{ display: 'inline-block' }}
          onClick={() => openCalendly()}
        >
          Book My Free Business Build Call →
        </button>
      </div>
    </div>
  );
}
