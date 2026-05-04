import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import {
  presentationOutline,
  promptLibrary,
  sourceLinks,
} from "@/lib/site-content";

export default function SourcesPromptsPage() {
  return (
    <div className="page-grid pb-12">
      <PageHero
        eyebrow="Sources and Prompts"
        title="The supporting material is already organized for the presentation."
        intro="This page collects the research links, prompt wording, and slide logic needed to explain how the site was built and where the underlying ideas came from."
      />

      <SectionShell
        eyebrow="Sources"
        title="Real references make the concept look more deliberate."
        intro="These links support the urban, environmental, and planning logic behind the project."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sourceLinks.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="surface-shadow rounded-[1.5rem] border border-line/70 bg-surface px-6 py-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {source.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">{source.note}</p>
            </a>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Prompts"
        title="Prompt wording is stored in a clean format for the defense slides."
        intro="The project keeps the prompt library visible because the assignment asks for a clear record of how AI images and video were generated."
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

      <SectionShell
        eyebrow="Presentation flow"
        title="The website already maps to a short defense presentation."
        intro="This outline can be copied into slides almost directly, which keeps the project consistent across website and presentation."
      >
        <div className="surface-shadow rounded-[1.8rem] border border-line/70 bg-surface p-7 sm:p-9">
          <ol className="grid gap-4 md:grid-cols-2">
            {presentationOutline.map((item, index) => (
              <li
                key={item}
                className="rounded-[1.4rem] border border-line/70 bg-white/70 px-5 py-4 text-sm leading-7 text-foreground"
              >
                <span className="mr-3 font-semibold text-accent-strong">0{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </SectionShell>
    </div>
  );
}