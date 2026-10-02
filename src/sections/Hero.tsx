import { ArrowRight, Play, Sparkles, BookOpen, Award, Users } from 'lucide-react';
import { branding } from '../../public/branding/branding';
import { images } from '@/config/images';
import { scrollToSection } from '@/components/scrollToSection';
import { SectionBackdrop } from '@/components/SectionBackdrop';

export function Hero() {
  const { hero } = branding;

  return (
    <section id="home" className="relative flex items-center pt-6 sm:pt-8 lg:pt-8 pb-12 sm:pb-14 lg:pb-16 overflow-hidden bg-gradient-to-br from-[#dbe7f8] via-[#eef3fb] to-[#f6edc9]/70 lg:min-h-[min(600px,calc(100vh-9rem))]">
      <SectionBackdrop image={images.classroom} side="left" tone="tint" />
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-primary-300/20 rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-accent-400/10 rounded-full animate-bounce-slow" />
        <svg className="absolute top-10 right-10 w-24 h-24 text-primary-200/30 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.39 8.25L21 9.27L16.16 13.88L17.29 20.49L12 17.36L6.71 20.49L7.84 13.88L3 9.27L9.61 8.25L12 2Z"/></svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left: content */}
          <div className="text-center lg:text-left order-1 min-w-0">
            <button type="button" onClick={() => scrollToSection(branding.admission.sectionId)}
              className="inline-flex items-center gap-2 bg-accent-100 hover:bg-accent-200 text-accent-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5 animate-fade-down transition-colors cursor-pointer">
              <Sparkles size={16} /> {hero.badge}
            </button>

            <h1 className="font-serif text-[clamp(1.9rem,1.1rem+3.6vw,3.75rem)] font-bold text-primary-900 leading-[1.1] mb-4 sm:mb-5">
              <span className="block animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>{hero.titleA}</span>
              <span className="block text-gradient animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>{hero.titleB}</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-primary-600 max-w-xl mx-auto lg:mx-0 mb-5 sm:mb-7 leading-relaxed animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
              <button onClick={() => scrollToSection(branding.admission.sectionId)}
                className="group inline-flex flex-1 sm:flex-none min-w-[9.5rem] items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-950 font-semibold text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5">
                {hero.primaryCta}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => scrollToSection('about')}
                className="group inline-flex flex-1 sm:flex-none min-w-[9.5rem] items-center justify-center gap-2 bg-white hover:bg-primary-50 text-primary-800 font-semibold text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border-2 border-primary-200 hover:border-primary-400 transition-all">
                <Play size={16} className="text-accent-500" /> {hero.secondaryCta}
              </button>
            </div>

            {/* Quick highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-primary-100 animate-fade-up" style={{ animationDelay: '0.9s', opacity: 0 }}>
              {[
                { icon: BookOpen, label: 'CBSE Curriculum' },
                { icon: Award, label: 'Award-Winning' },
                { icon: Users, label: 'Small Batches' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center lg:items-start gap-1.5">
                  <item.icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-accent-500" />
                  <span className="text-[11px] sm:text-sm font-medium text-primary-700 text-center lg:text-left leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image with decorative frame */}
          <div className="relative order-2 min-w-0 w-full max-w-xl sm:max-w-2xl lg:max-w-none mx-auto animate-scale-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="relative">
              {/* Background decorative blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-accent-400 rounded-[2.5rem] rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-bl from-accent-300 to-primary-500 rounded-[2.5rem] -rotate-3 opacity-10" />

              {/* Image */}
              <div className="relative rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-900/20 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[5/4]">
                <img src={images.hero} alt="School campus building" className="w-full h-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-3 left-1 sm:-bottom-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-2.5 sm:p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-accent-100 flex items-center justify-center shrink-0">
                    <Award className="w-[18px] h-[18px] sm:w-6 sm:h-6 text-accent-600" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-primary-900 leading-none">28+</div>
                    <div className="text-[10px] sm:text-xs text-primary-500 mt-1">Years of Excellence</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-2 right-1 sm:-top-3 sm:-right-3 bg-primary-900 text-white rounded-xl sm:rounded-2xl shadow-xl px-3 py-2 sm:px-4 sm:py-3 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success-400 animate-pulse-soft" />
                  <span className="text-[10px] sm:text-xs font-semibold">Accredited 'A' Grade</span>
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
