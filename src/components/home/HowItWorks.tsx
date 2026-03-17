'use client';
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const revenueData = [
  { month: 'Month 1', revenue: 5000 },
  { month: 'Month 2', revenue: 8500 },
  { month: 'Month 3', revenue: 13000 },
  { month: 'Month 4', revenue: 22000 },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#5e25fa]/20 border border-[#5e25fa]/30 text-[#5e25fa] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Simple Execution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e7e6ee]">Fill your calendar in 3 steps</h2>
        </div>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="sticky top-24 bg-[#0d0a2e] border border-white/10 rounded-[2.5rem] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 flex flex-col justify-center">
                <span className="text-[#5e25fa] font-bold text-sm uppercase tracking-widest mb-4">Step 1</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#e7e6ee] mb-4">Launch Professional Ads</h3>
                <p className="text-[#a3a3a3] leading-relaxed">
                  We deploy our library of &apos;Battle-Tested&apos; detailing ads to your local market. No guesswork, just high-intent leads interested in your services.
                </p>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2071&auto=format&fit=crop"
                  alt="Car being detailed with foam"
                  fill
                  className="object-cover"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="sticky top-24 bg-[#0a0d1a] border border-white/10 rounded-[2.5rem] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 flex flex-col justify-center">
                <span className="text-[#5e25fa] font-bold text-sm uppercase tracking-widest mb-4">Step 2</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#e7e6ee] mb-4">Automated 24/7 Follow-Up</h3>
                <p className="text-[#a3a3a3] leading-relaxed">
                  Our system text leads instantly. It answers basic questions, shares your pricing, and pushes them to book — while you stay on the buffer.
                </p>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
                  alt="Phone with automated messaging"
                  fill
                  className="object-cover"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="sticky top-24 bg-[#080b18] border border-white/10 rounded-[2.5rem] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 flex flex-col justify-center">
                <span className="text-[#5e25fa] font-bold text-sm uppercase tracking-widest mb-4">Step 3</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#e7e6ee] mb-4">Show Up &amp; Wash</h3>
                <p className="text-[#a3a3a3] leading-relaxed">
                  Your calendar fills up with qualified jobs. You just check your booking app in the morning, see where you need to be, and go do what you do best.
                </p>
              </div>
              <div className="p-8 flex flex-col items-center justify-center bg-[#0d0526]">
                <p className="text-[#5e25fa] font-bold text-sm uppercase tracking-widest mb-2">SHOP REVENUE</p>
                <p className="text-[#e7e6ee] font-bold text-xl mb-4">+110% Growth</p>
                <div className="w-full h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                      <XAxis dataKey="month" tick={{ fill: '#a3a3a3', fontSize: 12 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: '#a3a3a3', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                      <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
                        {revenueData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={`rgba(94,37,250,${0.4 + index * 0.2})`} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
