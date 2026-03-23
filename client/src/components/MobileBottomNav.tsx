import { MessageCircle, Phone, Calculator } from "lucide-react";

export default function MobileBottomNav() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border md:hidden">
      <div className="flex justify-around items-center py-2">
        <a 
          href="https://wa.me/61488040150" 
          className="flex flex-col items-center py-2 px-4 text-forest-green hover:text-sage-green transition-colors"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={24} className="mb-1" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <a 
          href="tel:0893318998" 
          className="flex flex-col items-center py-2 px-4 text-forest-green hover:text-sage-green transition-colors"
          aria-label="Call our office"
        >
          <Phone size={24} className="mb-1" />
          <span className="text-xs font-medium">Call Now</span>
        </a>
        <button 
          onClick={scrollToContact}
          className="flex flex-col items-center py-2 px-4 bg-forest-green hover:bg-sage-green text-white rounded-lg mx-2 transition-colors"
          aria-label="Get a quote for your pool project"
        >
          <Calculator size={24} className="mb-1" />
          <span className="text-xs font-medium">Get Quote</span>
        </button>
      </div>
    </div>
  );
}
