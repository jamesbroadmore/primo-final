import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const stats = [
  { number: '20+', label: 'Years of Mastery' },
  { number: '500+', label: 'Pools Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '4.9★', label: 'Google Rating' },
];

const steps = [
  { n: '01', title: 'Consultation', desc: 'Free on-site visit where we assess your pool, understand your vision, and discuss tile options suited to your space.' },
  { n: '02', title: 'Design & Quote', desc: 'Detailed proposal with tile samples, 3D visualisations, and a transparent fixed-price quote — no surprises.' },
  { n: '03', title: 'Installation', desc: 'Our master tilers work with precision and care, protecting your property and completing work on schedule.' },
  { n: '04', title: 'Completion', desc: 'Final inspection, professional grout finishing, and a comprehensive warranty on all materials and workmanship.' },
];

const testimonials = [
  {
    name: 'James & Sarah K.', location: 'Cottesloe, Perth',
    text: 'Primo Pools transformed our 20-year-old pool completely. The Italian glass mosaic they recommended is absolutely stunning — our neighbours stop and stare every time they walk past.',
  },
  {
    name: 'Marcus T.', location: 'Applecross, Perth',
    text: 'The attention to detail in their stone work is second to none. They sourced travertine from Turkey and the result is simply breathtaking. Worth every dollar of the investment.',
  },
  {
    name: 'Lisa M.', location: 'Dalkeith, Perth',
    text: "Our waterline tile feature was designed by their team and it's made our whole backyard feel like a luxury resort. Professional, clean, and delivered on time. Couldn't be happier.",
  },
];

function BrandSection() {
  return (
    <section id="brand-section" className="section-cream py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: '#C9A44A' }}>About Primo Pools</span>
          <h2 className="section-title-dark mt-3 mb-6">Where Precision Meets Water</h2>
          <div className="gold-line mx-auto" />
          <p className="mt-6 text-base leading-relaxed max-w-3xl mx-auto" style={{ color: '#4A4238' }}>
            Primo Pools has been Perth's most trusted pool tiling and stone finishing specialist since 2004.
            We combine traditional European craftsmanship with the finest materials sourced globally — Turkish travertine,
            Italian glass mosaic, Spanish porcelain, and hand-cut marble — to create pools that are truly timeless.
          </p>
          <p className="mt-4 text-base leading-relaxed max-w-3xl mx-auto" style={{ color: '#4A4238' }}>
            Every project is personally overseen by our master tilers, ensuring millimetre-perfect alignment,
            flawless grout work, and surfaces built to withstand Perth's climate for decades.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="text-center py-6 px-4 rounded-lg border" style={{ borderColor: 'rgba(201,164,74,0.2)', background: 'rgba(201,164,74,0.04)' }}>
                <div className="font-serif text-4xl font-bold" style={{ color: '#C9A44A' }}>{s.number}</div>
                <div className="text-sm mt-1 font-medium" style={{ color: '#6A5E50' }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-stone py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">The Primo Process</h2>
          <div className="gold-line mx-auto" />
        </Reveal>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="glass-card p-6 h-full">
                <div className="text-5xl font-serif font-light mb-4" style={{ color: 'rgba(201,164,74,0.3)' }}>{step.n}</div>
                <h3 className="text-lg font-serif text-[#F0EDE8] mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,237,232,0.55)' }}>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24" style={{ background: '#06070C' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">What Perth Homeowners Say</h2>
          <div className="gold-line mx-auto" />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className="glass-card p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#C9A44A' }}>★</span>)}
                </div>
                <blockquote className="text-base leading-relaxed flex-1 italic font-serif" style={{ color: 'rgba(240,237,232,0.8)' }}>
                  "{t.text}"
                </blockquote>
                <div className="mt-6 pt-6 border-t border-[rgba(240,237,232,0.08)]">
                  <p className="font-semibold text-sm text-[#F0EDE8]">{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#C9A44A' }}>{t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://framerusercontent.com/images/QDv2QvgwIq6lwh2t2SmXUK0Q38.jpg)' }} />
      <div className="absolute inset-0" style={{ background: 'rgba(8,9,14,0.82)' }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-xs tracking-widest uppercase font-semibold mb-4" style={{ color: '#C9A44A' }}>Transform Your Pool</p>
          <h2 className="font-serif text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300 }}>
            Transform Your Pool Into a Masterpiece
          </h2>
          <p className="text-base mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(240,237,232,0.65)' }}>
            Ready to elevate your outdoor living space? Our team is available for a free consultation and site assessment anywhere in Perth's metropolitan area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold" data-testid="cta-consultation-btn">Get Free Consultation</Link>
            <Link to="/visualiser" className="btn-outline">Try Pool Visualiser</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { BrandSection, ProcessSection, TestimonialsSection, CTABanner };
