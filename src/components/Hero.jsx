import React from 'react';
import { profileData } from '../data';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-24 bg-bg-main">
      {/* Kolom Kiri: Teks & Tombol */}
      <div className="md:w-1/2 flex flex-col items-start space-y-6 mt-12 md:mt-0 z-10">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-0.5 bg-text-main"></div>
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Hello</span>
        </div>
        
        {/* Mengambil nama depan untuk diwarnai merah */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-text-main leading-tight">
          I'm <span className="text-accent-red">{profileData.name.split(' ')[0]}</span> <br />
          {profileData.name.split(' ').slice(1).join(' ')}
        </h1>
        
        <p className="text-gray-500 max-w-lg leading-relaxed text-sm md:text-base">
          This is {profileData.name}, a {profileData.headline}. {profileData.bio}
        </p>
        
        {/* Tombol Download CV */}
        <a 
          href="/CV_Aji_Kia_Ramadhani.pdf" 
          download="CV_Aji_Kia_Ramadhani.pdf"
          className="mt-4 px-8 py-3 bg-accent-red text-white text-xs font-bold tracking-widest uppercase hover:bg-rose-600 transition-colors duration-300 shadow-lg shadow-rose-200"
        >
          Download CV
        </a>

        {/* Sosial Media Ikon */}
        <div className="flex space-x-6 pt-16 text-gray-400">
          <a href={profileData.contact.github} target="_blank" rel="noreferrer" className="hover:text-accent-red transition-colors duration-300">
            <FaGithub size={18} />
          </a>
          <a href={profileData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-red transition-colors duration-300">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${profileData.contact.email}`} className="hover:text-accent-red transition-colors duration-300">
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>

      {/* Kolom Kanan: Area Foto */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-16 md:mt-0 relative">
        {/* Efek background abstrak di belakang foto biar tidak terlalu polos */}
        <div className="absolute w-75 h-75 md:w-125 md:h-125 bg-slate-200 rounded-full blur-3xl opacity-60 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Kontainer Foto */}
        <div className="w-72 h-72 md:w-112.5 md:h-112.5 bg-gray-200 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-gray-400 font-medium text-sm"></span>
          {
            <img src="/foto.png" alt="Aji Kia" className="w-full h-full object-cover" /> 
}
        </div>
        
        {/* Teks vertikal "Scroll Down" ala referensi gambar */}
        <div className="hidden md:flex absolute -right-12 bottom-12 rotate-90 items-center space-x-4 text-xs font-bold tracking-widest text-gray-400">
          <span>SCROLL DOWN</span>
          <div className="w-12 h-px bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;