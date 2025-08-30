import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Data Analytics Intern",
      company: "Tech Innovations Ltd.",
      duration: "Jun 2024 - Aug 2024",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Developed automated data processing pipelines that reduced manual work by 60%",
        "Created interactive dashboards using Python and Plotly for business intelligence",
        "Analyzed customer behavior patterns leading to 15% improvement in retention strategies",
        "Collaborated with cross-functional teams to implement ML-based recommendation systems"
      ]
    },
    {
      role: "Research Assistant",
      company: "Thapar Institute of Engineering and Technology",
      duration: "Jan 2024 - Present",
      location: "Patiala, India",
      type: "Research",
      achievements: [
        "Conducting research on computer vision applications in precision agriculture",
        "Developing deep learning models for crop disease detection with 92% accuracy",
        "Co-authored research paper on AI-driven farming solutions",
        "Mentoring junior students in machine learning fundamentals"
      ]
    },
    {
      role: "Software Development Intern",
      company: "StartupXYZ",
      duration: "May 2023 - Jul 2023",
      location: "Chandigarh, India",
      type: "Internship",
      achievements: [
        "Built responsive web applications using React.js and Node.js",
        "Implemented RESTful APIs for mobile application backend",
        "Optimized database queries resulting in 40% faster response times",
        "Participated in agile development cycles and code review processes"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'from-primary to-primary-glow';
      case 'Research':
        return 'from-secondary to-purple-400';
      default:
        return 'from-accent to-orange-400';
    }
  };

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Building expertise through hands-on experience in data science, software development, and research
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background hidden md:block"></div>

                <Card className="glass-card p-8 hover-glow ml-0 md:ml-16 group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={`bg-gradient-to-r ${getTypeColor(exp.type)} text-white border-0`}>
                          {exp.type}
                        </Badge>
                        <div className="flex items-center text-white/60 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-white/80">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2 text-secondary" />
                          {exp.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-accent" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white/90 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="glass-card p-8 text-center hover-glow">
            <Award className="h-8 w-8 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">3+</div>
            <div className="text-white/80">Professional Roles</div>
          </Card>
          <Card className="glass-card p-8 text-center hover-glow">
            <Building className="h-8 w-8 text-secondary mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">4+</div>
            <div className="text-white/80">Organizations</div>
          </Card>
          <Card className="glass-card p-8 text-center hover-glow">
            <Calendar className="h-8 w-8 text-accent mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">18+</div>
            <div className="text-white/80">Months Experience</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;