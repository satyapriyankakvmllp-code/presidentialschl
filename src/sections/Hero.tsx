import { ArrowRight, Play, Sparkles, BookOpen, Award, Users } from 'lucide-react';
import { branding } from '../../public/branding/branding';
import { images } from '@/config/images';
import { scrollToSection } from '@/components/scrollToSection';

export function Hero() {
  const { hero } = branding;

  return (
    <section id="home" className="relative lg:min-h-[calc(100vh-8rem)] flex items-center pt-8 lg:pt-10 pb-16 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-primary-300/20 rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-accent-400/10 rounded-full animate-bounce-slow" />
        <svg className="absolute top-10 right-10 w-24 h-24 text-primary-200/30 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.39 8.25L21 9.27L16.16 13.88L17.29 20.49L12 17.36L6.71 20.49L7.84 13.88L3 9.27L9.61 8.25L12 2Z"/></svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <button type="button" onClick={() => scrollToSection(branding.admission.sectionId)}
              className="inline-flex items-center gap-2 bg-accent-100 hover:bg-accent-200 text-accent-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-down transition-colors cursor-pointer">
              <Sparkles size={16} /> {hero.badge}
            </button>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-900 leading-[1.1] mb-6">
              <span className="block animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>{hero.titleA}</span>
              <span className="block text-gradient animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>{hero.titleB}</span>
            </h1>

            <p className="text-base sm:text-lg text-primary-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
              <button onClick={() => scrollToSection(branding.admission.sectionId)}
                className="group inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-950 font-semibold px-7 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-1">
                {hero.primaryCta}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => scrollToSection('about')}
                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-50 text-primary-800 font-semibold px-7 py-4 rounded-full border-2 border-primary-200 hover:border-primary-400 transition-all">
                <Play size={16} className="text-accent-500" /> {hero.secondaryCta}
              </button>
            </div>

            {/* Quick highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 pt-8 border-t border-primary-100 animate-fade-up" style={{ animationDelay: '0.9s', opacity: 0 }}>
              {[
                { icon: BookOpen, label: 'CBSE Curriculum' },
                { icon: Award, label: 'Award-Winning' },
                { icon: Users, label: 'Small Batches' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center lg:items-start gap-1.5">
                  <item.icon size={22} className="text-accent-500" />
                  <span className="text-xs sm:text-sm font-medium text-primary-700 text-center lg:text-left">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image with decorative frame */}
          <div className="relative order-1 lg:order-2 animate-scale-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="relative">
              {/* Background decorative blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-accent-400 rounded-[2.5rem] rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-bl from-accent-300 to-primary-500 rounded-[2.5rem] -rotate-3 opacity-10" />

              {/* Image */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-900/20 aspect-[4/3] sm:aspect-square">
                <img src={images.hero} alt="School campus building" className="w-full h-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-white rounded-2xl shadow-xl p-4 sm:p-5 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center shrink-0">
                    <Award size={24} className="text-accent-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-900 leading-none">28+</div>
                    <div className="text-xs text-primary-500 mt-1">Years of Excellence</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-primary-900 text-white rounded-2xl shadow-xl px-4 py-3 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success-400 animate-pulse-soft" />
                  <span className="text-xs font-semibold">Accredited 'A' Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,32 C320,80 720,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
