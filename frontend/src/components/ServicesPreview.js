import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, RotateCcw, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    icon: Layers,
    title: 'Pool Tiling',
    subtitle: 'New Installations',
    desc: 'Premium tile installations for new pool builds — from classic porcelain to hand-cut Italian mosaics. Every tile placed with millimetre precision.',
    img: 'https://images.pexels.com/photos/9119787/pexels-photo-9119787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    tag: 'FROM $80/m²',
  },
  {
    icon: RotateCcw,
    title: 'Pool Renovation',
    subtitle: 'Retiling & Resurfacing',
    desc: 'Breathe new life into tired pools. We remove, resurface, and retile existing pools — transforming dated surfaces into modern masterpieces.',
    img: 'https://framerusercontent.com/images/u2y8Rvxvn9EIqYZ7AP2lmCdOc.png',
    tag: 'FROM $65/m²',
  },
  {
    icon: Sparkles,
    title: 'Luxury Mosaics',
    subtitle: 'Feature Art & Waterline',
    desc: 'Custom mosaic art, feature walls, and precision waterline tile bands that transform pools into works of art. Bespoke designs for discerning clients.',
    img: 'https://framerusercontent.com/images/Ot58WJ0rtt12iGsj1VyZ9VMA2LY.jpeg',
    tag: 'BESPOKE PRICING',
  },
];

export default function ServicesPreview() {
  return (
    <section id="services-preview" className="section-navy py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Specialties</h2>
          <div className="gold-line mx-auto" />
          <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: 'rgba(240,237,232,0.6)' }}>
            Two decades of mastery in pool tiling and stone finishing. Every project delivered with uncompromising craftsmanship.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Reveal key={svc.title} delay={i * 120}>
                <div className="glass-card overflow-hidden group h-full flex flex-col">
                  <div className="relative overflow-hidden h-56">
                    <img src={svc.img} alt={svc.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1420] via-transparent" />
                    <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ background: 'rgba(201,164,74,0.2)', color: '#E8D4A0', border: '1px solid rgba(201,164,74,0.3)' }}>
                      {svc.tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(201,164,74,0.12)' }}>
                        <Icon size={18} style={{ color: '#C9A44A' }} />
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase" style={{ color: '#C9A44A' }}>{svc.subtitle}</p>
                        <h3 className="text-xl font-serif text-[#F0EDE8]">{svc.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(240,237,232,0.65)' }}>{svc.desc}</p>
                    <Link to="/services" className="btn-gold-outline mt-5 text-xs self-start">
                      Learn More <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
