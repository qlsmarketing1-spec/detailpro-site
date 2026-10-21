'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** object-position focal point for the cover crop */
  focal?: string;
};

type Props = {
  /** Wordmark logo — rendered as a plaque on the hero photo */
  logo: Shot;
  /** Landscape shot; carries the row */
  hero: Shot;
  /** Portrait shot; fills the side column */
  portrait: Shot;
  /** Accessible name for the row — the section itself stays text-free */
  label: string;
  /** Mirror the row: hero moves right, portrait left */
  flip?: boolean;
  /** Above the fold: eager images, revealed from the server */
  priority?: boolean;
};

const FRAME =
  'relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-xl shadow-black/5 ' +
  'transition-all duration-500 ease-out group-hover:ring-[#5e25fa]/30 group-hover:shadow-2xl group-hover:shadow-[#5e25fa]/15';

const IMG = 'object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]';

export default function CompanyShowcase({
  logo,
  hero,
  portrait,
  label,
  flip = false,
  priority = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Above the fold: visible in the server HTML, so it needs no JS to appear.
  const [shown, setShown] = useState(priority);

  useEffect(() => {
    if (shown) return;
    const el = ref.current;

    // No IntersectionObserver support — reveal rather than leave images hidden.
    if (!el || typeof IntersectionObserver === 'undefined') {
      const t = setTimeout(() => setShown(true), 0);
      return () => clearTimeout(t);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  /** Animation class + delay while revealed; simply hidden before that. */
  const anim = (name: string, extra = '', delay?: string) => ({
    className: `${shown ? name : 'opacity-0'} ${extra}`.trim(),
    style: shown && delay ? { animationDelay: delay } : undefined,
  });

  // The hero slides in from whichever edge it sits against.
  const heroAnim = flip ? 'animate-converge-right' : 'animate-converge-left';
  const portraitAnim = flip ? 'animate-converge-left' : 'animate-converge-right';

  return (
    <section aria-label={label} className="relative bg-white px-6 py-14 md:py-20 overflow-hidden">
      <div
        ref={ref}
        className="group relative mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:h-[500px] lg:grid-cols-12"
      >
        {/* Hero photo + logo plaque */}
        <div
          className={`relative lg:col-span-8 ${flip ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div {...anim(heroAnim, 'h-full')}>
            <div className="h-full transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
              <div className={`${FRAME} aspect-[3/2] lg:aspect-auto`}>
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority={priority}
                  className={IMG}
                  style={{ objectPosition: hero.focal ?? '50% 50%' }}
                />

                {/* Wordmark — transparent PNG, no plaque box; a drop-shadow (not a box-shadow)
                    so the shadow follows the mark's silhouette instead of drawing a rectangle */}
                <div
                  {...anim(
                    'animate-emblem-stamp',
                    `absolute bottom-4 md:bottom-6 w-[38%] max-w-[210px] transition-transform duration-500 ease-out group-hover:scale-[1.05] ${
                      flip ? 'right-4 md:right-6' : 'left-4 md:left-6'
                    }`,
                    '0.45s',
                  )}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    sizes="210px"
                    priority={priority}
                    className="w-full h-auto object-contain"
                    style={{
                      filter:
                        'drop-shadow(0 2px 4px rgba(0,0,0,0.55)) drop-shadow(0 12px 32px rgba(0,0,0,0.6))',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portrait photo */}
        <div className={`relative lg:col-span-4 ${flip ? 'lg:order-1' : 'lg:order-2'}`}>
          <div {...anim(portraitAnim, 'h-full', '0.12s')}>
            <div className="h-full transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
              <div className={`${FRAME} aspect-[3/4] lg:aspect-auto`}>
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority={priority}
                  className={IMG}
                  style={{ objectPosition: portrait.focal ?? '50% 50%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
