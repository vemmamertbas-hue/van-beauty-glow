import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Heart, Sparkles, Eye, User, Star, MessageCircle } from 'lucide-react';

// Import gallery images - logisch passende Fotos
import nailsBlackGold from '@/assets/gallery/nails-black-gold.jpg';
import nailsArtistic from '@/assets/gallery/nails-artistic.jpg';
import nailsNaturalPink from '@/assets/gallery/nails-natural-pink.jpg';
import lashesApplication from '@/assets/gallery/lashes-application.jpg';
import lashesVolume from '@/assets/gallery/lashes-volume.jpg';
import pmuBrowsWork from '@/assets/gallery/pmu-brows-work.jpg';
import pmuOmbre from '@/assets/gallery/pmu-ombre.jpg';
import browliftingTransformation from '@/assets/gallery/browlifting-transformation.jpg';
import browliftingResult from '@/assets/gallery/browlifting-result.jpg';
import vanMailyStudio from '@/assets/gallery/van-maily-studio.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const galleryCategories = [
    { key: 'alle', title: 'Alle Arbeiten', icon: Eye },
    { key: 'nails', title: 'Nageldesign', icon: Sparkles },
    { key: 'lashes', title: 'Wimpern', icon: Eye },
    { key: 'pmu', title: 'Permanent Make-up', icon: Heart },
    { key: 'brows', title: 'Augenbrauen', icon: User },
    { key: 'certificates', title: 'Zertifikate', icon: Star },
    { key: 'team', title: 'Team', icon: User }
  ];

  // ECHTE Van Nagelstudio Bilder - alle WhatsApp Uploads integriert
  const galleryItems = [
    // Team Fotos
    {
      category: 'team',
      title: 'Van Nagelstudio - Mutter & Tochter Team',
      description: 'Familienunternehmen seit 2000 - Van & Maily',
      image: '/WhatsApp Image 2025-08-03 at 22.02.44.jpeg',
      isBeforeAfter: false
    },
    {
      category: 'team',
      title: 'Team Foto - Van & Maily',
      description: 'Professionelles Mutter-Tochter Beauty Team',
      image: '/WhatsApp Image 2025-08-03 at 22.02.48.jpeg',
      isBeforeAfter: false
    },
    // Zertifikate & Qualifikationen
    {
      category: 'certificates',
      title: 'LCN Power Workshop Zertifikat',
      description: 'Professionelle Weiterbildung - Thu van Hoang',
      image: '/WhatsApp Image 2025-08-03 at 22.02.46.jpeg',
      isBeforeAfter: false
    },
    {
      category: 'certificates',
      title: 'Purebeau Pro PMU Zertifikat',
      description: 'Elite Workshop Permanent Make-up Zertifikat',
      image: '/WhatsApp Image 2025-08-03 at 22.02.47.jpeg',
      isBeforeAfter: false
    },
    // Wimpern - Echte Arbeiten
    {
      category: 'lashes',
      title: 'Wimpernverlängerung Vorher/Nachher',
      description: 'Natürliche Wimpernverlängerung - perfektes Ergebnis',
      image: '/WhatsApp Image 2025-08-03 at 22.02.49.jpeg',
      isBeforeAfter: true
    },
    {
      category: 'lashes',
      title: 'Volume Wimpern Detail',
      description: 'Professionelle Volumen Technik in Perfektion',
      image: '/WhatsApp Image 2025-08-03 at 22.02.50.jpeg',
      isBeforeAfter: false
    },
    {
      category: 'lashes',
      title: 'Einzelwimpern Technik',
      description: 'Natürliche 1:1 Wimpernverlängerung',
      image: '/WhatsApp Image 2025-08-03 at 22.02.45 (1).jpeg',
      isBeforeAfter: false
    },
    {
      category: 'lashes', 
      title: 'Wimpernlifting + Färbung',
      description: 'Natürliches Lifting für perfekte Wimpern',
      image: '/WhatsApp Image 2025-08-03 at 22.02.45 (2).jpeg',
      isBeforeAfter: false
    },
    // Nägel - Echte Designs
    {
      category: 'nails',
      title: 'Bunte Nageldesign Kollektion',
      description: 'Kreative French und Vollfarben Designs',
      image: '/WhatsApp Image 2025-08-03 at 22.02.51.jpeg',
      isBeforeAfter: false
    },
    {
      category: 'nails',
      title: 'Chrome Mirror Effekt Nägel',
      description: 'Luxuriöse spiegelnde Chrome-Maniküre',
      image: '/WhatsApp Image 2025-08-03 at 22.02.52.jpeg',
      isBeforeAfter: false
    },
    {
      category: 'nails',
      title: 'Elegante French Maniküre',
      description: 'Klassische French mit modernem Touch',
      image: '/WhatsApp Image 2025-08-03 at 22.02.44 (1).jpeg',
      isBeforeAfter: false
    },
    {
      category: 'nails',
      title: 'Gel-Nagelmodellage',
      description: 'Hochwertige Gelmodellage in Perfektion',
      image: '/WhatsApp Image 2025-08-03 at 22.02.44 (2).jpeg', 
      isBeforeAfter: false
    },
    {
      category: 'nails',
      title: 'Sommer Nagelkunst',
      description: 'Frische sommerliche Nageldesigns',
      image: '/WhatsApp Image 2025-08-03 at 22.02.44 (3).jpeg',
      isBeforeAfter: false
    },
    {
      category: 'nails',
      title: 'Babyboomer Style',
      description: 'Eleganter natürlicher Babyboomer Look',
      image: '/WhatsApp Image 2025-08-03 at 22.02.46 (3).jpeg',
      isBeforeAfter: false
    },
    {
      category: 'nails',
      title: 'Glitzer Akzente',
      description: 'Glamouröse Glitzer-Details und Effekte',
      image: '/WhatsApp Image 2025-08-03 at 22.02.47 (1).jpeg',
      isBeforeAfter: false
    },
    {
      category: 'nails',
      title: 'Marmor Effekt Design',
      description: 'Kunstvoller Marmor-Look auf den Nägeln',
      image: '/WhatsApp Image 2025-08-03 at 22.02.47 (2).jpeg',
      isBeforeAfter: false
    },
    // PMU & Brows
    {
      category: 'pmu',
      title: 'Permanent Make-up Augenbrauen',
      description: 'Professionelle PMU Technik für perfekte Brauen',
      image: '/WhatsApp Image 2025-08-03 at 22.02.45 (3).jpeg',
      isBeforeAfter: false
    },
    {
      category: 'brows',
      title: 'Browlifting Behandlung',
      description: 'Augenbrauen-Lifting für die perfekte Form',
      image: '/WhatsApp Image 2025-08-03 at 22.02.46 (1).jpeg',
      isBeforeAfter: false
    },
    // Studio Setup
    {
      category: 'alle',
      title: 'Professioneller Arbeitsplatz',
      description: 'Hochwertige Ausstattung für beste Ergebnisse',
      image: '/WhatsApp Image 2025-08-03 at 22.02.46 (2).jpeg',
      isBeforeAfter: false
    }
  ];

  const filterItems = (category: string) => {
    if (category === 'alle') {
      return galleryItems;
    }
    return galleryItems.filter(item => item.category === category);
  };

  return (
    <section id="gallery" className="section-padding bg-background section-divider">
      <div className="container-padding">
        <div className="section-header">
          <h2 className="heading-lg mb-6">
            Unsere <span className="gradient-text">Galerie</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Lassen Sie sich von unseren Arbeiten inspirieren. Jedes Bild erzählt die Geschichte 
            einer zufriedenen Kundin und zeigt unser Können.
          </p>
        </div>

        <Tabs defaultValue="alle" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-8 card-clean h-auto p-2">
            {galleryCategories.map((category) => (
              <TabsTrigger
                key={category.key}
                value={category.key} 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-primary/10 flex flex-col items-center p-4 gap-2 group"
              >
                <category.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs font-medium">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {galleryCategories.map((category) => (
            <TabsContent key={category.key} value={category.key}>
              <div className="grid grid-4 grid-responsive">
                {filterItems(category.key).map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-125 group-hover:contrast-110 group-hover:saturate-110 filter hover:drop-shadow-2xl"
                        style={{
                          transform: 'perspective(1000px)',
                          transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                        <h4 className="font-semibold text-lg mb-2 font-playfair">{item.title}</h4>
                        <p className="text-sm text-white/90 leading-relaxed">{item.description}</p>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-300">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      {item.isBeforeAfter && (
                        <div className="absolute top-4 left-4 animate-pulse-soft">
                          <div className="bg-accent/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                            <span className="text-xs font-medium text-accent-foreground">Vorher/Nachher</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-feature max-w-2xl mx-auto">
            <h3 className="heading-md mb-4">
              Lass uns dein nächstes Kunstwerk schaffen
            </h3>
            <p className="text-muted mb-6">
              Jede Behandlung ist ein individuelles Kunstwerk. Vereinbare jetzt deinen Termin und werde 
              Teil unserer wunderschönen Galerie.
            </p>
            <Button
              onClick={() => window.open("https://wa.me/4917398573699?text=Hallo! Ich möchte gerne einen Termin vereinbaren.", '_blank')}
              className="btn-hero"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Jetzt Termin vereinbaren
            </Button>
          </div>
        </div>

        {/* Featured Stats */}
        <div className="mt-12 grid grid-4 grid-responsive">
          <div className="text-center p-6 card-clean hover:shadow-md transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-sm text-muted">Kunstwerke erschaffen</div>
          </div>
          <div className="text-center p-6 card-clean hover:shadow-md transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">20+</div>
            <div className="text-sm text-muted">Jahre Erfahrung</div>
          </div>
          <div className="text-center p-6 card-clean hover:shadow-md transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted">Kundenzufriedenheit</div>
          </div>
          <div className="text-center p-6 card-clean hover:shadow-md transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">⭐</div>
            <div className="text-sm text-muted">5.0 Sterne Bewertung</div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="font-playfair text-2xl">{selectedImage.title}</DialogTitle>
            </DialogHeader>
            <div className="px-6 pb-6">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg mb-4"
              />
              <p className="text-foreground/70 text-lg leading-relaxed">{selectedImage.description}</p>
              {selectedImage.isBeforeAfter && (
                <div className="mt-4 inline-flex items-center bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2">
                  <Star className="w-4 h-4 text-accent mr-2" />
                  <span className="text-sm font-medium text-accent">Vorher/Nachher Transformation</span>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default GallerySection;