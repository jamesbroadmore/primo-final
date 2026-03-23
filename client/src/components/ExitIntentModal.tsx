import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift } from "lucide-react";

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [exitIntentTriggered, setExitIntentTriggered] = useState(false);

  const showModal = () => {
    if (!exitIntentTriggered) {
      setIsOpen(true);
      setExitIntentTriggered(true);
    }
  };

  const handleDownload = () => {
    if (email) {
      // Simulate PDF download
      alert("Thank you! Your Pool Planning Checklist will be sent to " + email + " shortly.");
      setEmail("");
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Trigger modal on scroll (70% of page)
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 70 && !exitIntentTriggered) {
        showModal();
      }
    };

    // Trigger modal on mouse leave (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !window.matchMedia('(max-width: 768px)').matches) {
        showModal();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [exitIntentTriggered]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white border border-border max-w-md">
        <div className="text-center">
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center text-gold text-2xl mx-auto mb-4">
            <Gift size={32} />
          </div>
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
            Don't Leave Without Your Free Guide!
          </h3>
          <p className="text-text-secondary mb-6">
            Download our comprehensive pool planning guide with everything you need to know before starting your project.
          </p>
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <Button 
              onClick={handleDownload}
              disabled={!email}
              className="w-full bg-forest-green hover:bg-sage-green text-white"
            >
              Get Your Free Checklist
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-text-secondary hover:text-foreground transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
