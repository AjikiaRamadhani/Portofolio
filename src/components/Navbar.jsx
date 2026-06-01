import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Pastikan kita pakai icon ini

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="flex justify-between items-center py-5 px-8 md:px-24">
        {/* Logo Text */}
        <div 
          onClick={() => window.scrollTo(0,0)}
          className="text-2xl font-bold tracking-wider text-text-main cursor-pointer"
        >
          AJI<span className="text-accent-red">.</span>
        </div>

        {/* Menu Links (Desktop) */}
        <div className="hidden md:flex space-x-10 text-xs font-bold tracking-widest text-gray-500 uppercase items-center">
          <a href="#home" className="hover:text-accent-red transition-colors duration-300">Home</a>
          <a href="#skills" className="hover:text-accent-red transition-colors duration-300">Skills</a>
          <a href="#portfolio" className="hover:text-accent-red transition-colors duration-300">Portfolio</a>
          <a href="#experience" className="hover:text-accent-red transition-colors duration-300">Experience</a>
          <a href="#contact" className="hover:text-accent-red transition-colors duration-300">Contact</a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button 
          className="md:hidden text-text-main hover:text-accent-red transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu Dropdown (Mobile) */}
      <div className={`md:hidden absolute w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col px-8 py-4 space-y-4 text-sm font-bold tracking-widest text-gray-500 uppercase">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-accent-red">Home</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-accent-red">Skills</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="hover:text-accent-red">Portfolio</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-accent-red">Experience</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-accent-red">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;