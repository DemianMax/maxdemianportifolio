
import React from 'react';
import { Users, Lightbulb, Settings, Star } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Design Thinking',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User Experience',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Sistemas B2B & B2C',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Product Owner',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-16 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Aptidões & Competências
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-slate-900 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 group hover:transform hover:scale-105 text-center"
            >
              <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h3 className="text-white font-semibold">
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
