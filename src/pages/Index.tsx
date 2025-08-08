import React from 'react';
import Navigation from '@/components/Layout/Navigation';
import HeroSection from '@/components/Sections/HeroSection';
import AboutSection from '@/components/Sections/AboutSection';
import ServicesSection from '@/components/Sections/ServicesSection';
import GallerySection from '@/components/Sections/GallerySection';
import PricesSection from '@/components/Sections/PricesSection';
import TestimonialsSection from '@/components/Sections/TestimonialsSection';
import ContactSection from '@/components/Sections/ContactSection';
import CancellationPolicy from '@/components/Sections/CancellationPolicy';
import Footer from '@/components/Layout/Footer';
import FloatingWhatsApp from '@/components/Layout/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CancellationPolicy />
        <GallerySection />
        <PricesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
