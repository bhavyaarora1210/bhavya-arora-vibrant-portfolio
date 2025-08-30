import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Scroll to top button */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={scrollToTop}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full p-3 hover-glow"
            size="sm"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>

        {/* Footer content */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-white/80">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>by Bhavya Arora</span>
          </div>
          
          <div className="text-white/60 text-sm">
            © 2025 Bhavya Arora. All rights reserved.
          </div>
          
          <div className="text-white/40 text-xs">
            Built with React, TypeScript, and Tailwind CSS
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;