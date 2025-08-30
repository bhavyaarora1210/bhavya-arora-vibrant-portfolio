import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Brain, Zap, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Expertise",
      description: "Proficient in Python, C/C++, SQL, MATLAB, and web technologies"
    },
    {
      icon: Brain,
      title: "AI & ML Focus",
      description: "Hands-on experience with TensorFlow, PyTorch, and Scikit-learn"
    },
    {
      icon: Zap,
      title: "Data Analytics",
      description: "Specialized in computer vision and deep learning frameworks"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Strong analytical skills with continuous learning mindset"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
         
          <div className="relative">
            <div className="aspect-square rounded-3xl glass-card p-8 hover-glow">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
          
                   <img src = "/bhavya_image.jpg" alt="Bhavya Arora" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/30 rounded-full blur-xl"></div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <Card className="glass-card p-8 hover-glow">
              <p className="text-lg leading-relaxed text-white/90">
                I am <span className="text-primary font-semibold">Bhavya Arora</span>, an Electrical Engineering student at 
                <span className="text-secondary font-semibold"> Thapar Institute of Engineering and Technology</span> with 
                a strong interest in data science, machine learning, and software development.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-white/90">
                I am proficient in <span className="text-accent font-semibold">Python, C/C++, SQL, MATLAB</span>, and web technologies, 
                with hands-on experience in data analytics, computer vision, and deep learning frameworks such as 
                <span className="text-primary font-semibold"> TensorFlow, PyTorch, and Scikit-learn</span>.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-white/90">
                Alongside technical expertise, I bring strong problem-solving, analytical, and communication skills, 
                with a continuous drive to learn and apply emerging technologies.
              </p>
            </Card>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="glass-card p-6 hover-glow group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-white/70">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
