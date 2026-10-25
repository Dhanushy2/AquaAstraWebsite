"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ui } from "@/lib/content";

/**
 * Full-width hero carousel: each slide is a whole hero panel, auto-advancing
 * every 5s, with previous / next on the left and right edges and a pause
 * button at the bottom. Each slide's position ("2 of 4") is in its label for
 * screen readers. Auto-play is off under reduced-motion; the controls stay
 * usable either way.
 */
const SLIDE_MS = 5000;

export type HeroSlide = { label: string; content: ReactNode };

export type CarouselLabels = typeof ui.hero.carousel;

export default function HeroCarousel({
  slides,
  labels = ui.hero.carousel,
}: {
  slides: HeroSlide[];
  /** Accessibility text; pass the Telugu set on Telugu pages. */
  labels?: CarouselLabels;
}) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  // Bumped on every touch or click inside, restarting the countdown, so a
  // visitor swiping through a slide's own content isn't carried off mid-swipe.
  const [touches, setTouches] = useState(0);

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
  }, [index, playing, reduceMotion, count, touches]);

  const step = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label={labels.region}
      onPointerDown={() => setTouches((t) => t + 1)}
    >
      {/* Panels share one grid cell, so the stage is as tall as the tallest.
          grid-cols-1 (minmax(0, 1fr)) pins the column to the stage width; an
          auto column would grow to fit a slide's sideways-scrolling row. */}
      <div className="grid grid-cols-1 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={slide.label}
            role="group"
            aria-roledescription="slide"
            aria-label={labels.slideOf
              .replace("{n}", String(i + 1))
              .replace("{count}", String(count))
              .replace("{label}", slide.label)}
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

      {/* Previous / next sit on the left and right edges, level with the
          picture on the picture slides: mid-panel on desktop, where the
          picture is centred, and near the top below lg, where it sits at
          1.5rem + 10svh down and is about 56vw tall. */}
      <ControlButton
        label={labels.previous}
        onClick={() => step(-1)}
        className="absolute left-2 top-[calc(1.5rem+10svh+28vw)] -translate-y-1/2 sm:left-4 lg:top-1/2"
      >
        <path d="M14.5 5.5 8 12l6.5 6.5" />
      </ControlButton>
      <ControlButton
        label={labels.next}
        onClick={() => step(1)}
        className="absolute right-2 top-[calc(1.5rem+10svh+28vw)] -translate-y-1/2 sm:right-4 lg:top-1/2"
      >
        <path d="M9.5 5.5 16 12l-6.5 6.5" />
      </ControlButton>

      <div className="absolute inset-x-0 bottom-5 flex justify-center">
        <ControlButton
          label={playing ? labels.pause : labels.play}
          onClick={() => setPlaying((p) => !p)}
        >
          {playing ? (
            <path d="M9.5 5.5v13M14.5 5.5v13" />
          ) : (
            <path d="M8 5.5 18 12 8 18.5z" fill="currentColor" />
          )}
        </ControlButton>
      </div>
    </div>
  );
}

/** A round, frosted control over the slides. */
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
      className={`z-10 grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/25 text-white/85 shadow-lg shadow-black/20 backdrop-blur-sm transition-colors hover:bg-black/45 hover:text-white focus-visible:bg-black/45 focus-visible:text-white sm:h-12 sm:w-12 ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
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
