import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Euro, Clock, Star, MessageCircle } from 'lucide-react';

const PricesSection = () => {
  const whatsappUrl = "https://wa.me/491739857369?text=Hallo%20Van%20Nagelstudio%2C%20ich%20möchte%20gerne%20einen%20Termin%20für%20";

  const priceCategories = {
    nails: {
      title: "Nageldesign",
      icon: "💅",
      services: [
        { name: "Gel-Maniküre klassisch", price: "35", duration: "60 Min", description: "Perfekte Grundversorgung" },
        { name: "Gel-Maniküre mit French", price: "40", duration: "75 Min", description: "Zeitloser eleganter Look" },
        { name: "Gel-Maniküre mit Nail Art", price: "45-65", duration: "90 Min", description: "Kreative Designs nach Wunsch" },
        { name: "Neumodellage komplett", price: "50", duration: "120 Min", description: "Komplette Nagelverlängerung" },
        { name: "Auffüllen + Lackierung", price: "35", duration: "75 Min", description: "Regelmäßige Pflege" },
        { name: "Reparatur pro Nagel", price: "5", duration: "15 Min", description: "Einzelnagel-Reparatur" }
      ]
    },
    lashes: {
      title: "Wimpern & Augenbrauen",
      icon: "👁️",
      services: [
        { name: "Wimpernverlängerung Classic", price: "85", duration: "120 Min", description: "1:1 Technik, natürlicher Look" },
        { name: "Wimpernverlängerung Volume", price: "95", duration: "150 Min", description: "2D-3D Technik, mehr Volumen" },
        { name: "Wimpernverlängerung Mega Volume", price: "110", duration: "180 Min", description: "4D+ Technik, maximales Volumen" },
        { name: "Wimpern Refill (2-3 Wochen)", price: "45", duration: "60 Min", description: "Auffüllen bestehender Wimpern" },
        { name: "Wimpern Refill (4+ Wochen)", price: "65", duration: "90 Min", description: "Intensives Auffüllen" },
        { name: "Browlifting inkl. Färbung", price: "45", duration: "60 Min", description: "Augenbrauen-Laminierung" }
      ]
    },
    pmu: {
      title: "Permanent Make-up",
      icon: "🎨",
      services: [
        { name: "Augenbrauen Ombré", price: "280", duration: "120 Min", description: "Natürlicher Farbverlauf" },
        { name: "Augenbrauen Powder Brows", price: "300", duration: "120 Min", description: "Pudriger, voller Look" },
        { name: "Augenbrauen Härchenzeichnung", price: "320", duration: "150 Min", description: "Hyperrealistische Härchen" },
        { name: "Lidstrich oben", price: "180", duration: "90 Min", description: "Perfekte Kontur" },
        { name: "Lidstrich unten", price: "120", duration: "60 Min", description: "Sanfte Betonung" },
        { name: "Lippen konturiert", price: "250", duration: "120 Min", description: "Definierte Lippenform" },
        { name: "Korrektur/Auffrischung", price: "120-180", duration: "90 Min", description: "Nach 12-18 Monaten" }
      ]
    },
    other: {
      title: "Weitere Leistungen",
      icon: "✨",
      services: [
        { name: "Zahnbleaching", price: "89", duration: "90 Min", description: "Professionelle Aufhellung" },
        { name: "Gesicht Waxing komplett", price: "25", duration: "30 Min", description: "Augenbrauen, Oberlippe, Kinn" },
        { name: "Augenbrauen zupfen", price: "12", duration: "20 Min", description: "Perfekte Form" },
        { name: "Oberlippe waxen", price: "8", duration: "10 Min", description: "Sanfte Haarentfernung" },
        { name: "Bikinizone klassisch", price: "25", duration: "30 Min", description: "Brazilian Waxing" },
        { name: "Beine komplett", price: "45", duration: "60 Min", description: "Glatte Beine" },
        { name: "Achseln", price: "15", duration: "15 Min", description: "Schnell und gründlich" }
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