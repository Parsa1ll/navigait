import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navigation, Zap, Shield, Clock, MapPin, Route } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              AI-Powered Navigation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Experience the future of navigation with NavigAIt - your intelligent companion that learns, adapts, and optimizes every journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-glow">
                <Link to="/pricing">Start Free Trial</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose NavigAIt?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Lightning Fast",
                description: "Real-time route optimization powered by advanced AI algorithms"
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Always Reliable",
                description: "99.9% uptime with offline capabilities for uninterrupted navigation"
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Save Time",
                description: "Reduce travel time by up to 30% with intelligent traffic prediction"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Navigation?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of users who've already upgraded their driving experience
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link to="/pricing">Get Started Today</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;