import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { mediaPlan, promptLibrary } from "@/lib/site-content";

export default function MediaPage() {
  return (
    <div className="page-grid pb-12">
      <PageHero
        eyebrow="Media"
        title="AI images and AI video shape the project language together."
        intro="The website uses a cinematic three-frame hero sequence on the homepage and keeps the AI video piece as part of the media story. The goal is not to remove video, but to place it where it looks strongest."
      />

      <SectionShell
        eyebrow="Homepage sequence"
        title="Three matched AI frames now open the project like a cinematic cover."
        intro="Use evening, day, and night images with the same camera angle. The homepage crossfades them automatically, which creates a controlled opening sequence and keeps the skyline sharp."
      >
        <div className="surface-shadow overflow-hidden rounded-[2rem] border border-line/70 bg-surface">
          <div className="border-b border-line/70 px-5 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Three-frame hero setup
          </div>
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid min-h-[20rem] grid-cols-3 border-b border-line/70 bg-[#e7d8bf] lg:border-b-0 lg:border-r">
              <div
                className="relative bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/media/hero-evening.png'), url('/media/hero-day.png'), url('/media/hero-master.jpg'), url('/media/hero-poster.svg')",
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,14,17,0.06),rgba(16,14,17,0.42))]" />
                <div className="absolute bottom-0 left-0 px-5 py-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Evening
                  </p>
                </div>
              </div>
              <div
                className="relative bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/media/hero-day.png'), url('/media/hero-master.jpg'), url('/media/hero-poster.svg')",
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,18,11,0.02),rgba(24,18,11,0.34))]" />
                <div className="absolute bottom-0 left-0 px-5 py-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Day
                  </p>
                </div>
              </div>
              <div
                className="relative bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/media/hero-night.png'), url('/media/hero-master.jpg'), url('/media/hero-poster.svg')",
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,18,0.18),rgba(7,10,18,0.52))]" />
                <div className="absolute bottom-0 left-0 px-5 py-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Night
                  </p>
                </div>
              </div>
            </div>
            <div className="p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-strong">
                Current setup
              </p>
              <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-foreground">
                The homepage cover and the AI video now play different roles in the same concept.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                The homepage uses matched AI stills for a cleaner first impression, while the dedicated AI video belongs on this page and in the presentation as a separate media artifact.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Planned assets"
        title="The media set should be small, clean, and intentional."
        intro="A compact set of strong AI visuals makes the project look more serious than a long gallery of weak experiments."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {mediaPlan.map((item, index) => (
            <article
              key={item.title}
              className="surface-shadow overflow-hidden rounded-[1.7rem] border border-line/70 bg-surface"
            >
              <div
                className="h-48 border-b border-line/70"
                style={{
                  background:
                    index === 0
                      ? "linear-gradient(135deg, #f6e6cb, #d6b37a)"
                      : index === 1
                        ? "linear-gradient(135deg, #10192a, #314b79)"
                        : index === 2
                          ? "linear-gradient(135deg, #efe0c7, #f8f1e6)"
                          : "linear-gradient(135deg, #ead7b6, #cab089)",
                }}
              />
              <div className="px-6 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-strong">
                  {item.format}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Prompt direction"
        title="First lock the three hero frames, then build the AI video from that visual system."
        intro="The video should extend the same skyline language instead of inventing a different look."
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {promptLibrary.map((item) => (
            <article
              key={item.title}
              className="surface-shadow rounded-[1.7rem] border border-line/70 bg-white/85 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-strong">
                {item.tool}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.prompt}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}