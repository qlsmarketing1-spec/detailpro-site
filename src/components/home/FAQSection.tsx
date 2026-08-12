import FAQItem from '@/components/ui/FAQItem';

const faqs = [
  {
    question: "I'm just starting out — isn't this too much, too soon?",
    answer: "It's the opposite of too soon. The scariest part of starting a business isn't the idea, it's not knowing whether the foundation under it will hold. Most owners find that out the expensive way — years of guessing, courses, and agencies that dump leads with no system to turn them into a business. Service Pro exists so that risk gets taken off the table on day one. You start with infrastructure that's already proven, not your own trial and error.",
  },
  {
    question: "I've been running this business for 20 years on paper — where do I even start?",
    answer: "With the first four weeks. That's the hands-on part: we build the systems, plug them into how your business actually runs today, and train you on what you need to know. We're not asking you to rebuild how you operate — we're replacing the paper, spreadsheets, and half-used CRM with a system that runs in the background.",
  },
  {
    question: "What happens after the first 4 weeks?",
    answer: "The business runs the loop itself. Ads bring in leads, automations handle booking and rebooking, and Service Pro maintains the infrastructure behind the scenes. You're not the one holding it together anymore — that's the whole point.",
  },
  {
    question: "What does 'revenue share' mean — can I get locked in?",
    answer: "No flat monthly fees, no long-term contracts. We charge a percentage of monthly revenue managed through the platform. That means our incentive is exactly the same as yours: grow your revenue. If you're not making money, we're not making money. It's alignment by design.",
  },
  {
    question: "What if I'm not getting results in 90 days?",
    answer: "We go hands-on. Not 'here's a help article' hands-on — we get on a call, find the root cause, and fix it personally, whether it's lead follow-up, ad targeting, or the systems themselves. If it isn't working, we don't point fingers.",
  },
  {
    question: "Is this just software, or do you manage everything?",
    answer: "Both. You get the Service Pro system — website, local search visibility, follow-up automation, and booking. Plus done-for-you advertising, full setup, and ongoing maintenance. It's a complete customer acquisition system, not a tool you have to figure out yourself.",
  },
  {
    question: "Why isn't this just headcount — an agency or a hire?",
    answer: "Because that doesn't scale and it doesn't hold up. Delivery is software-driven, not headcount-driven, which is what lets it stay consistent client to client instead of depending on which account manager you got. We're moving toward largely agentic fulfillment within 6 months — the system gets more capable, not more expensive to run.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#050119]">
            Owners ask us&hellip;
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} theme="light" />
          ))}
        </div>
      </div>
    </section>
  );
}
