import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { MetricStrip } from "@/components/metric-strip";
import { heroMetrics } from "@/lib/site-content";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:px-8 sm:pb-12 sm:pt-14 lg:px-10 lg:pt-18">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="reveal-up">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent-strong">
            Smart City 2050
          </p>
          <h1 className="display-title balanced-copy mt-6 max-w-4xl text-6xl leading-[0.92] text-foreground sm:text-7xl lg:text-[6.6rem]">
            A bright vision for
            <span className="text-accent-strong"> Almaty</span>
            , built for a cleaner daily life.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            This concept website explores how transport, energy, and public space could reshape Almaty by 2050. The design stays calm, premium, and presentation-ready while leaving room for AI-generated media.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/vision"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore the vision
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </Link>
            <Link
              href="/media"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/80 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-accent-soft"
            >
              Open media page
              <Play className="h-4 w-4" strokeWidth={1.8} />
            </Link>
          </div>

          <div className="mt-10">
            <MetricStrip items={heroMetrics} />
          </div>
        </div>

        <div className="reveal-up lg:pb-4" style={{ animationDelay: "0.12s" }}>
          <div className="surface-shadow overflow-hidden rounded-[2rem] border border-line/70 bg-surface">
            <div className="flex items-center justify-between border-b border-line/70 px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              <span>Hero poster</span>
              <span>Media slot ready</span>
            </div>
            <div className="relative min-h-[26rem] bg-[url('/media/hero-poster.svg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,23,15,0.02),rgba(29,23,15,0.42))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
                  Visual direction
                </p>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/90">
                  Warm daylight, clear atmosphere, realistic architecture, mountain context, and no sci-fi excess.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}