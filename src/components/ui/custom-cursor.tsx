"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 420, damping: 28, mass: 0.2 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 28, mass: 0.2 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const pointer = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(pointer.matches);
    update();
    pointer.addEventListener("change", update);

    const move = (event: PointerEvent) => {
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
    };

    window.addEventListener("pointermove", move);

    return () => {
      pointer.removeEventListener("change", update);
      window.removeEventListener("pointermove", move);
    };
  }, [x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] h-6 w-6 rounded-full border border-cyan-300/70 bg-cyan-300/15 mix-blend-screen"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[89] h-14 w-14 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/8 blur-[1px]"
        style={{ x: smoothX, y: smoothY }}
      />
    </>
  );
}