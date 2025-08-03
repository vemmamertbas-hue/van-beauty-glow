import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-studio.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Schönheit, die bleibt. Vertrauen, das wächst.';
  const whatsappUrl = "https://wa.me/491739857369?text=Hallo%20Van%20Nagelstudio%2C%20ich%20möchte%20gerne%20einen%20Termin%20vereinbaren.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Van Nagelstudio Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/30 rounded-full blur-lg animate-pulse-soft"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="hero-fade-in">
          {/* Stars Badge */}
          <div className="inline-flex items-center bg-card/80 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="flex items-center space-x-1 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">5.0 • Über 500 zufriedene Kundinnen</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Van Nagelstudio &{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cosmetics
            </span>
          </h1>

          {/* Typewriter Subtitle */}
          <div className="h-16 mb-8">
            <p className="font-playfair text-xl sm:text-2xl lg:text-3xl text-foreground/80 italic">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Seit über 20 Jahren stehen wir für exklusive Nagelkunst, professionelle Wimpernverlängerung und elegantes Permanent Make-up in Osnabrück. 
            Lass dich von Van & MaiLy verwöhnen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="btn-hero group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span>Jetzt Termin vereinbaren</span>
            </Button>
            
            <Button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="px-8 py-4 border-2 border-primary/30 hover:border-primary bg-card/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              <span>Unsere Leistungen</span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/60">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span>Über 20 Jahre Erfahrung</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span>Hygienezertifiziert</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span>Allergenfreie Produkte</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;