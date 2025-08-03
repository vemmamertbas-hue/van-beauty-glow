import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const whatsappUrl = "https://wa.me/491739857369?text=Hallo%20Van%20Nagelstudio%2C%20ich%20möchte%20gerne%20einen%20Termin%20vereinbaren.";

  return (
    <nav className={`nav-glass ${isScrolled ? 'shadow-card' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-playfair text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Van Nagelstudio & Cosmetics
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('hero')} className="nav-link">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="nav-link">
                Über uns
              </button>
              <button onClick={() => scrollToSection('services')} className="nav-link">
                Leistungen
              </button>
              <button onClick={() => scrollToSection('gallery')} className="nav-link">
                Galerie
              </button>
              <button onClick={() => scrollToSection('prices')} className="nav-link">
                Preise
              </button>
              <button onClick={() => scrollToSection('reviews')} className="nav-link">
                Bewertungen
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Kontakt
              </button>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="btn-hero"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-sm rounded-lg mt-2 border border-border/50">
              <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Über uns
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Leistungen
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Galerie
              </button>
              <button onClick={() => scrollToSection('prices')} className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Preise
              </button>
              <button onClick={() => scrollToSection('reviews')} className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Bewertungen
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Kontakt
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="btn-hero w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>WhatsApp Termin</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;