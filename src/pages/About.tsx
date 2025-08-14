import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Brain, 
  Shield,
  Lightbulb,
  Heart
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: "2M+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "50M+", label: "Miles Navigated", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Shield className="w-6 h-6" /> },
    { number: "30%", label: "Time Saved", icon: <Target className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Innovation First",
      description: "We push the boundaries of AI technology to create navigation solutions that seemed impossible just years ago."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Safety Always",
      description: "Every feature we build prioritizes user safety, ensuring you reach your destination securely."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "User-Centric",
      description: "Our users' needs drive every decision we make, from feature development to interface design."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Continuous Learning",
      description: "Our AI learns and adapts constantly, getting smarter with every journey to serve you better."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former Tesla Autopilot engineer with 10+ years in AI navigation systems.",
      image: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "Ex-Google Maps architect specializing in real-time traffic optimization.",
      image: "👨‍💻"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of AI Research",
      bio: "PhD in Machine Learning from MIT, published researcher in predictive routing.",
      image: "👩‍🔬"
    },
    {
      name: "James Kim",
      role: "Head of Product",
      bio: "Former Uber product lead focused on transportation UX and safety features.",
      image: "👨‍🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionizing Navigation Through AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Founded in 2022, NavigAIt emerged from a simple vision: to make every journey smarter, safer, and more efficient. 
            We combine cutting-edge artificial intelligence with deep understanding of human behavior to create navigation 
            experiences that adapt to you.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border text-center hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To democratize intelligent navigation technology, making AI-powered route optimization accessible to everyone. 
                  We believe that getting from point A to point B should be effortless, efficient, and environmentally conscious.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story */}
        <div>
          <Card className="bg-card border-border">
            <CardContent className="p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    NavigAIt was born out of frustration with existing navigation apps that treated every driver the same. 
                    Our founders, Sarah and Marcus, experienced firsthand how traditional GPS systems failed to adapt to 
                    individual preferences, real-time conditions, and the nuances of human behavior.
                  </p>
                  <p>
                    After years of research and development, we launched our first AI-powered navigation algorithm that 
                    could learn from user patterns and predict optimal routes with unprecedented accuracy. The response 
                    was overwhelming – users reported saving hours of commute time and significantly reducing stress.
                  </p>
                  <p>
                    Today, NavigAIt continues to evolve, incorporating the latest advances in machine learning, computer 
                    vision, and predictive analytics. Our goal remains unchanged: to make every journey as smooth and 
                    efficient as possible while prioritizing safety and environmental sustainability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;