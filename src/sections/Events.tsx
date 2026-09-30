import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { images } from '@/config/images';
import { scrollToSection } from '@/components/scrollToSection';

const events = [
  { day: '12', month: 'Oct', title: 'Annual Sports Day', time: '9:00 AM', venue: 'Main Ground', img: images.sports, tag: 'Sports' },
  { day: '25', month: 'Oct', title: 'Science Exhibition', time: '10:00 AM', venue: 'Science Block', img: images.scienceLab, tag: 'Academic' },
  { day: '05', month: 'Nov', title: 'Diwali Cultural Fest', time: '5:00 PM', venue: 'Auditorium', img: images.achievers, tag: 'Cultural' },
  { day: '18', month: 'Nov', title: 'Parents-Teacher Meet', time: '11:00 AM', venue: 'Conference Hall', img: images.classroom, tag: 'Community' },
];

export function Events() {
  return (
    <section id="events" className="py-10 lg:py-12 bg-gradient-to-b from-primary-50/40 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-accent-600 font-semibold text-sm tracking-wider uppercase mb-3">What's Happening</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">Upcoming Events</h2>
          <p className="text-primary-600 text-base sm:text-lg leading-relaxed">Stay connected with the vibrant calendar of activities, celebrations and milestones on campus.</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {events.map((e, i) => (
            <Reveal key={e.title} direction="up" delay={i * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image with date badge */}
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img src={e.img} alt={e.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute top-3 left-3 bg-white rounded-xl shadow-lg px-3 py-2 text-center">
                    <div className="text-xl font-bold text-primary-900 leading-none">{e.day}</div>
                    <div className="text-[10px] font-semibold text-accent-600 uppercase">{e.month}</div>
                  </div>
                  <span className="absolute top-3 right-3 bg-accent-500 text-primary-950 text-xs font-semibold px-3 py-1 rounded-full">{e.tag}</span>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">{e.title}</h3>
                  <div className="space-y-1.5 text-sm text-primary-600">
                    <div className="flex items-center gap-2"><Calendar size={15} className="text-accent-500" /> {e.time}</div>
                    <div className="flex items-center gap-2"><MapPin size={15} className="text-accent-500" /> {e.venue}</div>
                  </div>
                  <button type="button" onClick={() => scrollToSection('contact')} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-800 hover:text-accent-600 transition-colors">
                    Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
