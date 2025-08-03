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
    { key: 'brows', title: 'Augenbrauen', icon: User }
  ];

  // Logisch passende Galerie-Items mit echten Beauty-Fotos
  const galleryItems = [
    {
      category: 'nails',
      title: 'Elegante Gel-Nägel',
      description: 'Schwarzes Design mit Gold-Akzenten - ein Klassiker',
      image: nailsBlackGold,
      isBeforeAfter: false
    },
    {
      category: 'nails',
      title: 'Artistisches Nageldesign',
      description: 'Kreative Muster und aufwendige Designs',
      image: nailsArtistic,
      isBeforeAfter: false
    },
    {
      category: 'nails',
      title: 'Natural Pink Manicure',
      description: 'Natürliche Eleganz mit rosa Akzenten',
      image: nailsNaturalPink,
      isBeforeAfter: false
    },
    {
      category: 'lashes',
      title: 'Wimpernverlängerung Prozess',
      description: 'Professionelle Applikation in unserem Studio',
      image: lashesApplication,
      isBeforeAfter: true
    },
    {
      category: 'lashes',
      title: 'Volume Wimpernverlängerung',
      description: 'Dramatisches Volumen für den besonderen Look',
      image: lashesVolume,
      isBeforeAfter: false
    },
    {
      category: 'pmu',
      title: 'PMU Augenbrauen Arbeit',
      description: 'Professionelle Permanent Make-up Technik',
      image: pmuBrowsWork,
      isBeforeAfter: true
    },
    {
      category: 'pmu',
      title: 'Ombré Augenbrauen',
      description: 'Perfekt geformte Brauen mit Ombré-Technik',
      image: pmuOmbre,
      isBeforeAfter: false
    },
    {
      category: 'brows',
      title: 'Browlifting Transformation',
      description: 'Vorher/Nachher einer Augenbrauen-Behandlung',
      image: browliftingTransformation,
      isBeforeAfter: true
    },
    {
      category: 'brows',
      title: 'Browlifting Ergebnis',
      description: 'Perfekt geformte und gehobene Augenbrauen',
      image: browliftingResult,
      isBeforeAfter: false
    },
    {
      category: 'alle',
      title: 'Van & MaiLy Studio',
      description: 'Unser Team bei der professionellen Arbeit',
      image: vanMailyStudio,
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
    <section id="gallery" className="py-20 bg-background section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Galerie</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Lassen Sie sich von unseren Arbeiten inspirieren. Jedes Bild erzählt die Geschichte 
            einer zufriedenen Kundin und zeigt unser Können.
          </p>
        </div>

        <Tabs defaultValue="alle" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-card/80 backdrop-blur-sm border border-border/30 h-auto p-2">
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filterItems(category.key).map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="relative group overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
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
          <div className="bg-gradient-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              Lass uns dein nächstes Kunstwerk schaffen
            </h3>
            <p className="text-foreground/70 mb-6">
              Jede Behandlung ist ein individuelles Kunstwerk. Vereinbare jetzt deinen Termin und werde 
              Teil unserer wunderschönen Galerie.
            </p>
            <Button
              onClick={() => window.open("https://wa.me/4917398573699?text=Hallo! Ich möchte gerne einen Termin vereinbaren.", '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Jetzt Termin vereinbaren
            </Button>
          </div>
        </div>

        {/* Featured Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/30 hover:shadow-card transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-sm text-foreground/70">Kunstwerke erschaffen</div>
          </div>
          <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/30 hover:shadow-card transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">20+</div>
            <div className="text-sm text-foreground/70">Jahre Erfahrung</div>
          </div>
          <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/30 hover:shadow-card transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-sm text-foreground/70">Kundenzufriedenheit</div>
          </div>
          <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/30 hover:shadow-card transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">⭐</div>
            <div className="text-sm text-foreground/70">5.0 Sterne Bewertung</div>
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