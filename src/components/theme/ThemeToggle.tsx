"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground shadow-soft backdrop-blur transition-colors hover:bg-muted",
        className,
      )}
    >
      {/* Avoid hydration mismatch: render a neutral icon until mounted */}
      {!mounted ? (
        <Sun className="h-5 w-5" aria-hidden />
      ) : (
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={prefersReduced ? false : { opacity: 0, rotate: -45, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0, rotate: 45, scale: 0.6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-flex"
          >
            {isDark ? (
              <Moon className="h-5 w-5" aria-hidden />
            ) : (
              <Sun className="h-5 w-5" aria-hidden />
            )}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}

export default ThemeToggle;
