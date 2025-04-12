
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Project } from './ProjectCard';
import { Calendar, ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectPreviewProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectPreview = ({ project, isOpen, onClose }: ProjectPreviewProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl bg-sand border-wood-medium">
        <DialogHeader>
          <DialogTitle className="text-3xl text-wood-dark font-playfair">
            {project.title}
          </DialogTitle>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="absolute right-4 top-4 text-jungle-dark hover:text-jungle-dark hover:bg-jungle-light/20"
          >
            <X size={18} />
          </Button>
        </DialogHeader>
        
        <div className="mt-2 mb-4 flex items-center text-sm text-jungle-medium">
          <Calendar size={16} className="mr-1" />
          <span>{project.date}</span>
        </div>

        <div className="h-64 md:h-80 mb-6 overflow-hidden rounded-md border-2 border-wood-light">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <p className="text-jungle-dark mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-sm px-3 py-1 bg-wood-light/30 rounded-full text-wood-dark"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="wood-button inline-flex items-center"
            >
              <Github size={18} className="mr-2" />
              Código Fonte
            </a>
          )}
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="wood-button inline-flex items-center"
            >
              <ExternalLink size={18} className="mr-2" />
              Ver ao Vivo
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPreview;
