import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { urbanSystemDetails } from "@/lib/site-content";

export default function UrbanSystemsPage() {
  return (
    <div className="pb-12">
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
        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {[
            {
              metric: "Mobility",
              title: "Low-friction transit",
              description: "Smart routing, clean electric transport, and fewer private car bottlenecks create a city that moves with less stress.",
              image: "/media/mobility.png",
            },
            {
              metric: "Energy",
              title: "Distributed clean power",
              description: "Solar roofs, adaptive lighting, and efficient building envelopes make urban growth less resource heavy.",
              image: "/media/energy.png",
            },
            {
              metric: "Environment",
              title: "Better urban comfort",
              description: "More shade, more planting, and smarter public-space design improve daily life while reducing environmental pressure.",
              image: "/media/vision.png",
            },
          ].map((item) => (
            <article
              key={item.metric}
              className="relative min-h-[30rem] overflow-hidden rounded-[1.8rem]"
              style={{ backgroundImage: `url('${item.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.12)_0%,rgba(5,7,12,0.22)_40%,rgba(5,7,12,0.72)_75%,rgba(5,7,12,0.90)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#efbf63]">
                  {item.metric}
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {item.description}
                </p>
              </div>
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