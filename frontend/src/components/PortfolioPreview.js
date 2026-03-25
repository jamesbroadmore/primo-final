import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const IMG1 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/01x3ifcq_8f808cb0-50a9-4d96-bd40-e51aa2029b17.jpg';
const IMG2 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/e4chzh2f_332b01d5-aada-46cb-b025-484034a6b079.jpg';
const IMG3 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/n6kxlaes_a06b5548-eab9-4772-bbf7-ba8dd3a61963.jpg';
const IMG4 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/uasn4iud_a44fbff6-e4fa-46e5-a7ac-fd69c1d97442.jpg';
const IMG5 = 'https://customer-assets.emergentagent.com/job_visual-md-platform/artifacts/i6wrrp5z_ba6c4702-2935-4fe5-945e-93b7d66f0e23.jpg';

const ITEMS = [
  { id: 1, title: 'Cottesloe Lap Pool', cat: 'Pool Tiling', img: IMG3 },
  { id: 2, title: 'Dalkeith Glass Mosaic Feature', cat: 'Luxury Mosaics', img: IMG4 },
  { id: 3, title: 'Applecross Pool & Spa', cat: 'Pool Renovation', img: IMG2 },
  { id: 4, title: 'Nedlands Waterline Mosaic', cat: 'Luxury Mosaics', img: IMG1 },
  { id: 5, title: 'Claremont Interior Retile', cat: 'Pool Renovation', img: IMG5 },
  { id: 6, title: 'Peppermint Grove Stone Surround', cat: 'Stone Surrounds', img: IMG3 },
];

export default function PortfolioPreview() {
  return (
    <section id="portfolio-preview" className="section-dark py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Signature Projects</h2>
          <div className="gold-line mx-auto" />
          <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: 'rgba(240,237,232,0.6)' }}>
            A curated selection of Perth's most exceptional pool tiling projects. Each one a testament to precision, artistry, and enduring beauty.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {ITEMS.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <div className="group relative overflow-hidden cursor-pointer" style={{ borderRadius: 8 }}>
                <img src={item.img} alt={item.title} loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090E]/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                  <span className="text-[10px] tracking-widest uppercase font-semibold" style={{ color: '#C9A44A' }}>{item.cat}</span>
                  <h4 className="text-base font-serif text-white leading-tight">{item.title}</h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio" data-testid="portfolio-view-all-btn" className="btn-gold">
            View Full Portfolio
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
