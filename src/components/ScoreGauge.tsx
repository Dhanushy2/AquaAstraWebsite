"use client";

import { useEffect, useRef, useState } from "react";
import { sceneHair as hair, sceneInk as ink } from "./SceneCard";
import { scenes } from "@/lib/content";

export type GaugeLabels = Pick<typeof scenes, "healthy" | "warning" | "critical">;

/**
 * The step-5 scene: a health-score gauge that fills from 0 up to 91 and back,
 * with its colour and status label following the value (red → amber → green).
 * It only runs while on screen, and stays still at 91 · Healthy for visitors
 * who prefer reduced motion. Drawn inside the 240 × 128 scene SVG.
 */

const FINAL = 91;
const CX = 120;
const CY = 100;
const R = 68;

/**
 * Colour stops by score, as [hue, saturation %, lightness %]: red (#dc2626) at the
 * bottom, amber (#d97706) through the middle, green (#059669) only near the top.
 * Amber holds until 78 so the blend into green is short. Blending in hue (not RGB)
 * passes through a fresh lime instead of a muddy olive.
 */
const stops: [number, [number, number, number]][] = [
  [0, [0, 72, 51]],
  [45, [32, 94, 44]],
  [78, [32, 94, 44]],
  [88, [161, 94, 30]],
];

function colorAt(v: number): string {
  const hsl = (c: number[]) => `hsl(${c[0]} ${c[1]}% ${c[2]}%)`;
  if (v <= stops[0][0]) return hsl(stops[0][1]);
  for (let i = 1; i < stops.length; i++) {
    const [v1, c1] = stops[i];
    if (v <= v1) {
      const [v0, c0] = stops[i - 1];
      const t = (v - v0) / (v1 - v0);
      return hsl(c0.map((c, k) => Math.round((c + (c1[k] - c) * t) * 10) / 10));
    }
  }
  return hsl(stops[stops.length - 1][1]);
}

function labelAt(v: number, labels: GaugeLabels): string {
  if (v >= 88) return labels.healthy;
  if (v >= 45) return labels.warning;
  return labels.critical;
}

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

/** Seconds: climb, hold at the final score, drop back, short rest. */
const UP = 2.6;
const HOLD = 1.8;
const DOWN = 0.9;
const REST = 0.4;
const LOOP = UP + HOLD + DOWN + REST;

function valueAt(seconds: number): number {
  const t = seconds % LOOP;
  if (t < UP) return FINAL * easeInOut(t / UP);
  if (t < UP + HOLD) return FINAL;
  if (t < UP + HOLD + DOWN) return FINAL * (1 - easeInOut((t - UP - HOLD) / DOWN));
  return 0;
}

export default function ScoreGauge({ labels = scenes }: { labels?: GaugeLabels }) {
  const ref = useRef<SVGGElement>(null);
  const [value, setValue] = useState(FINAL);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      setValue(valueAt((now - start) / 1000));
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    // Run only while the card is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !frame) {
        start = 0;
        frame = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting) {
        stop();
        setValue(FINAL);
      }
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      stop();
    };
  }, []);

  const shown = Math.round(value);
  const color = colorAt(value);
  const angle = Math.PI * (value / 100);
  const knobX = CX - R * Math.cos(angle);
  const knobY = CY - R * Math.sin(angle);
  const arc = `M${CX - R} ${CY}A${R} ${R} 0 0 1 ${CX + R} ${CY}`;

  return (
    <g ref={ref}>
      <path d={arc} fill="none" stroke={hair} strokeWidth="15" strokeLinecap="round" />
      {value > 0.4 && (
        <path
          d={arc}
          fill="none"
          stroke={color}
          strokeWidth="15"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray={`${value} 100`}
        />
      )}
      {value > 0.4 && <circle cx={knobX} cy={knobY} r="3.2" fill="#fff" />}
      <text x={CX} y="94" fontSize="34" fontWeight="700" textAnchor="middle" fill="#0f172a">
        {shown}
      </text>
      <rect x="90" y="105" width="60" height="17" rx="8.5" fill={color} />
      <text x={CX} y="117" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#fff">
        {labelAt(value, labels)}
      </text>
      <text x="40" y="115" fontSize="8" fontWeight="600" textAnchor="middle" fill={ink}>0</text>
      <text x="200" y="115" fontSize="8" fontWeight="600" textAnchor="middle" fill={ink}>100</text>
    </g>
  );
}
