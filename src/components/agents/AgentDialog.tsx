"use client";

import { Check, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { type Agent, statusLabels } from "@/data/agents";

type AgentDialogProps = {
  agent: Agent | null;
  onClose: () => void;
};

export function AgentDialog({ agent, onClose }: AgentDialogProps) {
  const open = agent !== null;
  const Icon = agent?.icon;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      labelledBy="agent-dialog-title"
      describedBy="agent-dialog-desc"
    >
      {agent && Icon && (
        <div
          style={{ "--accent": agent.accent } as React.CSSProperties}
          className="flex flex-col"
        >
          <div className="flex items-center gap-4">
            <span
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-[hsl(var(--accent))]"
              style={{ backgroundColor: "hsl(var(--accent) / 0.14)" }}
            >
              <Icon className="h-7 w-7" aria-hidden />
            </span>
            <div>
              <h2
                id="agent-dialog-title"
                className="font-display text-2xl font-semibold tracking-tight"
              >
                {agent.name}
              </h2>
              <p className="text-sm font-medium text-[hsl(var(--accent))]">
                {agent.tagline}
              </p>
            </div>
          </div>

          <span
            className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
            style={{
              backgroundColor: "hsl(var(--accent) / 0.12)",
              color: "hsl(var(--accent))",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
            {statusLabels[agent.status]}
          </span>

          <p
            id="agent-dialog-desc"
            className="mt-5 text-sm leading-relaxed text-muted-foreground"
          >
            {agent.longDescription}
          </p>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            What it helps with
          </h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {agent.capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-2 text-sm">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[hsl(var(--accent))]"
                  style={{ backgroundColor: "hsl(var(--accent) / 0.14)" }}
                >
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                <span className="text-foreground">{capability}</span>
              </li>
            ))}
          </ul>

          <div
            className="mt-6 rounded-2xl border border-border p-4"
            style={{ backgroundColor: "hsl(var(--accent) / 0.06)" }}
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <Quote className="h-3.5 w-3.5" aria-hidden />
              Try asking
            </div>
            <p className="mt-2 text-sm italic text-foreground">
              &ldquo;{agent.examplePrompt}&rdquo;
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              className="w-full sm:w-auto"
              disabled
              aria-disabled
              title="This agent is coming soon"
            >
              Coming Soon
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={onClose}
            >
              Back to agents
            </Button>
          </div>
        </div>
      )}
    </Dialog>
  );
}

export default AgentDialog;
