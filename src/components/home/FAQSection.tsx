import FAQItem from '@/components/ui/FAQItem';

const faqs = [
  {
    question: "Why DetailPro instead of other shop management software?",
    answer: "Most shop management tools hold you hostage with monthly subscription fees and lock you out when you stop paying. DetailPro gives you lifetime access — you own the system. On top of that, DetailPro is built with the most advanced tools for enterprise detailers: full booking, fleet pipeline management, multi-location support, and a CRM that actually understands the margin difference between a car wash and a ceramic job. It's not a repurposed generic tool. It was built from the ground up for this industry.",
  },
  {
    question: "What does 'revenue share' mean — can I get locked in?",
    answer: "No flat monthly fees, no long-term contracts. We charge 10% of monthly revenue managed through the platform. That means our incentive is exactly the same as yours: grow your revenue. If you're not making money, we're not making money. It's alignment by design.",
  },
  {
    question: "How fast do leads actually get responded to?",
    answer: "Under 5 minutes — automatically. The second a lead inquires through any connected channel, they receive an SMS. The system follows a proven script to qualify their budget, vehicle, and service interest before you ever pick up the phone. You only step in when a lead is ready to book.",
  },
  {
    question: "What if I'm not getting results in 90 days?",
    answer: "We go hands-on. Not 'here's a help article' hands-on — we get on a call, find the root cause, and fix it personally. The most common issue is lead follow-up speed, which is why we pre-qualify clients before onboarding. But if the system isn't working, we don't point fingers.",
  },
  {
    question: "Do I need to already be running ads?",
    answer: "No. We handle the full ad setup — Meta, Google, and the creative — from Day 1. You own the ad accounts and the data. We handle strategy, optimization, and spend management. Starting budget recommendation: $15–25/day to see consistent lead flow.",
  },
  {
    question: "Is this just software, or do you manage everything?",
    answer: "Both. You get lifetime access to DetailPro software (CRM, pipelines, automations, messaging, analytics, booking). Plus done-for-you Meta and Google ads management, full system setup, and fleet lead pipeline management. It's a complete customer acquisition system, not a tool you figure out yourself.",
  },
  {
    question: "Is DetailPro built for solo operators or teams?",
    answer: "Both — but the goal is always to get you off the tools. DetailPro builds the infrastructure to make you a top operator in your market, which typically means building a team over time. We're not designed for side hustlers. We're for operators who are serious about building a business.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 px-6 bg-[#050119]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#e7e6ee]">
            Detailers ask us&hellip;
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
