"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Dribbble, Github, Linkedin, Mail, MessageSquareMore } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-24 pb-28 md:px-6 lg:py-32">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-200/75">Contact</p>
          <h2 className="mt-3 font-display text-3xl text-gradient md:text-5xl">Let’s build something that feels expensive and performs even better</h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/64 md:text-base">
            Book a consultation to discuss your website, app, ERP, POS, automation, or AI project. We move fast, communicate clearly, and deliver polished results.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/78 backdrop-blur-xl transition hover:bg-white/10"
            >
              <Mail size={16} />
              hello@example.com
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              <CalendarDays size={16} />
              Book a Consultation
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-white/60">
            <a href="#" className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:text-white">
              <Github size={18} />
            </a>
            <a href="#" className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="#" className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:text-white">
              <Dribbble size={18} />
            </a>
            <a href="#" className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:text-white">
              <MessageSquareMore size={18} />
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-premium backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.14),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_22%)]" />
          <div className="relative grid gap-4">
            {[
              ["Name", "Your full name"],
              ["Email", "you@company.com"],
              ["Project", "Website, app, ERP, automation..."],
            ].map(([label, placeholder]) => (
              <label key={label} className="grid gap-2 text-sm text-white/70">
                {label}
                <input
                  type="text"
                  placeholder={placeholder}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-white placeholder:text-white/30 transition focus:border-cyan-300/45 focus:bg-slate-950/75"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm text-white/70">
              Message
              <textarea
                rows={5}
                placeholder="Tell us about your goals, timeline, and what you want this system to achieve."
                className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-white placeholder:text-white/30 transition focus:border-cyan-300/45 focus:bg-slate-950/75"
              />
            </label>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-white to-cyan-100 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
              Send Inquiry
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}