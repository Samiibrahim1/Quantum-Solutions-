"use client";

// right-side 3D hero removed per user request
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useRef } from "react";

// HeroScene removed

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section id="top" ref={sectionRef} className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-premium opacity-90" />
      <div className="noise" />
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/14 blur-3xl animate-glow" />
      <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-fuchsia-500/12 blur-3xl animate-float" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-5xl items-center gap-14 px-4 pb-20 md:px-6">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/72 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            Available for select projects worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-gradient md:text-7xl xl:text-[6.5rem]"
          >
            We Build Powerful Digital Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: "easeOut" }}
            className="mt-7 max-w-2xl text-base leading-8 text-white/68 md:text-lg"
          >
            Premium websites, mobile apps, ERP platforms, POS systems, AI integrations, and automation engines designed to feel fast, elegant, and built for serious business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/6 px-6 py-4 text-sm font-semibold text-white/88 backdrop-blur-xl transition hover:border-cyan-300/35 hover:bg-white/10"
            >
              <PlayCircle size={18} />
              Book a Consultation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32, ease: "easeOut" }}
            className="mt-14 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4"
          >
            {[
              ["8+", "Years crafting systems"],
              ["120+", "High-end launches"],
              ["24/7", "Performance mindset"],
              ["100%", "Responsive by design"],
            ].map(([value, label]) => (
              <div key={label} className="glass rounded-[1.6rem] p-4 shadow-premium">
                <p className="font-display text-2xl text-white">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/55">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right-side hero block removed per user request */}
      </div>
    </section>
  );
}