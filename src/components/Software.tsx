
import React from 'react';

const Software = () => {
  const softwares = [
    {
      name: 'Figma',
      logo: '🎨',
      level: 'Avançado',
      description: 'Design de interfaces e prototipagem',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Framer',
      logo: '⚡',
      level: 'Intermediário',
      description: 'Prototipagem interativa e animações',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Photoshop',
      logo: '🖼️',
      level: 'Avançado',
      description: 'Edição de imagens e composição',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Illustrator',
      logo: '✨',
      level: 'Avançado',
      description: 'Ilustrações vetoriais e logotipos',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'After Effects',
      logo: '🎬',
      level: 'Intermediário',
      description: 'Motion graphics e animações',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Sketch',
      logo: '💎',
      level: 'Intermediário',
      description: 'Design de interfaces para iOS',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="software" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Softwares & Ferramentas
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Domínio em ferramentas essenciais para criação de experiências digitais excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwares.map((software, index) => (
            <div 
              key={index}
              className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${software.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {software.logo}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {software.name}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${software.color}`}>
                    {software.level}
                  </span>
                </div>
              </div>
              <p className="text-slate-300">
                {software.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Software;
