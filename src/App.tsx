import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Loader } from '@/components/Loader';
import { Hero } from '@/sections/Hero';
import { Stats } from '@/sections/Stats';
import { About } from '@/sections/About';
import { Leadership } from '@/sections/Leadership';
import { Academics } from '@/sections/Academics';
import { Facilities } from '@/sections/Facilities';
import { Activities } from '@/sections/Activities';
import { Events } from '@/sections/Events';
import { Testimonials } from '@/sections/Testimonials';
import { Admissions } from '@/sections/Admissions';
import { Contact } from '@/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#eef3fb] text-primary-900 antialiased">
      {loading && <Loader />}
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Leadership />
        <Academics />
        <Facilities />
        <Activities />
        <Events />
        <Testimonials />
        <Admissions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
