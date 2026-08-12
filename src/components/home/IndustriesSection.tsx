import Image from 'next/image';
import Link from 'next/link';

const PHOTO_TILES = [
  {
    label: 'Auto Detailing',
    image: '/images/jeep-foam.jpeg',
    alt: 'Mobile auto detailing technician foam-washing a vehicle in a driveway',
  },
  {
    label: 'Roofing',
    image: '/images/roofers.jpg',
    alt: 'Two roofing contractors installing shingles on a residential roof',
  },
  {
    label: 'Snow Removal',
    image: '/images/snow-cat.jpg',
    alt: 'Skid-steer loader clearing a large pile of snow from a commercial lot',
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">Who We Help</p>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-[44px] font-medium text-[#050119] leading-[1.15] tracking-tight">
            Built for businesses like yours.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {PHOTO_TILES.map((tile) => (
            <div key={tile.label} className="relative aspect-[3/4] rounded-3xl overflow-hidden group">
              <Image
                src={tile.image}
                alt={tile.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050119]/85 via-[#050119]/10 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-bold text-base md:text-lg leading-tight">
                {tile.label}
              </p>
            </div>
          ))}

          {/* More tile */}
          <Link
            href="/companies"
            className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#050119] flex flex-col items-center justify-center text-center p-4 hover:bg-[#050119]/90 transition-colors group"
          >
            <div className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center mb-3 group-hover:border-[#5e25fa] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <p className="text-white font-bold text-base md:text-lg leading-tight">And More</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
