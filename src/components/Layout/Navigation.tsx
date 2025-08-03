import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';

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

  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navigation height offset
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px' }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const whatsappUrl = "https://wa.me/4917398573699?text=Hallo! Ich würde gerne einen Termin vereinbaren.";

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Über uns' },
    { id: 'services', label: 'Leistungen' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'prices', label: 'Preise' },
    { id: 'testimonials', label: 'Bewertungen' },
    { id: 'contact', label: 'Kontakt' }
  ];

  return (
    <nav className={`nav-clean ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container-padding">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-playfair text-xl md:text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              <span className="hidden sm:inline">Van Nagelstudio & Cosmetics</span>
              <span className="sm:hidden">Van Studio</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`relative nav-link transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-primary after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full after:scale-x-100' 
                    : 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="btn-hero"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Termin buchen</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile WhatsApp Button - Always visible */}
            <Button
              onClick={() => window.open(whatsappUrl, '_blank')}
              size="sm"
              className="btn-primary px-4 py-2"
            >
              <MessageCircle className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Termin</span>
            </Button>
            
            {/* Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-300"
              aria-label="Hauptmenü"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-sm rounded-xl mt-4 border border-border/30 shadow-lg">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-primary bg-primary/10 border-l-4 border-primary' 
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile WhatsApp CTA */}
              <div className="pt-4 border-t border-border/30 mt-4">
                <Button
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="btn-hero w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Jetzt Termin vereinbaren</span>
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