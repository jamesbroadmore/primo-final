import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filters = ["All", "New Builds", "Renovations", "Water Features"];

  const portfolioItems = [
    {
      id: 1,
      title: "Luxury Infinity Pool",
      description: "Stunning infinity edge design with premium finishes",
      category: "New Builds",
      image: "https://framerusercontent.com/images/QDv2QvgwIq6lwh2t2SmXUK0Q38.jpg",
      details: "Custom infinity pool with heated water, automated lighting, and natural stone landscaping"
    },
    {
      id: 2,
      title: "Contemporary Family Pool",
      description: "Modern family pool with integrated entertainment area",
      category: "New Builds",
      image: "https://framerusercontent.com/images/hJCtYbi5cKh3R2PDg4lEH8U0Gz8.jpg",
      details: "Built-in seating areas, water features, and state-of-the-art filtration system"
    },
    {
      id: 3,
      title: "Resort-Style Design",
      description: "Tropical oasis with natural stone features",
      category: "New Builds",
      image: "https://framerusercontent.com/images/Ot58WJ0rtt12iGsj1VyZ9VMA2LY.jpeg",
      details: "Cascading waterfalls, tropical landscaping, and resort-grade amenities"
    },
    {
      id: 4,
      title: "Premium Water Features",
      description: "High-end concrete pool with water features",
      category: "Water Features",
      image: "https://framerusercontent.com/images/u2y8Rvxvn9EIqYZ7AP2lmCdOc.png",
      details: "Multi-tier fountain system with ambient lighting and sound design"
    },
    {
      id: 5,
      title: "Pool Renovation Project",
      description: "Complete makeover with modern finishes",
      category: "Renovations",
      image: "https://framerusercontent.com/images/dXYW7ghkOhRbXF6cX4NK0CJrI.png",
      details: "Updated filtration, new tile work, and complete equipment replacement"
    },
    {
      id: 6,
      title: "Custom Design Pool",
      description: "Bespoke pool tailored to client specifications",
      category: "Renovations",
      image: "https://framerusercontent.com/images/QDv2QvgwIq6lwh2t2SmXUK0Q38.jpg",
      details: "Personalized design with unique shape and luxury finishes"
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-surface-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mt-2 mb-6">Our Collection</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Each project represents our commitment to exceptional craftsmanship and innovative design. From concept to completion, we transform outdoor spaces into stunning aquatic sanctuaries.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-morphism rounded-full p-2 border border-border">
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-forest-green text-white"
                      : "text-text-secondary hover:text-forest-green"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="card-luxury group cursor-pointer overflow-hidden"
              onClick={() => setSelectedProject(selectedProject === item.id ? null : item.id)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden h-64 bg-muted">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <ArrowRight size={32} className="mb-2 mx-auto" />
                    <p className="font-medium">View Details</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-gold text-xs font-semibold uppercase tracking-wide">{item.category}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-2 group-hover:text-forest-green transition-colors duration-300">{item.title}</h3>
                <p className="text-text-secondary text-sm mb-4 group-hover:text-text-primary transition-colors duration-300">{item.description}</p>
                
                {selectedProject === item.id && (
                  <div className="mt-4 pt-4 border-t border-border text-sm text-text-secondary animate-fadeInUp">
                    <p>{item.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <button className="btn-primary inline-flex items-center gap-2">
            View Complete Gallery
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
