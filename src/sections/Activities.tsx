import { Trophy, Palette, Music, Drama, Camera, Medal, Bike, Dumbbell } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { images } from '@/config/images';

const activities = [
  { icon: Palette, title: 'Art & Craft', desc: 'Painting, pottery, sculpture and craft workshops that spark visual creativity.' },
  { icon: Music, title: 'Music & Choir', desc: 'Vocal and instrumental training across classical and contemporary traditions.' },
  { icon: Drama, title: 'Drama & Theatre', desc: 'Annual productions, improv clubs and public speaking to build stage confidence.' },
  { icon: Camera, title: 'Photography Club', desc: 'Learn composition, editing and storytelling behind the lens.' },
];

const sports = [
  { icon: Trophy, label: 'Cricket' },
  { icon: Dumbbell, label: 'Basketball' },
  { icon: Bike, label: 'Athletics' },
  { icon: Medal, label: 'Badminton' },
];

export function Activities() {
  return (
    <section id="activities" className="py-10 lg:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-accent-600 font-semibold text-sm tracking-wider uppercase mb-3">Beyond the Classroom</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">Activities, Sports & Life Skills</h2>
          <p className="text-primary-600 text-base sm:text-lg leading-relaxed">Education extends far beyond textbooks. We nurture talents, teamwork and tenacity through a vibrant co-curricular programme.</p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Activities */}
          <div>
            <Reveal direction="left">
              <h3 className="font-serif text-xl font-bold text-primary-900 mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-accent-100 flex items-center justify-center"><Palette size={20} className="text-accent-600" /></span>
                Clubs & Activities
              </h3>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {activities.map((a, i) => (
                <Reveal key={a.title} direction="up" delay={i * 80}>
                  <div className="group bg-primary-50/50 hover:bg-white border border-primary-100 hover:shadow-lg rounded-xl p-4 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-11 h-11 rounded-xl bg-primary-100 group-hover:bg-accent-500 flex items-center justify-center mb-3 transition-colors">
                      <a.icon size={22} className="text-primary-700 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-semibold text-primary-900 mb-1.5">{a.title}</h4>
                    <p className="text-sm text-primary-600 leading-relaxed">{a.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sports */}
          <div>
            <Reveal direction="right">
              <h3 className="font-serif text-xl font-bold text-primary-900 mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center"><Trophy size={20} className="text-primary-700" /></span>
                Sports & Athletics
              </h3>
            </Reveal>
            <Reveal direction="right" delay={100}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] mb-4 group">
                <img src={images.sports} alt="Sports activities" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-white font-serif text-lg font-bold">Inter-School Champions 2025</p>
                  <p className="text-primary-200 text-sm">Cricket, Athletics & Basketball</p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {sports.map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-2 bg-primary-50/50 rounded-xl py-4 hover:bg-primary-100 transition-colors">
                    <s.icon size={26} className="text-accent-500" />
                    <span className="text-xs font-semibold text-primary-800">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
