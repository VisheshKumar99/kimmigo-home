export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "AI Agents", href: "#agents" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
];

export const brand = {
  name: "Kimo",
  tagline: "Little helpers for big ideas",
  description:
    "A friendly home for specialized AI agents that help you with coding, career, research, writing, finance, and everyday life.",
};
