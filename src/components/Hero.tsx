
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white">
      {/* Content */}
      <div className="relative z-10 text-center text-gray-900 px-6 max-w-4xl">
        <div className="animate-fade-in">
          {/* Designer Photo Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <div className="text-gray-500 text-sm">Foto do Designer</div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            UX/UI Designer
          </h1>
          <h2 className="text-lg md:text-xl mb-4 text-gray-700">
            Ilustradora & Infografista
          </h2>
          <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Criando experiências digitais excepcionais através de design centrado no usuário, 
            ilustrações impactantes e infográficos informativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="#portfolio"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              Ver Portfolio
            </a>
            <a 
              href="#contact"
              className="border-2 border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-gray-50"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown className="text-gray-600 animate-bounce" size={28} />
      </div>
    </section>
  );
};

export default Hero;
