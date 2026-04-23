import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We will get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Standard Kids Academy
          </h2>
          <p className="text-lg text-muted-foreground">
            We are here to answer any questions you have. Reach out to us via phone, email, or visit our campus in Ashiaman.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-none shadow-lg overflow-hidden bg-primary text-primary-foreground">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-64 h-64">
                  <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.1C91.4,-33.1,98,-16.6,98.7,0.4C99.4,17.4,94.2,34.8,84.4,49.5C74.6,64.2,60.2,76.2,44.1,83.1C28,90,14,91.8,-0.2,92.1C-14.4,92.4,-28.8,91.1,-42.6,85.1C-56.4,79.1,-69.6,68.4,-78.5,54.6C-87.4,40.8,-92,20.4,-91.3,0.4C-90.6,-19.6,-84.6,-39.2,-74.2,-54C-63.8,-68.8,-49,-78.8,-33.9,-84.7C-18.8,-90.6,-9.4,-92.4,3.2,-97.9C15.8,-103.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
              </div>
              
              <CardContent className="p-8 md:p-10 relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-8 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Campus Address</h4>
                      <p className="text-primary-foreground/80 leading-relaxed">
                        Lebanon Road, Ashiaman<br />
                        Greater Accra Region, Ghana
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <p className="text-primary-foreground/80">
                        +233 24 000 0000<br />
                        +233 55 000 0000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <p className="text-primary-foreground/80">
                        info@standardkidsacademy.edu.gh
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">School Hours</h4>
                      <p className="text-primary-foreground/80">
                        Monday – Friday<br />
                        7:30 AM – 3:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/20 flex gap-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-none shadow-lg bg-card">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Parent / Guardian Name</Label>
                    <Input id="name" required placeholder="Enter your full name" className="h-12 bg-muted/50 border-transparent focus:bg-background" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required placeholder="Your email" className="h-12 bg-muted/50 border-transparent focus:bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required placeholder="Your phone number" className="h-12 bg-muted/50 border-transparent focus:bg-background" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message or Inquiry</Label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="How can we help you?" 
                      className="min-h-[150px] resize-none bg-muted/50 border-transparent focus:bg-background p-4" 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full h-12 text-base font-semibold gap-2 rounded-xl" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
