
import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar, ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  onPreview: (project: Project) => void;
  className?: string;
}

const ProjectCard = ({ project, onPreview, className }: ProjectCardProps) => {
  return (
    <div className={cn("jungle-card animate-fade-in", className)}>
      <div className="relative h-48 mb-4 overflow-hidden rounded">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      
      <h3 className="text-2xl font-bold text-wood-dark mb-2 font-playfair">{project.title}</h3>
      
      <div className="flex items-center text-sm text-jungle-medium mb-3">
        <Calendar size={16} className="mr-1" />
        <span>{project.date}</span>
      </div>
      
      <p className="text-jungle-dark mb-4 line-clamp-3">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="text-xs px-2 py-1 bg-wood-light/30 rounded-full text-wood-dark"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between mt-auto pt-2 border-t border-jungle-light/30">
        <Button
          variant="ghost"
          size="sm"
          className="text-jungle-dark hover:text-jungle-medium hover:bg-jungle-light/20"
          onClick={() => onPreview(project)}
        >
          <Eye size={18} className="mr-1" /> Visualizar
        </Button>
        
        <div className="flex gap-2">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-full bg-jungle-light/20 text-jungle-dark hover:bg-jungle-light/40 transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-full bg-jungle-light/20 text-jungle-dark hover:bg-jungle-light/40 transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
