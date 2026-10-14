import { KimoMark } from "@/components/mascot/KimoMark";
import { Container } from "@/components/ui/Container";
import { agents } from "@/data/agents";
import { brand, navLinks } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <KimoMark size={34} />
              <span className="font-display text-lg font-semibold tracking-tight">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {brand.description}
            </p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <h3 className="font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Agents" className="text-sm">
            <h3 className="font-semibold">Agents</h3>
            <ul className="mt-4 space-y-2.5">
              {agents.slice(0, 5).map((agent) => (
                <li key={agent.id}>
                  <a
                    href="#agents"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {agent.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {year} {brand.name}. {brand.tagline}.
          </p>
          <p>Agents rolling out soon. Made with care.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
