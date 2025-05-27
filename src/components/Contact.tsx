
import React from 'react';
import { Mail, Linkedin, Instagram, User } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'contato@uxdesigner.com',
      href: 'mailto:contato@uxdesigner.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: '/in/uxdesigner',
      href: 'https://linkedin.com/in/uxdesigner',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      value: '@uxdesigner',
      href: 'https://instagram.com/uxdesigner',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <User className="w-6 h-6" />,
      label: 'Behance',
      value: 'behance.net/uxdesigner',
      href: 'https://behance.net/uxdesigner',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Pronta para colaborar em projetos incríveis. Entre em contato e vamos criar algo extraordinário juntos!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 rounded-2xl p-6 hover:bg-slate-700 transition-all duration-300 group hover:transform hover:scale-105 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {method.label}
                </h3>
                <p className="text-slate-300 text-sm">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-slate-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Disponível para Projetos Freelance
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Atualmente aceitando novos projetos e colaborações. Se você tem uma ideia interessante ou precisa de ajuda com UX/UI Design, vamos conversar!
              </p>
              <a 
                href="mailto:contato@uxdesigner.com"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Iniciar Conversa
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-700 text-center">
        <p className="text-slate-400">
          © 2024 UX Designer Portfolio. Desenvolvido com React e Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;
