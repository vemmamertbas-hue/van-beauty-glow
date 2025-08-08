import React from 'react';
import { Sparkles, Eye, Brush, Zap, Scissors, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Sparkles,
      title: "UV-Gel-Nägel",
      description: "Professionelle Nagelmodellage mit UV-Gel für langanhaltende, elegante Nägel. Sofortige Aushärtung unter UV-Lampe, kratzfest und gesünder als Acryl-Nägel.",
      features: ["Neumodellage", "Auffüllen", "French & Designs", "Nail Art möglich"],
      duration: "60-135 Min",
      highlight: "Hält 3-5 Wochen"
    },
    {
      icon: Eye,
      title: "Wimpernverlängerung",
      description: "Traumhafte Wimpern mit professioneller Verlängerung. Einzeltechnik (1:1) für den natürlichen Look oder Volumentechnik für maximales Drama. Hypoallergene Seidenwimpern mit regelmäßigem Refill-Service.",
      features: ["1:1 Einzeltechnik", "Volumen-Technik", "Hypoallergene Wimpern", "Refill-Service"],
      duration: "120-150 Min",
      highlight: "Hält 3-5 Wochen"
    },
    {
      icon: Brush,
      title: "Permanent Make-up",
      description: "Perfekte Augenbrauen, Lippen und Lidstriche für den natürlichen Look. Professionelle PMU-Technik für langanhaltende Schönheit. 50€ Anzahlung beim Beratungsgespräch erforderlich, kostenlose Nachbehandlung inklusive.",
      features: ["Augenbrauen PMU", "Lidstrich", "Lippen PMU", "Nachbehandlung inklusive"],
      duration: "120-180 Min",
      highlight: "2-3 Jahre haltbar"
    },
    {
      icon: Eye,
      title: "Browlifting",
      description: "Augenbrauen-Laminierung für natürlich voluminöse und perfekt geformte Brauen. Die Härchen werden geliftet, geglättet und in Form gebracht - für einen lang anhaltenden, natürlichen Look.",
      features: ["Laminierung", "Natürlicher Lift", "Inklusive Färbung", "Perfekte Form"],
      duration: "45-60 Min",
      highlight: "Hält 5-7 Wochen"
    },
    {
      icon: Zap,
      title: "Zahnbleaching",
      description: "Kosmetische Zahnaufhellung für strahlend weiße Zähne - bis zu 9 Nuancen heller! Drei Pakete verfügbar: Light (20 Min, bis 3 Nuancen), Master (40 Min, bis 5 Nuancen), Premium (60 Min, bis 9 Nuancen). Refresh-Behandlung innerhalb 2 Monaten möglich.",
      features: ["3 Pakete verfügbar", "Bis 9 Nuancen heller", "Schmerzfrei", "Refresh möglich"],
      duration: "20-60 Min",
      highlight: "Bis zu 9 Nuancen heller",
      warning: "Nicht geeignet bei Implantaten, Kronen, Brücken, Veneers, Füllungen, abgestorbenen Wurzeln und Tetracyclin-Verfärbungen"
    },
    {
      icon: Scissors,
      title: "Haarentfernung (Waxing)",
      description: "Sanfte, professionelle Haarentfernung mit hochwertigem Warmwachs. Langanhaltend glatte Haut und mit der Zeit immer feineres Haarwachstum.",
      features: ["Warmwachs-Technik", "Alle Körperbereiche", "Langanhaltende Glätte", "Feineres Nachwachsen"],
      duration: "15-60 Min",
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
            <div key={index} className="service-card group">
              {/* Service Icon */}
              <div className="service-icon group-hover:scale-110 group-hover:rotate-3 mb-6">
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

                {/* Warning for Zahnbleaching */}
                {service.warning && (
                  <div className="text-xs text-foreground/60 bg-amber-50 border border-amber-200 rounded-lg p-3 dark:bg-amber-900/20 dark:border-amber-700">
                    <strong>Wichtiger Hinweis:</strong> {service.warning}
                  </div>
                )}

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
                Lass dich kostenlos von Van & Maily beraten. Wir finden gemeinsam die perfekte Lösung für dich.
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