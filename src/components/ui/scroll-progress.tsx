"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.25 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-white/5"
      style={{ scaleX }}
    >
      <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-500 shadow-[0_0_24px_rgba(56,189,248,0.65)]" />
    </motion.div>
  );
}