import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import PortfolioPreview from '../components/PortfolioPreview';
import { BrandSection, ProcessSection, TestimonialsSection, CTABanner } from '../components/HomeContent';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandSection />
      <ServicesPreview />
      <PortfolioPreview />
      <ProcessSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
