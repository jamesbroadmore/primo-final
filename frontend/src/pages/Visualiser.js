import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';

const SHAPES = [
  { id: 'rectangle', label: 'Rectangle', w: 300, h: 180 },
  { id: 'lshape', label: 'L-Shape', w: 300, h: 180 },
  { id: 'kidney', label: 'Freeform', w: 300, h: 180 },
  { id: 'lap', label: 'Lap Pool', w: 300, h: 180 },
];

const TILES = [
  {
    id: 'azure', name: 'Azure Glass Mosaic', category: 'Glass Mosaic',
    color: '#1A5F8A', patternColor: 'rgba(255,255,255,0.12)', patternSize: 10,
    price: '$80–200/m²', origin: 'Murano, Italy',
    desc: 'Vibrant cobalt blue glass mosaic with a luminous, jewel-like quality. The most popular choice for luxury pools.',
  },
  {
    id: 'ocean', name: 'Ocean Mist Mosaic', category: 'Glass Mosaic',
    color: '#3A8AA0', patternColor: 'rgba(255,255,255,0.1)', patternSize: 10,
    price: '$80–200/m²', origin: 'Venice, Italy',
    desc: 'Soft aqua-teal glass mosaic that mimics the colours of shallow tropical water. Elegant and calming.',
  },
  {
    id: 'ivory', name: 'Ivory Pearl Porcelain', category: 'Porcelain',
    color: '#D8D0C0', patternColor: 'rgba(0,0,0,0.08)', patternSize: 20,
    price: '$50–120/m²', origin: 'Spain',
    desc: 'Creamy off-white large-format porcelain. Clean, minimalist and hard-wearing. Pairs beautifully with dark grout.',
  },
  {
    id: 'charcoal', name: 'Charcoal Slate Porcelain', category: 'Porcelain',
    color: '#3A3D48', patternColor: 'rgba(255,255,255,0.07)', patternSize: 20,
    price: '$50–120/m²', origin: 'Italy',
    desc: 'Dark charcoal stone-look porcelain for a dramatic, sophisticated effect. Popular for contemporary homes.',
  },
  {
    id: 'travertine', name: 'Turkish Travertine', category: 'Natural Stone',
    color: '#C8A882', patternColor: 'rgba(0,0,0,0.06)', patternSize: 30,
    price: '$90–250/m²', origin: 'Afyon, Turkey',
    desc: 'Warm, earthy natural travertine with beautiful variation and character. A timeless classic for pools.',
  },
  {
    id: 'limestone', name: 'French Limestone', category: 'Natural Stone',
    color: '#E0D4BE', patternColor: 'rgba(0,0,0,0.05)', patternSize: 30,
    price: '$90–250/m²', origin: 'Burgundy, France',
    desc: 'Pale cream limestone with subtle fossil detail. Ideal for coastal and beachside properties.',
  },
  {
    id: 'marble', name: 'Calacatta Marble', category: 'Marble',
    color: '#EEE8DE', patternColor: 'rgba(100,80,60,0.1)', patternSize: 40,
    price: '$150–400/m²', origin: 'Carrara, Italy',
    desc: 'The finest Italian Calacatta marble with dramatic veining. The pinnacle of luxury pool interiors.',
  },
  {
    id: 'cobalt', name: 'Cobalt Marine Mosaic', category: 'Glass Mosaic',
    color: '#0A3060', patternColor: 'rgba(255,255,255,0.1)', patternSize: 10,
    price: '$80–200/m²', origin: 'Barcelona, Spain',
    desc: 'Deep, rich cobalt blue glass tiles that give pools a dark, dramatic depth reminiscent of the deep ocean.',
  },
];

const CATEGORIES = ['All', 'Glass Mosaic', 'Porcelain', 'Natural Stone', 'Marble'];

function PoolSVG({ shape, tile }) {
  const { color, patternColor, patternSize } = tile;
  const patId = `pat-${tile.id}`;
  const wavId = `wav-${tile.id}`;

  const shapes = {
    rectangle: (
      <rect x="30" y="40" width="240" height="130" rx="8"
        fill={`url(#${patId})`} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    ),
    lshape: (
      <path d={`M30,40 h150 v70 h90 v60 h-240 z`} rx="4"
        fill={`url(#${patId})`} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    ),
    kidney: (
      <ellipse cx="150" cy="105" rx="115" ry="70"
        fill={`url(#${patId})`} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    ),
    lap: (
      <rect x="10" y="65" width="280" height="80" rx="5"
        fill={`url(#${patId})`} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    ),
  };

  return (
    <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-full">
      <defs>
        <pattern id={patId} width={patternSize} height={patternSize} patternUnits="userSpaceOnUse">
          <rect width={patternSize} height={patternSize} fill={color} />
          <rect width={patternSize - 1} height={patternSize - 1} x="0.5" y="0.5" fill="transparent"
            stroke={patternColor} strokeWidth="0.5" />
        </pattern>
        <radialGradient id={wavId} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
        </radialGradient>
        <filter id="pool-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Pool surround */}
      <rect x="0" y="0" width="300" height="180" fill="#1A1F2A" rx="4" />

      {/* Coping line */}
      <rect x="22" y="32" width="256" height="146" rx="10" fill="rgba(201,164,74,0.15)"
        stroke="rgba(201,164,74,0.3)" strokeWidth="1" />

      {/* Pool body */}
      <g filter="url(#pool-shadow)">{shapes[shape.id]}</g>

      {/* Water shimmer overlay */}
      <g style={{ mixBlendMode: 'overlay' }}>
        {shape.id !== 'lap' ? (
          <rect x="30" y="40" width="240" height="130" rx="8" fill={`url(#${wavId})`} />
        ) : (
          <rect x="10" y="65" width="280" height="80" rx="5" fill={`url(#${wavId})`} />
        )}
      </g>

      {/* Label */}
      <text x="150" y="175" textAnchor="middle" fontSize="8" fill="rgba(201,164,74,0.6)" fontFamily="Inter, sans-serif">
        {tile.name}
      </text>
    </svg>
  );
}

export default function Visualiser() {
  const [shape, setShape] = useState(SHAPES[0]);
  const [selectedTile, setSelectedTile] = useState(TILES[0]);
  const [catFilter, setCatFilter] = useState('All');

  const filteredTiles = catFilter === 'All' ? TILES : TILES.filter(t => t.category === catFilter);

  return (
    <div className="min-h-screen section-dark pt-20">
      {/* Header */}
      <div className="py-16 text-center section-navy border-b border-[rgba(240,237,232,0.07)]">
        <span className="section-label">Interactive Tool</span>
        <h1 className="section-title mt-2">Pool Design Visualiser</h1>
        <div className="gold-line mx-auto" />
        <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: 'rgba(240,237,232,0.55)' }}>
          Explore our tile collection and see how different materials look in your pool. Select a pool shape and tile to begin.
        </p>
      </div>

      {/* Main tool */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT: Controls */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pool shape */}
            <div className="glass-card p-5" data-testid="shape-selector">
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A44A' }}>Pool Shape</h3>
              <div className="grid grid-cols-2 gap-2">
                {SHAPES.map((s) => (
                  <button key={s.id} onClick={() => setShape(s)}
                    data-testid={`shape-${s.id}`}
                    className={`py-3 px-4 rounded text-sm font-medium transition-all duration-200 ${
                      shape.id === s.id
                        ? 'bg-[#C9A44A] text-[#0A0A0A]'
                        : 'border border-[rgba(240,237,232,0.12)] text-[rgba(240,237,232,0.6)] hover:border-[#C9A44A] hover:text-[#C9A44A]'
                    }`}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tile category filter */}
            <div className="glass-card p-5" data-testid="tile-category-selector">
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A44A' }}>Tile Type</h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button key={c} onClick={() => setCatFilter(c)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      catFilter === c
                        ? 'bg-[#C9A44A] text-[#0A0A0A]'
                        : 'border border-[rgba(240,237,232,0.12)] text-[rgba(240,237,232,0.5)] hover:border-[#C9A44A]'
                    }`}>
                    {c}
                  </button>
                ))}
              </div>

              {/* Tile swatches */}
              <div className="mt-4 grid grid-cols-4 gap-2" data-testid="tile-swatches">
                {filteredTiles.map((tile) => (
                  <button key={tile.id} onClick={() => setSelectedTile(tile)}
                    data-testid={`tile-${tile.id}`}
                    title={tile.name}
                    className="group relative"
                    style={{
                      width: '100%', aspectRatio: '1',
                      background: tile.color,
                      borderRadius: 6,
                      border: selectedTile.id === tile.id ? '2px solid #C9A44A' : '2px solid transparent',
                      transition: 'all 0.2s ease',
                      boxShadow: selectedTile.id === tile.id ? '0 0 0 2px rgba(201,164,74,0.3)' : 'none',
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent ${tile.patternSize - 1}px, ${tile.patternColor} ${tile.patternSize}px), repeating-linear-gradient(90deg, transparent, transparent ${tile.patternSize - 1}px, ${tile.patternColor} ${tile.patternSize}px)`,
                    }}>
                    {selectedTile.id === tile.id && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#C9A44A] border-2 border-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected tile info */}
            <div className="glass-card p-5" data-testid="tile-info-panel">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded flex-shrink-0" style={{
                  background: selectedTile.color,
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent ${selectedTile.patternSize - 1}px, ${selectedTile.patternColor} ${selectedTile.patternSize}px), repeating-linear-gradient(90deg, transparent, transparent ${selectedTile.patternSize - 1}px, ${selectedTile.patternColor} ${selectedTile.patternSize}px)`,
                  border: '1px solid rgba(240,237,232,0.15)',
                }} />
                <div>
                  <h3 className="font-serif text-lg text-[#F0EDE8]" data-testid="selected-tile-name">{selectedTile.name}</h3>
                  <p className="text-xs" style={{ color: '#C9A44A' }}>{selectedTile.category} · {selectedTile.origin}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(240,237,232,0.6)' }}>{selectedTile.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(240,237,232,0.35)' }}>Price guide</p>
                  <p className="text-sm font-semibold" style={{ color: '#E8D4A0' }}>{selectedTile.price}</p>
                </div>
                <div className="flex items-center gap-1 text-xs" style={{ color: 'rgba(240,237,232,0.3)' }}>
                  <Info size={11} />
                  <span>excl. installation</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Pool preview */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="glass-card p-6 flex-1" data-testid="pool-preview">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#C9A44A' }}>
                  Live Preview
                </h3>
                <span className="text-xs px-2 py-1 rounded" style={{ background: 'rgba(201,164,74,0.1)', color: '#C9A44A', border: '1px solid rgba(201,164,74,0.2)' }}>
                  {shape.label} Pool
                </span>
              </div>
              <div className="pool-water-shimmer rounded-lg overflow-hidden" style={{ background: '#111825' }}>
                <PoolSVG shape={shape} tile={selectedTile} />
              </div>
              <p className="text-center text-xs mt-3" style={{ color: 'rgba(240,237,232,0.3)' }}>
                Visual approximation — request tile samples for accurate colour representation
              </p>
            </div>

            {/* CTA */}
            <div className="glass-card p-6 text-center">
              <h3 className="font-serif text-xl text-[#F0EDE8] mb-2">Love This Design?</h3>
              <p className="text-sm mb-5" style={{ color: 'rgba(240,237,232,0.55)' }}>
                Request a free on-site consultation and receive tile samples for <strong className="text-[#E8D4A0]">{selectedTile.name}</strong>.
              </p>
              <Link to="/contact" className="btn-gold w-full justify-center" data-testid="visualiser-quote-btn">
                Get Quote for This Design <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
