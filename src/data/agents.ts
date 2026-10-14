import {
  Briefcase,
  Code2,
  LineChart,
  type LucideIcon,
  PenLine,
  Search,
  Sparkles,
} from "lucide-react";

export type AgentStatus = "coming-soon" | "available" | "beta";

export type Agent = {
  /** Stable URL-safe id. */
  id: string;
  name: string;
  tagline: string;
  /** Short description used on the card. */
  description: string;
  /** Longer description shown in the detail dialog. */
  longDescription: string;
  icon: LucideIcon;
  status: AgentStatus;
  /**
   * Accent color expressed as raw HSL channels ("H S% L%") so it can be
   * dropped into hsl()/hsl(var) style values and tuned per theme.
   */
  accent: string;
  /** A few concrete things this agent will help with. */
  capabilities: string[];
  /** An example prompt a user might give the agent. */
  examplePrompt: string;
};

/**
 * Single source of truth for the agent roster. Add a new object here and it
 * automatically appears across the site (cards, dialogs, counts).
 */
export const agents: Agent[] = [
  {
    id: "career",
    name: "Pathfinder",
    tagline: "Your career companion",
    description:
      "Polishes your resume, preps you for interviews, and maps out the next step in your journey.",
    longDescription:
      "Pathfinder helps you move forward with confidence. It reviews your resume line by line, tailors it to roles you care about, runs mock interviews with thoughtful feedback, and helps you think through career decisions without the overwhelm.",
    icon: Briefcase,
    status: "coming-soon",
    accent: "199 89% 55%",
    capabilities: [
      "Resume & cover letter reviews",
      "Mock interviews with feedback",
      "Role and skill-gap mapping",
      "Salary & offer conversations",
    ],
    examplePrompt:
      "Tailor my resume for a senior product designer role and quiz me on likely interview questions.",
  },
  {
    id: "coding",
    name: "Bitsy",
    tagline: "Your pair-programming buddy",
    description:
      "Writes, explains, and debugs code with you across languages and frameworks.",
    longDescription:
      "Bitsy is the patient pair programmer who never sighs at a question. It explains unfamiliar code, suggests cleaner approaches, hunts down bugs with you, and helps you learn the why behind the fix, not just the fix.",
    icon: Code2,
    status: "coming-soon",
    accent: "250 84% 65%",
    capabilities: [
      "Explain and refactor code",
      "Debug tricky errors",
      "Write tests and docs",
      "Learn new frameworks",
    ],
    examplePrompt:
      "Explain this React hook, then help me refactor it to avoid the stale-closure bug.",
  },
  {
    id: "research",
    name: "Scout",
    tagline: "Your research assistant",
    description:
      "Gathers, summarizes, and organizes information so you can think clearly.",
    longDescription:
      "Scout does the digging so you can focus on deciding. It breaks big questions into pieces, summarizes long reads, compares sources side by side, and keeps your notes tidy and easy to revisit.",
    icon: Search,
    status: "coming-soon",
    accent: "160 64% 46%",
    capabilities: [
      "Summarize long documents",
      "Compare sources & options",
      "Build structured notes",
      "Draft literature overviews",
    ],
    examplePrompt:
      "Summarize these three articles on sleep science and list where they disagree.",
  },
  {
    id: "finance",
    name: "Penny",
    tagline: "Your everyday money guide",
    description:
      "Helps you budget, understand expenses, and plan toward your goals.",
    longDescription:
      "Penny makes money feel less stressful. It helps you build a budget that fits your life, understand where your money goes, and plan toward goals one friendly step at a time. Penny offers general guidance, not professional financial advice.",
    icon: LineChart,
    status: "coming-soon",
    accent: "38 92% 55%",
    capabilities: [
      "Build a simple budget",
      "Break down expenses",
      "Plan toward savings goals",
      "Explain money concepts",
    ],
    examplePrompt:
      "Help me build a monthly budget from my income and recurring expenses.",
  },
  {
    id: "writing",
    name: "Quill",
    tagline: "Your writing partner",
    description:
      "Drafts, edits, and refines your words until they sound like you, only clearer.",
    longDescription:
      "Quill helps you say what you mean. It drafts first versions, tightens rambling paragraphs, adjusts tone for the audience, and gives honest feedback, while keeping your voice front and center.",
    icon: PenLine,
    status: "coming-soon",
    accent: "330 80% 62%",
    capabilities: [
      "Draft emails, posts & essays",
      "Edit for clarity & tone",
      "Brainstorm ideas & outlines",
      "Adapt voice for any audience",
    ],
    examplePrompt:
      "Turn these rough notes into a warm, concise announcement email for my team.",
  },
  {
    id: "personal-assistant",
    name: "Nimbus",
    tagline: "Your everyday organizer",
    description:
      "Keeps your days, tasks, and plans in order so nothing slips through.",
    longDescription:
      "Nimbus is the gentle organizer in your corner. It helps you plan your day, break big goals into doable steps, draft messages, and keep track of the little things, so your mind has room for the big ones.",
    icon: Sparkles,
    status: "coming-soon",
    accent: "268 76% 62%",
    capabilities: [
      "Plan your day & week",
      "Break goals into steps",
      "Draft quick messages",
      "Track tasks & reminders",
    ],
    examplePrompt:
      "Plan a realistic day for me around three meetings and a workout.",
  },
];

export const statusLabels: Record<AgentStatus, string> = {
  "coming-soon": "Coming Soon",
  available: "Available",
  beta: "Beta",
};

export function getAgentById(id: string): Agent | undefined {
  return agents.find((agent) => agent.id === id);
}
