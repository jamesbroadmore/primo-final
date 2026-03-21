import logoImage from "@assets/primopoolslogo_1749710889060.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src={logoImage} 
              alt="Primo Pools Logo" 
              className="h-14 w-auto mb-6"
            />
            <p className="text-white/70 mb-6 leading-relaxed">
              Western Australia's premier luxury pool construction specialist, creating aquatic masterpieces since 2018.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-full flex items-center justify-center text-gold hover:text-charcoal transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-full flex items-center justify-center text-gold hover:text-charcoal transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-full flex items-center justify-center text-gold hover:text-charcoal transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Services</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-gold transition-colors duration-300">New Pool Construction</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Pool Renovations</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Water Features</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Pool Landscaping</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Maintenance</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-gold transition-colors duration-300">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('process')} className="hover:text-gold transition-colors duration-300">Our Process</button></li>
              <li><button onClick={() => scrollToSection('story')} className="hover:text-gold transition-colors duration-300">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-gold transition-colors duration-300">Services</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-gold transition-colors duration-300">Contact</button></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Get In Touch</h4>
            <div className="space-y-3 text-white/70 text-sm">
              <div>
                <p className="text-gold text-xs uppercase tracking-widest mb-1">Location</p>
                <p>35 Mannion Way</p>
                <p>Kardinya WA 6163</p>
              </div>
              <div>
                <p className="text-gold text-xs uppercase tracking-widest mb-1">Phone</p>
                <p>(08) 9331 8998</p>
              </div>
              <div>
                <p className="text-gold text-xs uppercase tracking-widest mb-1">Email</p>
                <p>hello@primopools.com.au</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>&copy; 2024 Primo Pools. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
