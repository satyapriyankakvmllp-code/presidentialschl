import { Star, Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionBackdrop } from '@/components/SectionBackdrop';
import { images } from '@/config/images';

const testimonials = [
  { name: 'Priya & Arjun Verma', role: 'Parents of Class VII student', rating: 5, text: 'The transformation in our son has been remarkable. The teachers truly know each child and the communication from school is exceptional.' },
  { name: 'Sunita Rao', role: 'Parent of Class X student', rating: 5, text: 'From academics to sports to values — The Presidential School has given our daughter confidence and a love for learning that goes far beyond marks.' },
  { name: 'Rahul & Meera Singh', role: 'Parents of Class III student', rating: 5, text: 'The primary wing is magical. Our son looks forward to school every single day. The activity-based approach really works.' },
];

export function Testimonials() {
  return (
    <section className="py-10 lg:py-12 bg-primary-900 relative overflow-hidden">
      <SectionBackdrop image={images.classroom} side="left" tone="navy" />
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-accent-400 font-semibold text-sm tracking-wider uppercase mb-3">Parent Voices</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Loved by Families</h2>
          <p className="text-primary-200 text-base sm:text-lg leading-relaxed">The trust of our parent community is our greatest achievement.</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={i * 120}>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-400/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Quote size={36} className="text-accent-400/40" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="text-accent-400 fill-accent-400" />
                    ))}
                  </div>
                </div>
                <p className="text-primary-100 leading-relaxed mb-6 flex-1 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-accent-500/20 border-2 border-accent-400/40 flex items-center justify-center text-accent-300 font-serif font-bold text-lg">{t.name.charAt(0)}</div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-primary-300">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
