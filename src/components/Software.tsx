
import React from 'react';

const Software = () => {
  const softwares = [
    { name: 'Figma', logo: '🎨', color: 'from-purple-500 to-pink-500' },
    { name: 'Framer', logo: '⚡', color: 'from-blue-500 to-cyan-500' },
    { name: 'Photoshop', logo: '🖼️', color: 'from-blue-600 to-blue-800' },
    { name: 'Illustrator', logo: '✨', color: 'from-orange-500 to-red-500' },
    { name: 'After Effects', logo: '🎬', color: 'from-indigo-500 to-purple-600' },
    { name: 'Sketch', logo: '💎', color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <section id="software" className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Softwares & Ferramentas
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {softwares.map((software, index) => (
            <div 
              key={index}
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 group hover:transform hover:scale-105 text-center"
            >
              <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${software.color} flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform`}>
                {software.logo}
              </div>
              <h3 className="text-white font-semibold">
                {software.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Software;
