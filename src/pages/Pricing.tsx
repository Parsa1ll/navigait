import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "",
      description: "Perfect for casual drivers and short trips",
      features: [
        "Basic navigation",
        "Real-time traffic",
        "Voice guidance",
        "Up to 5 saved locations",
        "Standard maps"
      ],
      cta: "Get Started",
      popular: false,
      icon: null
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      description: "Advanced features for daily commuters",
      features: [
        "Everything in Basic",
        "AI route optimization",
        "Offline maps",
        "Unlimited saved locations",
        "Trip analytics",
        "Multi-stop planning",
        "Hazard alerts",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true,
      icon: <Star className="w-5 h-5" />
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "/month",
      description: "Full suite for businesses and power users",
      features: [
        "Everything in Pro",
        "Fleet management",
        "Custom integrations",
        "Advanced analytics",
        "White-label options",
        "24/7 dedicated support",
        "SLA guarantees",
        "Custom API access"
      ],
      cta: "Contact Sales",
      popular: false,
      icon: <Zap className="w-5 h-5" />
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your navigation needs. All plans include our core AI features with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-card border-border transition-all duration-300 hover:shadow-glow ${
                plan.popular 
                  ? 'border-primary shadow-glow scale-105' 
                  : 'hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center mb-4">
                  {plan.icon && (
                    <div className="p-2 bg-primary/10 rounded-lg mr-2">
                      {plan.icon}
                    </div>
                  )}
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                </div>
                
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-lg">
                    {plan.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I switch plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly."
              },
              {
                question: "Is there a free trial?",
                answer: "We offer a 14-day free trial for our Pro plan, giving you full access to all premium features without any commitment."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and for Enterprise customers, we can arrange bank transfers and custom billing cycles."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;