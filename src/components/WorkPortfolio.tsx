
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WorkPortfolio = () => {
  const portfolioData = {
    'ux-ui': [
      {
        title: 'App E-commerce Mobile',
        description: 'Design completo de aplicativo mobile para e-commerce',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      },
      {
        title: 'Dashboard B2B',
        description: 'Interface administrativa para sistema de gestão empresarial',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      },
      {
        title: 'Landing Page SaaS',
        description: 'Página de conversão para software empresarial',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      }
    ],
    'infografia': [
      {
        title: 'Relatório Anual 2024',
        description: 'Infográficos para visualização de dados complexos',
        image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
      },
      {
        title: 'Guia de Processos',
        description: 'Infográficos explicativos para processos de negócio',
        image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=600&fit=crop',
      }
    ],
    'ilustracao': [
      {
        title: 'Ilustrações Digitais',
        description: 'Conjunto de ilustrações personalizadas para marca',
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
      },
      {
        title: 'Identidade Visual',
        description: 'Ilustrações para comunicação visual corporativa',
        image: 'https://images.unsplash.com/photo-1558655146-364adbe807d8?w=800&h=600&fit=crop',
      }
    ]
  };

  return (
    <section id="portfolio" className="py-16 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trabalhos em Destaque
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Uma seleção dos meus projetos mais recentes
          </p>
        </div>

        <Tabs defaultValue="ux-ui" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-700 mb-8">
            <TabsTrigger value="ux-ui" className="text-white data-[state=active]:bg-blue-600">
              UX/UI Design
            </TabsTrigger>
            <TabsTrigger value="ilustracao" className="text-white data-[state=active]:bg-purple-600">
              Ilustração
            </TabsTrigger>
            <TabsTrigger value="infografia" className="text-white data-[state=active]:bg-green-600">
              Infografia
            </TabsTrigger>
          </TabsList>

          {Object.entries(portfolioData).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-slate-700 hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-3">
                        {item.description}
                      </p>
                      <button className="flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors text-sm">
                        Ver Projeto <ExternalLink size={14} className="ml-2" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default WorkPortfolio;
