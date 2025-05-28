import React from 'react';
import { ArrowDown } from 'lucide-react';
const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center relative bg-white">
      {/* Top Image - Full Width */}
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <img src="/lovable-uploads/35431ef9-1397-4d26-8f89-496ea6367848.png" alt="Max Demian" className="w-full h-full object-fill" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-gray-900 px-6 max-w-4xl mx-auto py-12">
        <div className="animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
            Olá, sou o Max
          </h1>
          <h2 className="text-base md:text-lg mb-3 text-gray-600">
            Portfólio UX/UI Designer, ilustrador e infografista
          </h2>
          <p className="text-sm text-gray-600 mb-5 max-w-xl mx-auto leading-relaxed">
            Criando experiências digitais excepcionais através de design centrado no usuário, 
            ilustrações impactantes e infográficos informativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#portfolio" className="bg-[#ffcc00] hover:bg-[#e6b800] text-gray-900 px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm">
              Ver Portfolio
            </a>
            <a href="#contact" className="border-2 border-gray-300 hover:border-[#ffcc00] text-gray-700 hover:text-gray-900 px-5 py-2 rounded-full font-medium transition-all duration-300 hover:bg-gray-50 text-sm">
              Entre em Contato
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown className="text-[#ffcc00] animate-bounce" size={24} />
      </div>
    </section>;
};
export default Hero;