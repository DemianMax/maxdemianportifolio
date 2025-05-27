
import React from 'react';

const Software = () => {
  const softwares = [
    { name: 'Figma', logo: '🎨', color: 'from-purple-400 to-pink-400' },
    { name: 'Framer', logo: '⚡', color: 'from-blue-400 to-cyan-400' },
    { name: 'Photoshop', logo: '🖼️', color: 'from-blue-500 to-blue-700' },
    { name: 'Illustrator', logo: '✨', color: 'from-orange-400 to-red-400' },
    { name: 'After Effects', logo: '🎬', color: 'from-indigo-400 to-purple-500' },
    { name: 'Sketch', logo: '💎', color: 'from-yellow-400 to-orange-400' }
  ];

  return (
    <section id="software" className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-5">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
            Softwares & Ferramentas
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-2xl mx-auto">
          {softwares.map((software, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100"
            >
              <div className={`w-8 h-8 mx-auto rounded-lg bg-gradient-to-br ${software.color} flex items-center justify-center text-sm mb-1`}>
                {software.logo}
              </div>
              <h3 className="text-gray-900 font-medium text-xs">
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
