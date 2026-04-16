'use client';

import { useEffect } from 'react';

const TRACKED_LINKS: { match: string; event: string }[] = [
  { match: 'buy.stripe.com', event: 'purchase_intent' },
  { match: 'detailprocrm.com/pricing', event: 'trial_intent' },
];

function fireEvent(name: string, params?: Record<string, string>) {
  if (typeof window === 'undefined') return;
  if ((window as any).gtag) (window as any).gtag('event', name, params ?? {});
  if ((window as any).fbq && name === 'purchase_intent') {
    (window as any).fbq('track', 'InitiateCheckout');
  }
}

export default function AnalyticsListeners() {
  useEffect(() => {
    // Calendly booking confirmed
    function handleMessage(e: MessageEvent) {
      if (e.data?.event === 'calendly.event_scheduled') {
        fireEvent('calendly_booked');
      }
    }
    window.addEventListener('message', handleMessage);

    // Outbound CTA link clicks
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      for (const { match, event } of TRACKED_LINKS) {
        if (href.includes(match)) {
          fireEvent(event, { destination: match });
          break;
        }
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('message', handleMessage);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
