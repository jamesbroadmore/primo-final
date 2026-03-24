import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Work', href: '/portfolio' },
  { label: 'Materials', href: '/services' },
  { label: 'Visualiser', href: '/visualiser' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <nav
      data-testid="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#08090E]/95 backdrop-blur-md border-b border-[rgba(201,164,74,0.15)] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" data-testid="nav-logo" aria-label="Primo Pools Home">
            <img
              src="/logo.png"
              alt="Primo Pools"
              className="h-10 w-auto object-contain"
              style={{ filter: 'brightness(1.1)' }}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={`px-5 py-2 text-sm font-medium tracking-widest uppercase transition-colors duration-200 relative group ${
                  location.pathname === l.href
                    ? 'text-[#C9A44A]'
                    : 'text-[rgba(240,237,232,0.75)] hover:text-[#F0EDE8]'
                }`}
              >
                {l.label}
                <span className={`absolute bottom-0 left-5 right-5 h-px bg-[#C9A44A] transition-transform duration-300 origin-left ${
                  location.pathname === l.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              data-testid="nav-cta-button"
              className="btn-gold text-xs"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#F0EDE8]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}
        id="mobile-menu"
      >
        <div className="bg-[#08090E]/98 backdrop-blur-md border-t border-[rgba(201,164,74,0.15)] px-6 py-4 space-y-2">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="block py-3 text-sm font-medium tracking-widest uppercase text-[rgba(240,237,232,0.75)] hover:text-[#C9A44A] transition-colors border-b border-[rgba(240,237,232,0.07)] last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block mt-3 btn-gold text-center text-xs"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
