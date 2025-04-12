
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here would go the form submission logic
    console.log('Form submitted');
  };

  return (
    <section className="py-12 relative" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-jungle-dark max-w-2xl mx-auto">
            Tem um projeto interessante ou gostaria de conversar? Envie uma mensagem!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="jungle-card">
            <h3 className="text-2xl font-bold text-wood-dark mb-6 font-playfair">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  type="text" 
                  placeholder="Seu Nome" 
                  className="bg-sand border-wood-light focus-visible:ring-wood-dark"
                  required
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Seu Email" 
                  className="bg-sand border-wood-light focus-visible:ring-wood-dark"
                  required
                />
              </div>
              <div>
                <Input 
                  type="text" 
                  placeholder="Assunto" 
                  className="bg-sand border-wood-light focus-visible:ring-wood-dark"
                  required
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Sua Mensagem" 
                  className="bg-sand border-wood-light focus-visible:ring-wood-dark min-h-[150px]"
                  required
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="wood-button w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
          
          <div className="jungle-card flex flex-col">
            <h3 className="text-2xl font-bold text-wood-dark mb-6 font-playfair">
              Informações de Contato
            </h3>
            
            <div className="space-y-6 flex-1">
              <div className="flex items-start space-x-4">
                <div className="bg-jungle-light/30 p-3 rounded-full text-jungle-dark">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-jungle-dark">Email</h4>
                  <p className="text-jungle-medium">contato@pedroartur.dev</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-jungle-light/30 p-3 rounded-full text-jungle-dark">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-jungle-dark">Telefone</h4>
                  <p className="text-jungle-medium">+55 (11) 9 9999-9999</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-jungle-light/30">
              <h4 className="font-bold text-jungle-dark mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/pedroartur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-wood-medium hover:bg-wood-dark text-sand p-3 rounded-full transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/pedroartur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-wood-medium hover:bg-wood-dark text-sand p-3 rounded-full transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="leaf-decoration left-10 bottom-20 w-24 h-24 -rotate-15">
        <img src="/leaf.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactSection;
