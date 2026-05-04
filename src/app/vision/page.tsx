import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { sourceLinks, visionPillars, visionSignals } from "@/lib/site-content";

export default function VisionPage() {
  return (
    <div className="page-grid pb-12">
      <PageHero
        eyebrow="Vision"
        title="A future city should feel realistic before it feels futuristic."
        intro="The goal of Almaty 2050 is not to imagine a distant fantasy. It is to organize a stronger version of the city around air quality, mobility, resilient energy, and public comfort."
      />

      <SectionShell
        eyebrow="Core direction"
        title="Three principles shape the full concept."
        intro="These principles guide both the website content and the visual language. The project stays polished, but it remains grounded in practical urban ideas."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {visionPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="surface-shadow rounded-[1.6rem] border border-line/70 bg-surface px-6 py-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-strong">
                {pillar.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">{pillar.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="What matters"
        title="The concept becomes stronger when every visual idea answers a real urban question."
        intro="That is why the project keeps returning to air, movement, public comfort, and long-term efficiency. These are easier to defend than vague statements about innovation."
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-shadow rounded-[1.8rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(239,224,199,0.75))] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-strong">
              Working thesis
            </p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-tight text-foreground">
              A finance-oriented project works best when the story is calm, structured, and credible.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              The site avoids overdesigned tech cliches. It favors strong copy, careful spacing, and media that feels editorial rather than synthetic.
            </p>
          </div>
          <div className="grid gap-4">
            {visionSignals.map((signal) => (
              <article
                key={signal.title}
                className="surface-shadow rounded-[1.5rem] border border-line/70 bg-surface px-6 py-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{signal.description}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="References"
        title="The urban vision is easier to defend with real material behind it."
        intro="These sources give the project a stronger academic and practical footing. They can also be cited directly in the presentation."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sourceLinks.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="surface-shadow rounded-[1.4rem] border border-line/70 bg-surface px-6 py-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-strong">
                Reference
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                {source.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{source.note}</p>
            </a>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}