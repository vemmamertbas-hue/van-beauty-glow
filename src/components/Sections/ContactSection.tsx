import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, MessageCircle, Clock, Mail, Instagram, Facebook, Star } from 'lucide-react';

const ContactSection = () => {
  const whatsappUrlVan = "https://wa.me/491739857369?text=Hallo!%20Ich%20würde%20gerne%20einen%20Termin%20vereinbaren.";
  const whatsappUrlMaily = "https://wa.me/4917656875845?text=Hallo!%20Ich%20würde%20gerne%20einen%20Termin%20vereinbaren.";
  
  const contactInfo = [
    {
      icon: MapPin,
      title: "Unser Studio",
      content: "Natruper Str. 225\n49090 Osnabrück",
      action: () => window.open("https://maps.google.com?q=Natruper+Str.+225,+49090+Osnabrück", '_blank')
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Van",
      content: "+49 173 9857369",
      action: () => window.open(whatsappUrlVan, '_blank')
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Maily", 
      content: "+49 176 56875845",
      action: () => window.open(whatsappUrlMaily, '_blank')
    },
    {
      icon: Phone,
      title: "Telefon Van",
      content: "+49 173 9857369",
      action: () => window.open("tel:+491739857369", '_blank')
    },
    {
      icon: Phone,
      title: "Telefon Maily",
      content: "+49 176 56875845", 
      action: () => window.open("tel:+4917656875845", '_blank')
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      content: "Mo: 09:00-18:00\nDi: 09:00-20:00\nMi: 09:00-18:00\nDo: 09:00-20:00\nFr: 09:00-18:00\nSa & So: geschlossen"
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
    <section id="contact" className="section-padding bg-background section-divider">
      <div className="container-padding">
        <div className="section-header">
          <h2 className="heading-lg mb-6">
            Kontakt & <span className="gradient-text">Terminbuchung</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Wir freuen uns darauf, dich in unserem Studio zu verwöhnen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="card-elegant group cursor-pointer hover:scale-[1.02] transition-all duration-300" onClick={item.action}>
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm md:text-base text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-foreground/70 text-xs md:text-sm whitespace-pre-line leading-relaxed">
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
              <h3 className="font-playfair text-xl md:text-2xl font-semibold text-foreground">
                Schnell & einfach Termin vereinbaren
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <Button
                  onClick={() => window.open(whatsappUrlVan, '_blank')}
                  className="btn-hero group h-12 md:h-14 text-sm md:text-base"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="font-semibold">WhatsApp Van</div>
                    <div className="text-xs opacity-90">+49 173 9857369</div>
                  </div>
                </Button>

                <Button
                  onClick={() => window.open(whatsappUrlMaily, '_blank')}
                  className="btn-hero group h-12 md:h-14 text-sm md:text-base"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="font-semibold">WhatsApp Maily</div>
                    <div className="text-xs opacity-90">+49 176 56875845</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-playfair text-xl md:text-2xl font-semibold text-foreground">
                Folge uns für Inspiration
              </h3>
              
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="card-elegant group cursor-pointer flex-1 hover:scale-[1.02] transition-all duration-300" onClick={() => window.open(social.url, '_blank')}>
                    <CardContent className="p-3 md:p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <social.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors duration-300">
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
                  Van & Maily Nagelstudio & Cosmetics
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
                  Warum Van & Maily Nagelstudio?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-accent" />
                    <span className="text-foreground/70">Platz 1 unter Top 10 Nagelstudios in Osnabrück</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-accent" />
                    <span className="text-foreground/70">Über 25 Jahre Erfahrung als Mutter-Tochter-Team</span>
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
                  Aktuelles & Stornierungsregeln
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  Für alle Behandlungen bitten wir um eine rechtzeitige Terminvereinbarung.
                </p>
                <div className="text-foreground/70 text-sm leading-relaxed space-y-2">
                  <p><strong>Stornierungsregeln:</strong></p>
                  <p>• Termine müssen mindestens 24 Stunden vorher abgesagt werden</p>
                  <p>• Bei kurzfristigen Absagen wird 50% des Preises als Ausfallgebühr berechnet</p>
                  <p>• Bei Permanent-Make-up-Terminen wird die 50€-Anzahlung einbehalten</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="card-feature max-w-2xl mx-auto">
            <h3 className="heading-md mb-4">
              Bereit für deine Schönheits-Transformation?
            </h3>
            <p className="text-foreground/70 mb-6">
              Lass uns gemeinsam deine Beauty-Träume verwirklichen. Van & Maily freuen sich darauf, 
              dich in ihrem Studio zu verwöhnen.
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center">
              <Button
                onClick={() => window.open(whatsappUrlVan, '_blank')}
                className="btn-hero w-full md:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Van kontaktieren
              </Button>
              <Button
                onClick={() => window.open(whatsappUrlMaily, '_blank')}
                className="btn-hero w-full md:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Maily kontaktieren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;