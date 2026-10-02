import { FileText, ClipboardCheck, UserCheck, Mail, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { branding } from '../../public/branding/branding';
import { scrollToSection } from '@/components/scrollToSection';
import { SectionBackdrop } from '@/components/SectionBackdrop';
import { images } from '@/config/images';

const steps = [
  { icon: FileText, title: 'Submit Enquiry', desc: 'Fill out the online enquiry form or visit our admissions office.' },
  { icon: ClipboardCheck, title: 'Assessment & Interaction', desc: 'Age-appropriate assessment and a friendly interaction with the child.' },
  { icon: UserCheck, title: 'Confirmation & Onboarding', desc: 'Receive admission confirmation and complete the enrolment formalities.' },
];

const requirements = [
  'Completed admission form',
  'Birth certificate (photocopy)',
  'Previous school report card',
  '4 passport-size photographs',
  'Aadhaar card of student & parents',
  'Immunisation record',
];

export function Admissions() {
  return (
    <section id="admissions" className="py-10 lg:py-12 relative overflow-hidden">
      <SectionBackdrop image={images.athletics} side="right" tone="white" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-accent-600 font-semibold text-sm tracking-wider uppercase mb-3">Admissions Open {branding.admission.year}</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">Begin Your Child's Journey With Us</h2>
          <p className="text-primary-600 text-base sm:text-lg leading-relaxed">Three simple steps stand between you and a world of opportunity for your child.</p>
        </Reveal>

        {/* Steps timeline */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8 relative">
          {/* Connecting line — desktop */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 border-t-2 border-dashed border-primary-200" />
          {steps.map((s, i) => (
            <Reveal key={s.title} direction="up" delay={i * 150}>
              <div className="relative text-center">
                <div className="relative inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 items-center justify-center mb-5 shadow-lg">
                  <s.icon size={28} className="text-white" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent-500 text-primary-950 text-sm font-bold flex items-center justify-center">{i + 1}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">{s.title}</h3>
                <p className="text-sm text-primary-600 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA banner */}
        <Reveal direction="up">
          <div className="grid lg:grid-cols-2 gap-6 bg-gradient-to-r from-primary-800 to-primary-600 rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/20">
            {/* Left: requirements */}
            <div className="p-8 sm:p-10 lg:p-12">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">Documents Required</h3>
              <p className="text-primary-200 text-sm mb-6">Please keep the following ready for a smooth admission process.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {requirements.map((r) => (
                  <div key={r} className="flex items-start gap-2.5 text-white">
                    <CheckCircle2 size={18} className="text-accent-400 shrink-0 mt-0.5" />
                    <span className="text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: CTA */}
            <div className="bg-accent-500 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">Ready to Apply?</h3>
              <p className="text-white/90 text-sm mb-6 leading-relaxed">Our admissions team is here to guide you through every step. Reach out today — we would love to welcome your family.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={branding.contact.whatsappHref} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#25D366] font-semibold px-6 py-3.5 rounded-full hover:bg-primary-50 transition-colors">
                  <MessageCircle size={18} /> Enquire Now
                </a>
                <a href={branding.contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-accent-600 text-primary-950 font-semibold px-6 py-3.5 rounded-full hover:bg-accent-700 transition-colors">
                  Call Now <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
