"use client";

import { Heart, Leaf, ShieldCheck } from "lucide-react";
import { Kimo } from "@/components/mascot/Kimo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const values = [
  {
    icon: Heart,
    title: "Friendly first",
    description:
      "No cold, intimidating tech. Just warm, patient helpers that meet you where you are.",
  },
  {
    icon: ShieldCheck,
    title: "Honest & helpful",
    description:
      "Clear about what they can do, upfront about what they can't, and always on your side.",
  },
  {
    icon: Leaf,
    title: "Room to grow",
    description:
      "Kimo takes care of the busywork so your curiosity and best ideas have space to flourish.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Mascot, featured again */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto flex max-w-sm items-center justify-center">
              <div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-primary/25 to-accent/25 blur-3xl" />
              </div>
              <div className="relative z-10 rounded-5xl border border-border bg-card/70 p-8 shadow-glow backdrop-blur">
                <Kimo size={260} />
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our vision
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Making AI feel like a friend, not a machine
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We started Kimo with a simple belief: powerful AI shouldn&apos;t
                feel distant or overwhelming. It should feel like a little helper
                sitting beside you, ready to pitch in whenever you need it.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                That&apos;s why every Kimo agent has warmth and character.
                They&apos;re approachable, genuinely useful, and designed to make
                big ideas feel a little more doable, one friendly conversation at
                a time.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Reveal
                    key={value.title}
                    delay={index * 0.08}
                    className="rounded-3xl border border-border bg-card p-5 shadow-soft"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-3 text-sm font-semibold">{value.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
