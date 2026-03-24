import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const ITEMS = [
  { id: 1, title: 'Cottesloe Infinity Edge', cat: 'Pool Tiling', img: 'https://framerusercontent.com/images/QDv2QvgwIq6lwh2t2SmXUK0Q38.jpg' },
  { id: 2, title: 'Dalkeith Glass Mosaic Feature', cat: 'Luxury Mosaics', img: 'https://framerusercontent.com/images/hJCtYbi5cKh3R2PDg4lEH8U0Gz8.jpg' },
  { id: 3, title: 'Applecross Travertine Surround', cat: 'Stone Surrounds', img: 'https://framerusercontent.com/images/Ot58WJ0rtt12iGsj1VyZ9VMA2LY.jpeg' },
  { id: 4, title: 'Nedlands Waterline Mosaic', cat: 'Luxury Mosaics', img: 'https://framerusercontent.com/images/u2y8Rvxvn9EIqYZ7AP2lmCdOc.png' },
  { id: 5, title: 'Claremont Pool Renovation', cat: 'Pool Renovation', img: 'https://framerusercontent.com/images/dXYW7ghkOhRbXF6cX4NK0CJrI.png' },
  { id: 6, title: 'Peppermint Grove Lap Pool', cat: 'Pool Tiling', img: 'https://images.pexels.com/photos/9119787/pexels-photo-9119787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
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
