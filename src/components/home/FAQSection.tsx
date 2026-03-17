import FAQItem from '@/components/ui/FAQItem';

const faqs = [
  {
    question: 'Is this just a CRM?',
    answer: 'No. A CRM is just a place to store data. DetailPro is an active growth platform. We provide the ads, the automation, and the workflows to actually book the jobs for you. It\'s the difference between a filing cabinet and a sales team.',
  },
  {
    question: 'What if I already have a CRM (like Urable)?',
    answer: 'We work alongside it. Not replace it. DetailPro is focused on the \'Top of Funnel\' — getting the leads and booking the meetings. Once a job is booked, you can push it to your job management tool for invoicing and scheduling if you like.',
  },
  {
    question: 'Do I have to answer the automated texts?',
    answer: 'Only when the lead asks a complex question that the system can\'t handle. Otherwise, it follows our proven script to get the car type, service interest, and booking time automatically.',
  },
  {
    question: 'How much do I need to spend on ads?',
    answer: 'We recommend starting with $15–$25 a day to see consistent results. Our system is designed to squeeze every penny out of that budget so you get the highest ROI possible.',
  },
  {
    question: 'Do you run the ads for me or do I manage them?',
    answer: 'DetailPro provides the ad infrastructure, strategy, and systems — but you stay in control. We handle the setup and optimization framework so ads are built correctly from day one. You own the ad account, the data, and the spend. We stay aligned through performance-based pricing, which means we care deeply about how those ads convert into real booked jobs.',
  },
  {
    question: 'How is DetailPro different from Housecall Pro, Jobber, or Urable?',
    answer: 'Those tools are great at managing jobs after a customer is already booked. DetailPro focuses on what happens before that — generating demand, following up instantly, and converting leads into booked jobs. Many shops use DetailPro alongside their existing software, then push booked jobs into their job management tool for scheduling and invoicing. We offer seamless integration with Urable where all booked customers are automatically migrated.',
  },
  {
    question: 'Is this built for solo operators or teams?',
    answer: 'DetailPro builds the infrastructure within your business to become a top detailer in your area. This almost always means having a team. That is our goal.',
  },
  {
    question: 'What makes a shop a good fit for DetailPro?',
    answer: 'DetailPro is built for operators who answer leads promptly, care about systems and execution, and want repeatable growth — not quick wins. If you\'re already a top detailer looking to get to the next level. This is for you. It\'s not a fit for newbies looking for hands-off growth or instant results without involvement. The system works best when both sides execute.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#e7e6ee] text-center mb-12">
          Detailers ask us...
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
