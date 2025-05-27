
import React from 'react';

const Software = () => {
  const softwares = [
    { name: 'Figma', logo: '🎨' },
    { name: 'Framer', logo: '⚡' },
    { name: 'Photoshop', logo: '🖼️' },
    { name: 'Illustrator', logo: '✨' },
    { name: 'After Effects', logo: '🎬' },
    { name: 'Sketch', logo: '💎' }
  ];

  return (
    <section id="software" className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-5">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
            Softwares & Ferramentas
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          {softwares.map((software, index) => (
            <div 
              key={index}
              className="flex items-center gap-2"
            >
              <span className="text-lg">{software.logo}</span>
              <span className="text-gray-900 font-medium text-sm">
                {software.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Software;
