
import React from 'react';
import { Code, Home, Mail, Phone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-12 relative" id="about">
      <div className="leaf-decoration -right-10 top-10 w-24 h-24">
        <img src="/leaf.svg" alt="" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="jungle-card max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-wood-dark mb-2">
              Sobre Pedro Artur
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-4"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-wood-medium">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Pedro Artur"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-jungle-dark mb-4">
                Olá, sou Pedro Artur, um desenvolvedor de software apaixonado por criar soluções digitais que combinam tecnologia e experiências imersivas. Com mais de 5 anos de experiência, tenho trabalhado em projetos inovadores que desafiam os limites do desenvolvimento web e mobile.
              </p>
              <p className="text-jungle-dark mb-4">
                Minha jornada como desenvolvedor é como uma aventura em uma selva digital, onde cada projeto representa um novo território a ser explorado e conquistado. Estou sempre em busca de novas tecnologias e metodologias para melhorar minha caixa de ferramentas.
              </p>
              <p className="text-jungle-dark mb-6">
                Quando não estou codificando, você pode me encontrar explorando trilhas, fotografando a natureza ou jogando jogos de tabuleiro com amigos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center text-jungle-dark">
                  <Code size={18} className="mr-2 text-wood-dark" />
                  <span>Desenvolvedor Full Stack</span>
                </div>
                <div className="flex items-center text-jungle-dark">
                  <Home size={18} className="mr-2 text-wood-dark" />
                  <span>São Paulo, Brasil</span>
                </div>
                <div className="flex items-center text-jungle-dark">
                  <Mail size={18} className="mr-2 text-wood-dark" />
                  <span>contato@pedroartur.dev</span>
                </div>
                <div className="flex items-center text-jungle-dark">
                  <Phone size={18} className="mr-2 text-wood-dark" />
                  <span>+55 (11) 9 9999-9999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
