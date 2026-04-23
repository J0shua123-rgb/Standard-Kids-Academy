import React from "react";
import { BookOpen, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-6 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="bg-white text-primary p-2 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-white">Standard Kids</span>
                <span className="text-xs font-semibold text-secondary leading-none tracking-widest uppercase">Academy</span>
              </div>
            </a>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              Nurturing Minds, Building Futures. Providing quality education from Kindergarten to Junior High School in Ashiaman, Ghana.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-secondary hover:text-secondary-foreground p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary hover:text-secondary-foreground p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#admissions" className="hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Programs</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#programs" className="hover:text-white transition-colors">Kindergarten (KG 1 & 2)</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Primary (Class 1 - 6)</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Junior High (JHS 1 - 3)</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                <span>Lebanon Road, Ashiaman<br />Greater Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-secondary" />
                <span>+233 24 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-secondary" />
                <span>info@standardkidsacademy.edu.gh</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60 text-center md:text-left">
          <p>© {currentYear} Standard Kids Academy. All rights reserved.</p>
          <p className="flex items-center gap-2 font-medium">
            Proudly serving Ashiaman, Ghana <span className="text-secondary">✦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
