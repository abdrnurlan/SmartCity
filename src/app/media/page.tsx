import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { mediaPlan, promptLibrary } from "@/lib/site-content";

export default function MediaPage() {
  return (
    <div className="page-grid pb-12">
      <PageHero
        eyebrow="Media"
        title="AI visuals are part of the concept, not decoration around it."
        intro="The assignment requires AI-generated images and video. This page gives them a dedicated place so the project still feels structured, polished, and easy to explain."
      />

      <SectionShell
        eyebrow="Hero video"
        title="A loopable scene is ready to drop in."
        intro="Replace the placeholder with a real video file in public/media and the layout will already support it. The visual direction should stay warm, realistic, and free from generic sci-fi effects."
      >
        <div className="surface-shadow overflow-hidden rounded-[2rem] border border-line/70 bg-surface">
          <div className="border-b border-line/70 px-5 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Media slot
          </div>
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="border-b border-line/70 bg-[#e7d8bf] lg:border-b-0 lg:border-r">
              <video
                className="h-full min-h-[20rem] w-full object-cover"
                poster="/media/hero-poster.svg"
                controls
                loop
                muted
                playsInline
              >
                <source src="/media/hero-loop.mp4" type="video/mp4" />
                <source src="/media/hero-loop.webm" type="video/webm" />
              </video>
            </div>
            <div className="p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-strong">
                Current setup
              </p>
              <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-foreground">
                Use a cinematic aerial shot with real daylight and realistic architecture.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                The best result will feel like an editorial city film frame. Avoid neon, heavy futuristic props, or overly digital color grading.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Planned assets"
        title="The media set is compact on purpose."
        intro="A small number of strong visuals will help the project more than a large number of weak ones."
      >
        <div className="grid gap-5 md:grid-cols-3">
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
                      ? "linear-gradient(135deg, #f6e6cb, #d1b589)"
                      : index === 1
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
        title="The prompt wording already points toward a cleaner visual result."
        intro="These excerpts are short enough to scan on the website and can be expanded later in the presentation kit markdown file."
      >
        <div className="grid gap-5 lg:grid-cols-3">
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