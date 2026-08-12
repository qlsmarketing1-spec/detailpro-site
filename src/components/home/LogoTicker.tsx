const shops = [
  { name: 'BLUEWATER PLUMBING', style: 'font-black tracking-widest' },
  { name: 'Apex Roofing Co.', style: 'font-light italic' },
  { name: 'IronGate HVAC', style: 'font-semibold' },
  { name: 'COASTAL LANDSCAPING', style: 'font-black tracking-tighter uppercase' },
  { name: 'Summit Electric', style: 'font-medium italic' },
  { name: 'PRIME PEST CONTROL', style: 'font-bold tracking-widest uppercase' },
  { name: 'Clearview Windows', style: 'font-semibold tracking-tight' },
  { name: 'NORTHSTAR PAINTING', style: 'font-black uppercase' },
  { name: 'Redline Auto Repair', style: 'font-light tracking-wider' },
];

// Triple for seamless scroll
const tickerItems = [...shops, ...shops, ...shops];

export default function LogoTicker() {
  return (
    <section className="pb-16 pt-0 overflow-hidden relative">
      <p className="text-center text-[#6b6b76] text-xs uppercase tracking-[0.25em] mb-8">
        Used by high-growth local service businesses
      </p>
      <div className="relative">
        {/* Gradient masks — fade into hero background */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex animate-ticker whitespace-nowrap">
          {tickerItems.map((shop, i) => (
            <span
              key={i}
              className={`inline-block px-16 text-[#050119]/30 text-3xl hover:text-[#050119]/60 transition-colors ${shop.style}`}
              style={{ fontFamily: shop.style.includes('italic') ? 'serif' : undefined }}
            >
              {shop.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
