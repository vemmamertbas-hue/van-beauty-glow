import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Euro, Clock, Star, MessageCircle } from 'lucide-react';

const PricesSection = () => {
  const whatsappUrl = "https://wa.me/491739857369?text=Hallo%20Van%20Nagelstudio%2C%20ich%20möchte%20gerne%20einen%20Termin%20für%20";

  const priceCategories = {
    nails: {
      title: "Nagelmodellage",
      icon: "💅",
      services: [
        { name: "Neumodellage Natur (10 Nägel)", price: "55", duration: "120 Min", description: "Natürlicher Look" },
        { name: "Neumodellage French/Vollfarben", price: "60", duration: "120 Min", description: "Klassisch elegant" },
        { name: "Neumodellage Babyboomer/Chrome", price: "70", duration: "135 Min", description: "Moderne Techniken" },
        { name: "Verstärken/Auffüllen Natur", price: "40", duration: "75 Min", description: "Basis-Pflege" },
        { name: "Verstärken/Auffüllen French/Vollfarben", price: "45", duration: "90 Min", description: "Mit Design" },
        { name: "Auffrischung (bis 2. Woche)", price: "25", duration: "45 Min", description: "Schnelle Pflege" },
        { name: "Maniküre ohne Verlängerung", price: "25", duration: "45 Min", description: "Nur Pflege" },
        { name: "Handgemalte Blumen/Muster", price: "ab 2,50", duration: "je nach Design", description: "Individuelle Kunst" }
      ]
    },
    lashes: {
      title: "Wimpern & Augenbrauen",
      icon: "👁️",
      services: [
        { name: "Neuset Einzeltechnik", price: "90", duration: "120 Min", description: "1:1 Technik, natürlicher Look" },
        { name: "Auffüllen ab der 2. Woche", price: "35", duration: "60 Min", description: "Regelmäßige Pflege" },
        { name: "Auffüllen ab der 3. Woche", price: "45", duration: "75 Min", description: "Intensiveres Auffüllen" },
        { name: "Neuset Volumentechnik 3D & 5D", price: "110", duration: "150 Min", description: "Maximales Volumen" },
        { name: "Auffüllen Volume 2. Woche", price: "40", duration: "60 Min", description: "Volume Refill" },
        { name: "Auffüllen Volume 3. Woche", price: "50", duration: "75 Min", description: "Volume Intensiv-Refill" },
        { name: "Wimpern entfernen", price: "15", duration: "30 Min", description: "Professionelle Entfernung" },
        { name: "Wimpernlifting inkl. Färben", price: "50", duration: "60 Min", description: "Natürliches Lifting" },
        { name: "Browlifting inkl. Färben", price: "45", duration: "60 Min", description: "Augenbrauen-Laminierung" },
        { name: "Wimpern/Augenbrauen färben", price: "10", duration: "20 Min", description: "Farb-Intensivierung" },
        { name: "Augenbrauen zupfen", price: "8", duration: "15 Min", description: "Perfekte Form" }
      ]
    },
    pmu: {
      title: "Permanent Make-up",
      icon: "🎨",
      services: [
        { name: "Augenbrauen PMU", price: "300", duration: "120 Min", description: "Professionelle PMU Technik" },
        { name: "Lidstrich oben", price: "240", duration: "90 Min", description: "Perfekte obere Lidlinie" },
        { name: "Lidstrich unten", price: "220", duration: "60 Min", description: "Untere Lidbetonung" },
        { name: "Lippenkontur", price: "300", duration: "120 Min", description: "Definierte Lippenform" },
        { name: "Lippenpigmentierung", price: "450", duration: "150 Min", description: "Vollständige Lippenfüllung" },
        { name: "Auffrischung (2 Monate)", price: "55", duration: "60 Min", description: "Nachbehandlung inklusive" }
      ]
    },
    other: {
      title: "Weitere Services",
      icon: "✨",
      services: [
        { name: "Zahnaufhellung Light (20min)", price: "80", duration: "30 Min", description: "1-3 Farbnuancen heller" },
        { name: "Zahnaufhellung Master (40min)", price: "100", duration: "50 Min", description: "3-5 Farbnuancen heller" },
        { name: "Zahnaufhellung Premium (60min)", price: "120", duration: "70 Min", description: "5-9 Farbnuancen heller" },
        { name: "Haarentfernung Oberlippe", price: "5", duration: "10 Min", description: "Sanfte Entfernung" },
        { name: "Haarentfernung Augenbrauen", price: "10", duration: "15 Min", description: "Präzise Formung" },
        { name: "Haarentfernung Achsel", price: "15", duration: "20 Min", description: "Gründliche Behandlung" },
        { name: "Haarentfernung Arme komplett", price: "25", duration: "45 Min", description: "Vollständige Arme" },
        { name: "Haarentfernung Bikini Zone", price: "20", duration: "30 Min", description: "Professionell & diskret" },
        { name: "Haarentfernung Beine Unterschenkel", price: "25", duration: "45 Min", description: "Glatte Unterschenkel" },
        { name: "Haarentfernung Beine komplett", price: "35", duration: "60 Min", description: "Komplette Beinbehandlung" },
        { name: "Haarentfernung Brust", price: "35", duration: "45 Min", description: "Schonende Behandlung" },
        { name: "Haarentfernung Rücken", price: "40", duration: "50 Min", description: "Gründliche Rückenbehandlung" }
      ]
    }
  };

  return (
    <section id="prices" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Preise</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Transparente Preise für erstklassige Beauty-Behandlungen
          </p>
        </div>

        <Tabs defaultValue="nails" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-card/50 backdrop-blur-sm border border-border/30">
            {Object.entries(priceCategories).map(([key, category]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(priceCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="grid md:grid-cols-2 gap-6">
                {category.services.map((service, index) => (
                  <Card key={index} className="card-elegant group hover:scale-[1.01] transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-playfair text-foreground group-hover:text-primary transition-colors duration-300">
                            {service.name}
                          </CardTitle>
                          <p className="text-sm text-foreground/60 mt-1">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                            <Euro className="w-5 h-5 mr-1" />
                            {service.price}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-foreground/70">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{service.duration}</span>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => window.open(`${whatsappUrl}${encodeURIComponent(service.name)}%20vereinbaren.`, '_blank')}
                          className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Buchen
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Special Offers */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-primary/20 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center font-playfair text-foreground">
                <Star className="w-6 h-6 mr-2 text-accent" />
                Neukunden-Bonus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Als Neukunde erhältst du <strong>10% Rabatt</strong> auf deine erste Behandlung ab 50€.
              </p>
              <Button
                onClick={() => window.open(`${whatsappUrl}Neukunden-Bonus%20nutzen.`, '_blank')}
                className="btn-hero w-full"
              >
                Jetzt Bonus sichern
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-accent/20 backdrop-blur-sm border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center font-playfair text-foreground">
                <Star className="w-6 h-6 mr-2 text-accent" />
                Kombi-Angebote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Buche mehrere Behandlungen zusammen und spare bis zu <strong>15%</strong>. 
                Lass dich zu unseren attraktiven Paketen beraten.
              </p>
              <Button
                onClick={() => window.open(`${whatsappUrl}Kombi-Angebot%20anfragen.`, '_blank')}
                variant="outline"
                className="w-full border-accent hover:bg-accent/10"
              >
                Pakete anfragen
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Payment Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3">
            <div className="flex items-center space-x-6 text-sm text-foreground/70">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                <span>Barzahlung</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                <span>EC-Karte</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                <span>PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;