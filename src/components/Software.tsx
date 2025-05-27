
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
    <section id="software" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Softwares & Ferramentas
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {softwares.map((software, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 text-center"
            >
              <div className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-br ${software.color} flex items-center justify-center text-lg mb-2`}>
                {software.logo}
              </div>
              <h3 className="text-gray-900 font-medium text-sm">
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
