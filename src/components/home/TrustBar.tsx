const stats = [
  { value: '$22k', label: 'avg. monthly revenue after DetailPro' },
  { value: '30 sec', label: 'lead response time, automatically' },
  { value: 'Day 1', label: 'full system live — ads, CRM, automations' },
  { value: '10%', label: 'rev-share only — zero flat fees' },
];

export default function TrustBar() {
  return (
    <div className="bg-[#5e25fa]/10 border-y border-[#5e25fa]/20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center ${i < stats.length - 1 ? 'md:border-r md:border-[#5e25fa]/20' : ''}`}
            >
              <p className="text-3xl font-black text-[#e7e6ee] mb-1">{stat.value}</p>
              <p className="text-[#a3a3a3] text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
