"use client";

import { motion, useInView } from "framer-motion";
import { Cloud, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stack = ["Next.js 15", "React", "Tailwind", "GSAP", "R3F", "Lenis"];

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let current = 0;
    const frame = window.setInterval(() => {
      current += Math.ceil(value / 28);
      if (current >= value) {
        current = value;
        window.clearInterval(frame);
      }
      setCount(current);
    }, 28);

    return () => window.clearInterval(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="glass rounded-[1.6rem] p-5 shadow-premium">
      <p className="font-display text-3xl text-white md:text-4xl">{count}+</p>
      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">{label}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-200/75">About</p>
          <h2 className="font-display text-3xl text-gradient md:text-5xl">Built for scale, speed, and a world-class first impression</h2>
          <p className="max-w-xl text-sm leading-8 text-white/64 md:text-base">
            We design and engineer business systems that feel premium on the surface and robust underneath, helping teams sell, operate, and automate with confidence.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Counter value={120} label="Launches" />
            <Counter value={2} label="Years" />
            <Counter value={32} label="Systems" />
            <Counter value={99} label="Satisfaction" />
          </div>
        </motion.div>

        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-6 shadow-premium backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.17),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_24%)]" />
          <div className="relative grid gap-5 md:grid-cols-[1fr_0.85fr]">
            <div className="glass rounded-[1.8rem] p-6">
              <div className="mb-6 flex items-center gap-3 text-cyan-200">
                <Sparkles />
                <span className="text-xs uppercase tracking-[0.35em]">Scalable delivery</span>
              </div>
              <h3 className="font-display text-2xl text-white">Systems, interfaces, and automation that feel expensive</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                From discovery to deployment, every decision is made to sharpen clarity, speed, and visual impact.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70">
                {[
                  [ShieldCheck, "Secure architecture"],
                  [Gauge, "Performance-first"],
                  [Cloud, "Cloud ready"],
                  [Sparkles, "Luxury motion"],
                ].map(([Icon, label]) => (
                  <div key={label as string} className="flex items-center gap-2 rounded-2xl border border-white/8 bg-white/5 px-3 py-3">
                    <Icon size={16} className="text-cyan-200" />
                    <span>{label as string}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4">
              {stack.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass flex h-full items-center justify-between rounded-[1.4rem] px-5 py-4"
                >
                  <span className="font-display text-lg text-white">{item}</span>
                  <span className="text-xs uppercase tracking-[0.28em] text-white/40">Live stack</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}