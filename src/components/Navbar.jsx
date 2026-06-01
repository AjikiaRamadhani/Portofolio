import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full py-5 px-8 md:px-24 flex justify-between items-center bg-bg-main/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      
      {/* Logo Text */}
      <div 
        onClick={() => window.scrollTo(0,0)}
        className="text-2xl font-bold tracking-wider text-text-main cursor-pointer"
      >
        AJI<span className="text-accent-red">.</span>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex space-x-10 text-xs font-bold tracking-widest text-gray-500 uppercase items-center">
        <a href="#home" className="hover:text-accent-red transition-colors duration-300">Home</a>
        <a href="#skills" className="hover:text-accent-red transition-colors duration-300">Skills</a>
        <a href="#portfolio" className="hover:text-accent-red transition-colors duration-300">Portfolio</a>
        <a href="#experience" className="hover:text-accent-red transition-colors duration-300">Experience</a>
        <a href="#contact" className="hover:text-accent-red transition-colors duration-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;