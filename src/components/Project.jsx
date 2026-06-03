import React from 'react';
import { projectsData } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';



const Project = () => {
  return (
    <section id="portfolio" className="py-20 px-8 md:px-24 bg-bg-main">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-12 justify-center md:justify-start">
          <span className="text-xs font-bold tracking-widest text-accent-red uppercase">Selected Works</span>
          <div className="w-12 h-0.5 bg-gray-300"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-12 text-center md:text-left">
          Featured <span className="text-gray-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 border border-gray-100 hover:border-accent-red transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              {/* Thumbnail Area */}
              <div className="w-full h-48 bg-gray-100 mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-accent-red transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-500 text-sm mb-6 leading-relaxed min-h-15">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 pt-4 border-t border-gray-100">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm font-bold text-text-main hover:text-accent-red transition-colors">
                  <FaGithub /> <span>Code</span>
                </a>
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm font-bold text-text-main hover:text-accent-red transition-colors">
                    <FaExternalLinkAlt size={12} /> <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;