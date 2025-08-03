import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Facebook, Heart, Star } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/491739857369?text=Hallo%20Van%20Nagelstudio%2C%20ich%20möchte%20gerne%20einen%20Termin%20vereinbaren.";
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Van Nagelstudio & Cosmetics
              </h3>
              <p className="text-background/70 leading-relaxed mb-4">
                Seit über 20 Jahren stehen Van und Maily für erstklassige Beauty-Behandlungen 
                in Osnabrück. Vertraue auf unsere Expertise für deine natürliche Schönheit.
              </p>
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                <span className="text-background/70 text-sm ml-2">5.0 • 500+ zufriedene Kundinnen</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm text-background/60">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span>Hygienezertifiziert</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span>Allergenfreie Produkte</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span>20+ Jahre Erfahrung</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-background/70 hover:text-background transition-colors duration-300">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-background/70 hover:text-background transition-colors duration-300">
                  Über uns
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-background/70 hover:text-background transition-colors duration-300">
                  Leistungen
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-background/70 hover:text-background transition-colors duration-300">
                  Galerie
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('prices')} className="text-background/70 hover:text-background transition-colors duration-300">
                  Preise
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-background/70 hover:text-background transition-colors duration-300">
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-background/70 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/70 text-sm">
                    Natruper Str. 225<br />
                    49090 Osnabrück
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-background/70 flex-shrink-0" />
                <a href="tel:01739857369" className="text-background/70 hover:text-background transition-colors duration-300 text-sm">
                  0173 9857369
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-background/70 flex-shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors duration-300 text-sm">
                  WhatsApp Termin
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Öffnungszeiten</h5>
              <div className="text-background/70 text-sm space-y-1">
                <p>Mo-Fr: 9:00-18:00</p>
                <p>Sa: geschlossen</p>
                <p>So: geschlossen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="https://instagram.com/vannagelstudio" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-background/70 hover:text-background transition-colors duration-300">
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </a>
              
              <a href="https://facebook.com/vannagelstudio" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-background/70 hover:text-background transition-colors duration-300">
                <Facebook className="w-5 h-5" />
                <span className="text-sm">Facebook</span>
              </a>
            </div>

            <div className="flex items-center space-x-6 text-sm text-background/60">
              <button className="hover:text-background/80 transition-colors duration-300">
                Impressum
              </button>
              <button className="hover:text-background/80 transition-colors duration-300">
                Datenschutz
              </button>
              <button className="hover:text-background/80 transition-colors duration-300">
                AGB
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-background/20">
            <p className="text-background/60 text-sm">
              © {currentYear} Van Nagelstudio & Cosmetics. Alle Rechte vorbehalten.
            </p>
            <p className="text-background/40 text-xs mt-2 flex items-center justify-center">
              Made with <Heart className="w-3 h-3 mx-1 fill-red-400 text-red-400" /> in Osnabrück
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;