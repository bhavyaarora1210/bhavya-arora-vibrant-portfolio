import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bhavya-arora-7a9381266/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/bhavya-arora',
      color: 'hover:text-white'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://instagram.com/bhavya.arora',
      color: 'hover:text-pink-400'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:bhavyaarora627@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bhavyaarora627@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9773889796',
      color: 'text-secondary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Delhi, India',
      color: 'text-accent'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Let's collaborate on something amazing! I'm always open to discussing new opportunities and innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="glass-card p-8 hover-glow">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-purple-400 text-white border-0 py-3"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <Card className="glass-card p-8 hover-glow">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <info.icon className={`h-5 w-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass-card p-8 hover-glow">
              <h3 className="text-xl font-bold text-white mb-6">Connect with me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-white/90 text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-card p-8 hover-glow text-center">
              <h3 className="text-lg font-bold text-white mb-4">Let's build something great!</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="text-primary">≤ 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability:</span>
                  <span className="text-secondary">Open to opportunities</span>
                </div>
                <div className="flex justify-between">
                  <span>Preferred Contact:</span>
                  <span className="text-accent">Email</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
