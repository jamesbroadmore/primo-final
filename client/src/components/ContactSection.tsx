import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Award } from "lucide-react";

import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  suburb: z.string().min(2, "Please enter your suburb"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Please provide more details about your project")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      suburb: "",
      projectType: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll be in touch within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-forest-green text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mt-2 mb-6">Start Your Pool Journey</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Ready to transform your backyard? Reach out to our team for a complimentary consultation and project quote.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fadeInLeft">
            {/* Contact Details */}
            <div className="card-luxury">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center text-gold">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-text-secondary">35 Mannion Way, Kardinya WA 6163</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center text-gold">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-text-secondary">(08) 9331 8998</p>
                    <p className="text-text-secondary">Mobile: 0488 040 150</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center text-gold">
                      <Mail size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-text-secondary">hello@primopools.com.au</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center text-gold">
                      <Award size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">License</h4>
                    <p className="text-text-secondary">ABN 82 703 745 225</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Embedded Google Map */}
            <div className="card-luxury overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.6926842942973!2d115.80243627589374!3d-32.05686497399969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a0d0c0a8e6ad%3A0x4f4a5b2c1d8e9f0a!2s35%20Mannion%20Way%2C%20Kardinya%20WA%206163!5e0!3m2!1sen!2sau!4v1699520000000!5m2!1sen!2sau"
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Primo Pools Location"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card-luxury animate-fadeInRight">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Request Your Quote</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium text-sm">First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} className="input-luxury" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium text-sm">Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Smith" {...field} className="input-luxury" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium text-sm">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} className="input-luxury" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium text-sm">Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(08) 1234 5678" {...field} className="input-luxury" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="suburb"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium text-sm">Suburb</FormLabel>
                      <FormControl>
                        <Input placeholder="Perth" {...field} className="input-luxury" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium text-sm">Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="input-luxury">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="new-build">New Pool Construction</SelectItem>
                          <SelectItem value="renovation">Pool Renovation</SelectItem>
                          <SelectItem value="water-features">Water Features</SelectItem>
                          <SelectItem value="landscaping">Pool Landscaping</SelectItem>
                          <SelectItem value="maintenance">Pool Maintenance</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium text-sm">Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your vision..." 
                          className="input-luxury resize-none h-32" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full btn-primary"
                >
                  {contactMutation.isPending ? "Sending..." : "Get My Free Quote"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
