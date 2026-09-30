import { branding } from '../../public/branding/branding';

const icons = {
  facebook: 'M12 2C6.48 2 2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 17 22 12c0-5.52-4.48-10-10-10z',
  instagram: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.81.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.81-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.81-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.41-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z',
  youtube: 'M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 00.5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 002.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 002.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.6 15.6V8.4l6.25 3.6-6.25 3.6z',
};

type Platform = keyof typeof icons;
const platforms = Object.keys(icons) as Platform[];

/** Social links driven entirely by branding.social — add/remove platforms there. */
export function SocialIcons({ size = 'sm', className = '' }: { size?: 'sm' | 'md'; className?: string }) {
  const box = size === 'md' ? 'w-10 h-10' : 'w-7 h-7';
  const bg = size === 'md' ? 'bg-primary-800' : 'bg-primary-700';
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {platforms.filter((p) => branding.social[p]).map((p) => (
        <a key={p} href={branding.social[p]} target="_blank" rel="noopener noreferrer" aria-label={p}
           className={`${box} rounded-full ${bg} hover:bg-accent-500 flex items-center justify-center transition-all hover:scale-110`}>
          <svg viewBox="0 0 24 24" fill="white" className={size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5'}>
            <path d={icons[p]} />
          </svg>
        </a>
      ))}
    </div>
  );
}
