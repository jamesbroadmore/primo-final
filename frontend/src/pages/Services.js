import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Reveal from '../components/Reveal';

const IMG1 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/01x3ifcq_8f808cb0-50a9-4d96-bd40-e51aa2029b17.jpg';
const IMG2 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/e4chzh2f_332b01d5-aada-46cb-b025-484034a6b079.jpg';
const IMG3 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/n6kxlaes_a06b5548-eab9-4772-bbf7-ba8dd3a61963.jpg';
const IMG4 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/uasn4iud_a44fbff6-e4fa-46e5-a7ac-fd69c1d97442.jpg';
const IMG5 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/i6wrrp5z_ba6c4702-2935-4fe5-945e-93b7d66f0e23.jpg';

const services = [
  {
    tag: 'Premium Installation', title: 'Pool Tiling', subtitle: 'New Pool & Spa Tiling', img: IMG1,
    desc: 'Flawless tile installations for new pool builds. We work with any tile type — from classic porcelain to hand-cut Italian mosaics — and every tile is placed with millimetre precision.',
    points: ['Full interior pool tiling', 'Waterline tile bands', 'Spa and water feature tiling', 'All tile types available', 'Lifetime workmanship warranty'],
    priceRange: '$80 – $200 per m²',
  },
  {
    tag: 'Transformation', title: 'Pool Renovation', subtitle: 'Retiling & Resurfacing', img: IMG2,
    desc: "Turn an aged, tired pool into a modern showpiece. We remove existing surfaces, prepare the substrate, and re-tile with premium materials suited to Perth's climate.",
    points: ['Old surface removal', 'Substrate preparation & repair', 'Full retiling or feature upgrades', 'Grout restoration', 'Leak detection & repair'],
    priceRange: '$65 – $180 per m²',
  },
  {
    tag: 'Artisan Craft', title: 'Luxury Mosaics', subtitle: 'Feature Art & Waterline Bands', img: IMG4,
    desc: 'Custom mosaic art and feature walls that transform pools into works of art. We import hand-cut Venetian glass and Italian ceramic mosaics and can reproduce any design.',
    points: ['Custom mosaic artwork', '24m waterline bands', 'Floor feature medallions', 'Feature wall mosaics', 'Bespoke colour design service'],
    priceRange: 'Custom quote',
  },
  {
    tag: 'Premium Finish', title: 'Stone Surrounds', subtitle: 'Coping, Decking & Surrounds', img: IMG3,
    desc: 'The area around your pool is as important as the pool itself. We install natural stone coping, pool decking, and surrounds that frame your pool beautifully.',
    points: ['Natural travertine coping', 'Limestone and sandstone decks', 'Non-slip pool surrounds', 'Steps and entry features', 'Matching outdoor living areas'],
    priceRange: '$90 – $250 per m²',
  },
];

const tiles = [
  { name: 'Glass Mosaic', origin: 'Murano, Italy', desc: 'The most luminous option. Light refracts through the glass giving pools a vibrant, jewel-like quality.', color: 'bg-blue-600', care: 'Very Low' },
  { name: 'Natural Travertine', origin: 'Turkey', desc: 'Warm, earthy tones with natural variation. A timeless quality that complements both modern and traditional homes.', color: 'bg-amber-200', care: 'Medium' },
  { name: 'Porcelain', origin: 'Spain & Italy', desc: 'Hard-wearing, fade-resistant, and available in an enormous range of colours and textures. Excellent value.', color: 'bg-slate-400', care: 'Very Low' },
  { name: 'Italian Marble', origin: 'Carrara, Italy', desc: 'The pinnacle of luxury pool surfaces. Calacatta and Statuario marble provide unmatched elegance.', color: 'bg-gray-100', care: 'Medium' },
  { name: 'Limestone', origin: 'France & Australia', desc: 'Creamy, soft-toned stone with natural character. Particularly suited to beachside and coastal properties.', color: 'bg-stone-300', care: 'Medium' },
  { name: 'Pebble / Aggregate', origin: 'Various', desc: 'A textured, organic finish that hides minor surface imperfections. Popular for renovation projects.', color: 'bg-zinc-400', care: 'Low' },
];

export default function Services() {
  return (
    <div className="min-h-screen section-dark pt-20">
      {/* Header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG5})`, filter: 'brightness(0.3)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="section-label">Our Services</span>
          <h1 className="section-title mt-2">Materials & Expertise</h1>
          <div className="gold-line mx-auto" />
          <p className="mt-6 text-base max-w-2xl mx-auto" style={{ color: 'rgba(240,237,232,0.6)' }}>
            From a single waterline tile band to a complete pool transformation — Primo Pools delivers
            exceptional results across every discipline of luxury pool finishing.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 space-y-6">
        {services.map((svc, i) => {
          const isEven = i % 2 === 0;
          return (
            <Reveal key={svc.title} delay={i * 80}>
              <div className={`glass-card overflow-hidden grid md:grid-cols-2 gap-0 ${isEven ? '' : 'md:[direction:rtl]'}`}>
                <div className="relative h-80 md:h-auto overflow-hidden" style={isEven ? {} : { direction: 'ltr' }}>
                  <img src={svc.img} alt={svc.title} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F1420]/30 to-transparent" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center" style={{ direction: 'ltr' }}>
                  <span className="text-[10px] tracking-widest uppercase font-semibold mb-1" style={{ color: '#C9A44A' }}>{svc.tag}</span>
                  <h2 className="font-serif text-3xl text-[#F0EDE8] mb-1">{svc.title}</h2>
                  <p className="text-sm mb-4" style={{ color: 'rgba(201,164,74,0.7)' }}>{svc.subtitle}</p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(240,237,232,0.65)' }}>{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm" style={{ color: 'rgba(240,237,232,0.7)' }}>
                        <CheckCircle size={15} style={{ color: '#C9A44A', flexShrink: 0, marginTop: 2 }} />{p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(240,237,232,0.35)' }}>Indicative pricing</p>
                      <p className="text-base font-semibold" style={{ color: '#E8D4A0' }}>{svc.priceRange}</p>
                    </div>
                    <Link to="/contact" className="btn-gold text-xs">Get Quote <ArrowRight size={13} /></Link>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Tile materials */}
      <div className="section-stone py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="section-label">Our Materials</span>
            <h2 className="section-title">Premium Tile Collection</h2>
            <div className="gold-line mx-auto" />
          </Reveal>

          {/* Real project image strip */}
          <div className="grid grid-cols-5 gap-2 mb-12 rounded-lg overflow-hidden">
            {[IMG1, IMG2, IMG3, IMG4, IMG5].map((img, i) => (
              <div key={i} className="relative overflow-hidden h-32">
                <img src={img} alt={`Primo Pools project ${i + 1}`} loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tiles.map((tile, i) => (
              <Reveal key={tile.name} delay={i * 80}>
                <div className="glass-card p-6 h-full">
                  <div className={`w-14 h-14 rounded-lg mb-4 ${tile.color}`} style={{ border: '1px solid rgba(240,237,232,0.1)' }} />
                  <h3 className="font-serif text-xl text-[#F0EDE8] mb-1">{tile.name}</h3>
                  <p className="text-xs tracking-wide mb-3" style={{ color: '#C9A44A' }}>Origin: {tile.origin}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(240,237,232,0.6)' }}>{tile.desc}</p>
                  <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(240,237,232,0.4)' }}>
                    <span>Maintenance: </span><span className="font-semibold" style={{ color: '#E8D4A0' }}>{tile.care}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section-navy py-16 text-center border-t border-[rgba(240,237,232,0.07)]">
        <p className="section-label">Ready to Begin?</p>
        <h2 className="section-title mb-6">Book a Free Tile Consultation</h2>
        <Link to="/contact" className="btn-gold" data-testid="services-cta-btn">
          Request Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
