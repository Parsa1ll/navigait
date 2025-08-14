import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  MapPin, 
  Route, 
  Zap, 
  Shield, 
  Clock, 
  Brain, 
  Smartphone, 
  Cloud,
  Navigation,
  AlertTriangle,
  Settings,
  BarChart3
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI-Powered Route Optimization",
      description: "Advanced machine learning algorithms analyze traffic patterns, weather conditions, and historical data to suggest the most efficient routes.",
      badge: "Core Feature"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Real-Time Location Tracking",
      description: "Precise GPS tracking with sub-meter accuracy ensures you never miss a turn or lose your way.",
      badge: "Essential"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Instant Route Recalculation",
      description: "Adaptive routing that instantly adjusts to traffic changes, road closures, and unexpected events.",
      badge: "Real-time"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Safety-First Navigation",
      description: "Prioritizes safe routes and provides alerts for hazardous conditions, school zones, and construction areas.",
      badge: "Safety"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Predictive ETA",
      description: "Machine learning models predict arrival times with 95% accuracy, considering traffic patterns and driving behavior.",
      badge: "Predictive"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Voice Assistant Integration",
      description: "Natural language processing for hands-free navigation commands and conversational route guidance.",
      badge: "Voice AI"
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Offline Capabilities",
      description: "Download maps and continue navigation even without internet connection, ensuring reliability anywhere.",
      badge: "Offline"
    },
    {
      icon: <Navigation className="w-8 h-8 text-primary" />,
      title: "Multi-Modal Transportation",
      description: "Seamlessly switch between driving, walking, cycling, and public transport with optimized routes for each mode.",
      badge: "Multi-modal"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-primary" />,
      title: "Hazard Detection",
      description: "Real-time alerts for accidents, road hazards, speed cameras, and emergency vehicles in your vicinity.",
      badge: "Alerts"
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Personalized Preferences",
      description: "Learn your driving patterns and preferences to customize routes based on your unique style and needs.",
      badge: "Personalized"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Trip Analytics",
      description: "Detailed insights into your travel patterns, fuel efficiency, and carbon footprint with actionable recommendations.",
      badge: "Analytics"
    },
    {
      icon: <Route className="w-8 h-8 text-primary" />,
      title: "Multi-Stop Planning",
      description: "Optimize routes with multiple destinations using advanced algorithms to minimize total travel time.",
      badge: "Planning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for Smart Navigation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how NavigAIt's cutting-edge technology transforms your driving experience with intelligent, adaptive, and personalized navigation solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Experience All Features Today
              </h2>
              <p className="text-muted-foreground mb-6">
                Start your free trial and discover how NavigAIt can revolutionize your daily commute and long-distance travels.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;