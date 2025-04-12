
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'GraphQL', level: 65, category: 'backend' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'AWS', level: 65, category: 'tools' },
  { name: 'Jest', level: 75, category: 'tools' },
  { name: 'Figma', level: 60, category: 'tools' },
];

const SkillsSection = () => {
  // Group skills by category
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  const renderSkillList = (skillsList: Skill[]) => (
    <div className="space-y-4">
      {skillsList.map((skill) => (
        <div key={skill.name} className="mb-3">
          <div className="flex justify-between mb-1">
            <span className="font-medium text-jungle-dark">{skill.name}</span>
            <span className="text-jungle-medium text-sm">{skill.level}%</span>
          </div>
          <Progress 
            value={skill.level} 
            className="h-2 bg-jungle-light/30" 
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-12 relative bg-wood-light/10" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-4">
            Minhas Habilidades
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-jungle-dark max-w-2xl mx-auto">
            Ferramentas e tecnologias que domino para enfrentar os desafios do desenvolvimento de software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="jungle-card">
            <div className="bg-wood-medium text-sand font-playfair font-bold py-3 px-4 rounded-md mb-6 text-center text-xl">
              Frontend
            </div>
            {renderSkillList(frontendSkills)}
          </div>
          
          <div className="jungle-card">
            <div className="bg-wood-medium text-sand font-playfair font-bold py-3 px-4 rounded-md mb-6 text-center text-xl">
              Backend
            </div>
            {renderSkillList(backendSkills)}
          </div>
          
          <div className="jungle-card">
            <div className="bg-wood-medium text-sand font-playfair font-bold py-3 px-4 rounded-md mb-6 text-center text-xl">
              Ferramentas
            </div>
            {renderSkillList(toolsSkills)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
