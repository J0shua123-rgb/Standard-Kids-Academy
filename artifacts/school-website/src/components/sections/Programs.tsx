import React from "react";
import { motion } from "framer-motion";
import { Blocks, BookOpen, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import programKg from "@assets/program-kg.png";
import programPrimary from "@assets/program-primary.png";
import programJhs from "@assets/program-jhs.png";

export function Programs() {
  const programs = [
    {
      id: "kg",
      title: "Kindergarten",
      levels: "KG 1 & KG 2",
      age: "Ages 3-5",
      icon: Blocks,
      image: programKg,
      color: "bg-blue-100 text-blue-700",
      description: "A joyful, play-based introduction to learning. We focus on early literacy, numeracy, social skills, and creative expression in a safe, colorful environment.",
      highlights: ["Phonics & Reading Prep", "Creative Arts", "Social-Emotional Learning"]
    },
    {
      id: "primary",
      title: "Primary School",
      levels: "Class 1 to Class 6",
      age: "Ages 6-11",
      icon: BookOpen,
      image: programPrimary,
      color: "bg-green-100 text-green-700",
      description: "Building strong foundational academics. Our primary curriculum is engaging and robust, designed to foster a love for reading, science, and discovery.",
      highlights: ["Core Mathematics & Science", "Literacy & Languages", "ICT & Computing"]
    },
    {
      id: "jhs",
      title: "Junior High School",
      levels: "JHS 1 to JHS 3",
      age: "Ages 12-15",
      icon: GraduationCap,
      image: programJhs,
      color: "bg-amber-100 text-amber-700",
      description: "Rigorous preparation for the BECE and beyond. We develop critical thinking, leadership, and independence in our senior students.",
      highlights: ["BECE Exam Preparation", "Advanced Sciences", "Leadership & Character"]
    }
  ];

  return (
    <section id="programs" className="py-24 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Academic Programs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Education from KG to JHS
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide a structured, engaging curriculum tailored to every stage of your child's development, ensuring they are prepared for the next step in their educational journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-foreground shadow-sm">
                      {program.levels}
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl ${program.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-foreground">{program.title}</h3>
                        <p className="text-sm font-medium text-muted-foreground">{program.age}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {program.description}
                    </p>
                    
                    <div className="space-y-2 mt-auto pt-4 border-t border-border">
                      <p className="text-sm font-semibold text-foreground mb-2">Key Highlights:</p>
                      <ul className="space-y-1.5">
                        {program.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
