"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Full-width hero carousel: each slide is a whole hero panel, auto-advancing
 * every 4s with prev / next / counter / pause controls overlaid at the bottom.
 * Auto-play is off under reduced-motion; the controls stay usable either way.
 */
const SLIDE_MS = 4000;

export type HeroSlide = { label: string; content: ReactNode };

export default function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!playing || reduceMotion) return;
    const timer = window.setTimeout(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [index, playing, reduceMotion, count]);

  const step = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label="Aqua Astra hero"
    >
      {/* Panels share one grid cell, so the stage is as tall as the tallest. */}
      <div className="grid overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={slide.label}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count} — ${slide.label}`}
            aria-hidden={i !== index}
            inert={i !== index}
            className={`relative col-start-1 row-start-1 ${
              reduceMotion ? "" : "transition-[transform,opacity] duration-700 ease-out"
            } ${i === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
            style={{ transform: `translateX(${(i - index) * 100}%)` }}
          >
            {slide.content}
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-5 flex justify-center">
        <div className="flex items-center rounded-full border border-white/25 bg-black/25 backdrop-blur-sm">
          <ControlButton label="Previous slide" onClick={() => step(-1)}>
            <path d="M14.5 5.5 8 12l6.5 6.5" />
          </ControlButton>

          <p className="select-none px-1 text-xs font-medium tabular-nums text-white/90">
            {index + 1}/{count}
          </p>

          <ControlButton label="Next slide" onClick={() => step(1)}>
            <path d="M9.5 5.5 16 12l-6.5 6.5" />
          </ControlButton>

          <ControlButton
            label={playing ? "Pause slideshow" : "Play slideshow"}
            onClick={() => setPlaying((p) => !p)}
            className="border-l border-white/25"
          >
            {playing ? (
              <path d="M9.5 5.5v13M14.5 5.5v13" />
            ) : (
              <path d="M8 5.5 18 12 8 18.5z" fill="currentColor" />
            )}
          </ControlButton>
        </div>
      </div>
    </div>
  );
}

function ControlButton({
  label,
  onClick,
  className = "",
  children,
}: {
  label: string;
  onClick: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`px-3 py-2 text-white/75 transition-colors hover:text-white focus-visible:text-white ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </button>
  );
}
