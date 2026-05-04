"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { MetricStrip } from "@/components/metric-strip";
import { heroMetrics } from "@/lib/site-content";

const heroFrames = [
  {
    label: "Sunset",
    description: "Evening frame",
    image: "url('/media/hero-evening.png'), url('/media/hero-day.png'), url('/media/hero-master.jpg'), url('/media/hero-poster.svg')",
  },
  {
    label: "Golden hour",
    description: "Day frame",
    image: "url('/media/hero-day.png'), url('/media/hero-master.jpg'), url('/media/hero-poster.svg')",
  },
  {
    label: "Blue hour",
    description: "Night frame",
    image: "url('/media/hero-night.png'), url('/media/hero-master.jpg'), url('/media/hero-poster.svg')",
  },
] as const;

export function Hero() {
  const [activeFrame, setActiveFrame] = useState(0);
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  useEffect(() => {
    const introTimeout = window.setTimeout(() => {
      setIsIntroVisible(false);
    }, 1000);

    const interval = window.setInterval(() => {
      setActiveFrame((current) => (current + 1) % heroFrames.length);
    }, 5000);

    return () => {
      window.clearTimeout(introTimeout);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:px-8 sm:pb-12 sm:pt-14 lg:px-10 lg:pt-18">
      <div className="reveal-up">
        <div className="surface-shadow overflow-hidden rounded-[2.4rem] border border-line/70 bg-[#0f1116]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/68 sm:px-7">
            <span>Photo sequence hero</span>
            <span>3 frames / 5s autoplay</span>
          </div>

          <div className="relative min-h-[37rem] overflow-hidden sm:min-h-[40rem] lg:min-h-[44rem]">
            {heroFrames.map((frame, index) => (
              <div
                key={frame.label}
                aria-hidden={index !== activeFrame}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1600ms] ease-out"
                style={{
                  backgroundImage: frame.image,
                  opacity: index === activeFrame ? 1 : 0,
                }}
              />
            ))}

            <div
              className="absolute inset-0 bg-[#05070c] transition-opacity duration-1000 ease-out"
              style={{ opacity: isIntroVisible ? 0.92 : 0 }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,12,18,0.16),rgba(9,12,18,0.28)_26%,rgba(9,12,18,0.62)_72%,rgba(9,12,18,0.88)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,213,143,0.16),transparent_18%),radial-gradient(circle_at_18%_14%,rgba(255,255,255,0.16),transparent_26%)]" />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-6 text-white sm:px-8 lg:px-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/72">
                  Smart City 2050
                </p>
                <p className="mt-3 text-sm text-white/68">
                  Almaty concept presentation
                </p>
              </div>
              <div className="hidden rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 sm:block">
                Mountains to skyline
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center px-6 pt-16 text-white sm:px-8 lg:px-10">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/70">
                  {heroFrames[activeFrame].label}
                </p>
                <h1 className="display-title balanced-copy mt-4 text-6xl leading-[0.9] sm:text-7xl lg:text-[7rem]">
                  Almaty 2050,
                  <span className="block text-[#efbf63]">clear and connected.</span>
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
                  A future city shaped by cleaner mobility, smarter energy, and stronger public space. Three AI frames show one skyline moving from sunset to night.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/vision"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#efbf63] px-6 py-3.5 text-sm font-semibold text-[#17120c] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Explore the vision
                    <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                  </Link>
                  <Link
                    href="/media"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/16 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/16"
                  >
                    Open media page
                    <Play className="h-4 w-4" strokeWidth={1.8} />
                  </Link>
                </div>
                <div className="mt-8 flex items-center justify-center gap-3">
                  {heroFrames.map((frame, index) => (
                    <button
                      key={frame.label}
                      type="button"
                      onClick={() => setActiveFrame(index)}
                      className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors duration-200 hover:bg-white/14"
                      aria-label={`Show ${frame.description}`}
                    >
                      <span
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === activeFrame ? "w-7 bg-[#efbf63]" : "w-3 bg-white/45"}`}
                      />
                      <span>{frame.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <MetricStrip items={heroMetrics} />
        </div>
      </div>
    </section>
  );
}