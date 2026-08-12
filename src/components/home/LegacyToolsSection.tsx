import Image from 'next/image';

export default function LegacyToolsSection() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">Why Now</p>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-[44px] font-medium text-[#050119] leading-[1.15] tracking-tight mb-6">
            You can&apos;t build tomorrow&apos;s business with yesterday&apos;s tools.
          </h2>
          <p className="text-[#6b6b76] text-lg leading-relaxed max-w-lg mb-4">
            We&apos;re entering a new era for local business.
            Today's winning businesses adapt faster, reach customers
            more effectively, and build systems that allow them to do more with less.
          </p>
          <p className="text-[#6b6b76] text-lg leading-relaxed max-w-lg">
            The ones who win in the AI era will be bigger than ever before. We&apos;re here
            to build that next generation.
          </p>
        </div>

        {/* Photo */}
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-[#5e25fa]/20 via-[#280aa5]/10 to-transparent rounded-[2rem] blur-xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-black/10 shadow-xl shadow-black/5">
            <Image
              src="/images/2-cars-sign.jpeg"
              alt="Two technicians detailing cars in a driveway for a local auto detailing business"
              width={800}
              height={480}
              className="w-full h-[340px] md:h-[420px] object-cover object-[50%_22%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
