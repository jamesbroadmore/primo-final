import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HERO_IMAGE = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/n6kxlaes_a06b5548-eab9-4772-bbf7-ba8dd3a61963.jpg';

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 100);
  }, []);

  const scrollDown = () => {
    const el = document.getElementById('brand-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundAttachment: 'fixed' }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090E]/70 via-[#08090E]/50 to-[#08090E]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#08090E]/40 via-transparent to-[#08090E]/40" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 1s ease, transform 1s ease' }}
      >
        {/* Eyebrow */}
        <div className="mb-6" style={{ animationDelay: '0.1s' }}>
          <span className="section-label">Perth's Premier Pool Tiling Specialists</span>
        </div>

        {/* Headline */}
        <h1
          data-testid="hero-headline"
          className="font-serif text-white mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          Crafted Water.<br />
          <em style={{ fontStyle: 'italic', color: '#E8D4A0' }}>Perfected Stone.</em>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          style={{ color: 'rgba(240,237,232,0.75)' }}
        >
          Transforming Perth's finest pools with precision stone work and luxury tile finishes
          that stand the test of time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" data-testid="hero-cta-buttons">
          <Link to="/portfolio" className="btn-gold" data-testid="hero-view-work-btn">
            View Our Work
            <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-outline" data-testid="hero-consultation-btn">
            Request Consultation
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-8" style={{ color: 'rgba(240,237,232,0.55)' }}>
          {['20+ Years Experience', '500+ Projects Completed', 'Lifetime Tile Warranty'].map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44A]" />
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[rgba(240,237,232,0.5)] hover:text-[#C9A44A] transition-colors"
        aria-label="Scroll down"
        data-testid="hero-scroll-indicator"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </button>

      {/* Decorative gold orbs */}
      <div className="absolute top-1/3 right-16 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #C9A44A, transparent)' }} />
      <div className="absolute bottom-1/4 left-16 w-48 h-48 rounded-full opacity-8 blur-3xl"
        style={{ background: 'radial-gradient(circle, #1A4A7A, transparent)' }} />
    </section>
  );
}
