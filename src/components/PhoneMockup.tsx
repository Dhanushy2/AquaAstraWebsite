"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Real app screenshots in a phone frame, crossfading every 2.5s — quick enough
 * that both screens show during the hero carousel's 5s on this slide. It only
 * runs while the frame is on screen and restarts from the first screen each
 * time the slide comes back. Auto-play is off under reduced-motion; the dots
 * still switch screens.
 */
const SCREEN_MS = 2500;

const screens = [
  {
    src: "/app-home-health-score.webp",
    label: "Home",
    alt: "Aqua Astra home screen: pond T1's water analysis report with a health score of 91, Healthy, and a recent report summary of temperature, salinity and pH.",
  },
  {
    src: "/app-reports-pond-summary.webp",
    label: "Reports",
    alt: "Aqua Astra reports screen: a lab report scored 78%, Good, with a ponds summary rating T1 at 91%, T2 at 74% and T3 at 88%.",
  },
];

export default function PhoneMockup() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  // Inactive hero slides sit off-screen, so this tracks whether the slide is showing.
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) setIndex(0);
    });
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || reduceMotion) return;
    const timer = window.setTimeout(
      () => setIndex((i) => (i + 1) % screens.length),
      SCREEN_MS,
    );
    return () => window.clearTimeout(timer);
  }, [index, visible, reduceMotion]);

  return (
    <div ref={frameRef} className="relative w-full max-w-[19rem]">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[3rem] bg-white/10 blur-2xl"
      />

      <div className="relative rounded-[2.5rem] border border-white/20 bg-slate-900 p-2.5 shadow-2xl shadow-black/40">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-canvas">
          {screens.map((screen, i) => (
            <Image
              key={screen.src}
              src={screen.src}
              alt={screen.alt}
              aria-hidden={i !== index}
              fill
              sizes="19rem"
              className={`object-cover ${
                reduceMotion ? "" : "transition-opacity duration-700 ease-out"
              } ${i === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </div>

      <div className="relative mt-5 flex justify-center gap-2">
        {screens.map((screen, i) => (
          <button
            key={screen.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${screen.label} screen`}
            aria-pressed={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
