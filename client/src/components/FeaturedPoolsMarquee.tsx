export default function FeaturedPoolsMarquee() {
  const featuredPools = [
    {
      image: "https://framerusercontent.com/images/QDv2QvgwIq6lwh2t2SmXUK0Q38.jpg",
      alt: "Luxury Infinity Pool",
      title: "Luxury Infinity Pool"
    },
    {
      image: "https://framerusercontent.com/images/hJCtYbi5cKh3R2PDg4lEH8U0Gz8.jpg",
      alt: "Contemporary Family Pool",
      title: "Contemporary Family Pool"
    },
    {
      image: "https://framerusercontent.com/images/Ot58WJ0rtt12iGsj1VyZ9VMA2LY.jpeg",
      alt: "Resort-Style Design",
      title: "Resort-Style Design"
    },
    {
      image: "https://framerusercontent.com/images/u2y8Rvxvn9EIqYZ7AP2lmCdOc.png",
      alt: "Premium Water Features",
      title: "Premium Water Features"
    },
    {
      image: "https://framerusercontent.com/images/dXYW7ghkOhRbXF6cX4NK0CJrI.png",
      alt: "Pool Renovation Project",
      title: "Pool Renovation Project"
    }
  ];

  return (
    <section className="py-16 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">
          Featured Projects
        </h2>
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee">
            {[...featuredPools, ...featuredPools].map((pool, index) => (
              <div 
                key={index} 
                className="card-luxury flex-shrink-0 w-72 h-56 overflow-hidden group"
              >
                <div className="relative w-full h-full">
                  <img 
                    src={pool.image}
                    alt={pool.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white font-medium">{pool.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
