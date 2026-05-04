import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionShell } from "@/components/section-shell";
import {
  sourceLinks,
  systemHighlights,
  visionPillars,
} from "@/lib/site-content";

export default function Home() {
  return (
    <div>
      <Hero />

      <SectionShell
        eyebrow="The vision"
        title="A city concept that looks credible, not speculative."
        intro="Almaty 2050 frames urban transformation as a practical strategy — cleaner air, smarter movement, better public space. Built around three interconnected systems, not abstract promises."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {visionPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="surface-shadow reveal-up rounded-[1.6rem] border border-line/70 bg-surface px-6 py-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-strong">
                {pillar.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{pillar.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Urban systems"
        title="Three systems define the story."
        intro="Almaty's transformation is organized around mobility, energy, and public space — three measurable systems that reshape how the city moves, breathes, and feels."
      >
        <div className="surface-shadow rounded-[1.8rem] border border-line/70 bg-surface p-7 sm:p-9">
          <div className="grid gap-8 md:grid-cols-3">
            {systemHighlights.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-semibold text-accent-strong">{item.metric}</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Sources"
        title="Grounded in real urban research."
        intro="The concept draws on published work around clean mobility, climate adaptation, and livable city design. Not invented — informed."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {sourceLinks.slice(0, 3).map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="surface-shadow rounded-[1.4rem] border border-line/70 bg-surface px-6 py-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-sm font-semibold text-foreground">{source.title}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{source.note}</p>
            </a>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
