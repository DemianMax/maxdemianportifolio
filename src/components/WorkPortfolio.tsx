
import React from 'react';
import { ExternalLink } from 'lucide-react';

const WorkPortfolio = () => {
  const portfolioItems = [
    {
      category: 'UX/UI Design',
      title: 'App E-commerce Mobile',
      description: 'Design completo de aplicativo mobile para e-commerce com foco na experiência do usuário',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'UX/UI Design',
      title: 'Dashboard B2B',
      description: 'Interface administrativa para sistema de gestão empresarial com dados complexos',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      category: 'UX/UI Design',
      title: 'Landing Page SaaS',
      description: 'Página de conversão para software empresarial com alta taxa de conversão',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      category: 'Infografia',
      title: 'Relatório Anual 2024',
      description: 'Infográficos para visualização de dados complexos de forma clara e atrativa',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      category: 'Ilustração',
      title: 'Ilustrações Digitais',
      description: 'Conjunto de ilustrações personalizadas para marca e comunicação visual',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      category: 'Infografia',
      title: 'Guia de Processos',
      description: 'Infográficos explicativos para processos complexos de negócio',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=600&fit=crop',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trabalhos em Destaque
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Uma seleção dos meus projetos mais recentes em UX/UI Design, Infografia e Ilustração
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-700 hover:transform hover:scale-105 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${item.gradient} mb-3`}>
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 mb-4">
                  {item.description}
                </p>
                <button className="flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Ver Projeto <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPortfolio;
