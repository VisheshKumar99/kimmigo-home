import { About } from "@/components/sections/About";
import { Agents } from "@/components/sections/Agents";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-glow"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Agents />
        <HowItWorks />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
