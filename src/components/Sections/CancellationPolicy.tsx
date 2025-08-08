import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Clock, Euro } from 'lucide-react';

const CancellationPolicy = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text">Aktuelles</span> - Wichtige Termininfos
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Bitte beachten Sie unsere Stornierungsbedingungen für einen reibungslosen Ablauf
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Allgemeine Stornierung */}
          <Card className="card-elegant border-amber-200 dark:border-amber-800">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-foreground">
                <AlertTriangle className="w-6 h-6 mr-3 text-amber-500" />
                Allgemeine Behandlungen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">24 Stunden Regel</h4>
                  <p className="text-sm text-foreground/70">
                    Termine müssen mindestens 24 Stunden vorher abgesagt werden
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Euro className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Stornierungsgebühr</h4>
                  <p className="text-sm text-foreground/70">
                    Bei kurzfristiger Absage: <span className="font-semibold text-amber-600">50% des Behandlungspreises</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PMU Stornierung */}
          <Card className="card-elegant border-primary/30">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-foreground">
                <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                Permanent Make-up
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Euro className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Anzahlung</h4>
                  <p className="text-sm text-foreground/70">
                    <span className="font-semibold text-primary">50€ Anzahlung</span> beim Beratungsgespräch erforderlich
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Bei Absage</h4>
                  <p className="text-sm text-foreground/70">
                    Die Anzahlung von 50€ wird bei Terminabsage einbehalten
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Zusätzliche Hinweise */}
        <div className="mt-8 bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
          <h3 className="font-semibold text-foreground mb-3 text-center">
            💡 Warum diese Regelung?
          </h3>
          <p className="text-sm text-foreground/70 text-center leading-relaxed">
            Als kleines Familienunternehmen sind wir auf zuverlässige Terminplanung angewiesen. 
            Diese Regelung hilft uns, unsere hohe Servicequalität aufrechtzuerhalten und faire 
            Termine für alle Kundinnen zu gewährleisten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CancellationPolicy;