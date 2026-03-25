import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const IMG1 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/01x3ifcq_8f808cb0-50a9-4d96-bd40-e51aa2029b17.jpg';
const IMG2 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/e4chzh2f_332b01d5-aada-46cb-b025-484034a6b079.jpg';
const IMG3 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/n6kxlaes_a06b5548-eab9-4772-bbf7-ba8dd3a61963.jpg';
const IMG4 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/uasn4iud_a44fbff6-e4fa-46e5-a7ac-fd69c1d97442.jpg';
const IMG5 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/i6wrrp5z_ba6c4702-2935-4fe5-945e-93b7d66f0e23.jpg';

const ALL_ITEMS = [
  { id: 1, title: 'Cottesloe Lap Pool', cat: 'Pool Tiling', img: IMG3, desc: 'Full-length lap pool tiled with premium mosaic tiles and natural sandstone coping. Clean lines and exceptional finish.' },
  { id: 2, title: 'Dalkeith Luxury Mosaic Feature', cat: 'Luxury Mosaics', img: IMG4, desc: 'Custom blue and gold mosaic feature with hand-cut Italian glass tiles. A bespoke centrepiece for a high-end home.' },
  { id: 3, title: 'Applecross Pool & Spa', cat: 'Pool Renovation', img: IMG2, desc: 'Complete renovation of pool and spa combination with dark glass mosaic tiles and contemporary LED lighting.' },
  { id: 4, title: 'Nedlands Mosaic Waterline', cat: 'Luxury Mosaics', img: IMG1, desc: 'Full mosaic interior with precision-tiled steps. Light mosaic blend creates a luminous underwater glow.' },
  { id: 5, title: 'Claremont Interior Retile', cat: 'Pool Renovation', img: IMG5, desc: 'Pool interior renovation with geometric mosaic design. Step features retiled with contrasting dark border.' },
  { id: 6, title: 'Peppermint Grove Stone Surround', cat: 'Stone Surrounds', img: IMG3, desc: 'Sandstone coping and pool surround with dark mosaic waterline band. Perfect integration with the home.' },
  { id: 7, title: 'Subiaco Mosaic Steps', cat: 'Pool Tiling', img: IMG1, desc: 'Detailed mosaic tiling on entry steps and seating ledge. Uniform tile placement and flawless grout lines.' },
  { id: 8, title: 'South Perth Modern Pool & Spa', cat: 'Pool Renovation', img: IMG2, desc: 'L-shaped pool and spa renovation with premium dark glass mosaic. Contemporary styling with resort-quality finish.' },
  { id: 9, title: 'Mosman Park Gold Mosaic Art', cat: 'Luxury Mosaics', img: IMG4, desc: 'Dramatic blue and gold mosaic art installation. Custom-designed feature piece spanning 48m². Truly one-of-a-kind.' },
];

const FILTERS = ['All', 'Pool Tiling', 'Pool Renovation', 'Luxury Mosaics', 'Stone Surrounds'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? ALL_ITEMS : ALL_ITEMS.filter(i => i.cat === filter);

  return (
    <div className="min-h-screen section-dark pt-20">
      {/* Page header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG3})`, filter: 'brightness(0.35)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="section-label">Our Portfolio</span>
          <h1 className="section-title mt-2">Signature Projects</h1>
          <div className="gold-line mx-auto" />
          <p className="mt-6 text-base max-w-2xl mx-auto" style={{ color: 'rgba(240,237,232,0.6)' }}>
            Each project represents our commitment to exceptional craftsmanship. From precision tiling
            to custom mosaic art — Perth's finest pools, crafted by Primo.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-6">
        <div className="flex flex-wrap gap-2 justify-center" data-testid="portfolio-filters">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              data-testid={`filter-${f.replace(/\s+/g, '-').toLowerCase()}`}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 ${
                filter === f
                  ? 'bg-[#C9A44A] text-[#0A0A0A]'
                  : 'border border-[rgba(240,237,232,0.15)] text-[rgba(240,237,232,0.6)] hover:border-[#C9A44A] hover:text-[#C9A44A]'
              }`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <div className="glass-card overflow-hidden group">
                <div className="relative overflow-hidden h-64">
                  <img src={item.img} alt={item.title} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090E]/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] tracking-widest uppercase font-semibold" style={{ color: '#C9A44A' }}>{item.cat}</span>
                  <h3 className="text-lg font-serif text-[#F0EDE8] mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,237,232,0.55)' }}>{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-[rgba(240,237,232,0.07)] py-16 text-center section-navy">
        <p className="text-base mb-2" style={{ color: 'rgba(240,237,232,0.6)' }}>Ready to start your project?</p>
        <h2 className="section-title mb-6">Let's Create Something Beautiful</h2>
        <Link to="/contact" className="btn-gold" data-testid="portfolio-cta-btn">
          Request Free Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
