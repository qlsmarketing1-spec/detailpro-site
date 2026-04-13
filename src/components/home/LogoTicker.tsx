const shops = [
  { name: 'AUTO ARMOR', style: 'font-black tracking-widest' },
  { name: 'Precision Shine', style: 'font-light italic' },
  { name: 'DetailForce', style: 'font-semibold' },
  { name: 'CERAMIC PRO SHOP', style: 'font-black tracking-tighter uppercase' },
  { name: 'Gloss Theory', style: 'font-medium italic' },
  { name: 'REVIVE AUTO', style: 'font-bold tracking-widest uppercase' },
  { name: 'Shine Squad', style: 'font-semibold tracking-tight' },
  { name: 'VELOCITY DETAILING', style: 'font-black uppercase' },
  { name: 'Obsessed Auto', style: 'font-light tracking-wider' },
];

// Triple for seamless scroll
const tickerItems = [...shops, ...shops, ...shops];

export default function LogoTicker() {
  return (
    <section className="pb-16 pt-0 overflow-hidden relative">
      <p className="text-center text-[#a3a3a3] text-xs uppercase tracking-[0.25em] mb-8">
        Used by high-growth detailing shops
      </p>
      <div className="relative">
        {/* Gradient masks — fade into hero background */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#050119] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#050119] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-ticker whitespace-nowrap">
          {tickerItems.map((shop, i) => (
            <span
              key={i}
              className={`inline-block px-16 text-[#e7e6ee]/40 text-3xl hover:text-[#e7e6ee]/70 transition-colors ${shop.style}`}
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
