import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

type IndustryTile = {
  label: string;
  /** Omit to render the violet gradient placeholder. */
  image?: string;
  alt: string;
  /** Optional case-study link. When set, the whole tile becomes a link. */
  href?: string;
};

const PHOTO_TILES: IndustryTile[] = [
  {
    label: 'Auto Detailing',
    image: '/images/clients/shine-squad/shine-squad-technician-foam-washing-black-jeep.webp',
    alt: 'Mobile auto detailing technician foam-washing a vehicle in a driveway',
  },
  {
    label: 'Roofing',
    image: '/images/services/roofing-contractors-installing-shingles-on-residential-roof.webp',
    alt: 'Two roofing contractors installing shingles on a residential roof',
  },
  {
    label: 'Snow Removal',
    image: '/images/services/skid-steer-loader-snow-removal-commercial-lot.webp',
    alt: 'Skid-steer loader clearing a large pile of snow from a commercial lot',
  },
  {
    label: 'Landscaping',
    image: '/images/services/landscaper-shoveling-mulch-beside-branded-work-truck.webp',
    alt: 'Landscaper in a work hoodie shoveling mulch beside a branded landscaping truck on a residential job site',
  },
];

const TILE_CLASS = 'relative block aspect-[3/4] rounded-3xl overflow-hidden group transition-shadow duration-300 hover:shadow-xl hover:shadow-[#050119]/10';

function TileInner({ tile }: { tile: IndustryTile }) {
  return (
    <>
      {tile.image ? (
        <Image
          src={tile.image}
          alt={tile.alt}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
        />
      ) : (
        <div role="img" aria-label={tile.alt} className="absolute inset-0 bg-gradient-to-br from-[#5e25fa] via-[#280aa5] to-[#050119]">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050119]/85 via-[#050119]/10 to-transparent" />
      <p className="absolute bottom-4 left-4 right-4 text-white font-bold text-base md:text-lg leading-tight">
        {tile.label}
      </p>
    </>
  );
}

export default function IndustriesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-[#5e25fa] font-semibold uppercase tracking-widest text-sm mb-4">Who We Help</p>
          <h2 className="font-serif text-3xl md:text-4xl xl:text-[44px] font-medium text-[#050119] leading-[1.15] tracking-tight">
            Built for businesses like yours.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {PHOTO_TILES.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 80}>
              {tile.href ? (
                <Link href={tile.href} className={TILE_CLASS}>
                  <TileInner tile={tile} />
                </Link>
              ) : (
                <div className={TILE_CLASS}>
                  <TileInner tile={tile} />
                </div>
              )}
            </Reveal>
          ))}

          {/* More tile: full-width strip on mobile, 5th column on desktop */}
          <Reveal delay={PHOTO_TILES.length * 80} className="col-span-2 md:col-span-1">
            <Link
              href="/companies"
              className="relative aspect-[3/1] md:aspect-[3/4] rounded-3xl overflow-hidden bg-[#050119] flex flex-col items-center justify-center text-center p-4 hover:bg-[#050119]/90 transition-all duration-300 hover:shadow-xl hover:shadow-[#050119]/10 group"
            >
              <div className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center mb-3 group-hover:border-[#5e25fa] transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="text-white font-bold text-base md:text-lg leading-tight">And More</p>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
