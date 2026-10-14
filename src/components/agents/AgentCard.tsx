"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { type Agent, statusLabels } from "@/data/agents";

type AgentCardProps = {
  agent: Agent;
  index: number;
  onOpen: (agent: Agent) => void;
};

export function AgentCard({ agent, index, onOpen }: AgentCardProps) {
  const prefersReduced = useReducedMotion();
  const Icon = agent.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: prefersReduced ? 0 : (index % 3) * 0.08,
      }}
    >
      <button
        type="button"
        onClick={() => onOpen(agent)}
        aria-label={`Learn more about ${agent.name}, the ${agent.tagline}`}
        style={
          {
            "--accent": agent.accent,
          } as React.CSSProperties
        }
        className="group relative flex h-full w-full flex-col items-start overflow-hidden rounded-4xl border border-border bg-card p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent)/0.5)] hover:shadow-glow"
      >
        {/* accent wash */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: "hsl(var(--accent) / 0.4)" }}
        />

        <div className="flex w-full items-start justify-between gap-3">
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-[hsl(var(--accent))] transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: "hsl(var(--accent) / 0.14)" }}
          >
            <Icon className="h-6 w-6" aria-hidden />
          </span>

          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
            style={{
              backgroundColor: "hsl(var(--accent) / 0.12)",
              color: "hsl(var(--accent))",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
            {statusLabels[agent.status]}
          </span>
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
          {agent.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-[hsl(var(--accent))]">
          {agent.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {agent.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </button>
    </motion.div>
  );
}

export default AgentCard;
