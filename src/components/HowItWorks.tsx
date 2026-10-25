import type { ReactNode } from "react";
import { Section, SectionHeading } from "./Layout";
import SceneCard, { sceneHair as hair, sceneInk as ink } from "./SceneCard";
import ScoreGauge from "./ScoreGauge";
import { type Content, getContent } from "@/lib/content-i18n";
import type { Lang } from "@/lib/i18n";

/** The words drawn inside the scenes, in the page language. */
type T = Content["scenes"];

/* ── One little scene per step. Decorative: the title and text carry the meaning. ── */

/** 01 — a PDF or an image of the report is uploaded, or shared from WhatsApp, into the phone. */
function SceneUpload({ t }: { t: T }) {
  return (
    <>
      {/* The report (PDF or image), tilted, on its way in. */}
      <g transform="rotate(-10 38 62)">
        <rect x="14" y="32" width="46" height="58" rx="5" fill="#fff" stroke="var(--c2)" strokeWidth="1.8" />
        <path d="M22 45h30M22 53h30M22 61h20" stroke={hair} strokeWidth="3" strokeLinecap="round" />
        <rect x="16" y="72" width="42" height="12" rx="6" fill="var(--c1)" />
        <text x="37" y="80.5" fontSize="6.3" fontWeight="700" textAnchor="middle" fill="#fff">{t.pdfImage}</text>
      </g>
      <path className="flow-dash" d="M66 64H80" stroke="var(--c2)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="4 4" />

      {/* The phone. */}
      <rect x="82" y="8" width="76" height="112" rx="12" fill="#fff" stroke="var(--c1)" strokeWidth="2.5" />
      <rect x="108" y="14" width="24" height="4" rx="2" fill={hair} />
      <rect x="91" y="26" width="58" height="54" rx="7" fill="var(--tint)" stroke="var(--c2)" strokeWidth="1.6" strokeDasharray="4 3" />
      <path d="M120 66V43M120 43l-8 8M120 43l8 8" fill="none" stroke="var(--c1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="90" y="90" width="60" height="16" rx="8" fill="var(--c1)" />
      <text x="120" y="101" fontSize="7.4" fontWeight="700" textAnchor="middle" fill="#fff">{t.uploadShare}</text>

      {/* …or share it straight from WhatsApp. */}
      <path className="flow-dash" d="M174 64H162" stroke="var(--c2)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="4 4" />
      <circle cx="200" cy="64" r="24" fill="#25d366" />
      <path transform="translate(200 64) scale(1.55) translate(-12 -12)" fill="#fff" d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.07.9.92-2.99-.2-.31a8.2 8.2 0 1 1 6.83 3.72Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z" />
      <text x="200" y="104" fontSize="9" fontWeight="700" textAnchor="middle" fill={ink}>WhatsApp</text>
    </>
  );
}

/** 02 — the page is scanned and the values come out as clean fields. */
function SceneExtract() {
  const chips: [string, number][] = [
    ["pH 7.9", 22],
    ["Alk 118", 54],
    ["NH₃ 0.04", 86],
  ];
  return (
    <>
      <rect x="18" y="10" width="92" height="108" rx="8" fill="#fff" stroke={hair} strokeWidth="1.5" />
      <g stroke={hair} strokeWidth="3.5" strokeLinecap="round">
        <path d="M30 28h50M30 40h64M30 52h40M30 64h58M30 76h46M30 88h60M30 100h34" />
      </g>
      {/* The scan line sweeps down the page (see .scan-sweep in globals.css). */}
      <g className="scan-sweep">
        <rect x="18" y="12" width="92" height="9" fill="var(--c2)" opacity=".28" />
        <path d="M14 16.5h100" stroke="var(--c1)" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      <path d="M118 64h18M130 57l7 7-7 7" fill="none" stroke="var(--c1)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />

      {chips.map(([label, y]) => (
        <g key={label}>
          <rect x="146" y={y} width="78" height="26" rx="13" fill="#fff" stroke="var(--c2)" strokeWidth="1.6" />
          <circle cx="160" cy={y + 13} r="6.5" fill="var(--c1)" />
          <path d={`M156.8 ${y + 13}l2.4 2.4 4-4.8`} fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <text x="173" y={y + 17} fontSize="11" fontWeight="700" fill="var(--c1)">{label}</text>
        </g>
      ))}
    </>
  );
}

/** 03 — each value is checked against a documented safe range. */
function SceneRules({ t }: { t: T }) {
  // [label, safe-zone start, safe-zone width, marker x, inside the range?]
  const rows: [string, number, number, number, boolean][] = [
    ["pH", 100, 56, 124, true],
    [t.salinity, 110, 66, 150, true],
    [t.ammonia, 84, 40, 176, false],
  ];
  return (
    <>
      {rows.map(([label, zx, zw, mx, ok], i) => {
        const y = 28 + i * 36;
        const tone = ok ? "#059669" : "#d97706";
        return (
          <g key={label}>
            <text x="16" y={y + 4} fontSize={label.length > 8 ? 9 : 10.5} fontWeight="700" fill="#334155">{label}</text>
            <rect x="72" y={y - 4} width="130" height="10" rx="5" fill={hair} />
            <rect x={zx - 18 + 18} y={y - 4} width={zw} height="10" rx="5" fill="#34d399" opacity=".55" />
            <circle cx={mx} cy={y + 1} r="8.5" fill="#fff" stroke={tone} strokeWidth="3" />
            <circle cx="220" cy={y + 1} r="9" fill={tone} />
            {ok ? (
              <path d={`M215.5 ${y + 1}l3 3 6-7`} fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <>
                <path d={`M220 ${y - 4}v6`} stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
                <circle cx="220" cy={y + 6} r="1.3" fill="#fff" />
              </>
            )}
          </g>
        );
      })}
    </>
  );
}

/** 04 — the finding, said in plain English and in Telugu. */
function SceneExplain() {
  return (
    <>
      {/* English bubble. */}
      <path d="M14 14a14 14 0 0 1 14-2h118a14 14 0 0 1 14 14v22a14 14 0 0 1-14 14H44l-14 12v-12h-2a14 14 0 0 1-14-14z" fill="#fff" stroke="var(--c2)" strokeWidth="1.6" />
      <text x="87" y="42" fontSize="14.5" fontWeight="700" textAnchor="middle" fill="var(--c1)">pH is high</text>

      {/* Telugu bubble. */}
      <path d="M226 72a14 14 0 0 0-14-14H96a14 14 0 0 0-14 14v22a14 14 0 0 0 14 14h106l12 12v-12h-2a14 14 0 0 0 14-14z" fill="var(--c1)" />
      <text x="154" y="90" fontSize="14" fontWeight="700" textAnchor="middle" fill="#fff">pH ఎక్కువగా ఉంది</text>

      {/* The "AI" sparkle. */}
      <path d="M206 18l3.6 8.4 8.4 3.6-8.4 3.6-3.6 8.4-3.6-8.4-8.4-3.6 8.4-3.6z" fill="var(--c1)" />
      <path d="M222 44l1.8 4.2 4.2 1.8-4.2 1.8-1.8 4.2-1.8-4.2-4.2-1.8 4.2-1.8z" fill="var(--c2)" />
    </>
  );
}

/** 05 — one number and a colour: a gauge that climbs to 91 and turns from red to green. */
function SceneScore({ t }: { t: T }) {
  return <ScoreGauge labels={t} />;
}

/** 06 — next actions, plus the pond's trend filed over the cycle. */
function SceneHistory({ t }: { t: T }) {
  const pts: [number, number][] = [
    [28, 88],
    [62, 78],
    [96, 84],
    [130, 62],
    [164, 52],
    [206, 36],
  ];
  const line = pts.map(([x, y]) => `${x},${y}`).join(" ");
  return (
    <>
      <path d="M20 100h200" stroke={hair} strokeWidth="1.6" />
      <polygon points={`28,100 ${line} 206,100`} fill="var(--c2)" opacity=".2" />
      <polyline points={line} fill="none" stroke="var(--c1)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      {pts.slice(0, -1).map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4.2" fill="#fff" stroke="var(--c1)" strokeWidth="2.4" />
      ))}
      <circle cx="206" cy="36" r="6.5" fill="var(--c1)" />

      {/* The next action. */}
      <rect x="20" y="10" width="92" height="22" rx="11" fill="#fff" stroke="var(--c2)" strokeWidth="1.6" />
      <circle cx="33" cy="21" r="6.5" fill="var(--c1)" />
      <path d="M29.8 21l2.4 2.4 4-4.8" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <text x="44" y="24.5" fontSize="9.5" fontWeight="700" fill="var(--c1)">{t.nextActions}</text>

      <text x="120" y="118" fontSize="8.5" fontWeight="600" textAnchor="middle" fill={ink}>{t.trend}</text>
    </>
  );
}

const makeScenes = (t: T): ReactNode[] => [
  <SceneUpload key="upload" t={t} />,
  <SceneExtract key="extract" />,
  <SceneRules key="rules" t={t} />,
  <SceneExplain key="explain" />,
  <SceneScore key="score" t={t} />,
  <SceneHistory key="history" t={t} />,
];

export default function HowItWorks({ lang = "en" }: { lang?: Lang }) {
  const { steps, ui, scenes: sceneText } = getContent(lang);
  const copy = ui.sections.howItWorks;
  const scenes = makeScenes(sceneText);
  return (
    <Section id="how-it-works" className="bg-white">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        lead={copy.lead}
      />

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <SceneCard
            key={s.step}
            index={i}
            title={s.title}
            body={s.body}
            scene={scenes[i % scenes.length]}
          />
        ))}
      </ol>
    </Section>
  );
}
