
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-sand py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold font-playfair mb-2">Pedro Artur</h3>
            <p className="text-sand/70">Desenvolvedor de Software & Aventureiro Digital</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sand/70">© {new Date().getFullYear()} Pedro Artur. Todos os direitos reservados.</p>
            <p className="text-sand/50 text-sm mt-1">
              Inspirado por Jumanji e construído com React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
