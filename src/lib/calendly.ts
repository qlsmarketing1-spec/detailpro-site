export function openCalendly() {
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({
      url: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/qlsmarketing1/30min?primary_color=5e25fa',
    });
  }
}
