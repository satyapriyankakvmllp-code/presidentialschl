import { FlaskConical, BookOpen, Bus, HeartPulse, Utensils, Music, Wifi, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { images } from '@/config/images';
import { SectionBackdrop } from '@/components/SectionBackdrop';

const facilities = [
  { icon: FlaskConical, title: 'Science & Robotics Labs', desc: 'Fully-equipped physics, chemistry, biology and robotics labs for hands-on discovery.', img: images.scienceLab },
  { icon: BookOpen, title: 'Digital Library', desc: '20,000+ books, e-resources and quiet study zones for every reading level.', img: images.library },
  { icon: Utensils, title: 'Nutritious Cafeteria', desc: 'Hygienic kitchen serving balanced, freshly prepared meals and snacks.', img: images.classroom },
  { icon: HeartPulse, title: 'Sports Complex', desc: 'Cricket, football, basketball, athletics track and indoor games arena.', img: images.athletics },
];

const extra = [
  { icon: Bus, label: 'GPS-Enabled Transport' },
  { icon: ShieldCheck, label: '24/7 Security & CCTV' },
  { icon: Wifi, label: 'High-Speed Wi-Fi Campus' },
  { icon: Music, label: 'Music & Dance Studios' },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-10 lg:py-12 relative overflow-hidden">
      <SectionBackdrop image={images.campus} side="right" tone="tint" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-accent-600 font-semibold text-sm tracking-wider uppercase mb-3">Campus & Facilities</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">Built for Safe, Joyful Learning</h2>
          <p className="text-primary-600 text-base sm:text-lg leading-relaxed">Our 8-acre campus is thoughtfully designed with modern infrastructure that supports both academics and co-curricular life.</p>
        </Reveal>

        {/* Facility cards with images */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {facilities.map((f, i) => (
            <Reveal key={f.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 100}>
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 aspect-[16/9] sm:aspect-[16/8]">
                <img src={f.img} alt={f.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-11 h-11 rounded-xl bg-accent-500 flex items-center justify-center shrink-0">
                      <f.icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white">{f.title}</h3>
                  </div>
                  <p className="text-sm text-primary-100 leading-relaxed max-w-md">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Extra amenities bar */}
        <Reveal direction="up">
          <div className="bg-primary-900 rounded-2xl p-5 sm:p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {extra.map((e) => (
                <div key={e.label} className="flex items-center gap-3 text-white group">
                  <div className="w-11 h-11 rounded-xl bg-primary-700 group-hover:bg-accent-500 flex items-center justify-center shrink-0 transition-colors">
                    <e.icon size={20} />
                  </div>
                  <span className="text-sm font-medium leading-tight">{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
