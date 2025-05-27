
import React from 'react';
import { Users, Lightbulb, Settings, Star } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Design Thinking',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'User Experience',
      color: 'from-blue-400 to-purple-400'
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: 'Sistemas B2B & B2C',
      color: 'from-green-400 to-teal-400'
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: 'Product Owner',
      color: 'from-purple-400 to-pink-400'
    }
  ];

  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Aptidões & Competências
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 hover:bg-gray-50 transition-all duration-300 text-center border"
            >
              <div className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-2`}>
                {skill.icon}
              </div>
              <h3 className="text-gray-900 font-medium text-sm">
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
