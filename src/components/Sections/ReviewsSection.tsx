import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Aylin K.",
      text: "Ich bin so dankbar für das Studio! Meine Nägel halten ewig und sehen immer gepflegt aus. Van berät super herzlich und professionell – 100 % Weiterempfehlung.",
      rating: 5,
      service: "Nageldesign",
      image: "A"
    },
    {
      name: "Lara Nguyen",
      text: "Ich habe lange nach einem Kosmetikstudio gesucht, dem ich vertraue – bei Van & MaiLy fühle ich mich endlich angekommen. Die Wimpernverlängerung ist wunderschön natürlich.",
      rating: 5,
      service: "Wimpernverlängerung",
      image: "L"
    },
    {
      name: "Elif M.",
      text: "Die Atmosphäre im Studio ist einfach zum Wohlfühlen. Mein Permanent Make-up ist exakt so geworden, wie ich es mir vorgestellt habe. Top Arbeit, sehr hygienisch und einfühlsam.",
      rating: 5,
      service: "Permanent Make-up",
      image: "E"
    },
    {
      name: "Sarah B.",
      text: "Seit Jahren gehe ich zu Van für meine Nägel. Die Qualität ist immer top und das Design wird perfekt umgesetzt. Das Team ist super freundlich und professionell.",
      rating: 5,
      service: "Nageldesign",
      image: "S"
    },
    {
      name: "Nina K.",
      text: "MaiLy macht die besten Wimpern der Stadt! Ich bekomme ständig Komplimente und die Wimpern halten super lange. Kann das Studio nur weiterempfehlen!",
      rating: 5,
      service: "Wimpernverlängerung",
      image: "N"
    },
    {
      name: "Julia T.",
      text: "Das Browlifting bei Van ist einfach perfekt! Meine Augenbrauen sehen jetzt so viel voller und gepflegter aus. Der Effekt hält wirklich lange an.",
      rating: 5,
      service: "Browlifting",
      image: "J"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Was unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Kundinnen</span> sagen
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Über 500 zufriedene Kundinnen vertrauen bereits auf unsere Expertise
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center mt-8">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">5.0</div>
              <div className="text-sm text-foreground/60">Basierend auf 500+ Bewertungen</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="card-elegant group relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{review.text}"
                </blockquote>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold group-hover:scale-110 transition-transform duration-300">
                    {review.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-primary/80">{review.service}</div>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1">
                    <span className="text-xs text-accent font-medium">{review.service}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              Werde Teil unserer glücklichen Kunden-Familie
            </h3>
            <p className="text-foreground/70 mb-6">
              Buche jetzt deinen Termin und erlebe selbst, warum unsere Kundinnen so begeistert sind. 
              Wir freuen uns darauf, auch dich verwöhnen zu dürfen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-sm text-foreground/60">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span>5.0 Sterne • 500+ Bewertungen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/60">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
            <span>Über 20 Jahre Erfahrung</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
            <span>500+ zufriedene Kundinnen</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
            <span>Hygienezertifiziert</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
            <span>Allergenfreie Produkte</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;