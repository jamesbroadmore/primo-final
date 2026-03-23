import { Phone } from "lucide-react";

export default function StickyQuoteCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-6 bottom-24 z-40 hidden md:block">
      <div className="relative group">
        <button 
          onClick={scrollToContact}
          className="bg-forest-green text-white px-6 py-3 rounded-full font-semibold hover:bg-sage-green transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:scale-105"
          aria-label="Contact us to start your pool project"
        >
          <Phone className="inline mr-2" size={18} />
          <span>Contact Us</span>
        </button>
        <div className="absolute -top-12 right-0 bg-forest-green text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Start your pool journey
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-forest-green" />
        </div>
      </div>
    </div>
  );
}
