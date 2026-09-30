import { Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { images } from '@/config/images';

const leaders = [
  { name: 'Dr. Anjali Mehta', role: 'Principal', img: images.principal, bio: '30 years in education. PhD in Educational Leadership. Believes every child has a spark worth igniting.' },
  { name: 'Mr. Rajesh Sharma', role: 'Vice Principal', img: images.viceLeader, bio: 'Mathematics & pedagogy expert. Champions project-based learning and student wellbeing.' },
  { name: 'Ms. Kavita Nair', role: 'Head of Sciences', img: images.achievers, bio: 'Physicist turned mentor. Leads the STEM & robotics innovation lab with infectious curiosity.' },
];

export function Leadership() {
  return (
    <section className="py-10 lg:py-12 bg-gradient-to-b from-primary-50/40 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-accent-600 font-semibold text-sm tracking-wider uppercase mb-3">Leadership</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">Guided by Experience & Heart</h2>
          <p className="text-primary-600 text-base sm:text-lg leading-relaxed">Meet the educators who shape our school's vision and culture every day.</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {leaders.map((p, i) => (
            <Reveal key={p.name} direction="up" delay={i * 120}>
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden max-w-xs mx-auto">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/10 to-transparent" />
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-xl font-bold text-white">{p.name}</h3>
                    <p className="text-accent-300 text-sm font-medium">{p.role}</p>
                  </div>
                </div>
                {/* Bio */}
                <div className="p-4">
                  <Quote size={28} className="text-accent-300 mb-2" />
                  <p className="text-sm text-primary-600 leading-relaxed italic">"{p.bio}"</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
