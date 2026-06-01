import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    // Tambahin min-h-screen biar tingginya pas selayar
    <section id="home" className="pt-6 md:pt-10 pb-20 px-8 md:px-24 bg-bg-main">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full">
        
        {/* === BAGIAN TEKS === */}
        {/* order-2 bikin teks ini turun ke bawah kalau di HP, md:order-1 bikin dia di kiri kalau di Laptop */}
        <div className="order-2 md:order-1 flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-text-main"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
              Hello
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-text-main leading-tight mb-6">
            I'm <span className="text-accent-red">Aji</span><br />
            Kia Ramadhani
          </h1>
          
          <p className="text-gray-500 leading-relaxed mb-10 max-w-xl text-justify md:text-left">
            This is Aji Kia Ramadhani, a Full-Stack Developer | Mobile Enthusiast. 
            Mahasiswa Teknik Informatika semester 6 di Universitas Duta Bangsa Surakarta. 
            Memiliki fokus pada pengembangan aplikasi web full-stack dan mobile, serta berbekal pengalaman profesional lebih dari 3 tahun di lingkungan kerja nyata. Aktif berorganisasi dan selalu antusias mengeksplorasi teknologi baru untuk menciptakan solusi digital yang efisien.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
            <a 
              href="/cv-aji.pdf" // Pastikan file CV ini ada di folder public ya
              download
              className="px-8 py-4 bg-accent-red text-white text-xs font-bold tracking-widest uppercase hover:bg-rose-600 transition-colors shadow-lg shadow-rose-200"
            >
              Download CV
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center gap-6 text-gray-400">
              <a href="https://github.com/segouduk" target="_blank" rel="noopener noreferrer" className="hover:text-text-main transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/aji-kia-ramadhani" target="_blank" rel="noopener noreferrer" className="hover:text-text-main transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:email-kamu@gmail.com" className="hover:text-text-main transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* === BAGIAN FOTO === */}
        {/* order-1 bikin foto ini naik ke paling atas kalau di HP, md:order-2 bikin di kanan kalau di Laptop */}
        <div className="order-1 md:order-2 flex-1 flex justify-center w-full mt-4 md:mt-0">
          <div className="relative">
            {/* Gambar dibikin melingkar (rounded-full) */}
            <img 
              src="/foto.png" // Sesuaikan dengan nama foto kamu yang sebelumnya
              alt="Aji Kia Ramadhani" 
              style={{ objectPosition: '90% 20%' }} 
              className="w-56 h-56 md:w-80 md:h-80 object-cover scale-[1.15] rounded-full shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-500 relative z-10"
            />
            
            {/* Hiasan cincin merah di belakang foto biar makin estetik */}
            <div className="absolute inset-0 border-2 border-accent-red rounded-full scale-[1.08] md:scale-[1.1] z-0 transition-transform duration-500"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;