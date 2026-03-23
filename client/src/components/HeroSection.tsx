import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://framerusercontent.com/images/QDv2QvgwIq6lwh2t2SmXUK0Q38.jpg')",
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.5)',
        }}
        role="img"
        aria-label="Luxurious pool construction background"
      />
      
      {/* Gradient Overlay for Luxury Feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-green/40 via-transparent to-charcoal/40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Overline */}
        <div className="mb-8 animate-fadeInDown">
          <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase">
            Premium Pool Construction
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Transform Your <br />
          <span className="text-gold">Backyard</span> into <br />
          an Oasis
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Western Australia's premier luxury pool builders crafting stunning aquatic masterpieces for your dream home.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <button 
            onClick={scrollToPortfolio}
            className="group btn-primary inline-flex items-center justify-center gap-2"
            aria-label="View our portfolio of completed pools"
          >
            View Our Portfolio
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
          <button 
            onClick={scrollToContact}
            className="px-8 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
            aria-label="Schedule a free consultation with our experts"
          >
            Schedule Consultation
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-gold text-xl" aria-hidden="true">✓</span>
            <span className="text-sm">20+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-gold text-xl" aria-hidden="true">✓</span>
            <span className="text-sm">500+ Completed Projects</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-gold text-xl" aria-hidden="true">✓</span>
            <span className="text-sm">5-Star Rated</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <ChevronDown size={28} className="text-gold" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl opacity-30 animate-pulse-soft" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-forest-green/10 rounded-full blur-3xl opacity-30 animate-pulse-soft" style={{ animationDelay: '1s' }} aria-hidden="true" />
    </section>
  );
}
