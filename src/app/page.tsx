import Link from "next/link";
import { ArrowRight, Film, Grid2X2, LibraryBig, Sparkles } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionShell } from "@/components/section-shell";
import {
  homePreviewCards,
  sourceLinks,
  systemHighlights,
  visionPillars,
} from "@/lib/site-content";

export default function Home() {
  return (
    <div className="page-grid">
      <Hero />

      <SectionShell
        eyebrow="Project thesis"
        title="A city concept that looks credible, not speculative."
        intro="The website frames Almaty 2050 as a practical urban strategy. It combines environment, mobility, energy, and public life in a format that is clear enough for a classroom presentation and strong enough for a portfolio piece."
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
        eyebrow="Site structure"
        title="Five pages, one clear narrative."
        intro="Each route serves the criteria directly. The homepage makes the first impression. The internal pages turn the idea into a coherent project with systems, media, prompts, and sources."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {homePreviewCards.map((card, index) => {
            const icons = [Grid2X2, Sparkles, LibraryBig, Film];
            const Icon = icons[index] ?? Grid2X2;

            return (
              <article
                key={card.href}
                className="surface-shadow rounded-[1.5rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,250,242,0.96))] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong transition-transform duration-200 hover:translate-x-1"
                >
                  Open page
                  <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                </Link>
              </article>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Urban systems"
        title="Three systems define the story."
        intro="Instead of treating the future city as pure fantasy, the concept is organized around measurable urban systems. This makes the website more coherent, and it gives the presentation a stronger logic."
      >
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
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
          <div className="surface-shadow rounded-[1.8rem] border border-line/70 bg-[linear-gradient(180deg,rgba(242,230,211,0.8),rgba(255,250,242,0.95))] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-strong">
              Why it works
            </p>
            <h3 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-foreground">
              The site feels designed, but it still reads like a project.
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              The visual approach stays light, calm, and premium. The writing stays specific. The AI images and video support the idea instead of overpowering it.
            </p>
            <Link
              href="/sources-prompts"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-5 py-3 text-sm font-semibold text-accent-strong transition-colors duration-200 hover:bg-accent-soft"
            >
              Review prompts and sources
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Research trail"
        title="The concept is backed by real urban themes and clear source references."
        intro="Even a concept project feels stronger when it references real city challenges, climate goals, and planning ideas. These links also help with the assignment requirement for additional materials."
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
