import { BookOpen, FlaskConical, Calculator, Globe2, Palette, Cpu, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { images } from '@/config/images';
import { scrollToSection } from '@/components/scrollToSection';

const programs = [
  { icon: BookOpen, name: 'Primary School', grades: 'Classes I–V', desc: 'Play-based, activity-driven learning that builds strong literacy, numeracy and social skills.', color: 'from-primary-400 to-primary-600' },
  { icon: FlaskConical, name: 'Middle School', grades: 'Classes VI–VIII', desc: 'Hands-on science, analytical thinking and exploration across languages, arts and technology.', color: 'from-accent-400 to-accent-600' },
  { icon: Calculator, name: 'Secondary School', grades: 'Classes IX–X', desc: 'Rigorous CBSE curriculum with personalised mentoring and board exam readiness.', color: 'from-primary-500 to-primary-700' },
  { icon: Globe2, name: 'Senior Secondary', grades: 'Classes XI–XII', desc: 'Science, Commerce & Humanities streams with career counselling and competitive exam prep.', color: 'from-accent-500 to-accent-700' },
];

const subjects = [
  { icon: FlaskConical, label: 'Science & Labs' },
  { icon: Calculator, label: 'Mathematics' },
  { icon: Globe2, label: 'Languages & Humanities' },
  { icon: Palette, label: 'Arts & Music' },
  { icon: Cpu, label: 'Computer Science' },
  { icon: BookOpen, label: 'Social Studies' },
];

export function Academics() {
  return (
    <section id="academics" className="py-10 lg:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-accent-600 font-semibold text-sm tracking-wider uppercase mb-3">Academics</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">A Curriculum That Grows With Your Child</h2>
          <p className="text-primary-600 text-base sm:text-lg leading-relaxed">From early years to senior secondary, our academic journey is designed to challenge, engage and inspire.</p>
        </Reveal>

        {/* Program cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-8">
          {programs.map((p, i) => (
            <Reveal key={p.name} direction="up" delay={i * 100}>
              <div className="group relative bg-white border border-primary-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden">
                {/* Gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${p.color}`} />
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <p.icon size={26} className="text-white" />
                </div>
                <span className="text-xs font-semibold text-accent-600 uppercase tracking-wide">{p.grades}</span>
                <h3 className="font-serif text-lg font-bold text-primary-900 mt-1 mb-3">{p.name}</h3>
                <p className="text-sm text-primary-600 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Feature banner with image */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center bg-primary-50/50 rounded-3xl p-5 sm:p-8 lg:p-10">
          <Reveal direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] max-w-md mx-auto">
              <img src={images.scienceLab} alt="Science laboratory" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>
          </Reveal>
          <Reveal direction="right">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary-900 mb-4">Subjects That Open Doors</h3>
            <p className="text-primary-600 leading-relaxed mb-6">Our broad and balanced curriculum covers six core domains, ensuring students develop both depth and breadth of knowledge.</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {subjects.map((s) => (
                <div key={s.label} className="flex items-center gap-3 bg-white rounded-xl p-3.5 border border-primary-100 hover:border-accent-300 transition-colors">
                  <s.icon size={20} className="text-accent-500 shrink-0" />
                  <span className="text-sm font-medium text-primary-800">{s.label}</span>
                </div>
              ))}
            </div>
            <button onClick={() => scrollToSection('admissions')}
              className="group inline-flex items-center gap-2 text-primary-800 font-semibold hover:text-accent-600 transition-colors">
              Learn about our admission process
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
