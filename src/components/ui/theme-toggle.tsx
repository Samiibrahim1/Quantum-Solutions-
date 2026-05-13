"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white/75 backdrop-blur-xl transition hover:border-cyan-300/35 hover:bg-white/10"
    >
      {isDark ? <SunMedium size={16} /> : <MoonStar size={16} />}
      {isDark ? "Light" : "Dark"}
    </button>
  );
}