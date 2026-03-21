import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Michael Thompson",
      location: "Cottesloe, WA",
      rating: 5,
      review: "Primo Pools transformed our backyard into a stunning oasis. The infinity pool design is absolutely breathtaking, and the quality of workmanship is exceptional. The team was professional throughout the entire process.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      location: "Subiaco, WA",
      rating: 5,
      review: "We couldn't be happier with our new family pool. The integrated spa and water features are perfect for entertaining. Primo Pools exceeded our expectations in every way possible.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 3,
      name: "David Chen",
      location: "Mount Lawley, WA",
      rating: 5,
      review: "The renovation of our old pool was handled with incredible attention to detail. The new lighting and tiling have completely transformed the space. Highly recommend Primo Pools!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-surface-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Social Proof</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mt-2 mb-6">Client Testimonials</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Discover why homeowners across Perth choose Primo Pools for their luxury aquatic dreams.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card-luxury text-center">
            <div className="text-4xl font-bold text-gold mb-2">500+</div>
            <p className="text-text-secondary">Completed Projects</p>
          </div>
          <div className="card-luxury text-center">
            <div className="text-4xl font-bold text-gold mb-2">98%</div>
            <p className="text-text-secondary">Client Satisfaction</p>
          </div>
          <div className="card-luxury text-center">
            <div className="text-4xl font-bold text-gold mb-2">20+</div>
            <p className="text-text-secondary">Years of Excellence</p>
          </div>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="card-luxury mx-auto max-w-2xl">
                    {/* Rating */}
                    <div className="flex items-center mb-4 gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-gold text-gold" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-lg text-text-secondary mb-8 font-light leading-relaxed">
                      "{testimonial.review}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <img 
                        src={testimonial.image}
                        alt={`${testimonial.name} avatar`}
                        className="w-14 h-14 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-text-tertiary text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-forest-green text-white rounded-full flex items-center justify-center hover:bg-sage-green transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-forest-green text-white rounded-full flex items-center justify-center hover:bg-sage-green transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentTestimonial === index 
                  ? "bg-forest-green w-8" 
                  : "bg-border hover:bg-text-tertiary"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
