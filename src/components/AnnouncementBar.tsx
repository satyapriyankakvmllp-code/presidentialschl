import { Sparkles } from 'lucide-react';
import { branding } from '../../public/branding/branding';
import { scrollToSection } from './scrollToSection';

// Slim running banner. Clickable -> jumps to Admissions. Pauses on hover/focus.
export function AnnouncementBar() {
  const items = [
    `Admissions Open – ${branding.admission.year}`,
    'UKG Classes',
    'Celebrating Student Achievements',
    'Annual Sports Day',
    'Creative Arts & School Activities',
  ];
  const track = [...items, ...items, ...items, ...items];

  return (
    <button
      type="button"
      onClick={() => scrollToSection(branding.admission.sectionId)}
      aria-label={`Admissions Open ${branding.admission.year} — go to admissions`}
      className="group block w-full overflow-hidden bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500 text-primary-950 cursor-pointer"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused] motion-reduce:animate-none py-1 sm:py-1.5 text-[11px] sm:text-[13px] leading-5 font-semibold whitespace-nowrap">
        {track.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-4 sm:px-6">
            <Sparkles size={12} className="shrink-0" />
            <span className={i % items.length === 0 ? 'font-bold' : ''}>{t}</span>
          </span>
        ))}
      </div>
    </button>
  );
}
