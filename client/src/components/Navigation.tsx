import { useState, useEffect } from "react";
import logoImage from "@assets/primopoolslogo_1749710889060.png";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Our Story', id: 'story' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Process', id: 'process' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-transparent'
    }`} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" aria-label="Primo Pools Home">
              <img 
                src={logoImage} 
                alt="Primo Pools Logo" 
                className="h-12 w-auto transition-transform hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)} 
                className={`px-4 py-2 font-medium transition-all duration-300 relative group ${
                  isScrolled 
                    ? 'text-text-primary hover:text-forest-green' 
                    : 'text-white hover:text-gold'
                }`}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-gold' : 'bg-gold'
                }`} aria-hidden="true" />
              </button>
            ))}
            <a 
              href="/customer/login" 
              className={`px-4 py-2 font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-text-primary hover:text-forest-green' 
                  : 'text-white hover:text-gold'
              }`}
              aria-label="Customer Portal Login"
            >
              Portal
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
              aria-label="Get a quote for your pool project"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? 'text-forest-green' : 'text-white'
              }`}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
        id="mobile-menu"
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)} 
                className="block w-full text-left px-4 py-3 text-forest-green hover:bg-warm-beige rounded-lg transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <a 
              href="/customer/login" 
              className="block w-full text-left px-4 py-3 text-forest-green hover:bg-warm-beige rounded-lg transition-colors font-medium"
            >
              Portal
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 bg-forest-green text-white rounded-lg font-medium hover:bg-sage-green transition-colors mt-2"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
