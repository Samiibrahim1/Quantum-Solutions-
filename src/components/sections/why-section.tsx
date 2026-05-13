"use client";

import { motion } from "framer-motion";
import { Bolt, Lock, MessageCircleMore, Rocket, ShieldCheck } from "lucide-react";

const reasons = [
  { title: "Fast delivery", description: "High-touch execution without sacrificing polish or clarity.", icon: Rocket },
  { title: "Modern technologies", description: "A stack designed for longevity, performance, and maintainability.", icon: Bolt },
  { title: "Professional support", description: "Clear communication and a business-minded delivery process.", icon: MessageCircleMore },
  { title: "Secure scalable systems", description: "Reliable foundations that grow with product demand.", icon: ShieldCheck },
  { title: "Clean UI/UX", description: "Interfaces with hierarchy, rhythm, and premium visual discipline.", icon: Lock },
];

export function WhySection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 lg:py-32">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.45em] text-cyan-200/75">Why choose us</p>
        <h2 className="mt-3 font-display text-3xl text-gradient md:text-5xl">A process built to feel smooth from first call to launch</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-5">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="glass rounded-[1.8rem] p-6 shadow-premium"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-cyan-200">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-xl text-white">{reason.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/64">{reason.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}