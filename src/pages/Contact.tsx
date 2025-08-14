import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Headphones,
  Users,
  Building
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@navigait.com",
      availability: "24/7 response"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Live Chat",
      description: "Instant messaging support",
      contact: "Available in app",
      availability: "24/7 availability"
    },
    {
      icon: <Building className="w-6 h-6 text-primary" />,
      title: "Enterprise Sales",
      description: "Custom solutions",
      contact: "enterprise@navigait.com",
      availability: "Business hours"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Street, SF, CA 94105",
      type: "Headquarters"
    },
    {
      city: "New York",
      address: "456 Tech Avenue, NYC, NY 10001",
      type: "East Coast Office"
    },
    {
      city: "London",
      address: "789 Digital Lane, London, UK W1A 0AA",
      type: "European Office"
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
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about NavigAIt? Need support? Want to explore enterprise solutions? 
            We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Enter your first name"
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Enter your last name"
                    className="bg-input border-border"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email address"
                  className="bg-input border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?"
                  className="bg-input border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className="bg-input border-border resize-none"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Methods</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {method.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm">{method.title}</h3>
                          <p className="text-xs text-muted-foreground mb-1">{method.description}</p>
                          <p className="text-sm font-medium">{method.contact}</p>
                          <p className="text-xs text-muted-foreground">{method.availability}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold">{office.city}</h3>
                            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                              {office.type}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Hours */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Support Hours</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p><strong>Email & Chat:</strong> 24/7 availability</p>
                      <p><strong>Phone:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                      <p><strong>Emergency:</strong> Critical issues handled immediately</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-16">
          <Card className="bg-card border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Need Quick Answers?</h2>
              <p className="text-muted-foreground mb-6">
                Check out our comprehensive FAQ section for instant answers to common questions.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Visit FAQ Section
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;