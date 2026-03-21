import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("new-builds");

  const services = {
    "new-builds": {
      title: "New Pool Construction",
      features: [
        {
          title: "Concrete Pool Specialists",
          description: "Custom-designed concrete pools built to last a lifetime with premium finishes"
        },
        {
          title: "Infinity Edge Design",
          description: "Stunning infinity pools that create seamless visual connections with your landscape"
        },
        {
          title: "Smart Pool Technology",
          description: "Automated systems for heating, lighting, and chemical management"
        }
      ],
      images: [
        {
          main: "https://framerusercontent.com/images/QDv2QvgwIq6lwh2t2SmXUK0Q38.jpg",
          alt: "Primo Pools new construction project"
        }
      ]
    },
    "renovations": {
      title: "Pool Renovations",
      features: [
        {
          title: "Complete Pool Makeovers",
          description: "Transform aging pools with modern finishes and updated technology"
        },
        {
          title: "Surface Refinishing",
          description: "Premium tiling, pebble, and plaster finishes for lasting beauty"
        },
        {
          title: "Equipment Upgrades",
          description: "Energy-efficient pumps, heaters, and automation systems"
        }
      ],
      images: [
        {
          main: "https://framerusercontent.com/images/u2y8Rvxvn9EIqYZ7AP2lmCdOc.png",
          alt: "Primo Pools renovation project"
        }
      ]
    },
    "water-features": {
      title: "Water Features",
      features: [
        {
          title: "Natural Rock Waterfalls",
          description: "Custom waterfalls designed to blend seamlessly with your landscape"
        },
        {
          title: "Fountain Systems",
          description: "Elegant fountains and water jets for visual appeal and relaxation"
        },
        {
          title: "Stream Integration",
          description: "Natural streams and water channels connecting features"
        }
      ],
      images: [
        {
          main: "https://framerusercontent.com/images/Ot58WJ0rtt12iGsj1VyZ9VMA2LY.jpeg",
          alt: "Primo Pools water features"
        }
      ]
    },
    "landscaping": {
      title: "Pool Landscaping",
      features: [
        {
          title: "Tropical Design",
          description: "Lush plantings that create a resort-style atmosphere"
        },
        {
          title: "Hardscape Integration",
          description: "Decking, patios, and walkways that complement your pool"
        },
        {
          title: "Outdoor Living Spaces",
          description: "Complete entertainment areas with kitchens and seating"
        }
      ],
      images: [
        {
          main: "https://framerusercontent.com/images/dXYW7ghkOhRbXF6cX4NK0CJrI.png",
          alt: "Primo Pools landscaping project"
        }
      ]
    },
    "maintenance": {
      title: "Maintenance Services",
      features: [
        {
          title: "Regular Cleaning",
          description: "Professional cleaning services to keep your pool pristine"
        },
        {
          title: "Chemical Balancing",
          description: "Expert water chemistry management for safe swimming"
        },
        {
          title: "Equipment Service",
          description: "Preventive maintenance and repairs for all pool equipment"
        }
      ],
      images: [
        {
          main: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
          alt: "Pool maintenance service"
        }
      ]
    }
  };

  const tabs = [
    { id: "new-builds", label: "New Builds" },
    { id: "renovations", label: "Renovations" },
    { id: "water-features", label: "Water Features" },
    { id: "landscaping", label: "Landscaping" },
    { id: "maintenance", label: "Maintenance" }
  ];

  const currentService = services[activeTab as keyof typeof services];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-surface-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Services</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mt-2 mb-6">Comprehensive Solutions</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From custom construction to innovative design, our comprehensive services deliver excellence at every stage of your pool project.
          </p>
        </div>
        
        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-forest-green text-white shadow-lg"
                  : "bg-warm-beige text-forest-green hover:bg-surface-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Service Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="animate-fadeInLeft">
            <h3 className="text-4xl font-serif font-bold text-foreground mb-8">{currentService.title}</h3>
            <div className="space-y-6">
              {currentService.features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-1">{feature.title}</h4>
                    <p className="text-text-secondary">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={scrollToContact}
              className="btn-primary mt-8 inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="animate-fadeInRight">
            <div className="card-luxury overflow-hidden">
              <img 
                src={currentService.images[0].main}
                alt={currentService.images[0].alt}
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
