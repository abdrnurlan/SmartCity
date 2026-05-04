"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const heroFrames = [
  {
    label: "Day",
    image: "url('/media/hero-day.png')",
  },
  {
    label: "Evening",
    image: "url('/media/hero-evening.png')",
  },
  {
    label: "Night",
    image: "url('/media/hero-night.png')",
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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#05070c]">
      {heroFrames.map((frame, index) => (
        <div
          key={frame.label}
          aria-hidden={index !== activeFrame}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1800ms] ease-out"
          style={{
            backgroundImage: frame.image,
            opacity: index === activeFrame ? 1 : 0,
          }}
        />
      ))}

      <div
        className="absolute inset-0 bg-[#05070c] transition-opacity duration-1000 ease-out"
        style={{ opacity: isIntroVisible ? 1 : 0 }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.22)_0%,rgba(5,7,12,0.18)_30%,rgba(5,7,12,0.55)_70%,rgba(5,7,12,0.82)_100%)]" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="display-title mt-4 text-6xl leading-[0.92] sm:text-7xl lg:text-[8rem]">
            Almaty 2050,
            <span className="block text-[#efbf63]">clear and connected.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            A future city built on cleaner mobility, smarter energy, and stronger public space.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/vision"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#efbf63] px-7 py-4 text-sm font-semibold text-[#17120c] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore the vision
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </Link>
            <Link
              href="/urban-systems"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/16"
            >
              Urban systems
              <Play className="h-4 w-4" strokeWidth={1.8} />
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            {heroFrames.map((frame, index) => (
              <button
                key={frame.label}
                type="button"
                onClick={() => setActiveFrame(index)}
                aria-label={`Show ${frame.label} frame`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/62 transition-colors duration-200 hover:bg-white/14"
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === activeFrame ? "w-7 bg-[#efbf63]" : "w-3 bg-white/40"}`}
                />
                {frame.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}