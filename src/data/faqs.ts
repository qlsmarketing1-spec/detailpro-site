export type Faq = { question: string; answer: string };

/** Answers follow the Service Pro Copywriting Bible objection bank. No guarantees, no equity, no unapproved stats. */
export const HOME_FAQS: Faq[] = [
  {
    question: 'What do I actually get?',
    answer:
      'The whole operating system of a local service business: a website built to turn searches into booked calls, your Google profile and reviews, Google and Meta ads, an AI voice agent that answers every call 24/7 and books the job, and a CRM that rebooks customers and asks for reviews. You also get mentorship and playbooks for pricing, first hires, and operations. We build it in four weeks and run it after that.',
  },
  {
    question: 'Do you take equity?',
    answer:
      'No. You keep 100% of your business, your brand, and every decision. We take no equity, ever, and there is no retainer.',
  },
  {
    question: 'How does the revenue share work?',
    answer:
      'We get paid when you get paid. Our share is a percentage of your revenue, so in a month with no revenue, our share is zero. Agencies get paid whether you make money or not. We do not.',
  },
  {
    question: 'Isn’t a revenue share too much?',
    answer:
      'It is less than an office hire, and it is paid out of calls and customers you are losing today. An admin runs $4,300 to $5,400 a month and can’t answer the phone at 9 p.m.',
  },
  {
    question: 'Is this another course or agency?',
    answer:
      'No. Courses teach you what to do and leave you alone. Agencies send leads and get paid either way. We build the whole system with you, run it after launch, and only earn when you do.',
  },
  {
    question: 'Why not just buy a franchise?',
    answer:
      'A franchise can cost six figures to start, and you give up your independence. With Service Pro you get comparable infrastructure, keep your own brand, and own 100% of the business.',
  },
  {
    question: 'I’m not a tech person. Can I do this?',
    answer:
      'You don’t need to be. We build it, run it, and train you on the few things you need to know. You keep doing the work you’re great at.',
  },
  {
    question: 'Word of mouth has always worked for me. Why change?',
    answer:
      'It still works. But by the time someone calls you, they have already read your reviews and compared you to the next name on Google. The front door moved online, and the system makes sure you’re the one who picks up.',
  },
  {
    question: 'What if it doesn’t work?',
    answer:
      'We don’t offer a guarantee, and we won’t pretend to. What we offer is alignment. We are only paid when you are paid, and we only take partners we believe will succeed. If we don’t think it’s a fit, we’ll tell you.',
  },
  {
    question: 'Why should I trust a new company?',
    answer:
      'Service Pro was started by Brady Schlapkohl, who built one of the largest detailing companies in Minneapolis within a year by applying modern systems to an old-fashioned industry. Brady has also built an online platform with more than 4,000 followers, teaching local service business owners how to scale completely free. We take one partner per trade in each market, and only owners we believe will succeed.',
  },
];

/** Shown on the application page, where qualification belongs. */
export const APPLY_FAQS: Faq[] = [
  {
    question: 'Who do you accept?',
    answer:
      'We only take owners we believe will succeed. New owners qualify on capital (at least $6,000, through personal funds or financing), full-time commitment, coachability, and trade. Established owners qualify at $15,000 or more per month and a willingness to change how the business runs. We take one partner per trade in each market.',
  },
  ...HOME_FAQS.filter((f) =>
    ['Do you take equity?', 'How does the revenue share work?', 'What do I actually get?', 'What if it doesn’t work?'].includes(f.question),
  ),
];

export function faqJsonLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}
