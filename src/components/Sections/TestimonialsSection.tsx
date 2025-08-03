import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aylin K.",
      text: "Ich bin so dankbar für das Studio! Meine Nägel halten ewig und sehen immer gepflegt aus. Van berät super herzlich und professionell – 100 % Weiterempfehlung.",
      rating: 5,
      service: "Nageldesign",
      avatar: "A"
    },
    {
      name: "Lara Nguyen",
      text: "Ich habe lange nach einem Kosmetikstudio gesucht, dem ich vertraue – bei Van & Maily fühle ich mich endlich angekommen. Die Wimpernverlängerung ist wunderschön natürlich.",
      rating: 5,
      service: "Wimpernverlängerung", 
      avatar: "L"
    },
    {
      name: "Elif M.",
      text: "Die Atmosphäre im Studio ist einfach zum Wohlfühlen. Mein Permanent Make-up ist exakt so geworden, wie ich es mir vorgestellt habe. Top Arbeit, sehr hygienisch und einfühlsam.",
      rating: 5,
      service: "Permanent Make-up",
      avatar: "E"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-background section-divider">
      <div className="container-padding">
        <div className="section-header">
          <h2 className="heading-lg mb-6">
            Was unsere <span className="gradient-text">Kundinnen</span> sagen
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Über 500 zufriedene Kundinnen vertrauen bereits auf unsere Expertise
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center mt-8">
            <div className="card-clean p-6 animate-[float_6s_ease-in-out_infinite]">
              <div className="flex items-center justify-center space-x-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent animate-[pulse-soft_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <div className="text-3xl font-bold gradient-text">5.0</div>
              <div className="text-sm text-muted">Basierend auf 500+ Bewertungen</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-elegant group relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-all duration-500">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-foreground/80 leading-relaxed mb-6 italic font-medium">
                  "{testimonial.text}"
                </blockquote>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary/80">{testimonial.service}</div>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1">
                    <span className="text-xs text-accent font-medium">{testimonial.service}</span>
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
          <div className="flex items-center group">
            <div className="w-2 h-2 bg-accent rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
            <span>Über 20 Jahre Erfahrung</span>
          </div>
          <div className="flex items-center group">
            <div className="w-2 h-2 bg-accent rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
            <span>500+ zufriedene Kundinnen</span>
          </div>
          <div className="flex items-center group">
            <div className="w-2 h-2 bg-accent rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
            <span>Hygienezertifiziert</span>
          </div>
          <div className="flex items-center group">
            <div className="w-2 h-2 bg-accent rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
            <span>Allergenfreie Produkte</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;