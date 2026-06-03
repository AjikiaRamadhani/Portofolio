import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import { profileData } from './data';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    // Kita bungkus semuanya pakai React Fragment (tag kosong)
    <>
      <div className="font-sans bg-bg-main min-h-screen text-text-main selection:bg-accent-red selection:text-white scroll-smooth animate-fade-in transition-colors duration-500">
        <Navbar />
        <Hero />
        <Skills />
        <Project />
        <Experience />
        <Contact />
        
       <Footer />
      </div>

      {/* Tombol BackToTop dipindah ke luar sini biar efek melayangnya nggak rusak */}
      <BackToTop />
    </>
  );
}

export default App;