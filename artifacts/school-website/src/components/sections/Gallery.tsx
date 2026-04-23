import React from "react";
import { motion } from "framer-motion";
import gallery1 from "@assets/gallery-1.png";
import gallery2 from "@assets/gallery-2.png";
import gallery3 from "@assets/gallery-3.png";
import gallery4 from "@assets/gallery-4.png";
import gallery5 from "@assets/gallery-5.png";

export function Gallery() {
  const images = [
    { src: gallery5, alt: "School building exterior", span: "md:col-span-2 md:row-span-2" },
    { src: gallery1, alt: "Students reading together", span: "col-span-1" },
    { src: gallery2, alt: "Classroom activity", span: "col-span-1" },
    { src: gallery3, alt: "School sports playing outdoors", span: "col-span-1" },
    { src: gallery4, alt: "Teacher at chalkboard", span: "col-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Campus Life
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Glimpse Inside SKA
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our vibrant campus, engaging classrooms, and the joyful moments of learning and play that make Standard Kids Academy special.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
