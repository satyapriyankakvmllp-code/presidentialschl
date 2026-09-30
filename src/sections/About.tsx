import { CheckCircle2, Target, Heart, Lightbulb, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { branding } from '../../public/branding/branding';
import { images } from '@/config/images';

const values = [
  { icon: Target, title: 'Our Mission', text: 'To provide a holistic education that empowers every student to think critically, act responsibly and lead with integrity.' },
  { icon: Lightbulb, title: 'Our Vision', text: 'To be a beacon of educational excellence — nurturing lifelong learners who shape a better tomorrow.' },
  { icon: Heart, title: 'Our Values', text: 'Compassion, respect and inclusivity form the foundation of our school culture and every interaction on campus.' },
];

const highlights = [
  'CBSE & Cambridge aligned curriculum',
  'Smart classrooms with interactive boards',
  '1:15 teacher-student ratio',
  'Dedicated counselling & mentorship',
  'Robotics, coding & STEM labs',
  'Safe, GPS-enabled transport fleet',
];

export function About() {
  return (
    <section id="about" className="py-10 lg:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm tracking-wider uppercase mb-3">
            <Sparkles size={16} /> Welcome to {branding.shortName}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">A Place to Learn, Grow & Belong</h2>
          <p className="text-primary-600 text-base sm:text-lg leading-relaxed">
            For over 28 years, {branding.schoolName} has been a second home for curious minds — blending rigorous academics with arts, sports and character education.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image side */}
          <Reveal direction="left" className="relative">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent-300 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] max-w-md lg:max-w-none mx-auto">
                <img src={images.aboutMain} alt="School entrance" className="w-full h-full object-cover" loading="lazy" />
              </div>
              {/* Small overlapping image */}
              <div className="absolute -bottom-6 -right-2 sm:right-4 w-32 sm:w-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-square hidden sm:block">
                <img src={images.aboutSecondary} alt="Classroom" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </Reveal>

          {/* Content side */}
          <Reveal direction="right">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary-900 mb-4">More Than a School — A Community</h3>
            <p className="text-primary-600 leading-relaxed mb-6">
              We believe education is not just about grades — it is about shaping confident, kind and capable individuals. Our experienced faculty, modern infrastructure and child-centric approach ensure that every student discovers their unique strengths.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 size={20} className="text-accent-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-primary-700 font-medium">{h}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Values cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-10 lg:mt-12">
          {values.map((val, i) => (
            <Reveal key={val.title} direction="up" delay={i * 120}>
              <div className="group h-full bg-primary-50/50 hover:bg-white border border-primary-100 hover:border-accent-200 hover:shadow-xl rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center group-hover:from-accent-400 group-hover:to-accent-600 transition-all duration-300">
                    <val.icon size={24} className="text-white" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-primary-900">{val.title}</h4>
                </div>
                <p className="text-sm text-primary-600 leading-relaxed">{val.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
