import React from 'react';
import { Navigation, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/a4e3982c-183f-493d-96c2-6dac74bc4f2f.png" 
                alt="NavigAIt" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-powered navigation assistant that revolutionizes your driving experience with intelligent route optimization and real-time traffic insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Changelog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 NavigAIt. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Built with ❤️ using AI technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;