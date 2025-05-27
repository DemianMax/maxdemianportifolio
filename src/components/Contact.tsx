
import React from 'react';
import { Mail, Linkedin, Instagram, User } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'contato@uxdesigner.com',
      href: 'mailto:contato@uxdesigner.com',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: '/in/uxdesigner',
      href: 'https://linkedin.com/in/uxdesigner',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      value: '@uxdesigner',
      href: 'https://instagram.com/uxdesigner',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: <User className="w-5 h-5" />,
      label: 'Behance',
      value: 'behance.net/uxdesigner',
      href: 'https://behance.net/uxdesigner',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Vamos Conversar?
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Pronta para colaborar em projetos incríveis. Entre em contato e vamos criar algo extraordinário juntos!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105 text-center border"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center text-white mx-auto mb-2`}>
                  {method.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  {method.label}
                </h3>
                <p className="text-gray-600 text-xs">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Disponível para Projetos Freelance
              </h3>
              <p className="text-gray-600 mb-4 max-w-2xl mx-auto text-sm">
                Atualmente aceitando novos projetos e colaborações. Se você tem uma ideia interessante ou precisa de ajuda com UX/UI Design, vamos conversar!
              </p>
              <a 
                href="mailto:contato@uxdesigner.com"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Iniciar Conversa
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm">
          © 2024 UX Designer Portfolio. Desenvolvido com React e Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;
