"use client";

import { ArrowRight } from "lucide-react";
import { Kimo } from "@/components/mascot/Kimo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 px-6 py-14 text-center shadow-glow sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[90px]"
            />

            <div className="relative z-10 flex flex-col items-center">
              <Kimo size={120} className="mb-2" />
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Your little helpers are almost here.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-balance">
                Take a look at the agents waiting to join you. Big ideas feel a
                lot lighter when you&apos;ve got good company.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                <a href="#agents">
                  <Button size="lg">
                    Explore Agents
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button variant="secondary" size="lg">
                    See how it works
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default FinalCta;
