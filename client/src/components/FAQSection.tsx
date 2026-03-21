import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How long does pool construction typically take?",
      answer: "Most residential pool projects take 6-12 weeks from design approval to completion, depending on size, complexity, and site conditions. We provide a detailed timeline during your initial consultation."
    },
    {
      id: 2,
      question: "What warranty do you provide?",
      answer: "We provide a 10-year structural warranty on concrete work and 5-year warranties on equipment and finishes. All workmanship is guaranteed for 12 months."
    },
    {
      id: 3,
      question: "Do you offer financing options?",
      answer: "Yes, we work with several financing partners to make your pool project affordable. We can discuss flexible payment plans during your consultation."
    },
    {
      id: 4,
      question: "Can you renovate my existing pool?",
      answer: "Absolutely! We specialize in pool renovations including resurfacing, equipment upgrades, lighting installations, and landscaping. We can transform any aging pool."
    },
    {
      id: 5,
      question: "What maintenance is required?",
      answer: "Regular maintenance includes weekly cleaning, chemical balancing, and equipment checks. We offer comprehensive maintenance packages tailored to your needs."
    },
    {
      id: 6,
      question: "Do you handle council approvals?",
      answer: "Yes, we manage all council approvals and permits as part of our service. Our engineers handle all documentation and inspections required for your area."
    }
  ];

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-surface-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">FAQ</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mt-2 mb-6">Common Questions</h2>
          <p className="text-lg text-text-secondary">
            Find answers to frequently asked questions about our pool construction and renovation services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="card-luxury overflow-hidden">
              <button
                onClick={() => toggleOpen(faq.id)}
                className="w-full flex items-center justify-between p-6 hover:bg-surface-secondary transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-6 border-t border-border animate-fadeInDown">
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-6">Still have questions? We're here to help.</p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
