"use client";

import { motion } from "framer-motion";
import { ArrowRight, Filter, Play } from "lucide-react";
import { useMemo, useState } from "react";

const projects = [
  { title: "Aurora Commerce", category: "Web", description: "Luxury e-commerce with motion-first storytelling.", tag: "Conversion UI" },
  { title: "Pulse ERP", category: "ERP", description: "Operations dashboard for multi-site teams.", tag: "Data Systems" },
  { title: "Vector POS", category: "POS", description: "Fast transaction flows for retail floors.", tag: "Retail Tech" },
  { title: "Nova AI", category: "AI", description: "Automation workflows that remove repetitive work.", tag: "AI Ops" },
  { title: "Halo Mobile", category: "App", description: "Premium companion app with sleek interactions.", tag: "Mobile UX" },
  { title: "Summit Studio", category: "Web", description: "Agency site with cinematic branding and 3D layers.", tag: "Brand Site" },
] as const;

const filters = ["All", "Web", "App", "ERP", "POS", "AI"] as const;

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visibleProjects = useMemo(
    () => projects.filter((project) => filter === "All" || project.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 lg:py-32">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-200/75">Projects</p>
          <h2 className="mt-3 font-display text-3xl text-gradient md:text-5xl">Case-study style work crafted to impress at first glance</h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-white/70 backdrop-blur-xl">
          <Filter size={14} className="ml-3" />
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 transition ${filter === item ? "bg-white text-slate-950" : "hover:bg-white/8"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-12">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-premium backdrop-blur-2xl ${
              index % 3 === 0 ? "lg:col-span-7" : "lg:col-span-5"
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.18),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_20%)]" />
            <div className="relative grid h-full gap-6 p-6 md:grid-cols-[1fr_0.92fr] md:p-7">
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/55">
                    {project.tag}
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-white md:text-3xl">{project.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/65">{project.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
                  <Play size={16} className="text-cyan-200" />
                  Hover preview and motion-rich storytelling
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/55 p-4">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_30%,rgba(255,255,255,0.03))] opacity-60" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/45">
                    <span>Preview</span>
                    <span>{project.category}</span>
                  </div>
                  <div className="mt-6 aspect-[4/3] rounded-[1.3rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.35),transparent_35%),linear-gradient(145deg,rgba(15,23,42,0.92),rgba(15,23,42,0.5))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <div className="flex h-full flex-col justify-between p-4">
                      <div className="flex items-center justify-between">
                        <div className="h-3 w-20 rounded-full bg-white/15" />
                        <div className="h-8 w-8 rounded-full bg-cyan-300/20" />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div key={i} className="rounded-2xl bg-white/8 p-3">
                            <div className="h-2 w-14 rounded-full bg-white/20" />
                            <div className="mt-3 h-16 rounded-xl bg-gradient-to-br from-cyan-300/30 to-fuchsia-400/10" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-white/50">
                    <span>Smart mockup</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}