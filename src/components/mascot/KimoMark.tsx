type KimoMarkProps = {
  size?: number;
  className?: string;
  title?: string;
};

/**
 * A compact, static version of Kimo for use as a logo mark in the navbar
 * and footer. No animation, lightweight.
 */
export function KimoMark({ size = 36, className, title = "Kimo" }: KimoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="kimo-mark-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(250 90% 72%)" />
          <stop offset="55%" stopColor="hsl(255 84% 64%)" />
          <stop offset="100%" stopColor="hsl(268 76% 58%)" />
        </linearGradient>
        <linearGradient id="kimo-mark-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(150 70% 62%)" />
          <stop offset="100%" stopColor="hsl(160 64% 46%)" />
        </linearGradient>
      </defs>

      <path d="M100 36 C100 20 112 10 128 10 C128 26 118 38 100 38 Z" fill="url(#kimo-mark-leaf)" />
      <path d="M100 38 C100 24 92 15 80 15 C80 29 88 40 100 40 Z" fill="url(#kimo-mark-leaf)" opacity="0.85" />
      <rect x="97.5" y="34" width="5" height="16" rx="2.5" fill="hsl(160 50% 40%)" />

      <path
        d="M100 44 C58 44 34 78 34 116 C34 154 64 182 100 182 C136 182 166 154 166 116 C166 78 142 44 100 44 Z"
        fill="url(#kimo-mark-body)"
      />
      <ellipse cx="100" cy="128" rx="46" ry="40" fill="hsl(0 0% 100% / 0.92)" />
      <circle cx="66" cy="124" r="9" fill="hsl(14 90% 70% / 0.55)" />
      <circle cx="134" cy="124" r="9" fill="hsl(14 90% 70% / 0.55)" />
      <circle cx="77" cy="110" r="9.5" fill="hsl(245 40% 20%)" />
      <circle cx="123" cy="110" r="9.5" fill="hsl(245 40% 20%)" />
      <circle cx="80.5" cy="106.5" r="3.2" fill="white" />
      <circle cx="126.5" cy="106.5" r="3.2" fill="white" />
      <path
        d="M86 134 Q100 148 114 134"
        fill="none"
        stroke="hsl(245 40% 24%)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default KimoMark;
