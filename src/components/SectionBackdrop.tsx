// Decorative, non-interactive background for a section.
// Layers: soft colour wash -> faded school photo -> drifting educational doodles -> floating blobs.
// Everything is low-opacity and masked so text on top stays readable.

type Tone = 'white' | 'tint' | 'navy';

interface Props {
  /** Photo from /public/images, e.g. images.classroom */
  image?: string;
  /** Which side the photo fades in from */
  side?: 'left' | 'right';
  tone?: Tone;
  /** Hide the doodle pattern (e.g. when a section is already busy) */
  noPattern?: boolean;
}

const wash: Record<Tone, string> = {
  // Unified blue theme: soft sky-blue washes with a faint gold glow at the edges.
  white: 'bg-gradient-to-b from-[#f2f6fd] via-[#e6eefa] to-[#f2f6fd]',
  tint: 'bg-gradient-to-b from-[#dde8f8] via-[#eaf1fb] to-[#f7f1dc]/70',
  navy: 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900',
};

export function SectionBackdrop({ image, side = 'right', tone = 'white', noPattern }: Props) {
  const dark = tone === 'navy';
  const mask =
    side === 'right'
      ? 'linear-gradient(to left, rgba(0,0,0,.9), transparent 70%)'
      : 'linear-gradient(to right, rgba(0,0,0,.9), transparent 70%)';

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 ${wash[tone]}`} />

      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className={`absolute top-0 h-full w-full sm:w-3/5 lg:w-1/2 object-cover ${side === 'right' ? 'right-0' : 'left-0'} ${
            dark ? 'opacity-[0.10]' : 'opacity-[0.12] sm:opacity-[0.16]'
          }`}
          style={{ WebkitMaskImage: mask, maskImage: mask }}
        />
      )}

      {!noPattern && (
        <div className="absolute -inset-[240px] edu-pattern-drift motion-reduce:animate-none">
          <div className={`absolute inset-0 edu-pattern ${dark ? 'edu-pattern-light' : ''}`} />
        </div>
      )}

      <div className={`absolute -top-24 ${side === 'right' ? '-left-20' : '-right-20'} w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl animate-float motion-reduce:animate-none ${dark ? 'bg-accent-400/10' : 'bg-accent-200/25'}`} />
      <div className={`absolute -bottom-24 ${side === 'right' ? '-right-16' : '-left-16'} w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl animate-float-delayed motion-reduce:animate-none ${dark ? 'bg-primary-500/20' : 'bg-primary-200/30'}`} />
    </div>
  );
}
