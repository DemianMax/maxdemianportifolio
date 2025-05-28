import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const WorkPortfolio = () => {
  const portfolioData = {
    'ux-ui': [{
      title: 'App E-commerce Mobile',
      description: 'Design completo de aplicativo mobile para e-commerce',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop'
    }, {
      title: 'Dashboard B2B',
      description: 'Interface administrativa para sistema de gestão empresarial',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    }, {
      title: 'Landing Page SaaS',
      description: 'Página de conversão para software empresarial',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
    }],
    'infografia': [{
      title: 'Relatório Anual 2024',
      description: 'Infográficos para visualização de dados complexos',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop'
    }, {
      title: 'Guia de Processos',
      description: 'Infográficos explicativos para processos de negócio',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=400&fit=crop'
    }],
    'ilustracao': [{
      title: 'Ilustrações Digitais',
      description: 'Conjunto de ilustrações personalizadas para marca',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop'
    }, {
      title: 'Identidade Visual',
      description: 'Ilustrações para comunicação visual corporativa',
      image: 'https://images.unsplash.com/photo-1558655146-364adbe807d8?w=600&h=400&fit=crop'
    }]
  };
  return <section id="portfolio" className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Trabalhos em Destaque
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Uma seleção dos meus projetos mais recentes
          </p>
        </div>

        <Tabs defaultValue="ux-ui" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 border mb-4 bg-transparent rounded-none">
            <TabsTrigger value="ux-ui" className="text-gray-700 data-[state=active]:bg-[#ffcc00] data-[state=active]:text-gray-900 rounded-full text-xs">
              UX/UI Design
            </TabsTrigger>
            <TabsTrigger value="ilustracao" className="text-gray-700 data-[state=active]:bg-[#ffcc00] data-[state=active]:text-gray-900 rounded-full text-xs">
              Ilustração
            </TabsTrigger>
            <TabsTrigger value="infografia" className="text-gray-700 data-[state=active]:bg-[#ffcc00] data-[state=active]:text-gray-900 rounded-full text-xs">
              Infografia
            </TabsTrigger>
          </TabsList>

          {Object.entries(portfolioData).map(([category, items]) => <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((item, index) => <div key={index} className="group relative overflow-hidden rounded-2xl bg-white border hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <div className="aspect-video overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    <div className="p-3">
                      <h3 className="text-sm font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-2">
                        {item.description}
                      </p>
                      <button className="flex items-center text-[#ffcc00] hover:text-[#e6b800] font-medium transition-colors text-xs">
                        Ver Projeto <ExternalLink size={12} className="ml-1" />
                      </button>
                    </div>
                  </div>)}
              </div>
            </TabsContent>)}
        </Tabs>
      </div>
    </section>;
};
export default WorkPortfolio;