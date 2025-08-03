import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star, Calendar, Award } from 'lucide-react';
import heroImage from '@/assets/hero-studio.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Schönheit, die bleibt. Vertrauen, das wächst.';
  const whatsappUrl = "https://wa.me/4917398573699?text=Hallo! Ich würde gerne einen Termin vereinbaren.";

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
      {/* Background Image with Improved Readability */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Van Nagelstudio Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-content">
              {/* Trust Badge */}
              <div className="inline-flex items-center card-clean px-6 py-3 mb-8 animate-[hero-fade-in_1s_ease-out_0.3s_both] bg-white/90 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">5.0 • 500+ zufriedene Kundinnen</span>
              </div>

              {/* Main Headline */}
              <h1 className="heading-xl mb-6 animate-[hero-fade-in_1s_ease-out_0.5s_both] text-white">
                Van Nagelstudio &{' '}
                <span className="gradient-text">
                  Cosmetics
                </span>
              </h1>

              {/* Typewriter Subtitle */}
              <div className="h-16 mb-8 animate-[hero-fade-in_1s_ease-out_0.7s_both]">
                <p className="font-playfair text-xl sm:text-2xl lg:text-3xl text-white/90 italic">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mb-8 leading-relaxed animate-[hero-fade-in_1s_ease-out_0.9s_both]">
                Seit über 20 Jahren stehen wir für exklusive Nagelkunst, professionelle Wimpernverlängerung und elegantes Permanent Make-up in Osnabrück. 
                Lass dich von Van & Maily verwöhnen.
              </p>
            </div>

            {/* Team Photo */}
            <div className="animate-[hero-fade-in_1s_ease-out_0.6s_both] text-center lg:text-right">
              <div className="relative inline-block">
                <img
                  src="/lovable-uploads/78ef64ac-6b44-4b28-92ec-2de18fd3bc52.png"
                  alt="Van & Maily - Mutter-Tochter Beauty Team"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white/20 hover:scale-105 transition-all duration-500 filter brightness-110"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary/90 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                  <p className="text-white font-semibold text-sm">Van & Maily</p>
                  <p className="text-white/80 text-xs">Beauty Experten seit 2000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons & Trust Indicators - Centered below grid */}
        <div className="text-center mt-12 space-content">
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-[hero-fade-in_1s_ease-out_1.1s_both]">
            <Button
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="btn-hero mobile-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Jetzt Termin vereinbaren</span>
            </Button>
            
            <Button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary mobile-full sm:w-auto border-white/30 text-white hover:bg-white/10"
            >
              <Calendar className="w-5 h-5 mr-2" />
              <span>Unsere Leistungen</span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-white/70 animate-[hero-fade-in_1s_ease-out_1.3s_both]">
            <div className="flex items-center">
              <Award className="w-4 h-4 text-accent mr-2" />
              <span>20+ Jahre Erfahrung</span>
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;