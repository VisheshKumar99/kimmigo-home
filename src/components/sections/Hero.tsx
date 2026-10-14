"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Kimo } from "@/components/mascot/Kimo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { agents } from "@/data/agents";

export function Hero() {
  const prefersReduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36"
    >
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <div className="absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-32 -right-16 h-72 w-72 rounded-full bg-accent/20 blur-[110px]" />
        <div className="absolute -left-16 top-48 h-64 w-64 rounded-full bg-primary/15 blur-[100px]" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-soft backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-primary" aria-hidden />
              {agents.length} friendly agents, one cozy home
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              Meet Your Little Helpers{" "}
              <span className="gradient-text">for Big Ideas.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-balance sm:text-lg lg:mx-0"
            >
              Kimo is a home for specialized AI agents, each with its own
              personality and purpose. They help you with coding, career,
              research, writing, finance, and the everyday to-dos, so your
              best ideas have room to grow.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            >
              <a href="#agents" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore AI Agents
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </a>
              <a href="#about" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Meet Your Companion
                </Button>
              </a>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-5 text-sm text-muted-foreground"
            >
              No sign-up needed to look around. Agents are rolling out soon.
            </motion.p>
          </motion.div>

          {/* Mascot centerpiece */}
          <div className="relative mx-auto flex items-center justify-center">
            <FloatingHalo />
            <motion.div
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative z-10"
            >
              <Kimo size={320} className="drop-shadow-2xl" />
            </motion.div>
            <FloatingChips />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FloatingHalo() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="h-72 w-72 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute h-56 w-56 rounded-full border border-primary/20 sm:h-72 sm:w-72" />
      <div className="absolute h-72 w-72 rounded-full border border-accent/15 sm:h-96 sm:w-96" />
    </div>
  );
}

function FloatingChips() {
  const prefersReduced = useReducedMotion();
  const chips = [
    { label: "Debug my code", className: "left-0 top-10", delay: 0 },
    { label: "Polish my resume", className: "right-0 top-24", delay: 0.8 },
    { label: "Plan my day", className: "left-2 bottom-10", delay: 1.6 },
  ];

  return (
    <>
      {chips.map((chip) => (
        <motion.div
          key={chip.label}
          aria-hidden
          className={`absolute z-20 hidden rounded-full border border-border bg-card/80 px-3.5 py-2 text-xs font-medium text-foreground shadow-soft backdrop-blur sm:block ${chip.className}`}
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={
            prefersReduced
              ? { opacity: 1 }
              : { opacity: 1, y: [0, -10, 0] }
          }
          transition={
            prefersReduced
              ? { duration: 0.4, delay: 0.6 }
              : {
                  opacity: { duration: 0.5, delay: 0.6 + chip.delay },
                  y: {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: chip.delay,
                  },
                }
          }
        >
          {chip.label}
        </motion.div>
      ))}
    </>
  );
}

export default Hero;
