"use client";

import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  ["Services", "#services"],
  ["About", "#about"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        document.documentElement.dataset.scrolled = "true";
      } else {
        delete document.documentElement.dataset.scrolled;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-[70] w-full px-4 py-4 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 shadow-premium backdrop-blur-2xl md:px-5">
        <Link href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-sm font-semibold text-slate-950 shadow-neon">
            <Sparkles size={18} />
          </span>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.4em] text-white/90">Quantum Solutions</p>
            <p className="text-xs text-white/45">Premium digital systems</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/8 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="#contact"
            className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-100"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
        >
          <Menu size={18} />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-4 shadow-premium backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/8 px-4 py-3 text-white/80 transition hover:bg-white/6"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}