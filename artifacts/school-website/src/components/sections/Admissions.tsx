import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, CheckCircle, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Admissions() {
  const steps = [
    {
      title: "Obtain Form",
      description: "Pick up an admission form from the school office or download it below."
    },
    {
      title: "Submit Application",
      description: "Return the completed form along with all required supporting documents."
    },
    {
      title: "Assessment",
      description: "Your child will take a short entry assessment and have a friendly interview."
    },
    {
      title: "Admission Letter",
      description: "Successful candidates will receive an official offer of admission."
    },
    {
      title: "Enrollment",
      description: "Pay the required fees and get ready for the first day of school!"
    }
  ];

  const documents = [
    "Child's Birth Certificate (Copy)",
    "Immunization / Health Record",
    "Previous School Report Card (if applicable)",
    "2 Recent Passport-Sized Photographs",
    "Parent/Guardian Valid ID Card"
  ];

  return (
    <section id="admissions" className="py-24 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Join Our Family
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Admissions Process
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We warmly welcome new families to Standard Kids Academy. Our admission process is straightforward and designed to help us understand your child's needs to provide them with the best educational experience.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Steps Timeline */}
            <div className="md:col-span-3 space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                How to Apply
              </h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent hidden-before-md pl-12 md:pl-0">
                {/* Mobile line (left aligned) */}
                <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-border md:hidden" />
                
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-start gap-6 md:gap-8"
                  >
                    <div className="absolute left-[-48px] md:relative md:left-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold border-4 border-white shadow-sm flex-shrink-0 z-10">
                      {index + 1}
                    </div>
                    <div className="pt-1.5 pb-6 border-b border-border/50 w-full last:border-0 last:pb-0">
                      <h4 className="text-lg font-bold text-foreground mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Documents & CTA */}
            <div className="md:col-span-2 space-y-6">
              <Card className="border-none shadow-lg bg-primary/5">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-primary" />
                    Required Documents
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {documents.map((doc, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4 pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground font-medium">Ready to start?</p>
                    <Button className="w-full rounded-xl h-12 shadow-md gap-2 group" size="lg">
                      <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                      Download Form
                    </Button>
                    <div className="text-center text-xs text-muted-foreground">
                      Or visit the school office between 8am and 3pm.
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none bg-secondary text-secondary-foreground shadow-md">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg">Have questions?</p>
                    <p className="text-sm opacity-90">Call our admissions desk</p>
                  </div>
                  <Button variant="outline" size="icon" className="rounded-full bg-white/20 border-white/40 hover:bg-white hover:text-secondary-foreground" asChild>
                    <a href="#contact">
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
