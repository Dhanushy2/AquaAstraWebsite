import type { ReactNode } from "react";

/**
 * The Aqua Astra brand lockup, drawn in markup rather than shipped as an image:
 * the wordmark and its shrimp, over a wave, with the four promises ringed around
 * it. It is a vector interpretation of the brand artwork — retuned for a dark
 * teal ground, where the artwork's own deep green and blue would disappear — so
 * it stays crisp at any size and costs no image request.
 *
 * Layout is a two-column grid: promises, wordmark spanning both, promises. That
 * folds to a legible 2x2 on a phone, where the connecting ring is dropped.
 */
export default function BrandLockup() {
  return (
    <div className="relative w-full max-w-3xl">
      <Ring />

      <div className="relative grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:gap-x-20 sm:gap-y-10 lg:gap-x-32">
        <Promise label="Good Seed">
          <Sprout />
        </Promise>
        <Promise label="Good Feed">
          <Feed />
        </Promise>

        <div className="col-span-2 flex flex-col items-center">
          <div className="flex items-center gap-3 sm:gap-5">
            <Shrimp />
            <p className="text-5xl font-semibold leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-white">Aqua</span>
              <span className="block text-brand-gradient">Astra</span>
            </p>
          </div>

          {/* The wave motif carried over from the header mark and the hero edge. */}
          <svg
            aria-hidden="true"
            viewBox="0 0 240 18"
            className="mt-3 h-3 w-52 text-brand-400 sm:w-64"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M4 12c26-11 52-11 78 0s52 11 78 0s52-11 76 0" />
          </svg>

          <p className="mt-4 flex items-center gap-3 text-sm font-medium tracking-wide text-white/80 sm:text-base">
            <span aria-hidden="true" className="h-px w-6 bg-white/30" />
            Grow Together
            <span aria-hidden="true" className="h-px w-6 bg-white/30" />
          </p>
        </div>

        <Promise label="Good Medicine">
          <Medicine />
        </Promise>
        <Promise label="Good Price">
          <span className="text-xl font-semibold leading-none">₹</span>
        </Promise>
      </div>
    </div>
  );
}

/** One promise: a ringed glyph over its label. */
function Promise({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm sm:h-14 sm:w-14">
        {children}
      </span>
      <span className="text-xs font-medium tracking-wide text-white/85 sm:text-sm">
        {label}
      </span>
    </div>
  );
}

/**
 * The hairline circle threading the four promises together. Decorative, and
 * only drawn once the grid is wide enough for the ring to actually pass near
 * them — on a phone the 2x2 stack reads better without it.
 */
function Ring() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 hidden h-full w-full text-white/25 sm:block"
      fill="none"
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    >
      <circle cx="50" cy="50" r="46" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/* --- glyphs ---------------------------------------------------------------
 * Stroke-drawn on a 24x24 box, matching the weight and cap style of Icon.tsx.
 */

const glyph = {
  className: "h-6 w-6 sm:h-7 sm:w-7",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
} as const;

/** Good Seed — a sprout cupped in a hand. */
function Sprout() {
  return (
    <svg {...glyph}>
      <path d="M4.5 14c0 3.3 2.7 6 6 6h3c3.3 0 6-2.7 6-6" />
      <path d="M12 13V8.2" />
      <path d="M12 9.4C9.5 9.4 8 7.9 8 5.4c2.5 0 4 1.5 4 4z" />
      <path d="M12 10.6c0-2.5 1.5-4 4-4c0 2.5-1.5 4-4 4z" />
    </svg>
  );
}

/** Good Feed — a fish taking pellets. */
function Feed() {
  return (
    <svg {...glyph}>
      <path d="M13.5 12.5c0 2.2-2.3 4-5 4s-5-1.8-5-4s2.3-4 5-4s5 1.8 5 4z" />
      <path d="M13.5 12.5l4-2.6v5.2z" />
      <path d="M6.6 11.2h.01" />
      <circle cx="17.5" cy="5.5" r="1.1" />
      <circle cx="21" cy="8" r="1.1" />
    </svg>
  );
}

/** Good Medicine — a dosing bottle. */
function Medicine() {
  return (
    <svg {...glyph}>
      <path d="M9 4.5h6v3H9z" />
      <path d="M9.5 7.5h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" />
      <path d="M12 11.5v4M10 13.5h4" />
    </svg>
  );
}

/** The shrimp riding the wordmark's leading A. */
function Shrimp() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-14 w-14 text-brand-300 sm:h-20 sm:w-20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Body: a comma curving from the head down into the tail. */}
      <path
        d="M42 16c-12 0-22 7-22 18c0 7 5 12 12 12c5 0 9-3 10-7"
        strokeWidth="3"
      />
      {/* Tail fan. */}
      <path d="M42 39l7 4l-3 6z" fill="currentColor" stroke="none" />
      <path d="M42 39l7 4l-3 6z" />
      {/* Segment ribs along the back. */}
      <path d="M27 23.5c2 2.5 3 5 3 8M33 19.5c2 2.5 3 5 3 8" strokeWidth="2" />
      {/* Antennae. */}
      <path d="M42 16c4-3 8-4 13-3M42 18c5-1 9 0 13 3" strokeWidth="1.8" />
      {/* Legs. */}
      <path d="M24 38l-3 5M30 41l-2 5M36 42l-1 5" strokeWidth="1.8" />
      {/* Eye. */}
      <circle cx="41" cy="20.5" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
