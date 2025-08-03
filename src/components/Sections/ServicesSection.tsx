import React from 'react';
import { Sparkles, Eye, Brush, Zap, Scissors, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Sparkles,
      title: "UV-Gel-Nägel",
      description: "Langanhaltende, elegante Nagelkunst in perfekter Ausführung. Von klassischen Farben bis zu kunstvollen Designs.",
      features: ["French Manicure", "Gel-Lacke", "Nail Art", "Reparaturen"],
      duration: "90-120 Min",
      highlight: "Hält bis zu 4 Wochen"
    },
    {
      icon: Eye,
      title: "Wimpernverlängerung",
      description: "Natürlich schöne, voluminöse Wimpern mit hypoallergenen Seidenwimpern und allergenfreiem Kleber.",
      features: ["1:1 Technik", "Volumen-Technik", "Mega Volume", "Refill-Service"],
      duration: "120-180 Min",
      highlight: "Allergenfreier Kleber"
    },
    {
      icon: Brush,
      title: "Permanent Make-up",
      description: "Perfekte Augenbrauen, Lippen und Lidstriche für den natürlichen Look, der jeden Tag perfekt sitzt.",
      features: ["Ombré Brows", "Powder Brows", "Härchenzeichnung", "Korrekturen"],
      duration: "120-150 Min",
      highlight: "2-3 Jahre haltbar"
    },
    {
      icon: Eye,
      title: "Browlifting",
      description: "Natürliches Lifting für deine Augenbrauen - fülliger, geschwungener und perfekt in Form.",
      features: ["Laminierung", "Lifting", "Färbung", "Styling"],
      duration: "45-60 Min",
      highlight: "6-8 Wochen sichtbar"
    },
    {
      icon: Zap,
      title: "Zahnbleaching",
      description: "Strahlend weiße Zähne mit professioneller, schonender Aufhellung für dein perfektes Lächeln.",
      features: ["LED-Bleaching", "Schonende Gele", "Sofort-Ergebnis", "Nachbehandlung"],
      duration: "60-90 Min",
      highlight: "Bis zu 8 Nuancen heller"
    },
    {
      icon: Scissors,
      title: "Haarentfernung (Waxing)",
      description: "Sanfte, gründliche Haarentfernung mit hochwertigen Wachsen für wochenlang glatte Haut.",
      features: ["Warmwachs", "Kaltwachs", "Intim-Bereich", "Gesicht & Körper"],
      duration: "30-90 Min",
      highlight: "4-6 Wochen haarfrei"
    }
  ];

  const whatsappUrl = "https://wa.me/491739857369?text=Hallo%20Van%20Nagelstudio%2C%20ich%20möchte%20gerne%20einen%20Termin%20für%20";

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Leistungen</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Entdecke unser vielfältiges Angebot für deine natürliche Schönheit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {/* Service Icon */}
              <div className="service-icon mb-6">
                <service.icon className="w-8 h-8" />
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl font-semibold text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlight Badge */}
                <div className="inline-flex items-center bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-accent mr-2" />
                  <span className="text-sm font-medium text-accent">{service.highlight}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center text-sm text-foreground/60">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Dauer: {service.duration}</span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => window.open(`${whatsappUrl}${encodeURIComponent(service.title)}%20vereinbaren.`, '_blank')}
                  className="w-full mt-6 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-[1.02]"
                >
                  Termin für {service.title}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* General CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <div className="text-center sm:text-left">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                Unsicher welche Behandlung für dich geeignet ist?
              </h3>
              <p className="text-foreground/70">
                Lass dich kostenlos von Van & MaiLy beraten. Wir finden gemeinsam die perfekte Lösung für dich.
              </p>
            </div>
            <Button
              onClick={() => window.open(`${whatsappUrl}Beratung%20vereinbaren.`, '_blank')}
              className="btn-hero flex-shrink-0"
            >
              Kostenlose Beratung
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;