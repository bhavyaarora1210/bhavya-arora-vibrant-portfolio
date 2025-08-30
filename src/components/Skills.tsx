import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, Database, Brain, Monitor, Wrench, Users, 
  FileText, Presentation, Clock, Target
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-primary to-primary-glow",
      skills: ["Python", "C/C++", "SQL", "MATLAB", "JavaScript", "HTML/CSS", "R"]
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      color: "from-secondary to-purple-400",
      skills: ["Git", "Docker", "VS Code", "Jupyter", "Google Colab", "Linux", "Windows"]
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      color: "from-accent to-orange-400",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Computer Vision", "Deep Learning", "Data Analytics"]
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      color: "from-green-400 to-emerald-500",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "AWS", "Google Cloud", "Firebase"]
    },
    {
      title: "Non-Technical Skills",
      icon: Users,
      color: "from-pink-400 to-rose-500",
      skills: ["Problem Solving", "Communication", "Leadership", "Team Collaboration", "Project Management"]
    },
    {
      title: "Others",
      icon: Target,
      color: "from-blue-400 to-cyan-500",
      skills: ["Microsoft Office", "Adobe Suite", "Figma", "Research", "Technical Writing"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I use to build innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card p-6 hover-glow group h-full">
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    className="skill-badge text-white/90 border-white/20 hover:border-primary/40"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="glass-card p-8 text-center hover-glow">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-white/80">Technologies</div>
          </Card>
          <Card className="glass-card p-8 text-center hover-glow">
            <div className="text-4xl font-bold text-secondary mb-2">5+</div>
            <div className="text-white/80">Major Projects</div>
          </Card>
          <Card className="glass-card p-8 text-center hover-glow">
            <div className="text-4xl font-bold text-accent mb-2">2+</div>
            <div className="text-white/80">Years Learning</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;