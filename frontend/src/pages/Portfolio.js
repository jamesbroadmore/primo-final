import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const ALL_ITEMS = [
  { id: 1, title: 'Cottesloe Infinity Edge', cat: 'Pool Tiling', img: 'https://framerusercontent.com/images/QDv2QvgwIq6lwh2t2SmXUK0Q38.jpg', desc: 'Full pool re-tile with Azure glass mosaic waterline feature. Award-winning luxury finish.' },
  { id: 2, title: 'Dalkeith Glass Mosaic', cat: 'Luxury Mosaics', img: 'https://framerusercontent.com/images/hJCtYbi5cKh3R2PDg4lEH8U0Gz8.jpg', desc: 'Hand-cut Italian glass mosaic feature wall and waterline band. 48m² installation.' },
  { id: 3, title: 'Applecross Travertine Resort', cat: 'Stone Surrounds', img: 'https://framerusercontent.com/images/Ot58WJ0rtt12iGsj1VyZ9VMA2LY.jpeg', desc: 'Full resort-style travertine pool surround, coping, and spa feature with matching bullnose.' },
  { id: 4, title: 'Nedlands Mosaic Waterline', cat: 'Luxury Mosaics', img: 'https://framerusercontent.com/images/u2y8Rvxvn9EIqYZ7AP2lmCdOc.png', desc: 'Bespoke 24m waterline mosaic band with gradient colour transition. Custom design.' },
  { id: 5, title: 'Claremont Complete Reno', cat: 'Pool Renovation', img: 'https://framerusercontent.com/images/dXYW7ghkOhRbXF6cX4NK0CJrI.png', desc: 'Full pool renovation: removal of old plaster, new porcelain tiling, LED upgrade.' },
  { id: 6, title: 'Peppermint Grove Lap Pool', cat: 'Pool Tiling', img: 'https://images.pexels.com/photos/9119787/pexels-photo-9119787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', desc: '18m lap pool with charcoal porcelain tiles, stainless steel lane markers, and dark grout.' },
  { id: 7, title: 'Subiaco Pebble Renovation', cat: 'Pool Renovation', img: 'https://framerusercontent.com/images/hJCtYbi5cKh3R2PDg4lEH8U0Gz8.jpg', desc: 'Pebblecrete removal and full retile in Spanish porcelain. Waterline glass mosaic included.' },
  { id: 8, title: 'South Perth Freeform', cat: 'Stone Surrounds', img: 'https://images.pexels.com/photos/9159380/pexels-photo-9159380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', desc: 'Freeform pool with natural limestone surround, bluestone coping, and tropical planting surround.' },
  { id: 9, title: 'Mosman Park Marble Spa', cat: 'Luxury Mosaics', img: 'https://framerusercontent.com/images/Ot58WJ0rtt12iGsj1VyZ9VMA2LY.jpeg', desc: 'Imported Calacatta marble spa interior and feature wall. Full 72m² installation.' },
];

const FILTERS = ['All', 'Pool Tiling', 'Pool Renovation', 'Luxury Mosaics', 'Stone Surrounds'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? ALL_ITEMS : ALL_ITEMS.filter(i => i.cat === filter);

  return (
    <div className="min-h-screen section-dark pt-20">
      {/* Page header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://framerusercontent.com/images/QDv2QvgwIq6lwh2t2SmXUK0Q38.jpg)' }} />
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
