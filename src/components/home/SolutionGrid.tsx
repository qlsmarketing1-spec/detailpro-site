export default function SolutionGrid() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#e7e6ee] mb-16">The DetailPro Triad</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#5e25fa]/20 to-[#280aa5]/10 border border-[#5e25fa]/30 rounded-[32px] p-8">
            <div className="w-12 h-12 bg-[#5e25fa]/20 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#5e25fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e7e6ee] mb-3">High-Intent Ads</h3>
            <p className="text-[#a3a3a3] leading-relaxed">We don&apos;t just &apos;boost posts&apos;. We run proven ad sets that attract people looking for premium detailing and ceramic coatings.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-indigo-900/10 border border-indigo-500/30 rounded-[32px] p-8">
            <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e7e6ee] mb-3">Instant Automation</h3>
            <p className="text-[#a3a3a3] leading-relaxed">The second a lead inquires, they get an SMS. We book the job on the spot before they look at another shop&apos;s page.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-900/10 border border-blue-500/30 rounded-[32px] p-8">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e7e6ee] mb-3">Detailing CRM</h3>
            <p className="text-[#a3a3a3] leading-relaxed">A dashboard built just for you. Manage consumer jobs, fleet contracts, and ceramic maintenance with ease.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
