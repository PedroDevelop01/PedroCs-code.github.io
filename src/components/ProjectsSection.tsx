
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard, { Project } from './ProjectCard';
import ProjectPreview from './ProjectPreview';

// Example project data
const projectsData: Project[] = [
  {
    id: '1',
    title: 'Aventura na Selva',
    description: 'Um jogo de aventura onde os jogadores navegam por uma floresta tropical enfrentando desafios. Desenvolvido com React e TypeScript para proporcionar uma experiência imersiva.',
    date: 'Março 2025',
    image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7',
    githubUrl: 'https://github.com/pedroartur',
    liveUrl: 'https://example.com/projeto1',
    technologies: ['React', 'TypeScript', 'Canvas API', 'TailwindCSS'],
  },
  {
    id: '2',
    title: 'Caça ao Tesouro',
    description: 'Aplicação que utiliza geolocalização para criar uma experiência de caça ao tesouro no mundo real. Integra mapas interativos e desafios em localidades específicas.',
    date: 'Janeiro 2025',
    image: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24',
    githubUrl: 'https://github.com/pedroartur',
    liveUrl: 'https://example.com/projeto2',
    technologies: ['Vue.js', 'Firebase', 'Mapbox API', 'PWA'],
  },
  {
    id: '3',
    title: 'Explorador de Ruínas',
    description: 'Um site interativo que permite aos usuários explorar ruínas antigas virtuais em 3D. Inclui informações históricas e detalhes arquitetônicos sobre cada local.',
    date: 'Novembro 2024',
    image: 'https://images.unsplash.com/photo-1599930113854-d6d7fd522504',
    githubUrl: 'https://github.com/pedroartur',
    technologies: ['Three.js', 'WebGL', 'Node.js', 'MongoDB'],
  },
  {
    id: '4',
    title: 'Diário de Expedição',
    description: 'Aplicativo móvel que permite aos usuários documentar suas viagens e aventuras, incluindo fotos, notas e coordenadas geográficas. Funciona offline e sincroniza quando há conexão.',
    date: 'Setembro 2024',
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b',
    liveUrl: 'https://example.com/projeto4',
    technologies: ['React Native', 'Redux', 'AWS Amplify', 'GraphQL'],
  },
  {
    id: '5',
    title: 'Mapa do Aventureiro',
    description: 'Uma plataforma colaborativa onde os usuários podem marcar e compartilhar locais de aventura, trilhas e pontos de interesse em mapas interativos.',
    date: 'Julho 2024',
    image: 'https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6',
    githubUrl: 'https://github.com/pedroartur',
    liveUrl: 'https://example.com/projeto5',
    technologies: ['Angular', 'Leaflet', 'Firebase', 'Sass'],
  },
  {
    id: '6',
    title: 'Desafio da Selva',
    description: 'Um jogo educativo que ensina sobre a flora e fauna das florestas tropicais através de desafios interativos e quebra-cabeças.',
    date: 'Maio 2024',
    image: 'https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48',
    githubUrl: 'https://github.com/pedroartur',
    technologies: ['Phaser.js', 'JavaScript', 'HTML5', 'WebSockets'],
  },
];

// Group projects by year and quarter for tabs
const groupProjectsByPeriod = (projects: Project[]) => {
  const grouped: Record<string, Project[]> = {};
  
  projects.forEach(project => {
    const [month, year] = project.date.split(' ');
    const quarter = getQuarter(month);
    const period = `${quarter} ${year}`;
    
    if (!grouped[period]) {
      grouped[period] = [];
    }
    
    grouped[period].push(project);
  });
  
  return Object.entries(grouped)
    .sort(([a], [b]) => {
      const [, yearA] = a.split(' ');
      const [, yearB] = b.split(' ');
      return Number(yearB) - Number(yearA);
    });
};

const getQuarter = (month: string) => {
  const months = {
    'Janeiro': 'Q1', 'Fevereiro': 'Q1', 'Março': 'Q1',
    'Abril': 'Q2', 'Maio': 'Q2', 'Junho': 'Q2',
    'Julho': 'Q3', 'Agosto': 'Q3', 'Setembro': 'Q3',
    'Outubro': 'Q4', 'Novembro': 'Q4', 'Dezembro': 'Q4',
  };
  return months[month as keyof typeof months] || 'Q?';
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  const groupedProjects = groupProjectsByPeriod(projectsData);
  
  const handlePreview = (project: Project) => {
    setSelectedProject(project);
    setIsPreviewOpen(true);
  };
  
  const closePreview = () => {
    setIsPreviewOpen(false);
  };
  
  return (
    <section className="py-12 relative" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-4">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-jungle-dark max-w-2xl mx-auto">
            Explore o mapa das minhas aventuras de desenvolvimento, organizadas cronologicamente.
            Clique em um projeto para descobrir mais detalhes.
          </p>
        </div>
        
        <div className="bg-wood-medium/10 rounded-lg p-4 md:p-8 border-2 border-wood-light">
          <Tabs defaultValue={groupedProjects[0]?.[0]} className="w-full">
            <div className="bg-wood-medium rounded-md p-1.5 mb-8 max-w-fit mx-auto overflow-x-auto">
              <TabsList className="grid grid-flow-col auto-cols-max gap-1 bg-transparent">
                {groupedProjects.map(([period]) => (
                  <TabsTrigger 
                    key={period} 
                    value={period}
                    className="font-playfair text-sand data-[state=active]:bg-sand data-[state=active]:text-wood-dark font-semibold"
                  >
                    {period}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {groupedProjects.map(([period, projects]) => (
              <TabsContent key={period} value={period} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      onPreview={handlePreview}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      
      <ProjectPreview 
        project={selectedProject} 
        isOpen={isPreviewOpen} 
        onClose={closePreview} 
      />
      
      {/* Decorative elements */}
      <div className="absolute -left-5 bottom-20 opacity-30 h-60">
        <img src="/vine.svg" alt="" className="h-full" />
      </div>
      <div className="absolute right-10 top-40 opacity-30 h-80">
        <img src="/vine.svg" alt="" className="h-full" />
      </div>
    </section>
  );
};

export default ProjectsSection;
