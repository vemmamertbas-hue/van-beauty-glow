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
      services: [{
        name: "Neumodellage Natur (10 Nägel)",
        price: "55",
        duration: "120 Min",
        description: "Natürlicher Look"
      }, {
        name: "Neumodellage French/Vollfarben",
        price: "60",
        duration: "120 Min",
        description: "Klassisch elegant"
      }, {
        name: "Neumodellage Babyboomer/Chrome/Marmor",
        price: "70",
        duration: "135 Min",
        description: "Moderne Techniken"
      }, {
        name: "Verstärken/Auffüllen Natur",
        price: "40",
        duration: "75 Min",
        description: "Basis-Pflege"
      }, {
        name: "Verstärken/Auffüllen French/Vollfarben",
        price: "45",
        duration: "90 Min",
        description: "Mit Design"
      }, {
        name: "Auffrischung (bis 2. Woche)",
        price: "25",
        duration: "45 Min",
        description: "Schnelle Pflege"
      }, {
        name: "Maniküre",
        price: "25",
        duration: "45 Min",
        description: "Professionelle Maniküre"
      }, {
        name: "Handgemalte Blumen/Muster pro Nagel",
        price: "ab 2,50",
        duration: "je nach Design",
        description: "Individuelle Kunst"
      }, {
        name: "Strasssteine pro Stück",
        price: "0,50",
        duration: "5 Min",
        description: "Glitzer-Akzente"
      }, {
        name: "Glitzer pro Nagel",
        price: "0,50",
        duration: "5 Min",
        description: "Glamour-Effekt"
      }]
    },
    feet: {
      title: "Füße",
      icon: "🦶",
      services: [{
        name: "Fußpflege",
        price: "30",
        duration: "60 Min",
        description: "Professionelle Fußpflege"
      }, {
        name: "Gelmodellage French/Vollfarben",
        price: "35",
        duration: "75 Min",
        description: "Schöne Füße"
      }, {
        name: "Fußpflege mit Gelmodellage",
        price: "45",
        duration: "90 Min",
        description: "Komplett-Behandlung"
      }, {
        name: "Wellnessfußpflege (Fußbad, Peeling, Öl-Massage)",
        price: "45",
        duration: "75 Min",
        description: "Verwöhnung pur"
      }]
    },
    lashes: {
      title: "Wimpernverlängerung",
      icon: "👁️",
      services: [{
        name: "Neuset Einzeltechnik",
        price: "90",
        duration: "120 Min",
        description: "1:1 Technik, natürlicher Look"
      }, {
        name: "Auffüllen ab der 2. Woche",
        price: "35",
        duration: "60 Min",
        description: "Regelmäßige Pflege"
      }, {
        name: "Auffüllen ab der 3. Woche",
        price: "45",
        duration: "75 Min",
        description: "Intensiveres Auffüllen"
      }, {
        name: "Neuset Volumentechnik",
        price: "110",
        duration: "150 Min",
        description: "Maximales Volumen"
      }, {
        name: "Auffüllen Volume 2. Woche",
        price: "40",
        duration: "60 Min",
        description: "Volume Refill"
      }, {
        name: "Auffüllen Volume 3. Woche",
        price: "50",
        duration: "75 Min",
        description: "Volume Intensiv-Refill"
      }, {
        name: "Wimpern entfernen",
        price: "15",
        duration: "30 Min",
        description: "Professionelle Entfernung"
      }, {
        name: "Wimpernlifting inklusive färben",
        price: "50",
        duration: "60 Min",
        description: "Natürliches Lifting"
      }, {
        name: "Browlifting inklusive färben",
        price: "45",
        duration: "60 Min",
        description: "Augenbrauen-Laminierung"
      }, {
        name: "Wimpern/Augenbrauen färben",
        price: "10",
        duration: "20 Min",
        description: "Farb-Intensivierung"
      }, {
        name: "Augenbrauen zupfen",
        price: "8",
        duration: "15 Min",
        description: "Perfekte Form"
      }]
    },
    pmu: {
      title: "Permanent Make-up",
      icon: "🎨",
      services: [{
        name: "Augenbrauen PMU",
        price: "300",
        duration: "120 Min",
        description: "Professionelle PMU Technik"
      }, {
        name: "Lidstrich oben",
        price: "240",
        duration: "90 Min",
        description: "Perfekte obere Lidlinie"
      }, {
        name: "Lidstrich unten",
        price: "220",
        duration: "60 Min",
        description: "Untere Lidbetonung"
      }, {
        name: "Lippenkontur",
        price: "300",
        duration: "120 Min",
        description: "Definierte Lippenform"
      }, {
        name: "Lippenpigmentierung",
        price: "450",
        duration: "150 Min",
        description: "Vollständige Lippenfüllung"
      }, {
        name: "Auffrischung (2 Monate)",
        price: "55",
        duration: "60 Min",
        description: "Nachbehandlung inklusive"
      }]
    },
    teeth: {
      title: "Zahnaufhellung",
      icon: "😁",
      services: [{
        name: "Light 20min (1-3 Farbnuancen heller)",
        price: "80",
        duration: "30 Min",
        description: "Sanfte Aufhellung"
      }, {
        name: "Master 40min (3-5 Farbnuancen heller)",
        price: "100",
        duration: "50 Min",
        description: "Mittlere Aufhellung"
      }, {
        name: "Premium 60min (5-9 Farbnuancen heller)",
        price: "120",
        duration: "70 Min",
        description: "Maximale Aufhellung"
      }, {
        name: "Auffrischen (nur innerhalb 2 Monaten)",
        price: "55",
        duration: "30 Min",
        description: "Nachbehandlung"
      }]
    },
    waxing: {
      title: "Haarentfernung mit Wachs",
      icon: "✨",
      services: [{
        name: "Oberlippe",
        price: "5",
        duration: "10 Min",
        description: "Sanfte Entfernung"
      }, {
        name: "Augenbrauen",
        price: "10",
        duration: "15 Min",
        description: "Präzise Formung"
      }, {
        name: "Achsel",
        price: "15",
        duration: "20 Min",
        description: "Gründliche Behandlung"
      }, {
        name: "Arme komplett",
        price: "25",
        duration: "45 Min",
        description: "Vollständige Arme"
      }, {
        name: "Bikini Zone",
        price: "20",
        duration: "30 Min",
        description: "Professionell & diskret"
      }, {
        name: "Beine Oberschenkel",
        price: "30",
        duration: "45 Min",
        description: "Obere Beinpartie"
      }, {
        name: "Beine Unterschenkel",
        price: "25",
        duration: "30 Min",
        description: "Untere Beinpartie"
      }, {
        name: "Beine komplett",
        price: "35",
        duration: "60 Min",
        description: "Komplette Beinbehandlung"
      }, {
        name: "Brust",
        price: "35",
        duration: "45 Min",
        description: "Schonende Behandlung"
      }, {
        name: "Rücken",
        price: "40",
        duration: "50 Min",
        description: "Gründliche Rückenbehandlung"
      }]
    },
    beauty: {
      title: "Schönheitsflecken",
      icon: "💫",
      services: [{
        name: "Schönheitsflecken Aufreis",
        price: "30",
        duration: "30 Min",
        description: "Natürliche Beauty-Spots"
      }]
    }
  };
  return <section id="prices" className="section-padding bg-background">
      <div className="container-padding">
        <div className="section-header">
          <h2 className="heading-lg mb-6">
            Unsere <span className="gradient-text">Preise</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Transparente Preise für erstklassige Beauty-Behandlungen
          </p>
        </div>

        <Tabs defaultValue="nails" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-7 mb-8 card-clean h-auto p-2">
            {Object.entries(priceCategories).map(([key, category]) => <TabsTrigger key={key} value={key} className="flex flex-col items-center space-y-1 md:space-y-2 p-2 md:p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-primary/10">
                <span className="text-lg md:text-xl">{category.icon}</span>
                <span className="text-xs md:text-sm font-medium text-center leading-tight">{category.title}</span>
              </TabsTrigger>)}
          </TabsList>

          {Object.entries(priceCategories).map(([key, category]) => <TabsContent key={key} value={key} className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {category.services.map((service, index) => <Card key={index} className="card-elegant group hover:scale-[1.01] transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-3 md:pb-4">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                        <div className="flex-1">
                          <CardTitle className="text-base md:text-lg font-playfair text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                            {service.name}
                          </CardTitle>
                          <p className="text-xs md:text-sm text-foreground/60 mt-1">{service.description}</p>
                        </div>
                        <div className="text-right md:ml-4">
                          <div className="flex items-center text-xl md:text-2xl font-bold gradient-text">
                            <Euro className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                            {service.price}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
                        <div className="flex items-center text-xs md:text-sm text-foreground/70">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                          <span>{service.duration}</span>
                        </div>
                        <Button size="sm" onClick={() => window.open(`${whatsappUrl}${encodeURIComponent(service.name)}%20vereinbaren.`, '_blank')} className="btn-primary text-xs md:text-sm px-3 py-1 md:px-4 md:py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full md:w-auto">
                          <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          Buchen
                        </Button>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </TabsContent>)}
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
              <Button onClick={() => window.open(`${whatsappUrl}Neukunden-Bonus%20nutzen.`, '_blank')} className="btn-hero w-full">
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
              <Button onClick={() => window.open(`${whatsappUrl}Kombi-Angebot%20anfragen.`, '_blank')} variant="outline" className="w-full border-accent hover:bg-accent/10">
                Pakete anfragen
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Ausfallgebühr Information */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-center mb-4 text-foreground">
              📋 Terminabsage - Wichtige Infos
            </h3>
            <div className="space-y-4 text-sm text-foreground/80">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">⚠️</span>
                </div>
                <p>
                  <strong>Min. 24 Stunden vorher absagen</strong> - ansonsten wird die <strong>Hälfte des Preises</strong> für die Behandlung als Gebühr fällig.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">⚠️</span>
                </div>
                <p>
                  Bei Absagen von <strong>Permanent-Makeup Terminen</strong> wird die <strong>Anzahlung von 50€</strong> einbehalten.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3">
            <div className="flex items-center space-x-6 text-sm text-foreground/70">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                <span>Barzahlung</span>
              </div>
              <div className="flex items-center">
                
                <span>
              </span>
              </div>
              <div className="flex items-center">
                
                <span>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PricesSection;