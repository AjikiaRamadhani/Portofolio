import React from 'react';
import { experienceData, educationData, certificationData } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-12 justify-center md:justify-start">
          <span className="text-xs font-bold tracking-widest text-accent-red uppercase">My Journey</span>
          <div className="w-12 h-0.5 bg-gray-200"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-16 text-center md:text-left">
          Experience, Education & <span className="text-gray-400">Certification</span>
        </h2>

        {/* Diubah jadi 3 Kolom biar lega dan terpisah */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Kolom 1: Pengalaman Kerja */}
          <div>
            <h3 className="text-xl font-bold text-text-main mb-8 flex items-center">
              <span className="w-2 h-2 bg-accent-red rounded-full mr-3"></span>
              Work Experience
            </h3>
            <div className="space-y-10 border-l border-gray-200 ml-1 pl-8 relative">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-10.25 top-1 w-4 h-4 bg-white border-4 border-accent-red rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-xs font-bold text-accent-red bg-rose-50 px-3 py-1 rounded-sm tracking-wider">{exp.period}</span>
                  <h4 className="text-lg font-bold text-text-main mt-3">{exp.role}</h4>
                  <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">{exp.company}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom 2: Pendidikan */}
          <div>
            <h3 className="text-xl font-bold text-text-main mb-8 flex items-center">
              <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
              Education
            </h3>
            <div className="space-y-10 border-l border-gray-200 ml-1 pl-8 relative">
              {educationData.map((edu, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-10.25 top-1 w-4 h-4 bg-white border-4 border-gray-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-sm tracking-wider">{edu.period}</span>
                  <h4 className="text-lg font-bold text-text-main mt-3 leading-snug">{edu.degree}</h4>
                  <p className="text-sm text-gray-500">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom 3: Sertifikasi */}
          <div>
            <h3 className="text-xl font-bold text-text-main mb-8 flex items-center">
              <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
              Certification
            </h3>
            <div className="space-y-10 border-l border-gray-200 ml-1 pl-8 relative">
              {certificationData.map((cert, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-10.25 top-1 w-4 h-4 bg-white border-4 border-gray-700 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-sm tracking-wider">{cert.date}</span>
                  <h4 className="text-lg font-bold text-text-main mt-3">{cert.title}</h4>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 mt-1">ID: {cert.id}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;