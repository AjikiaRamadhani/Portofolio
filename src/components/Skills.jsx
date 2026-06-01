import React from 'react';
import { skillsData } from '../data';



const Skills = () => {
  return (
    <section id="skills" className="py-20 px-8 md:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-accent-red uppercase">My Expertise</span>
          <div className="w-12 h-0.5 bg-gray-200"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-12">
          Skills & <span className="text-gray-400">Technologies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-text-main mb-4 border-b border-gray-100 pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-bg-main border border-gray-200 text-sm font-medium text-gray-600 hover:border-accent-red hover:text-accent-red transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;