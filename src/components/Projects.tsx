import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "FarmEye",
      description: "AI-powered precision agriculture system that revolutionizes farming through computer vision and machine learning. Provides real-time crop monitoring, disease detection, and yield optimization recommendations.",
      techStack: ["Python", "TensorFlow", "Computer Vision", "IoT", "Machine Learning", "Data Analytics"],
      category: "AI & Agriculture",
      image: "project-1",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Intelligent Business Reporting & Analytics Engine",
      description: "Comprehensive data analytics platform that transforms raw business data into actionable insights. Features automated report generation, predictive analytics, and interactive dashboards.",
      techStack: ["Python", "SQL", "Pandas", "Plotly", "Machine Learning", "Data Visualization"],
      category: "Data Analytics",
      image: "project-2",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Smart Traffic Management System",
      description: "IoT-based traffic optimization solution using real-time data processing and ML algorithms to reduce congestion and improve urban mobility patterns.",
      techStack: ["Python", "OpenCV", "IoT", "Deep Learning", "Real-time Processing"],
      category: "Smart Cities",
      image: "project-3",
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Showcasing innovative solutions that blend cutting-edge technology with real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card overflow-hidden hover-glow group">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <Eye className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-sm">Project Preview</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          className="skill-badge text-white/90 border-white/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      className="bg-primary/20 hover:bg-primary/30 text-white border border-primary/40 hover-glow"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="bg-white/10 hover:bg-white/20 text-white border-white/20 hover-glow"
                      asChild
                    >
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <Card className="glass-card p-8 hover-glow inline-block">
            <h3 className="text-xl font-semibold text-white mb-4">Want to see more?</h3>
            <p className="text-white/80 mb-6">Check out my GitHub for additional projects and contributions</p>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-purple-400 text-white border-0">
              <Github className="mr-2 h-4 w-4" />
              View All Projects
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;