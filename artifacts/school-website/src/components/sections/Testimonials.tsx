import React from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Enrolling my daughter at SKA was the best decision. Her confidence has grown immensely, and her reading skills improved within just one term.",
      author: "Mrs. Adjoa Mensah",
      role: "Parent of Primary 3 Student"
    },
    {
      quote: "The teachers here genuinely care about the students. They don't just focus on exams, they focus on building good character.",
      author: "Mr. Kwame Osei",
      role: "Parent of JHS 2 Student"
    },
    {
      quote: "Standard Kids Academy provides a safe and loving environment. My son looks forward to going to school every single day.",
      author: "Auntie Esi",
      role: "Parent of KG 2 Student"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">What Parents Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((test, index) => (
            <Card key={index} className="border-none shadow-md bg-card">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-secondary mb-4 opacity-50" />
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{test.quote}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{test.author}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">{test.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
