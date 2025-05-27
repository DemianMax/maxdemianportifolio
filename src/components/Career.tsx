
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Career = () => {
  const experiences = [
    {
      company: 'TechCorp Innovation',
      position: 'Senior UX/UI Designer',
      period: '2023 - Atual',
      location: 'São Paulo, SP',
      description: 'Liderança de projetos de UX para produtos digitais B2B, mentoria de equipe e implementação de design system',
      color: 'from-blue-400 to-purple-400'
    },
    {
      company: 'Digital Solutions Inc.',
      position: 'UX Designer & Product Owner',
      period: '2021 - 2023',
      location: 'Rio de Janeiro, RJ',
      description: 'Gestão de produtos digitais e criação de experiências para plataformas e-commerce com milhões de usuários',
      color: 'from-green-400 to-teal-400'
    },
    {
      company: 'Creative Studio Pro',
      position: 'UI Designer & Ilustradora',
      period: '2019 - 2021',
      location: 'Belo Horizonte, MG',
      description: 'Desenvolvimento de interfaces e criação de ilustrações para campanhas publicitárias e branding',
      color: 'from-purple-400 to-pink-400'
    },
    {
      company: 'StartupXYZ',
      position: 'Designer Gráfico & Infografista',
      period: '2018 - 2019',
      location: 'Porto Alegre, RS',
      description: 'Criação de infográficos para relatórios corporativos e materiais de comunicação visual',
      color: 'from-orange-400 to-red-400'
    },
    {
      company: 'Agência Criativa 360',
      position: 'Designer Junior',
      period: '2017 - 2018',
      location: 'Curitiba, PR',
      description: 'Desenvolvimento de peças gráficas e apoio em projetos de identidade visual para diversos clientes',
      color: 'from-indigo-400 to-blue-400'
    }
  ];

  return (
    <section id="career" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Trajetória Profissional
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Uma jornada de crescimento contínuo no universo do design e experiência do usuário
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-8 ml-20">
                {/* Timeline dot */}
                <div className={`absolute -left-14 top-6 w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                
                <div className="bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition-all duration-300 border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      <h4 className={`text-base font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:items-end text-gray-600 mt-2 md:mt-0">
                      <div className="flex items-center mb-1">
                        <Calendar size={14} className="mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
