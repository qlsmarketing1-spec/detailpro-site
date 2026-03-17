const shops = [
  { name: 'AUTO ARMOR', style: 'font-black tracking-widest' },
  { name: 'Precision Shine', style: 'font-light italic' },
  { name: 'SHINE SQUAD', style: 'font-bold tracking-wide uppercase' },
  { name: 'DetailForce', style: 'font-semibold' },
  { name: 'CERAMIC PRO SHOP', style: 'font-black tracking-tighter uppercase' },
  { name: 'Gloss Theory', style: 'font-medium italic' },
  { name: 'REVIVE AUTO', style: 'font-bold tracking-widest uppercase' },
  { name: 'ShineLab', style: 'font-semibold tracking-tight' },
  { name: 'VELOCITY DETAILING', style: 'font-black uppercase' },
  { name: 'Obsessed Auto', style: 'font-light tracking-wider' },
];

// Triple for seamless scroll
const tickerItems = [...shops, ...shops, ...shops];

export default function LogoTicker() {
  return (
    <section className="py-12 border-y border-white/5 overflow-hidden">
      <p className="text-center text-[#a3a3a3] text-sm uppercase tracking-widest mb-6">
        Used by high-growth detailing shops
      </p>
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050119] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050119] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-ticker whitespace-nowrap">
          {tickerItems.map((shop, i) => (
            <span
              key={i}
              className={`inline-block px-8 text-[#e7e6ee]/50 text-lg hover:text-[#e7e6ee] transition-colors ${shop.style}`}
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
