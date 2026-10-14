"use client";

import { useState } from "react";
import { AgentCard } from "@/components/agents/AgentCard";
import { AgentDialog } from "@/components/agents/AgentDialog";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { type Agent, agents } from "@/data/agents";

export function Agents() {
  const [selected, setSelected] = useState<Agent | null>(null);

  return (
    <section id="agents" className="relative scroll-mt-20 py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            The roster
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            A specialist for every kind of help
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-balance">
            Each agent has its own personality, focus, and warm way of working.
            Pick the one that fits what you&apos;re doing today, and tap a card
            to get to know it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              index={index}
              onOpen={setSelected}
            />
          ))}
        </div>
      </Container>

      <AgentDialog agent={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default Agents;
