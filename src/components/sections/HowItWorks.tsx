"use client";

import { MessageCircleHeart, MousePointerClick, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: MousePointerClick,
    title: "Choose an agent",
    description:
      "Browse the roster and pick the little helper that fits what you're working on, from coding to career to everyday plans.",
  },
  {
    icon: MessageCircleHeart,
    title: "Tell it your goal",
    description:
      "Describe what you need in plain words. No prompt-engineering, no jargon. Just talk to it like a thoughtful friend.",
  },
  {
    icon: Sparkles,
    title: "Get help",
    description:
      "Your agent gets to work, explains its thinking, and stays with you as you refine the result together.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 bg-muted/40 py-20 sm:py-28"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Help in three gentle steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-balance">
            Getting started with Kimo is simple on purpose. No setup rituals,
            just a quick path from question to help.
          </p>
        </Reveal>

        <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* connecting line on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 0.1}
                className="relative flex flex-col items-center rounded-4xl border border-border bg-card p-7 text-center shadow-soft"
              >
                <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Icon className="h-7 w-7" aria-hidden />
                  <span className="absolute -right-1 -top-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-soft">
                    {index + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;
