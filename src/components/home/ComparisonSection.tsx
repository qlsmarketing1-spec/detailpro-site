type Status = 'yes' | 'no' | 'partial';

type Row =
  | { type: 'status'; label: string; sp: Status; diy: Status }
  | { type: 'stat'; label: string; spValue: string; diyValue: string };

const ROWS: Row[] = [
  { type: 'stat', label: 'Local industry leader', spValue: '6–18 months', diyValue: '2–5 years' },
  { type: 'stat', label: 'Time to first booked job', spValue: 'Days', diyValue: 'Weeks' },
  { type: 'status', label: 'Ranks on Google Maps / local search', sp: 'yes', diy: 'partial' },
  { type: 'status', label: 'After-hours & missed-call coverage', sp: 'yes', diy: 'no' },
  { type: 'status', label: 'Review generation on autopilot', sp: 'yes', diy: 'no' },
  { type: 'status', label: 'Follow-up automated 24/7', sp: 'yes', diy: 'no' },
  { type: 'status', label: 'One system for leads — website, ads, SMS & forms connected', sp: 'yes', diy: 'no' },
  { type: 'status', label: 'You own the system', sp: 'yes', diy: 'yes' },
  { type: 'status', label: 'Ongoing maintenance included', sp: 'yes', diy: 'no' },
];

function StatusIcon({ status }: { status: Status }) {
  if (status === 'yes') {
    return (
      <div className="w-6 h-6 rounded-full bg-[#5e25fa] flex items-center justify-center flex-shrink-0">
        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  if (status === 'no') {
    return (
      <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
      <span className="w-2.5 h-0.5 rounded-full bg-black/30" />
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">The Alternative</p>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-[44px] font-medium text-[#050119] leading-[1.15] tracking-tight">
            Compared to figuring it out alone.
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[480px]">
            {/* Header row */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr]">
              <div />
              <div className="text-center px-3 pb-4">
                <p className="text-[#6b6b76] text-sm font-semibold">Doing It Yourself</p>
              </div>
              <div className="text-center px-3 pb-4 bg-[#5e25fa]/6 rounded-t-2xl">
                <p className="text-[#5e25fa] text-xs font-bold uppercase tracking-widest mb-1">This Is Us</p>
                <p className="text-[#050119] text-sm font-bold">Service Pro</p>
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => {
              const isLast = i === ROWS.length - 1;
              return (
                <div key={row.label} className="grid grid-cols-[1.6fr_1fr_1fr] items-center">
                  <div className="py-4 pr-4 border-t border-black/10">
                    <p className="text-[#050119] text-sm font-medium">{row.label}</p>
                  </div>
                  {row.type === 'status' ? (
                    <>
                      <div className="flex justify-center py-4 border-t border-black/10">
                        <StatusIcon status={row.diy} />
                      </div>
                      <div className={`flex justify-center py-4 border-t border-[#5e25fa]/15 bg-[#5e25fa]/6 ${isLast ? 'rounded-b-2xl' : ''}`}>
                        <StatusIcon status={row.sp} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-center py-4 border-t border-black/10">
                        <span className="text-[#6b6b76] text-sm font-semibold bg-black/5 rounded-full px-3 py-1">{row.diyValue}</span>
                      </div>
                      <div className={`flex justify-center py-4 border-t border-[#5e25fa]/15 bg-[#5e25fa]/6 ${isLast ? 'rounded-b-2xl' : ''}`}>
                        <span className="text-[#5e25fa] text-sm font-bold bg-white rounded-full px-3 py-1 shadow-sm">{row.spValue}</span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
