import { useEffect, useState } from 'react';
import { branding } from '../../public/branding/branding';

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.floor(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setDone(true), 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-primary-800 to-primary-950 transition-opacity duration-500 ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Animated logo */}
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-accent-400/30 blur-xl animate-pulse-soft" />
        <img
          src={branding.logo}
          alt={branding.schoolName}
          className="relative w-32 h-32 object-contain animate-bounce-slow"
        />
      </div>

      {/* School name */}
      <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1 animate-fade-in">
        {branding.schoolName}
      </h1>
      <p className="text-accent-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {branding.tagline}
      </p>

      {/* Progress bar */}
      <div className="w-48 sm:w-64 h-1.5 bg-primary-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent-400 to-accent-500 rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-primary-300 text-xs mt-3 font-medium">{progress}%</span>
    </div>
  );
}
