import { useEffect, useState } from 'react';
import { Menu, X, GraduationCap, Phone, MessageCircle } from 'lucide-react';
import { branding } from '../../public/branding/branding';
import { SocialIcons } from './SocialIcons';
import { scrollToSection } from './scrollToSection';
import { AnnouncementBar } from './AnnouncementBar';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Academics', id: 'academics' },
  { label: 'Facilities', id: 'facilities' },
  { label: 'Activities', id: 'activities' },
  { label: 'Events', id: 'events' },
  { label: 'Contact', id: 'contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scrollspy — track which section is in view
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <AnnouncementBar />
      {/* Top info bar — desktop only */}
      <div className={`hidden lg:block transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="bg-primary-900 text-white text-sm">
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-6 text-primary-100">
              <span><span className="text-accent-400">•</span> UKG Classes</span>
              <span><span className="text-accent-400">•</span> Student Achievements</span>
              <span><span className="text-accent-400">•</span> Annual Sports Day</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-primary-200">Follow Us:</span>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-primary-900/5' : 'bg-white'}`}>
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'}`}>
            {/* Logo */}
            <button onClick={() => handleNav('home')} className="flex items-center gap-2 sm:gap-3 group min-w-0">
              <img src={branding.logo} alt={branding.schoolName} className="w-9 h-9 sm:w-12 sm:h-12 xl:w-14 xl:h-14 shrink-0 rounded-full shadow-md ring-2 ring-accent-400/60 transition-transform group-hover:scale-105" />
              <div className="text-left min-w-0 whitespace-nowrap">
                <span className="block font-serif font-bold text-[13px] min-[400px]:text-sm sm:text-lg xl:text-xl text-primary-900 leading-tight">{branding.schoolName}</span>
                <span className="hidden min-[480px]:block text-[9px] sm:text-[10px] xl:text-[11px] text-accent-700 font-semibold tracking-[0.12em] uppercase truncate">{branding.tagline}</span>
              </div>
            </button>

            {/* Desktop nav */}
            <ul className="hidden xl:flex items-center gap-0.5 2xl:gap-1 ml-auto mr-3">
              {navLinks.map((link) => {
                const active = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <button onClick={() => handleNav(link.id)}
                      className={`px-3 2xl:px-4 py-2 text-sm font-medium transition-colors relative group ${
                        active ? 'text-accent-600' : 'text-primary-800 hover:text-accent-600'
                      }`}>
                      {link.label}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent-500 transition-all duration-300 ${
                        active ? 'w-2/3' : 'w-0 group-hover:w-2/3'
                      }`} />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* CTA + mobile toggle — always visible, scales with the screen */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              <button onClick={() => handleNav(branding.admission.sectionId)} aria-label="Admissions"
                className="inline-flex whitespace-nowrap items-center gap-1 sm:gap-2 bg-accent-500 hover:bg-accent-600 text-primary-950 font-semibold text-[11px] sm:text-sm px-2.5 sm:px-4 2xl:px-5 py-1.5 sm:py-2.5 max-[359px]:p-2 rounded-full transition-all hover:shadow-lg hover:shadow-accent-500/30">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="max-[359px]:hidden sm:hidden">Apply</span>
                <span className="hidden sm:inline">Admissions</span>
              </button>
              <button onClick={() => setMenuOpen(true)}
                className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-primary-800 hover:bg-primary-50 transition-colors"
                aria-label="Open menu">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-[60] xl:hidden transition-all duration-300 ${menuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-primary-950/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
             onClick={() => setMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 flex flex-col ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between px-5 h-20 border-b border-primary-100 shrink-0">
            <div className="flex items-center gap-2.5">
              <img src={branding.logo} alt={branding.schoolName} className="w-11 h-11 rounded-full ring-2 ring-accent-400/60" />
              <span className="font-serif font-bold text-base text-primary-900 leading-tight whitespace-nowrap">{branding.schoolName}</span>
            </div>
            <button onClick={() => setMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-lg text-primary-800 hover:bg-primary-50" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto py-4 no-scrollbar">
            {navLinks.map((link, i) => {
              const active = activeSection === link.id;
              return (
                <li key={link.id} style={{ animationDelay: `${i * 60}ms` }}
                  className={menuOpen ? 'animate-fade-in' : ''}>
                  <button onClick={() => handleNav(link.id)}
                    className={`w-full text-left px-6 py-3.5 text-base font-medium transition-colors flex items-center gap-3 group ${
                      active ? 'bg-accent-50 text-accent-600' : 'text-primary-800 hover:bg-primary-50 hover:text-accent-600'
                    }`}>
                    <span className={`w-1.5 h-1.5 rounded-full transition-transform ${
                      active ? 'bg-accent-500 scale-150' : 'bg-accent-400 group-hover:scale-150'
                    }`} />
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="p-5 border-t border-primary-100 shrink-0 space-y-3">
            <button onClick={() => handleNav(branding.admission.sectionId)}
              className="w-full bg-accent-500 hover:bg-accent-600 text-primary-950 font-semibold py-3.5 rounded-full transition-colors flex items-center justify-center gap-2">
              <GraduationCap size={18} /> Apply for Admission
            </button>
            <a href={branding.contact.whatsappHref} target="_blank" rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold py-3 rounded-full transition-colors flex items-center justify-center gap-2">
              <MessageCircle size={18} /> Enquire Now
            </a>
            <a href={branding.contact.phoneHref} className="flex items-center justify-center gap-2 text-sm text-primary-700">
              <Phone size={15} className="text-accent-500" /> {branding.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
