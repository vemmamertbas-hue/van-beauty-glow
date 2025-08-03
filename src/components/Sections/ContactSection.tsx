import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, MessageCircle, Clock, Mail, Instagram, Facebook, Star } from 'lucide-react';

const ContactSection = () => {
  const whatsappUrl = "https://wa.me/491739857369?text=Hallo%20Van%20Nagelstudio%2C%20ich%20möchte%20gerne%20einen%20Termin%20vereinbaren.";
  
  const contactInfo = [
    {
      icon: MapPin,
      title: "Unser Studio",
      content: "Natruper Str. 225\n49090 Osnabrück",
      action: () => window.open("https://maps.google.com?q=Natruper+Str.+225,+49090+Osnabrück", '_blank')
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Termin",
      content: "0173 9857369",
      action: () => window.open(whatsappUrl, '_blank')
    },
    {
      icon: Phone,
      title: "Telefonisch",
      content: "0173 9857369",
      action: () => window.open("tel:01739857369", '_blank')
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      content: "Mo-Fr: 9:00-18:00\nSa: 9:00-16:00\nSo: Nach Vereinbarung"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@vannagelstudio",
      url: "https://instagram.com/vannagelstudio"
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Van Nagelstudio",
      url: "https://facebook.com/vannagelstudio"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Kontakt & <span className="bg-gradient-primary bg-clip-text text-transparent">Terminbuchung</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Wir freuen uns darauf, dich in unserem Studio zu verwöhnen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="card-elegant group cursor-pointer" onClick={item.action}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-foreground/70 text-sm whitespace-pre-line leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl font-semibold text-foreground">
                Schnell & einfach Termin vereinbaren
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Button
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="btn-hero group h-14"
                >
                  <MessageCircle className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-xs opacity-90">Sofortige Antwort</div>
                  </div>
                </Button>

                <Button
                  onClick={() => window.open("tel:01739857369", '_blank')}
                  variant="outline"
                  className="h-14 border-2 border-primary/30 hover:border-primary bg-card/50 backdrop-blur-sm hover:bg-primary/10 group"
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                  <div className="text-left">
                    <div className="font-semibold">Anrufen</div>
                    <div className="text-xs opacity-70">0173 9857369</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl font-semibold text-foreground">
                Folge uns für Inspiration
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="card-elegant group cursor-pointer flex-1" onClick={() => window.open(social.url, '_blank')}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <social.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {social.name}
                          </div>
                          <div className="text-xs text-foreground/60">{social.handle}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Map & Studio Info */}
          <div className="space-y-6">
            {/* Studio Image/Map Placeholder */}
            <div className="aspect-video bg-gradient-primary/20 rounded-2xl border border-primary/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/20"></div>
              <div className="relative z-10 text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                  Van Nagelstudio & Cosmetics
                </h3>
                <p className="text-foreground/70 mb-4">
                  Natruper Str. 225<br />
                  49090 Osnabrück
                </p>
                <Button
                  onClick={() => window.open("https://maps.google.com?q=Natruper+Str.+225,+49090+Osnabrück", '_blank')}
                  variant="outline"
                  className="border-primary hover:bg-primary/10"
                >
                  Route planen
                </Button>
              </div>
            </div>

            {/* Studio Features */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  Warum Van Nagelstudio?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-accent" />
                    <span className="text-foreground/70">Über 20 Jahre Erfahrung im Beauty-Bereich</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-accent" />
                    <span className="text-foreground/70">Hygienezertifiziert nach neuesten Standards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-accent" />
                    <span className="text-foreground/70">Allergenfreie und hautverträgliche Produkte</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-accent" />
                    <span className="text-foreground/70">Individuelle Beratung in entspannter Atmosphäre</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-accent" />
                    <span className="text-foreground/70">Kostenlose Nachberatung für alle Behandlungen</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Reminder */}
            <Card className="bg-gradient-primary/20 backdrop-blur-sm border-primary/30">
              <CardContent className="p-6 text-center">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  Wichtiger Hinweis
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Für alle Behandlungen bitten wir um eine rechtzeitige Terminvereinbarung. 
                  Bei Terminabsagen weniger als 24 Stunden vorher behalten wir uns vor, 
                  50% der Behandlungskosten zu berechnen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              Bereit für deine Schönheits-Transformation?
            </h3>
            <p className="text-foreground/70 mb-6">
              Lass uns gemeinsam deine Beauty-Träume verwirklichen. Van & Maily freuen sich darauf, 
              dich in ihrem Studio zu verwöhnen.
            </p>
            <Button
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="btn-hero"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Jetzt Wunschtermin anfragen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;