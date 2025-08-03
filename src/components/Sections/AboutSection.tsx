import React from 'react';
import { Award, Heart, Star, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Über <span className="bg-gradient-primary bg-clip-text text-transparent">Van & Maily</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ein Familienunternehmen mit Leidenschaft für Schönheit
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="card-elegant">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                    Unsere Geschichte
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Seit über 20 Jahren ist das Van Nagelstudio in Osnabrück eine feste Größe für hochwertige Nagelkunst, Wimpernverlängerung und Permanent Make-up.
                    Gegründet von Van und geführt gemeinsam mit ihrer Tochter Maily, vereint unser Studio generationsübergreifende Erfahrung mit moderner Ästhetik.
                    Wir glauben daran, dass wahre Schönheit in den Details liegt – und behandeln jede Kundin mit höchster Sorgfalt, Präzision und persönlichem Herzblut.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elegant">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                    Unsere Philosophie
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Jede Kundin ist einzigartig und verdient eine individuelle Beratung. Wir hören zu, verstehen deine 
                    Wünsche und setzen sie mit viel Liebe zum Detail um. Dabei verwenden wir ausschließlich hochwertige, 
                    allergenfreie Produkte für dein Wohlbefinden.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">20+</div>
                <div className="text-sm text-foreground/70">Jahre Erfahrung</div>
              </div>
              <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-sm text-foreground/70">Zufriedene Kundinnen</div>
              </div>
            </div>
          </div>

          {/* Right Column - Team Cards */}
          <div className="space-y-8">
            <div className="card-elegant group hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-playfair font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  V
                </div>
                <div>
                  <h4 className="font-playfair text-2xl font-semibold text-foreground mb-2">Van</h4>
                  <p className="text-primary/80 font-medium mb-2">Inhaberin & Nageldesignerin</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Van ist das kreative Herz des Studios. Mit über 20 Jahren Erfahrung kreiert sie 
                    kunstvolle Nageldesigns und ist Expertin für Permanent Make-up.
                  </p>
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent mr-1" />
                    ))}
                    <span className="text-xs text-foreground/60 ml-2">Meisterin ihres Fachs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elegant group hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center text-2xl font-playfair font-bold text-accent-foreground group-hover:scale-110 transition-transform duration-300">
                  M
                </div>
                <div>
                  <h4 className="font-playfair text-2xl font-semibold text-foreground mb-2">Maily</h4>
                  <p className="text-primary/80 font-medium mb-2">Co-Inhaberin & Wimpernexpertin</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Maily zaubert traumhafte Wimpernverlängerungen und ist spezialisiert auf Browlifting. 
                    Ihre sanfte Art macht jeden Besuch zu einem entspannten Erlebnis.
                  </p>
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent mr-1" />
                    ))}
                    <span className="text-xs text-foreground/60 ml-2">Wimpern-Virtuosin</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Highlights */}
            <div className="bg-gradient-primary/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <h4 className="font-playfair text-xl font-semibold text-foreground mb-4">
                Was uns auszeichnet
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground/70">Hygienezertifiziert nach neuesten Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground/70">Allergenfreie und hautverträgliche Produkte</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground/70">Persönliche Beratung in entspannter Atmosphäre</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground/70">Fortlaufende Weiterbildung für neueste Trends</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;