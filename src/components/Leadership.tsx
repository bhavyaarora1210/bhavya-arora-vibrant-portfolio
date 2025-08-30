import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Trophy, Target, Lightbulb, Calendar, MapPin } from 'lucide-react';

const Leadership = () => {
  const positions = [
    {
      role: "Joint Secretary",
      organization: "Entrepreneurship Development Cell (EDC)",
      institution: "Thapar Institute of Engineering and Technology",
      duration: "Aug 2023 - Present",
      type: "Leadership",
      achievements: [
        "Organized 5+ entrepreneurship workshops with 500+ participants",
        "Led a team of 15 members in planning startup incubation programs",
        "Secured partnerships with 10+ industry mentors and investors",
        "Increased club membership by 40% through strategic outreach campaigns",
        "Coordinated the annual Entrepreneur Summit with 1000+ attendees"
      ],
      impact: "500+ Students Impacted"
    },
    {
      role: "Finance & Documentation Lead",
      organization: "TEDxTIET",
      institution: "Thapar Institute of Engineering and Technology",
      duration: "Jan 2023 - Present",
      type: "Operations",
      achievements: [
        "Managed budget of ₹5 lakhs for TEDx event with 300+ attendees",
        "Streamlined documentation processes, reducing administrative time by 60%",
        "Secured sponsorships worth ₹2 lakhs from local and national companies",
        "Coordinated with 8 TED speakers and handled logistics for the main event",
        "Implemented financial tracking system improving budget transparency"
      ],
      impact: "₹5L+ Budget Managed"
    }
  ];

  const achievements = [
    {
      title: "Best Leadership Award",
      organization: "EDC TIET",
      year: "2024",
      description: "Recognized for outstanding leadership in driving entrepreneurship initiatives"
    },
    {
      title: "Innovation Challenge Winner",
      organization: "TechFest TIET",
      year: "2023",
      description: "Led team to victory in annual innovation and startup competition"
    },
    {
      title: "Community Impact Recognition",
      organization: "TEDxTIET",
      year: "2023",
      description: "Acknowledged for exceptional contribution to event organization and outreach"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership':
        return 'from-primary to-primary-glow';
      case 'Operations':
        return 'from-secondary to-purple-400';
      default:
        return 'from-accent to-orange-400';
    }
  };

  return (
    <section id="leadership" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership & <span className="gradient-text">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Driving change through leadership, fostering innovation, and building communities that inspire growth
          </p>
        </div>

        {/* Leadership Positions */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {positions.map((position, index) => (
            <Card key={index} className="glass-card p-8 hover-glow group h-full">
              <div className="flex items-start justify-between mb-6">
                <Badge className={`bg-gradient-to-r ${getTypeColor(position.type)} text-white border-0`}>
                  {position.type}
                </Badge>
                <div className="flex items-center text-white/60 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {position.duration}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {position.role}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-white/80">
                    <Users className="h-4 w-4 mr-2 text-secondary" />
                    {position.organization}
                  </div>
                  <div className="flex items-center text-white/80">
                    <MapPin className="h-4 w-4 mr-2 text-accent" />
                    {position.institution}
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <Target className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-primary font-semibold">{position.impact}</span>
                </div>
              </div>

              <div className="space-y-3">
                {position.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Notable Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card p-6 hover-glow text-center group">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-secondary text-sm mb-2">{achievement.organization} • {achievement.year}</p>
                <p className="text-white/80 text-sm">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Impact Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="glass-card p-6 text-center hover-glow">
            <Users className="h-8 w-8 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">800+</div>
            <div className="text-white/80 text-sm">Students Reached</div>
          </Card>
          <Card className="glass-card p-6 text-center hover-glow">
            <Target className="h-8 w-8 text-secondary mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-white/80 text-sm">Events Organized</div>
          </Card>
          <Card className="glass-card p-6 text-center hover-glow">
            <Trophy className="h-8 w-8 text-accent mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-white/80 text-sm">Awards Received</div>
          </Card>
          <Card className="glass-card p-6 text-center hover-glow">
            <Lightbulb className="h-8 w-8 text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-white/80 text-sm">Team Members Led</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leadership;