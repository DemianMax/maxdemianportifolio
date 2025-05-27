
import React from 'react';
import { Users, Lightbulb, Settings, Star } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Lightbulb className="w-4 h-4 text-[#ffcc00]" />,
      title: 'Design Thinking'
    },
    {
      icon: <Users className="w-4 h-4 text-[#ffcc00]" />,
      title: 'User Experience'
    },
    {
      icon: <Settings className="w-4 h-4 text-[#ffcc00]" />,
      title: 'Sistemas B2B & B2C'
    },
    {
      icon: <Star className="w-4 h-4 text-[#ffcc00]" />,
      title: 'Product Owner'
    }
  ];

  return (
    <section id="skills" className="py-8 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-5">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
            Aptidões & Competências
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex items-center gap-2"
            >
              {skill.icon}
              <span className="text-gray-900 font-medium text-sm">
                {skill.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
