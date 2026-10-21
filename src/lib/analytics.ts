type Win = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

/** Fire a form-submission conversion: GA4 `generate_lead` + Meta `Lead`. */
export function trackLead(formName: string, extra: Record<string, string | number> = {}) {
  if (typeof window === 'undefined') return;
  const w = window as Win;
  const params = { form_name: formName, source: formName, page_path: window.location.pathname, ...extra };
  w.gtag?.('event', 'generate_lead', params);
  w.fbq?.('track', 'Lead', { content_name: formName });
}
