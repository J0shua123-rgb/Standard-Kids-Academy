import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import heroImg from "@assets/hero.png";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Happy African schoolchildren in uniforms"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-6 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-1.5 bg-secondary/20 text-secondary-foreground backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold mb-2 border border-secondary/30">
            <MapPin className="w-4 h-4" />
            Ashiaman, Ghana
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Standard Kids <br className="hidden md:block" /> Academy
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-sm">
            Nurturing Minds, Building Futures
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full text-lg h-14 px-8 shadow-xl">
              <a href="#admissions">Apply Now</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-lg h-14 px-8 border-2 border-white/30 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm transition-all">
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
