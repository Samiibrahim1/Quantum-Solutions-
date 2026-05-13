"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { WhySection } from "@/components/sections/why-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";

export function Experience() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhySection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}