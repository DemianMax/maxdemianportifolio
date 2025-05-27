
import React from 'react';
import { Users, Lightbulb, Settings, Star } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Design Thinking',
      description: 'Metodologia centrada no usuário para resolução criativa de problemas',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Experience',
      description: 'Criação de experiências intuitivas e significativas para os usuários',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Sistemas B2B & B2C',
      description: 'Experiência em plataformas empresariais e soluções para consumidor final',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Product Owner',
      description: 'Gestão de produtos digitais e alinhamento com objetivos de negócio',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Aptidões & Competências
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Combinando metodologias ágeis com criatividade para entregar soluções inovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-slate-900 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {skill.title}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
