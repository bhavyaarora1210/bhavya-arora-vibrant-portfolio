import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Electrical Engineering Student | Data Analyst | Aspiring Tech Innovator';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-xl rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-primary/20 rounded-xl rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main content */}
        <div className="space-y-8 animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-glow">
            Bhavya <span className="gradient-text">Arora</span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-white/90 font-medium min-h-[2rem]">
              {displayText}
              <span className="animate-blink">|</span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about transforming ideas into innovative solutions through technology, 
            data science, and creative problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover-glow backdrop-blur-sm px-8 py-4 text-lg font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open("https://ibra-insightflow.vercel.app/", "_blank")}
              className="bg-primary/20 hover:bg-primary/30 text-white border border-primary/40 hover-glow backdrop-blur-sm px-8 py-4 text-lg font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="h-6 w-6 text-white/60 mx-auto mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
