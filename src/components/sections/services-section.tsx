"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, LayoutGrid, LucideIcon, Smartphone, Workflow, Cpu, MonitorSmartphone } from "lucide-react";

const services: { title: string; description: string; icon: LucideIcon; accent: string }[] = [
  {
    title: "Web Development",
    description: "High-conversion websites with premium motion systems, scalable architecture, and cinematic polish.",
    icon: LayoutGrid,
    accent: "from-cyan-400/40 to-blue-500/5",
  },
  {
    title: "Mobile Apps",
    description: "Native-feeling app experiences that combine speed, trust, and elegant product storytelling.",
    icon: Smartphone,
    accent: "from-fuchsia-400/35 to-purple-500/5",
  },
  {
    title: "ERP Systems",
    description: "Operational platforms that streamline teams, data, and workflows across your business.",
    icon: Workflow,
    accent: "from-emerald-400/30 to-cyan-500/5",
  },
  {
    title: "POS Systems",
    description: "Modern point-of-sale interfaces with robust transaction flows and polished admin control.",
    icon: MonitorSmartphone,
    accent: "from-orange-300/30 to-rose-500/5",
  },
  {
    title: "AI Automation",
    description: "Smart automation layers that reduce manual work and unlock faster decision-making.",
    icon: Bot,
    accent: "from-indigo-400/30 to-sky-500/5",
  },
  {
    title: "Custom Software",
    description: "Tailored systems built around your process, your data, and your growth plan.",
    icon: Cpu,
    accent: "from-violet-400/30 to-pink-500/5",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 lg:py-32">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-200/75">Services</p>
          <h2 className="mt-3 font-display text-3xl text-gradient md:text-5xl">Engineering premium systems for ambitious brands</h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-white/58 md:text-base">
          Every engagement is designed to feel strategic, visual, and conversion-focused, from discovery to launch.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-premium backdrop-blur-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-90 transition group-hover:opacity-100`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_25%)] opacity-60" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-white shadow-neon transition group-hover:scale-105">
                    <Icon size={22} />
                  </span>
                  <ArrowUpRight className="text-white/45 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                </div>
                <h3 className="mt-10 font-display text-2xl text-white">{service.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/72">{service.description}</p>
                <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
                  Interactive delivery
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}