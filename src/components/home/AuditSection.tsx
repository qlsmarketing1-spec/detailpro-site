import AuditRequestForm from '@/components/forms/AuditRequestForm';

export default function AuditSection() {
  return (
    <section id="audit" className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-[#6b6b76] text-xs uppercase tracking-[0.25em] mb-4">
          Work with us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#050119] text-center mb-3">
          Tell us about your business
        </h2>
        <p className="text-[#6b6b76] text-center mb-10 max-w-xl mx-auto">
          Drop your info below. We'll take a look at your setup and reach out personally.
        </p>
        <AuditRequestForm source="homepage_audit_section" context="homepage" />
      </div>
    </section>
  );
}
