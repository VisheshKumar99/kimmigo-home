"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type KimoProps = {
  /** Pixel size (width = height). */
  size?: number;
  className?: string;
  /** Enables idle blink + subtle sway. Ignored when reduced motion is on. */
  animated?: boolean;
  /** Hide from assistive tech when purely decorative. */
  decorative?: boolean;
  title?: string;
};

/**
 * Kimo — the brand mascot.
 * An original, soft droplet-shaped creature with big friendly eyes, rosy
 * cheeks, a warm smile and a tiny leaf sprout. Deliberately NOT a robot,
 * NOT an emoji — a lovable little helper.
 */
export function Kimo({
  size = 240,
  className,
  animated = true,
  decorative = false,
  title = "Kimo, your friendly AI companion",
}: KimoProps) {
  const prefersReduced = useReducedMotion();
  const [blink, setBlink] = useState(false);
  const motionOn = animated && !prefersReduced;

  useEffect(() => {
    if (!motionOn) return;
    let timeout: ReturnType<typeof setTimeout>;
    const loop = () => {
      const next = 2400 + Math.random() * 3200;
      timeout = setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 150);
        loop();
      }, next);
    };
    loop();
    return () => clearTimeout(timeout);
  }, [motionOn]);

  const a11y = decorative
    ? { "aria-hidden": true as const, role: "presentation" }
    : { role: "img" as const, "aria-label": title };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={false}
      animate={motionOn ? { y: [0, -8, 0], rotate: [-1.2, 1.2, -1.2] } : undefined}
      transition={
        motionOn
          ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
      {...a11y}
    >
      {!decorative && <title>{title}</title>}
      <defs>
        <linearGradient id="kimo-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(250 90% 72%)" />
          <stop offset="55%" stopColor="hsl(255 84% 64%)" />
          <stop offset="100%" stopColor="hsl(268 76% 58%)" />
        </linearGradient>
        <linearGradient id="kimo-belly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(0 0% 100% / 0.95)" />
          <stop offset="100%" stopColor="hsl(250 100% 97%)" />
        </linearGradient>
        <linearGradient id="kimo-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(150 70% 62%)" />
          <stop offset="100%" stopColor="hsl(160 64% 46%)" />
        </linearGradient>
        <radialGradient id="kimo-glow" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="hsl(250 90% 72% / 0.35)" />
          <stop offset="100%" stopColor="hsl(250 90% 72% / 0)" />
        </radialGradient>
        <filter id="kimo-shadow" x="-30%" y="-20%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="8"
            floodColor="hsl(255 60% 40%)"
            floodOpacity="0.22"
          />
        </filter>
      </defs>

      {/* soft ambient glow */}
      <circle cx="100" cy="92" r="88" fill="url(#kimo-glow)" />

      {/* little leaf sprout */}
      <g filter="url(#kimo-shadow)">
        <path
          d="M100 36 C100 20 112 10 128 10 C128 26 118 38 100 38 Z"
          fill="url(#kimo-leaf)"
        />
        <path
          d="M100 38 C100 24 92 15 80 15 C80 29 88 40 100 40 Z"
          fill="url(#kimo-leaf)"
          opacity="0.85"
        />
        <rect x="97.5" y="34" width="5" height="16" rx="2.5" fill="hsl(160 50% 40%)" />
      </g>

      {/* droplet body */}
      <path
        filter="url(#kimo-shadow)"
        d="M100 44
           C58 44 34 78 34 116
           C34 154 64 182 100 182
           C136 182 166 154 166 116
           C166 78 142 44 100 44 Z"
        fill="url(#kimo-body)"
      />

      {/* belly highlight */}
      <ellipse cx="100" cy="128" rx="46" ry="40" fill="url(#kimo-belly)" opacity="0.92" />

      {/* top sheen */}
      <ellipse cx="80" cy="78" rx="22" ry="14" fill="hsl(0 0% 100% / 0.3)" />

      {/* cheeks */}
      <circle cx="66" cy="124" r="10" fill="hsl(14 90% 70% / 0.55)" />
      <circle cx="134" cy="124" r="10" fill="hsl(14 90% 70% / 0.55)" />

      {/* eyes */}
      <g>
        {blink ? (
          <>
            <rect x="68" y="110" width="18" height="4" rx="2" fill="hsl(245 40% 22%)" />
            <rect x="114" y="110" width="18" height="4" rx="2" fill="hsl(245 40% 22%)" />
          </>
        ) : (
          <>
            <circle cx="77" cy="110" r="9.5" fill="hsl(245 40% 20%)" />
            <circle cx="123" cy="110" r="9.5" fill="hsl(245 40% 20%)" />
            <circle cx="80.5" cy="106.5" r="3.2" fill="white" />
            <circle cx="126.5" cy="106.5" r="3.2" fill="white" />
            <circle cx="74" cy="113" r="1.6" fill="white" opacity="0.75" />
            <circle cx="120" cy="113" r="1.6" fill="white" opacity="0.75" />
          </>
        )}
      </g>

      {/* warm smile */}
      <path
        d="M86 134 Q100 148 114 134"
        fill="none"
        stroke="hsl(245 40% 24%)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* tiny arms */}
      <path
        d="M44 128 Q30 132 30 144"
        fill="none"
        stroke="url(#kimo-body)"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M156 128 Q170 132 170 144"
        fill="none"
        stroke="url(#kimo-body)"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

export default Kimo;
