import React from 'react';
import { Navigation, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img 
              src="/lovable-uploads/a4e3982c-183f-493d-96c2-6dac74bc4f2f.png" 
              alt="NavigAIt" 
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -inset-1 bg-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className={`text-foreground hover:text-primary transition-colors duration-200 relative group ${location.pathname === '/features' ? 'text-primary' : ''}`}>
            Features
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/features' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link to="/pricing" className={`text-foreground hover:text-primary transition-colors duration-200 relative group ${location.pathname === '/pricing' ? 'text-primary' : ''}`}>
            Pricing
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/pricing' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link to="/about" className={`text-foreground hover:text-primary transition-colors duration-200 relative group ${location.pathname === '/about' ? 'text-primary' : ''}`}>
            About
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link to="/contact" className={`text-foreground hover:text-primary transition-colors duration-200 relative group ${location.pathname === '/contact' ? 'text-primary' : ''}`}>
            Contact
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="ghost" className="text-foreground hover:text-primary">
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Link to="/pricing">Start Free Trial</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link to="/features" className="block text-foreground hover:text-primary transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              Features
            </Link>
            <Link to="/pricing" className="block text-foreground hover:text-primary transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/about" className="block text-foreground hover:text-primary transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="block text-foreground hover:text-primary transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link to="/signin" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
              </Button>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;