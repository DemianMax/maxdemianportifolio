
import React from 'react';
import { Separator } from '@/components/ui/separator';

const TechnicalSkills = () => {
  const softwares = [
    { name: 'Figma', logo: '🎨' },
    { name: 'Framer', logo: '⚡' },
    { name: 'Photoshop', logo: '🖼️' },
    { name: 'Illustrator', logo: '✨' },
    { name: 'After Effects', logo: '🎬' },
    { name: 'Sketch', logo: '💎' }
  ];

  const habilidades = [
    'Projetos ágeis com Scrum',
    'Trabalho em equipe'
  ];

  const conhecimentos = [
    'Design Thinking',
    'User Experience',
    'UX Writing',
    'Sistemas B2B e B2C',
    'Product Owner'
  ];

  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Habilidades Técnicas
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          {/* Softwares */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Softwares</h3>
            <div className="flex flex-wrap gap-4">
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

          <Separator className="my-6" />

          {/* Habilidades */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Habilidades</h3>
            <div className="flex flex-wrap gap-4">
              {habilidades.map((habilidade, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-[#ffcc00] rounded-full"></span>
                  <span className="text-gray-900 font-medium text-sm">
                    {habilidade}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Conhecimentos */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Conhecimentos</h3>
            <div className="flex flex-wrap gap-4">
              {conhecimentos.map((conhecimento, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-[#ffcc00] rounded-full"></span>
                  <span className="text-gray-900 font-medium text-sm">
                    {conhecimento}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
