export default function OurStorySection() {
  const stats = [
    { number: "500+", label: "Luxury Projects Completed" },
    { number: "20+", label: "Years of Excellence" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      title: "Premium Craftsmanship",
      description: "Every pool is engineered with precision using only the finest materials and time-tested techniques to ensure lasting beauty and structural integrity."
    },
    {
      title: "Innovative Design",
      description: "We stay at the forefront of pool design, integrating cutting-edge technology and sustainable practices into every project."
    },
    {
      title: "Client Partnership",
      description: "Your vision guides our process. We collaborate closely from concept through completion, ensuring your expectations are not just met but exceeded."
    }
  ];

  return (
    <section id="story" className="py-24 bg-surface-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">About Us</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mt-2 mb-6">Our Story</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Since 2004, Primo Pools has been transforming backyards across Western Australia with luxury concrete pools that combine innovative design, superior craftsmanship, and lasting quality. We don't just build pools—we create aquatic sanctuaries where families make memories for generations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="card-luxury text-center animate-fadeInUp" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="text-5xl font-bold text-gold mb-3">
                {stat.number}
              </div>
              <div className="text-text-secondary font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="card-luxury hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-12 h-12 bg-gold/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gold font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{value.title}</h3>
              <p className="text-text-secondary leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="card-luxury p-12">
          <blockquote className="text-2xl lg:text-3xl font-serif font-light text-foreground leading-relaxed text-balance text-center mb-6">
            "We don't just build pools—we create aquatic masterpieces that transform your outdoor living space into a personal resort where memories are made and dreams come to life."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-gold" />
            <cite className="text-text-secondary font-medium">The Primo Pools Team</cite>
            <div className="w-10 h-px bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
