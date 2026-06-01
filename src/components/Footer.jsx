import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaRobot } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] border-t border-gray-200 pt-16 pb-12 relative">
      
      {/* CSS Kustom untuk Animasi Melayang (Tanpa ribet edit tailwind.config) */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes shadow {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(0.7); opacity: 0.1; }
          }
          .animate-shadow {
            animation: shadow 3s ease-in-out infinite;
          }
        `}
      </style>

      <div className="px-8 md:px-24 flex flex-col md:flex-row justify-between gap-16">
        
        {/* === SISI KIRI: Sitemap & Info === */}
        <div className="flex-1 flex flex-col justify-between">
          
          {/* Sitemap Links */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 text-sm font-bold text-text-main">
              <a href="#home" className="hover:text-accent-red transition-colors">Home</a>
              <a href="#skills" className="hover:text-accent-red transition-colors">Skills</a>
              <a href="#portfolio" className="hover:text-accent-red transition-colors">Portfolio</a>
              <a href="#experience" className="hover:text-accent-red transition-colors">Experience</a>
              <a href="#contact" className="hover:text-accent-red transition-colors">Contact</a>
            </div>
          </div>

          {/* Socials & Copyright */}
          <div className="mt-12 md:mt-16">
            <div className="flex gap-6 mb-6">
              <a href="https://github.com/segouduk" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-accent-red transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/aji-kia-ramadhani" target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-accent-red transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:email-kamu@gmail.com" className="text-text-main hover:text-accent-red transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
            
            <div className="text-xs text-gray-500 space-y-1">
              <p className="font-bold text-text-main">AJI KIA RAMADHANI</p>
              <p>Teknik Informatika - Universitas Duta Bangsa Surakarta</p>
              <p className="mt-3 text-gray-400 tracking-wider">
                © {new Date().getFullYear()} - BUILT WITH REACT & TAILWIND
              </p>
            </div>
          </div>
        </div>

        {/* === SISI KANAN: Floating Mascot === */}
        <div className="flex-1 flex justify-start md:justify-end items-end pt-8 md:pt-0">
           
           <div className="relative flex flex-col items-center mr-0 md:mr-8">
             
             {/* Balon Kata (Speech Bubble) */}
             <div className="absolute -top-12 -right-12 md:-right-16 bg-white border border-gray-100 text-xs font-bold text-gray-600 px-4 py-2 rounded-2xl rounded-bl-none shadow-md hover:scale-110 transition-transform cursor-pointer z-10 whitespace-nowrap">
               Hi! Hire me ✨
             </div>

             {/* Tubuh Maskot (Melayang) */}
             <div className="animate-float text-text-main hover:text-accent-red transition-colors duration-300 relative z-10 cursor-pointer">
                {/* Kamu bisa ganti FaRobot ini dengan <img src="/maskotmu.png" /> kalau punya gambar sendiri */}
                <FaRobot size={70} />
             </div>
             
             {/* Bayangan di lantai (Mengecil saat maskot naik) */}
             <div className="w-12 h-2 bg-gray-400 rounded-[50%] mt-2 animate-shadow blur-[1px]"></div>

           </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;