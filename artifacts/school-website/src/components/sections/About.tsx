import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImg from "@assets/about.png";

export function About() {
  const values = [
    "Academic Excellence",
    "Integrity & Discipline",
    "Compassion & Care",
    "Curiosity & Innovation",
    "Holistic Child Development"
  ];

  return (
    <section id="about" className="py-24 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-2">
              About Our School
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              A Tradition of Excellence in Ashiaman
            </h2>
            
            <div className="text-muted-foreground text-lg space-y-4 leading-relaxed">
              <p>
                Founded to serve the beautiful children of Ashiaman and its surrounding communities, Standard Kids Academy is committed to providing quality, holistic education from Kindergarten through Junior High School.
              </p>
              <p>
                Our campus provides a safe, vibrant, and engaging environment where dedicated and qualified teachers nurture every child's potential. We believe in academic rigor, but also in building character. While we are guided by strong moral and Christian values, we warmly welcome families of all backgrounds.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="font-semibold text-lg text-foreground">Our Core Values</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {values.map((value, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-muted-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src={aboutImg} 
                alt="Teacher and students in a bright classroom" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-2xl" />
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-none shadow-lg bg-primary text-primary-foreground overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target className="w-32 h-32" />
              </div>
              <CardContent className="p-8 md:p-10 relative z-10 space-y-4">
                <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  To provide quality education in a safe, inclusive, and nurturing environment where every child is encouraged to discover their full potential.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-none shadow-lg bg-card overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                <Eye className="w-32 h-32 text-foreground" />
              </div>
              <CardContent className="p-8 md:p-10 relative z-10 space-y-4">
                <div className="bg-secondary/20 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To raise the next generation of confident, responsible, and academically excellent leaders who will make a positive impact in Ghana and beyond.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
