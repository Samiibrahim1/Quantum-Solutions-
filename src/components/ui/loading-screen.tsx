"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="absolute inset-0 bg-premium opacity-70" />
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 text-center"
          >
            <div className="mx-auto mb-5 h-20 w-20 rounded-full border border-white/15 bg-white/5 shadow-premium backdrop-blur-xl">
              <motion.div
                className="h-full w-full rounded-full border border-cyan-400/35"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
              />
            </div>
            <p className="font-display text-sm uppercase tracking-[0.55em] text-white/55">
              Loading Experience
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}