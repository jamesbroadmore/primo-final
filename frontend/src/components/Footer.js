import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-testid="site-footer" className="bg-[#06070C] border-t border-[rgba(201,164,74,0.12)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Primo Pools" className="h-10 mb-5 opacity-90" />
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(240,237,232,0.5)' }}>
              Western Australia's premier luxury pool tiling and stone finishing specialists,
              serving Perth since 2004.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: 'https://facebook.com/primopools', label: 'Facebook' },
                { Icon: Instagram, href: 'https://instagram.com/primopools', label: 'Instagram' },
                { Icon: Linkedin, href: 'https://linkedin.com/company/primopools', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(201,164,74,0.2)] text-[rgba(201,164,74,0.6)] hover:border-[#C9A44A] hover:text-[#C9A44A] transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="text-[#C9A44A] text-xs font-semibold tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(240,237,232,0.5)' }}>
              {['Pool Tiling', 'Pool Renovation', 'Luxury Mosaics', 'Stone Surrounds', 'Waterline Features'].map((s) => (
                <li key={s}><Link to="/services" className="hover:text-[#C9A44A] transition-colors">{s}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h4 className="text-[#C9A44A] text-xs font-semibold tracking-widest uppercase mb-5">Explore</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(240,237,232,0.5)' }}>
              {[
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Pool Visualiser', href: '/visualiser' },
                { label: 'Our Story', href: '/#story' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}><Link to={href} className="hover:text-[#C9A44A] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="text-[#C9A44A] text-xs font-semibold tracking-widest uppercase mb-5">Contact</h4>
            <div className="space-y-3 text-sm" style={{ color: 'rgba(240,237,232,0.5)' }}>
              <p>35 Mannion Way<br />Kardinya WA 6163</p>
              <p><a href="tel:0893318998" className="hover:text-[#C9A44A] transition-colors">(08) 9331 8998</a></p>
              <p><a href="tel:0488040150" className="hover:text-[#C9A44A] transition-colors">0488 040 150</a></p>
              <p><a href="mailto:hello@primopools.com.au" className="hover:text-[#C9A44A] transition-colors">hello@primopools.com.au</a></p>
              <p className="text-xs mt-2" style={{ color: 'rgba(240,237,232,0.3)' }}>ABN 82 703 745 225</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(240,237,232,0.07)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(240,237,232,0.35)' }}>
            &copy; {year} Primo Pools. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs" style={{ color: 'rgba(240,237,232,0.35)' }}>
            <a href="#" className="hover:text-[#C9A44A] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C9A44A] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
