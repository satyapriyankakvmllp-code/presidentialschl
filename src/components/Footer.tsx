import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { branding } from '../../public/branding/branding';
import { scrollToSection } from '@/components/scrollToSection';
import { SocialIcons } from '@/components/SocialIcons';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Academics', id: 'academics' },
  { label: 'Facilities', id: 'facilities' },
  { label: 'Activities', id: 'activities' },
  { label: 'Events', id: 'events' },
  { label: 'Admissions', id: 'admissions' },
  { label: 'Contact', id: 'contact' },
];

export function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={branding.logoLight} alt={branding.schoolName} className="w-14 h-14 rounded-full ring-2 ring-accent-400/60" />
              <div>
                <span className="block font-serif font-bold text-lg text-white">{branding.schoolName}</span>
                <span className="block text-[10px] text-accent-300 tracking-[0.14em] uppercase">{branding.tagline}</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-300 mb-5">{branding.tagline}. A premier institution committed to academic excellence, character building and holistic development since 1998.</p>
            <SocialIcons size="md" />
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-white font-bold text-lg mb-5">Quick Links</h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)}
                    className="text-sm text-primary-300 hover:text-accent-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-accent-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white font-bold text-lg mb-5">Reach Us</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={branding.contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-accent-400 transition-colors">
                  <MapPin size={18} className="text-accent-400 shrink-0 mt-0.5" />
                  <span>{branding.contact.addressLine1}, {branding.contact.addressLine2}</span>
                </a>
              </li>
              <li>
                <a href={branding.contact.phoneHref} className="flex items-center gap-3 hover:text-accent-400 transition-colors">
                  <Phone size={18} className="text-accent-400 shrink-0" /> {branding.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${branding.contact.email}`} className="flex items-center gap-3 hover:text-accent-400 transition-colors break-all">
                  <Mail size={18} className="text-accent-400 shrink-0" /> {branding.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-serif text-white font-bold text-lg mb-5">Admissions Enquiries</h4>
            <p className="text-sm text-primary-300 mb-4">Speak with our admissions counsellor for a personalised campus tour and consultation.</p>
            <a href={branding.contact.phoneHref}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-950 font-semibold text-sm px-5 py-3 rounded-full transition-colors">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-400 text-center sm:text-left">
            © {new Date().getFullYear()} {branding.schoolName}. All rights reserved.
          </p>
          <button onClick={() => scrollToSection('home')}
            className="inline-flex items-center gap-2 text-xs font-medium text-primary-300 hover:text-accent-400 transition-colors group">
            Back to Top <ArrowUp size={16} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
        <p className="mt-4 text-center text-xs text-primary-500">
          Developed by{' '}
          <a href={branding.developer.url} target="_blank" rel="noopener noreferrer"
             className="font-semibold text-primary-300 hover:text-accent-400 underline-offset-4 hover:underline transition-colors">
            {branding.developer.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
