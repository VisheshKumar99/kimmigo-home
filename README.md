# Kimo — Little Helpers for Big Ideas

A premium, fully responsive marketing site for **Kimo**, a friendly home for
specialized AI agents (coding, career, research, writing, finance, and everyday
tasks). Built with Next.js App Router, strict TypeScript, Tailwind CSS, Framer
Motion, and Lucide icons.

The brand mascot, **Kimo**, is an original SVG illustration — a soft droplet
creature with big friendly eyes, rosy cheeks, a warm smile, and a little leaf
sprout. It doubles as the logo, favicon, and animated website character.

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
```

## Scripts

| Script              | What it does                               |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Start the local dev server                 |
| `npm run build`     | Production build                           |
| `npm run start`     | Serve the production build                 |
| `npm run lint`      | Lint with ESLint (next/core-web-vitals)    |
| `npm run typecheck` | Type-check with `tsc --noEmit`             |

## Project structure

```
src/
├── app/
│   ├── globals.css        # Design tokens (HSL CSS vars), light/dark themes
│   ├── layout.tsx         # Fonts, SEO metadata, theme init, providers
│   └── page.tsx           # Homepage composition + skip link
├── components/
│   ├── agents/            # AgentCard, AgentDialog
│   ├── mascot/            # Kimo (animated) + KimoMark (static logo)
│   ├── sections/          # Navbar, Hero, Agents, HowItWorks, About, FinalCta, Footer
│   ├── theme/             # ThemeProvider + ThemeToggle (dark/light)
│   └── ui/                # Button, Container, Reveal, Dialog primitives
├── data/
│   ├── agents.ts          # Single source of truth for the agent roster
│   └── navigation.ts      # Nav links + brand constants
└── lib/
    └── utils.ts           # cn() classname helper
```

## Adding a new agent

Agents are fully data-driven. Add one object to the `agents` array in
[`src/data/agents.ts`](src/data/agents.ts) and it automatically appears in the
cards, detail dialogs, footer, and hero counts — no component changes needed.

```ts
{
  id: "design",
  name: "Pixel",
  tagline: "Your design sidekick",
  description: "Short card copy.",
  longDescription: "Longer dialog copy.",
  icon: Palette,              // any lucide-react icon
  status: "coming-soon",
  accent: "280 80% 62%",      // raw HSL channels "H S% L%"
  capabilities: ["...", "..."],
  examplePrompt: "Try asking me to ...",
}
```

## Design & accessibility notes

- **Theming:** CSS custom properties drive a warm light theme and a deep dark
  theme. An inline pre-paint script sets the theme before first render to avoid
  a flash; the user's choice persists in `localStorage` and otherwise follows
  the OS preference.
- **Motion:** All Framer Motion and CSS animations respect
  `prefers-reduced-motion`. The mascot blink/float and scroll reveals degrade to
  static or fade-only.
- **Accessibility:** Semantic landmarks, a skip-to-content link, labelled
  controls, a focus-trapped modal dialog with Escape-to-close and scroll lock,
  and visible focus rings.
- **SEO:** Title templates, description, keywords, Open Graph, and Twitter card
  metadata, plus an SVG favicon/icon derived from the mascot.

No backend or real AI integrations are wired up yet — agents are marked
"Coming Soon" and the roster is presented as a polished preview.
