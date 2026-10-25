"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ui } from "@/lib/content";

/**
 * Real app screenshots in a phone frame, crossfading every 2.5s — quick enough
 * that both screens show during the hero carousel's 5s on this slide. It only
 * runs while the frame is on screen and restarts from the first screen each
 * time the slide comes back. Auto-play is off under reduced-motion; the dots
 * still switch screens.
 */
const SCREEN_MS = 2500;

export type PhoneText = typeof ui.phone;

export default function PhoneMockup({ text = ui.phone }: { text?: PhoneText }) {
  const screens = [
    { src: "/app-home-health-score.webp", label: text.home, alt: text.homeAlt },
    { src: "/app-reports-pond-summary.webp", label: text.reports, alt: text.reportsAlt },
  ];
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
            aria-label={text.showScreen.replace("{label}", screen.label)}
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
