
import React from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="relative py-8 mb-8 overflow-hidden">
      <div className="leaf-decoration -left-10 top-5 w-24 h-24 rotate-45">
        <img src="/leaf.svg" alt="" />
      </div>
      <div className="leaf-decoration right-10 top-20 w-20 h-20 -rotate-15 animate-delay-1000">
        <img src="/leaf.svg" alt="" />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-wood-dark mb-4 drop-shadow-md">
          Pedro Artur
        </h1>
        <div className="w-40 h-1 bg-gold mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl text-jungle-dark font-playfair italic mb-8">
          Desenvolvedor de Software & Aventureiro Digital
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="wood-button">
            Meus Projetos
          </button>
          <button className="wood-button">
            Entre em Contato
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
