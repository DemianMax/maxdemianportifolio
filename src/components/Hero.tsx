
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/35431ef9-1397-4d26-8f89-496ea6367848.png" 
          alt="Design Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            UX/UI Designer
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-slate-200">
            Ilustradora & Infografista
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Criando experiências digitais excepcionais através de design centrado no usuário, 
            ilustrações impactantes e infográficos informativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#portfolio"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Ver Portfolio
            </a>
            <a 
              href="#contact"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown className="text-white animate-bounce" size={32} />
      </div>
    </section>
  );
};

export default Hero;
