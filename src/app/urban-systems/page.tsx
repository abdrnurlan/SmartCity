import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { systemHighlights, urbanSystemDetails } from "@/lib/site-content";

export default function UrbanSystemsPage() {
  return (
    <div className="page-grid pb-12">
      <PageHero
        eyebrow="Urban Systems"
        title="The city concept is organized around systems, not loose ideas."
        intro="This page turns the future city into a more defensible structure. Each system supports the same goal: a healthier, more efficient, and more livable Almaty."
      />

      <SectionShell
        eyebrow="Overview"
        title="Three systems carry most of the story."
        intro="Mobility, energy, and public realm work together. Treating them as one connected framework makes the concept clearer and more believable."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {systemHighlights.map((item) => (
            <article
              key={item.title}
              className="surface-shadow rounded-[1.6rem] border border-line/70 bg-surface px-6 py-7"
            >
              <p className="text-sm font-semibold text-accent-strong">{item.metric}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Detailed structure"
        title="Each system can be explained in simple presentation language."
        intro="The page below breaks the project into concise speaking points. That makes it easier to turn the website into a 7 to 10 slide presentation later."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {urbanSystemDetails.map((system) => (
            <article
              key={system.title}
              className="surface-shadow rounded-[1.7rem] border border-line/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(242,230,211,0.72))] p-7"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {system.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{system.intro}</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-foreground">
                {system.points.map((point) => (
                  <li key={point} className="rounded-2xl border border-line/70 bg-white/65 px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}