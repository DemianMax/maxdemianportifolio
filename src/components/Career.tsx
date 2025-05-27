
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
      color: 'from-blue-500 to-purple-500'
    },
    {
      company: 'Digital Solutions Inc.',
      position: 'UX Designer & Product Owner',
      period: '2021 - 2023',
      location: 'Rio de Janeiro, RJ',
      description: 'Gestão de produtos digitais e criação de experiências para plataformas e-commerce com milhões de usuários',
      color: 'from-green-500 to-teal-500'
    },
    {
      company: 'Creative Studio Pro',
      position: 'UI Designer & Ilustradora',
      period: '2019 - 2021',
      location: 'Belo Horizonte, MG',
      description: 'Desenvolvimento de interfaces e criação de ilustrações para campanhas publicitárias e branding',
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'StartupXYZ',
      position: 'Designer Gráfico & Infografista',
      period: '2018 - 2019',
      location: 'Porto Alegre, RS',
      description: 'Criação de infográficos para relatórios corporativos e materiais de comunicação visual',
      color: 'from-orange-500 to-red-500'
    },
    {
      company: 'Agência Criativa 360',
      position: 'Designer Junior',
      period: '2017 - 2018',
      location: 'Curitiba, PR',
      description: 'Desenvolvimento de peças gráficas e apoio em projetos de identidade visual para diversos clientes',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="career" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trajetória Profissional
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Uma jornada de crescimento contínuo no universo do design e experiência do usuário
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-20">
                {/* Timeline dot */}
                <div className={`absolute -left-14 top-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                
                <div className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      <h4 className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:items-end text-slate-300 mt-2 md:mt-0">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
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
