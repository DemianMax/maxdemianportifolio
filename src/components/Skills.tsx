
import React from 'react';
import { Users, Lightbulb, Settings, Star } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Lightbulb className="w-4 h-4" />,
      title: 'Design Thinking',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: 'User Experience',
      color: 'from-blue-400 to-purple-400'
    },
    {
      icon: <Settings className="w-4 h-4" />,
      title: 'Sistemas B2B & B2C',
      color: 'from-green-400 to-teal-400'
    },
    {
      icon: <Star className="w-4 h-4" />,
      title: 'Product Owner',
      color: 'from-purple-400 to-pink-400'
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-3 text-center border border-gray-100"
            >
              <div className={`w-8 h-8 mx-auto rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-1`}>
                {skill.icon}
              </div>
              <h3 className="text-gray-900 font-medium text-xs">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
