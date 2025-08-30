import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering - Electrical Engineering",
      institution: "Thapar Institute of Engineering and Technology",
      location: "Patiala, Punjab, India",
      duration: "2022 - 2026",
      type: "Undergraduate",
      highlights: [
        "Specialized in Electrical Engineering with focus on Data Analytics, and Data Mining and Visualisation",
        "Relevant Coursework: Data Structures & Algorithms, Machine Learning, Signal Processing, Power Systems, and Control Engineering",
        "Strong foundation in Mathematics, Algorithms, and Core Electrical Engineering subjects",
        "Applied academic knowledge to projects in Data Analytics, Signal Processing, and AI applications in Electrical Systems"
      ]
    },
    {
      degree: "Senior Secondary Education (XII) - Science",
      institution: "Oxford Senior Secondary School",
      location: "New Delhi, India",
      duration: "2019 - 2020",
      type: "High School",
      highlights: [
        "Physics, Chemistry, Mathematics, Biology",
        "Trained Classical Dancer with stage performances",
        "Captain of the School Basketball Team",
        "Participated in Inter School Science Fair with innovative projects"
      ]
    },
    {
      degree: "Secondary Education (X)",
      institution: "Oxford Senior Secondary School",
      location: "New Delhi, India",
      duration: "2018 - 2019",
      type: "Secondary",
      highlights: [
        "Strong academic foundation in Science and Mathematics",
        "Achieved 3rd Position in International Science Olympiad",
        "Represented school in Basketball tournaments",
        "Participated in School Science Fair showcasing innovative ideas"
      ]
    }
  ];

  const certifications = [
    "Machine Learning Specialization - Stanford University (Coursera)",
    "Deep Learning with TensorFlow - Google Cloud",
    "Data Science with Python - IBM",
    "AWS Cloud Practitioner",
    "Google Analytics Certified"
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Undergraduate':
        return 'from-primary to-primary-glow';
      case 'High School':
        return 'from-secondary to-purple-400';
      case 'Secondary':
        return 'from-accent to-orange-400';
      default:
        return 'from-green-400 to-emerald-500';
    }
  };

  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Academic foundation and continuous learning that drives my passion for technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="glass-card p-8 hover-glow group h-full">
              <div className="flex items-center justify-between mb-6">
                <Badge className={`bg-gradient-to-r ${getTypeColor(edu.type)} text-white border-0`}>
                  {edu.type}
                </Badge>
                <div className="flex items-center text-white/60 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {edu.duration}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-white/80">
                    <GraduationCap className="h-4 w-4 mr-2 text-secondary" />
                    {edu.institution}
                  </div>
                  <div className="flex items-center text-white/80">
                    <MapPin className="h-4 w-4 mr-2 text-accent" />
                    {edu.location}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {edu.highlights.map((highlight, hlIndex) => (
                  <div key={hlIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90 text-sm leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <Card className="glass-card p-8 hover-glow">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mr-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/30 transition-colors">
                <span className="text-white/90">{cert}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Education Stats */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="glass-card p-8 text-center hover-glow">
            <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">4+</div>
            <div className="text-white/80">Years of Study</div>
          </Card>
          <Card className="glass-card p-8 text-center hover-glow">
            <BookOpen className="h-8 w-8 text-accent mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-white/80">Academic Average</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
