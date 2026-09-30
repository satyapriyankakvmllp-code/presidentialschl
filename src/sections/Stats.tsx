import { useEffect, useRef, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { branding } from '../../public/branding/branding';

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

function StatCard({ value, suffix, label, inView, index }: { value: string; suffix: string; label: string; inView: boolean; index: number }) {
  const num = parseInt(value, 10);
  const count = useCountUp(num, inView);
  return (
    <Reveal direction="scale" delay={index * 100}>
      <div className="text-center py-8 sm:py-10 px-4">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif">
          {count}<span className="text-accent-400">{suffix}</span>
        </div>
        <div className="text-xs sm:text-sm text-primary-200 mt-2 font-medium uppercase tracking-wide">{label}</div>
      </div>
    </Reveal>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative -mt-2 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-3xl shadow-2xl shadow-primary-900/20 overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-primary-700/50">
            {branding.stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} inView={inView} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
