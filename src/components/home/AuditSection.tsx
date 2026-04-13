import AuditRequestForm from '@/components/forms/AuditRequestForm';

export default function AuditSection() {
  return (
    <section id="audit" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-4">
          Free for detailing shops
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#e7e6ee] text-center mb-3">
          Get a free video audit of your shop
        </h2>
        <p className="text-[#a3a3a3] text-center mb-10 max-w-xl mx-auto">
          I'll personally review your website, Google Business Profile, and local market — then send you a Loom video walking through exactly what to fix first.
        </p>
        <AuditRequestForm source="homepage_audit_section" context="homepage" />
      </div>
    </section>
  );
}
