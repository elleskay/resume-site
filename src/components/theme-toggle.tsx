"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed right-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-background/70 text-foreground backdrop-blur transition hover:bg-foreground/10 sm:right-6 sm:top-6"
    >
      <Sun
        className={`h-4 w-4 transition-all ${isDark ? "scale-0 -rotate-90" : "scale-100 rotate-0"}`}
        strokeWidth={1.75}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all ${isDark ? "scale-100 rotate-0" : "scale-0 rotate-90"}`}
        strokeWidth={1.75}
      />
    </button>
  );
}
