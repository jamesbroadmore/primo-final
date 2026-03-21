import { motion } from "framer-motion";
import { MessageSquare, Pencil, Cog, Hammer, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const processSteps = [
    {
      step: 1,
      icon: MessageSquare,
      title: "Consult",
      description: "Free consultation to understand your vision and requirements"
    },
    {
      step: 2,
      icon: Pencil,
      title: "Design",
      description: "Custom 3D design and technical drawings tailored to your space"
    },
    {
      step: 3,
      icon: Cog,
      title: "Engineering",
      description: "Detailed engineering and council approvals for safe construction"
    },
    {
      step: 4,
      icon: Hammer,
      title: "Build",
      description: "Expert construction using premium materials and techniques"
    },
    {
      step: 5,
      icon: CheckCircle,
      title: "Handover",
      description: "Complete handover with training and ongoing support"
    }
  ];

  return (
    <section id="process" className="py-24 bg-surface-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Our Approach</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mt-2 mb-6">Our Process</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From initial consultation to final handover, we ensure every step of your pool construction journey is seamless, professional, and exceeds expectations.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
            <div key={step.step}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-luxury text-center h-full"
              >
                <div className="flex flex-col items-center">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <Icon size={32} className="text-gold mb-4" />

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm">{step.description}</p>
                </div>
              </motion.div>
              
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:flex items-center justify-center mt-8 absolute right-0 top-24">
                  <div className="w-12 h-1 bg-gradient-to-r from-forest-green to-gold" />
                </div>
              )}
            </div>
          )})}
        </div>
        
        {/* Process Details */}
        <div className="card-luxury">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Our Quality Assurance</h3>
            <p className="text-text-secondary leading-relaxed max-w-4xl mx-auto">
              With over 500 completed luxury pools across Western Australia, we've refined our approach to deliver exceptional results consistently. Each step includes rigorous quality checkpoints, transparent client communication, and adherence to industry best practices. We're committed to delivering your perfect pool on time, on budget, and beyond expectations—every single time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
