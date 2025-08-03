import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Heart, Star, Filter } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Placeholder for actual images from GitHub repository
  const galleryCategories = {
    all: { title: "Alle Arbeiten", icon: "✨" },
    nails: { title: "Nageldesign", icon: "💅" },
    lashes: { title: "Wimpern", icon: "👁️" },
    brows: { title: "Augenbrauen", icon: "🎯" },
    pmu: { title: "Permanent Make-up", icon: "🎨" },
    before_after: { title: "Vorher/Nachher", icon: "⭐" }
  };

  // Simulated gallery items - in real implementation, these would come from the GitHub repository
  const galleryItems = [
    {
      id: 1,
      category: "nails",
      title: "French Manicure Deluxe",
      description: "Klassische Eleganz mit modernem Twist",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500",
      isBeforeAfter: false
    },
    {
      id: 2,
      category: "lashes",
      title: "Volume Wimpernverlängerung",
      description: "Natürlicher 3D-Look für den Alltag",
      image: "https://images.unsplash.com/photo-1583001308556-7e4b57c3b75e?w=500",
      isBeforeAfter: false
    },
    {
      id: 3,
      category: "nails",
      title: "Artistic Nail Design",
      description: "Kunstvolle Designs für besondere Anlässe",
      image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500",
      isBeforeAfter: false
    },
    {
      id: 4,
      category: "pmu",
      title: "Ombré Augenbrauen",
      description: "Natürlicher Farbverlauf für perfekte Brauen",
      image: "https://images.unsplash.com/photo-1616394586583-e3b67f6e3e4f?w=500",
      isBeforeAfter: false
    },
    {
      id: 5,
      category: "before_after",
      title: "Wimpern Transformation",
      description: "Vorher/Nachher Mega Volume Technik",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=500",
      isBeforeAfter: true
    },
    {
      id: 6,
      category: "brows",
      title: "Browlifting Ergebnis",
      description: "Natürlich voluminöse Augenbrauen",
      image: "https://images.unsplash.com/photo-1620331817157-c4a1b0b44e5b?w=500",
      isBeforeAfter: false
    },
    {
      id: 7,
      category: "nails",
      title: "Sommer Nail Art",
      description: "Frische Designs für die warme Jahreszeit",
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=500",
      isBeforeAfter: false
    },
    {
      id: 8,
      category: "lashes",
      title: "Classic Wimpern",
      description: "Zeitlose 1:1 Technik für natürliche Schönheit",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
      isBeforeAfter: false
    },
    {
      id: 9,
      category: "before_after",
      title: "PMU Transformation",
      description: "Vorher/Nachher Powder Brows",
      image: "https://images.unsplash.com/photo-1569325106664-3ca5d8fdc333?w=500",
      isBeforeAfter: true
    }
  ];

  const filterItems = (category) => {
    if (category === 'all') return galleryItems;
    if (category === 'before_after') return galleryItems.filter(item => item.isBeforeAfter);
    return galleryItems.filter(item => item.category === category);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Galerie</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Entdecke die Kunstwerke unserer Arbeit und lass dich inspirieren
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 bg-card/50 backdrop-blur-sm border border-border/30">
            {Object.entries(galleryCategories).map(([key, category]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex flex-col items-center space-y-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-xs hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(galleryCategories).map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filterItems(category).map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-2xl bg-card border border-border/30 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-elegant cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    {/* Image */}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Before/After Badge */}
                    {item.isBeforeAfter && (
                      <div className="absolute top-3 left-3 bg-accent/90 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1">
                        <span className="text-xs font-medium text-accent-foreground">Vorher/Nachher</span>
                      </div>
                    )}

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-full">
                        <h3 className="font-playfair text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* View Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-medium text-primary-foreground">
                          {galleryCategories[item.category]?.title || 'Gallery'}
                        </span>
                      </div>
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
              onClick={() => window.open("https://wa.me/491739857369?text=Hallo%20Van%20Nagelstudio%2C%20ich%20möchte%20gerne%20einen%20Termin%20vereinbaren.", '_blank')}
              className="btn-hero"
            >
              <Heart className="w-5 h-5 mr-2" />
              Jetzt Termin vereinbaren
            </Button>
          </div>
        </div>

        {/* Featured Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-sm text-foreground/70">Kunstwerke erschaffen</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">20+</div>
            <div className="text-sm text-foreground/70">Jahre Erfahrung</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-sm text-foreground/70">Kundenzufriedenheit</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">⭐</div>
            <div className="text-sm text-foreground/70">5.0 Sterne Bewertung</div>
          </div>
        </div>
      </div>

      {/* Image Modal - Simple implementation */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full bg-card rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="p-6">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-foreground/70">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;