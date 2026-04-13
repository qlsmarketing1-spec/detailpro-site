'use client';

import { useState } from 'react';
import type { FormState, QuizTier } from '@/lib/types';
import CalendlyButton from '@/components/ui/CalendlyButton';

// --- Data ---
const diagnosticQuestions = [
  { id: 1, text: 'Does your website load in under 3 seconds?', signal: 'website' },
  { id: 2, text: 'Can customers book or request a quote directly from your website?', signal: 'website' },
  { id: 3, text: 'Does your Google Business Profile have photos of your actual work posted in the last 30 days?', signal: 'website' },
  { id: 4, text: 'Do you respond to new leads within 5 minutes?', signal: 'crm' },
  { id: 5, text: 'Do you have automated follow-up if a lead doesn\'t respond to your first message?', signal: 'crm' },
  { id: 6, text: 'Are you managing your leads through a CRM — not through texts and a notes app?', signal: 'crm' },
  { id: 7, text: 'Are you currently running paid ads on Meta or Google?', signal: 'ads' },
  { id: 8, text: 'Do you know exactly what it costs you to acquire a new customer?', signal: 'ads' },
  { id: 9, text: 'Do you have a plan for slow months that goes beyond word of mouth?', signal: 'ads' },
  { id: 10, text: 'Do you have documented SOPs (step-by-step processes) for how your services are delivered?', signal: 'ops' },
];

const insights: Record<number, string> = {
  1: 'Your site is too slow. Most visitors leave within 3 seconds if a page hasn\'t loaded. Every slow second is a lost booking.',
  2: 'You don\'t have online booking. The job goes to whoever makes it easiest to say yes.',
  3: 'Your Google Business Profile isn\'t active. Detailers who update consistently rank higher in local search — for free.',
  4: 'You\'re not responding to leads within 5 minutes. Most detailers lose jobs in the first 10 minutes — not because they\'re bad at their craft, but because a competitor texted back first.',
  5: 'You have no automated follow-up. Over 60% of leads need more than one touchpoint before they book.',
  6: 'You\'re managing leads through texts and a notes app. Leads are falling through the cracks every week.',
  7: 'You\'re not running paid ads. The detailers in your market who are running ads are getting calls you\'ll never know about.',
  8: 'You don\'t know your cost per customer. If you don\'t know what it costs to get a job, you can\'t make smart decisions about where to spend money to grow.',
  9: 'You have no plan for slow months. Word of mouth dries up in winter.',
  10: 'You have no documented SOPs. You can\'t hire, train, or scale without written processes — and right now you\'re the ceiling of your own business.',
};

const revenueOptions = ['Under $3k', '$3k–$8k', '$8k–$15k', '$15k–$30k', '$30k+'];
const goalOptions = ['Under $5k', '$5k–$10k', '$10k–$20k', '$20k–$40k', '$40k+'];
const bottleneckOptions = [
  'Not enough leads',
  'Low prices & hard to raise them',
  'No time to grow',
  'Can\'t find or keep good help',
  'I\'m not sure what the problem is',
];

const highRevenue = ['$8k–$15k', '$15k–$30k', '$30k+'];

function computeTier(score: number): QuizTier {
  if (score >= 8) return 'scale';
  if (score >= 4) return 'growth';
  return 'starter';
}

function getTopInsights(answers: boolean[], bottleneck: string): number[] {
  const priorityMap: Record<string, number[]> = {
    'Not enough leads': [7, 9, 2, 4, 5, 1, 3, 6, 8, 10],
    'No time to grow': [10, 4, 5, 6, 2, 7, 9, 1, 3, 8],
    'Can\'t find or keep good help': [10, 4, 5, 6, 2, 7, 9, 1, 3, 8],
    'Low prices & hard to raise them': [2, 1, 3, 4, 5, 7, 9, 6, 8, 10],
  };
  const priority = priorityMap[bottleneck] ?? [4, 5, 2, 7, 9, 1, 6, 3, 8, 10];
  return priority.filter((id) => answers[id - 1] === false).slice(0, 3);
}

// Total steps: 0=intro, 1–10=diagnostic, 11=revenue, 12=goal, 13=bottleneck, 14=tried, 15=contact info, 16=email gate, 17=results
const TOTAL_QUESTIONS = 15;

export default function DiagnosticQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>(Array(10).fill(null));
  const [revenue, setRevenue] = useState('');
  const [goal, setGoal] = useState('');
  const [bottleneck, setBottleneck] = useState('');
  const [tried, setTried] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [instagram, setInstagram] = useState('');
  const [city, setCity] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [result, setResult] = useState<{ score: number; tier: QuizTier; insightIds: number[] } | null>(null);

  const progress = step === 0 ? 0 : Math.round((Math.min(step, TOTAL_QUESTIONS) / TOTAL_QUESTIONS) * 100);

  function handleDiagnosticAnswer(ans: boolean) {
    const idx = step - 1;
    const updated = [...answers];
    updated[idx] = ans;
    setAnswers(updated);
    setStep(step + 1);
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (formState === 'loading') return;
    setFormState('loading');

    const score = answers.filter(Boolean).length;
    const tier = computeTier(score);
    const insightIds = getTopInsights(answers, bottleneck);

    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName,
          phone,
          city,
          instagram,
          websiteUrl,
          score,
          tier,
          monthlyRevenue: revenue,
          revenueGoal: goal,
          bottleneck,
          triedAds: tried,
        }),
      });
      if (res.ok) {
        setResult({ score, tier, insightIds });
        setFormState('success');
        setStep(17);
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

  // --- Render ---

  // Intro
  if (step === 0) {
    return (
      <div className="bg-white/4 border border-white/8 rounded-3xl p-8 text-center max-w-2xl mx-auto">
        <span className="inline-block bg-[#5e25fa]/15 border border-[#5e25fa]/30 text-[#a78bfa] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Free · 3 minutes
        </span>
        <h2 className="text-2xl font-black text-[#e7e6ee] mb-3">Diagnose your detailing business</h2>
        <p className="text-[#a3a3a3] text-sm mb-8 max-w-sm mx-auto">
          15 questions. Get a score, see exactly what's broken, and get a personalized prescription.
        </p>
        <button
          onClick={() => setStep(1)}
          className="bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
        >
          Start the Diagnostic →
        </button>
      </div>
    );
  }

  // Diagnostic questions (1–10)
  if (step >= 1 && step <= 10) {
    const q = diagnosticQuestions[step - 1];
    return (
      <div className="bg-white/4 border border-white/8 rounded-3xl p-8 max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#a3a3a3] mb-2">
            <span>Question {step} of {TOTAL_QUESTIONS}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5e25fa] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <p className="text-[#e7e6ee] font-semibold text-lg mb-8 leading-snug">{q.text}</p>
        <div className="flex gap-4">
          <button
            onClick={() => handleDiagnosticAnswer(true)}
            className="flex-1 bg-green-500/15 hover:bg-green-500/25 border border-green-500/30 text-green-400 font-semibold py-3.5 rounded-2xl transition-colors"
          >
            Yes
          </button>
          <button
            onClick={() => handleDiagnosticAnswer(false)}
            className="flex-1 bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-red-400 font-semibold py-3.5 rounded-2xl transition-colors"
          >
            No
          </button>
        </div>
        {step > 1 && (
          <button onClick={() => setStep(step - 1)} className="mt-4 text-[#a3a3a3] text-sm hover:text-[#e7e6ee] transition-colors">
            ← Back
          </button>
        )}
      </div>
    );
  }

  // Q11: Revenue
  if (step === 11) {
    return (
      <div className="bg-white/4 border border-white/8 rounded-3xl p-8 max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#a3a3a3] mb-2">
            <span>Question 11 of {TOTAL_QUESTIONS}</span>
            <span>{Math.round((11 / TOTAL_QUESTIONS) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#5e25fa] rounded-full" style={{ width: `${Math.round((11 / TOTAL_QUESTIONS) * 100)}%` }} />
          </div>
        </div>
        <p className="text-[#e7e6ee] font-semibold text-lg mb-6">What's your current monthly revenue?</p>
        <div className="flex flex-col gap-2">
          {revenueOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => { setRevenue(opt); setStep(12); }}
              className={`text-left px-5 py-3.5 rounded-2xl border transition-colors text-sm ${revenue === opt ? 'bg-[#5e25fa]/20 border-[#5e25fa]/50 text-[#e7e6ee]' : 'bg-white/3 border-white/10 text-[#a3a3a3] hover:bg-white/6 hover:text-[#e7e6ee]'}`}
            >
              {opt}
            </button>
          ))}
        </div>
        <button onClick={() => setStep(10)} className="mt-4 text-[#a3a3a3] text-sm hover:text-[#e7e6ee] transition-colors">← Back</button>
      </div>
    );
  }

  // Q12: Goal
  if (step === 12) {
    return (
      <div className="bg-white/4 border border-white/8 rounded-3xl p-8 max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#a3a3a3] mb-2">
            <span>Question 12 of {TOTAL_QUESTIONS}</span>
            <span>{Math.round((12 / TOTAL_QUESTIONS) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#5e25fa] rounded-full" style={{ width: `${Math.round((12 / TOTAL_QUESTIONS) * 100)}%` }} />
          </div>
        </div>
        <p className="text-[#e7e6ee] font-semibold text-lg mb-6">What's your revenue goal for the next 90 days?</p>
        <div className="flex flex-col gap-2">
          {goalOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => { setGoal(opt); setStep(13); }}
              className={`text-left px-5 py-3.5 rounded-2xl border transition-colors text-sm ${goal === opt ? 'bg-[#5e25fa]/20 border-[#5e25fa]/50 text-[#e7e6ee]' : 'bg-white/3 border-white/10 text-[#a3a3a3] hover:bg-white/6 hover:text-[#e7e6ee]'}`}
            >
              {opt}
            </button>
          ))}
        </div>
        <button onClick={() => setStep(11)} className="mt-4 text-[#a3a3a3] text-sm hover:text-[#e7e6ee] transition-colors">← Back</button>
      </div>
    );
  }

  // Q13: Bottleneck
  if (step === 13) {
    return (
      <div className="bg-white/4 border border-white/8 rounded-3xl p-8 max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#a3a3a3] mb-2">
            <span>Question 13 of {TOTAL_QUESTIONS}</span>
            <span>{Math.round((13 / TOTAL_QUESTIONS) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#5e25fa] rounded-full" style={{ width: `${Math.round((13 / TOTAL_QUESTIONS) * 100)}%` }} />
          </div>
        </div>
        <p className="text-[#e7e6ee] font-semibold text-lg mb-6">What's your biggest single bottleneck right now?</p>
        <div className="flex flex-col gap-2">
          {bottleneckOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => { setBottleneck(opt); setStep(14); }}
              className={`text-left px-5 py-3.5 rounded-2xl border transition-colors text-sm ${bottleneck === opt ? 'bg-[#5e25fa]/20 border-[#5e25fa]/50 text-[#e7e6ee]' : 'bg-white/3 border-white/10 text-[#a3a3a3] hover:bg-white/6 hover:text-[#e7e6ee]'}`}
            >
              {opt}
            </button>
          ))}
        </div>
        <button onClick={() => setStep(12)} className="mt-4 text-[#a3a3a3] text-sm hover:text-[#e7e6ee] transition-colors">← Back</button>
      </div>
    );
  }

  // Q14: Tried
  if (step === 14) {
    return (
      <div className="bg-white/4 border border-white/8 rounded-3xl p-8 max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#a3a3a3] mb-2">
            <span>Question 14 of {TOTAL_QUESTIONS}</span>
            <span>{Math.round((14 / TOTAL_QUESTIONS) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#5e25fa] rounded-full" style={{ width: `${Math.round((14 / TOTAL_QUESTIONS) * 100)}%` }} />
          </div>
        </div>
        <p className="text-[#e7e6ee] font-semibold text-lg mb-2">What have you already tried that didn't work?</p>
        <p className="text-[#a3a3a3] text-xs mb-4">Optional — but this helps us give you a better audit</p>
        <textarea
          value={tried}
          onChange={(e) => setTried(e.target.value)}
          placeholder="Be specific — e.g. 'ran Facebook ads for 2 months, got clicks but no bookings'"
          rows={3}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60 resize-none mb-4"
        />
        <button
          onClick={() => setStep(15)}
          className="w-full bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-semibold py-3 rounded-full transition-colors"
        >
          Continue →
        </button>
        <button onClick={() => setStep(13)} className="mt-3 text-[#a3a3a3] text-sm hover:text-[#e7e6ee] transition-colors">← Back</button>
      </div>
    );
  }

  // Q15: Contact info (website, instagram, city)
  if (step === 15) {
    return (
      <div className="bg-white/4 border border-white/8 rounded-3xl p-8 max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#a3a3a3] mb-2">
            <span>Question 15 of {TOTAL_QUESTIONS}</span>
            <span>99%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#5e25fa] rounded-full" style={{ width: '99%' }} />
          </div>
        </div>
        <p className="text-[#e7e6ee] font-semibold text-lg mb-2">Last one — drop your website, Instagram, and city.</p>
        <p className="text-[#a3a3a3] text-xs mb-4">This lets us give you a real audit, not a generic one.</p>
        <div className="flex flex-col gap-3 mb-4">
          <input
            type="text"
            required
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            placeholder="yourwebsite.com"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60"
          />
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="@yourhandle (optional)"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60"
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City, State — e.g. Austin, TX (optional)"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60"
          />
        </div>
        <button
          onClick={() => { if (websiteUrl) setStep(16); }}
          disabled={!websiteUrl}
          className="w-full bg-[#5e25fa] hover:bg-[#4d1fe0] disabled:opacity-50 text-white font-semibold py-3 rounded-full transition-colors"
        >
          See My Results →
        </button>
        <button onClick={() => setStep(14)} className="mt-3 text-[#a3a3a3] text-sm hover:text-[#e7e6ee] transition-colors">← Back</button>
      </div>
    );
  }

  // Step 16: Email gate
  if (step === 16) {
    return (
      <div className="bg-white/4 border border-white/8 rounded-3xl p-8 max-w-2xl mx-auto">
        <div className="h-1.5 bg-[#5e25fa] rounded-full mb-6" />
        <h2 className="text-xl font-bold text-[#e7e6ee] mb-2">Where should we send your results?</h2>
        <p className="text-[#a3a3a3] text-sm mb-6">
          You'll see them instantly — and get a personal Loom audit video within 24 hours.
        </p>
        <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone (optional)"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60"
            />
          </div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your best email address"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#e7e6ee] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#5e25fa]/60"
          />
          <button
            type="submit"
            disabled={formState === 'loading'}
            className="bg-[#5e25fa] hover:bg-[#4d1fe0] disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition-colors mt-1"
          >
            {formState === 'loading' ? 'Loading...' : 'Show My Results →'}
          </button>
          {formState === 'error' && (
            <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    );
  }

  // Step 17: Results
  if (step === 17 && result) {
    const { score, tier, insightIds } = result;
    const isHighRevenue = highRevenue.includes(revenue);

    const tierConfig = {
      scale: {
        label: 'Pro Level',
        color: 'text-green-400',
        bg: 'bg-green-500/15 border-green-500/30',
        headline: 'Your systems are solid. You need more fuel.',
        subhead: "You've built a real business. The infrastructure is there. Now it's time to flood it with traffic.",
      },
      growth: {
        label: 'Growth Stage',
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/15 border-yellow-500/30',
        headline: "You've got the pieces. They're just not connected.",
        subhead: "You're closer than you think. The gaps are specific — and fixable. Here's what I'm seeing.",
      },
      starter: {
        label: 'Foundation Stage',
        color: 'text-red-400',
        bg: 'bg-red-500/15 border-red-500/30',
        headline: "You're leaving serious money on the table.",
        subhead: "The good news: every single issue I'm about to show you is fixable. Here's where to start.",
      },
    }[tier];

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Score card */}
        <div className="bg-white/4 border border-white/8 rounded-3xl p-8 text-center">
          <div className={`inline-block px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-4 ${tierConfig.bg} ${tierConfig.color}`}>
            {tierConfig.label}
          </div>
          <div className="text-7xl font-black text-[#e7e6ee] mb-2">{score}<span className="text-3xl text-[#a3a3a3]">/10</span></div>
          <h2 className="text-2xl font-bold text-[#e7e6ee] mb-2">{tierConfig.headline}</h2>
          <p className="text-[#a3a3a3] text-sm">{tierConfig.subhead}</p>
        </div>

        {/* Insights */}
        {insightIds.length > 0 && (
          <div className="bg-white/4 border border-white/8 rounded-3xl p-6">
            <h3 className="font-bold text-[#e7e6ee] mb-4">Your top {insightIds.length} gaps</h3>
            <div className="space-y-3">
              {insightIds.map((id, i) => (
                <div key={id} className="flex gap-3">
                  <span className="text-[#5e25fa] font-bold text-sm shrink-0 mt-0.5">#{i + 1}</span>
                  <p className="text-[#a3a3a3] text-sm leading-relaxed">{insights[id]}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#5e25fa]/20 to-[#280aa5]/10 border border-[#5e25fa]/30 rounded-3xl p-8 text-center">
          {tier === 'scale' && (
            <>
              <h3 className="font-bold text-[#e7e6ee] mb-2">Ready to flood it with traffic?</h3>
              <p className="text-[#a3a3a3] text-sm mb-6">Book a free strategy call and let's build your ads plan.</p>
              <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-semibold px-8 py-3.5 rounded-full transition-colors">
                Book a Free Strategy Call
              </CalendlyButton>
              <p className="mt-3 text-[#a3a3a3] text-sm">
                Or{' '}
                <a href="/ads" className="text-[#e7e6ee]/70 underline underline-offset-2 hover:text-[#e7e6ee]">
                  see how we run ads →
                </a>
              </p>
            </>
          )}
          {tier === 'growth' && (
            <>
              <h3 className="font-bold text-[#e7e6ee] mb-2">Your free video audit is coming.</h3>
              <p className="text-[#a3a3a3] text-sm mb-4">
                Check the email you provided — you'll receive a personal Loom video within 24 hours walking through your specific results and exactly what to fix first.
              </p>
              <p className="text-[#a3a3a3] text-sm">
                While you wait:{' '}
                <a href="/software" className="text-[#e7e6ee]/70 underline underline-offset-2 hover:text-[#e7e6ee]">
                  see how our CRM works →
                </a>
              </p>
            </>
          )}
          {tier === 'starter' && (
            <>
              <h3 className="font-bold text-[#e7e6ee] mb-2">
                {isHighRevenue ? 'Book a $299 Strategy Session' : 'Book a Free Strategy Call'}
              </h3>
              <p className="text-[#a3a3a3] text-sm mb-6">
                {isHighRevenue
                  ? "You're generating revenue but leaving a lot on the table. A focused 60-minute session will build a clear roadmap."
                  : "Let's look at your specific situation and figure out the fastest path forward."}
              </p>
              <CalendlyButton className="bg-[#5e25fa] hover:bg-[#4d1fe0] text-white font-semibold px-8 py-3.5 rounded-full transition-colors">
                {isHighRevenue ? 'Book a $299 Strategy Session' : 'Book a Free Strategy Call'}
              </CalendlyButton>
              <p className="mt-3 text-[#a3a3a3] text-sm">
                Or start with a{' '}
                <a href="/website" className="text-[#e7e6ee]/70 underline underline-offset-2 hover:text-[#e7e6ee]">
                  $597 website build →
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  return null;
}
