import type { CSSProperties, ReactNode } from "react";

/**
 * One accent per card, in the same teal / azure / violet / amber / cyan / green
 * family as the brochure: [strong, light, tint].
 */
export const accents = [
  ["#0f766e", "#14b8a6", "#ecfdf8"],
  ["#0a63a3", "#2aa2f7", "#eef6ff"],
  ["#6d28d9", "#a78bfa", "#f5f1ff"],
  ["#b45309", "#f59e0b", "#fff8ec"],
  ["#0e7490", "#22d3ee", "#ecfbfe"],
  ["#047857", "#34d399", "#edfdf5"],
] as const;

/** Muted ink and hairline colours for the SVG scenes. */
export const sceneInk = "#64748b";
export const sceneHair = "#e2e8f0";

/**
 * A card with a small illustrated scene on top, a numbered badge, a title and a
 * paragraph. The scene is a 240 × 128 SVG drawn with the card's accent through
 * the CSS variables `--c1` (strong), `--c2` (light) and `--tint`. It is
 * decorative: the title and text carry the meaning.
 */
export default function SceneCard({
  index,
  title,
  body,
  scene,
  footer,
}: {
  index: number;
  title: string;
  body: string;
  scene: ReactNode;
  /** Optional line pinned to the bottom of the card, e.g. a status pill. */
  footer?: ReactNode;
}) {
  const [strong, light, tint] = accents[index % accents.length];
  const number = String(index + 1).padStart(2, "0");

  return (
    <li
      style={{ "--c1": strong, "--c2": light, "--tint": tint } as CSSProperties}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-hairline bg-white p-5 pt-6 shadow-sm shadow-ink/[0.03] transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10"
    >
      {/* Accent edge. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ backgroundImage: "linear-gradient(90deg, var(--c1), var(--c2))" }}
      />

      {/* The scene. */}
      <div
        aria-hidden="true"
        className="relative aspect-[240/128] overflow-hidden rounded-2xl border"
        style={{
          backgroundImage: "linear-gradient(160deg, var(--tint) 0%, #ffffff 80%)",
          borderColor: "color-mix(in srgb, var(--c2) 28%, white)",
        }}
      >
        <svg
          viewBox="0 0 240 128"
          className="h-full w-full"
          fontFamily="inherit"
          preserveAspectRatio="xMidYMid meet"
        >
          {scene}
        </svg>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <span
          className="inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-[11px] font-bold tabular-nums text-white"
          style={{ backgroundImage: "linear-gradient(135deg, var(--c1), var(--c2))" }}
        >
          {number}
        </span>
        <h3 className="text-base font-semibold tracking-tight text-ink">{title}</h3>
      </div>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-muted">{body}</p>
      {footer && <div className="mt-4">{footer}</div>}
    </li>
  );
}
