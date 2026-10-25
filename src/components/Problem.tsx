import type { ReactNode } from "react";
import { Section, SectionHeading } from "./Layout";
import SceneCard, { sceneHair as hair, sceneInk as ink } from "./SceneCard";
import { type Content, getContent } from "@/lib/content-i18n";
import type { Lang } from "@/lib/i18n";

/** The words drawn inside the scenes, in the page language. */
type T = Content["scenes"];

/* ── The six little scenes. Decorative: the heading and text carry the meaning. ── */

/** 01 — a report that is only numbers. */
function ScenePage({ t }: { t: T }) {
  const rows: [string, string][] = [
    ["TAN", "0.42"],
    ["NO₂⁻", "0.18"],
    ["Alk", "118"],
    ["pH", "7.9"],
  ];
  return (
    <>
      <rect x="22" y="12" width="196" height="104" rx="10" fill="#fff" stroke={hair} />
      <text x="36" y="31" fontSize="8.5" fontWeight="700" letterSpacing="1.4" fill={ink} opacity=".7">{t.parameter}</text>
      <text x="158" y="31" fontSize="8.5" fontWeight="700" letterSpacing="1.4" fill={ink} opacity=".7">{t.value}</text>
      <path d="M32 38h176" stroke={hair} />
      {rows.map(([k, v], i) => (
        <g key={k}>
          <text x="36" y={56 + i * 17} fontSize="11" fontWeight="600" fill="#334155">{k}</text>
          <text x="158" y={56 + i * 17} fontSize="11" fill={ink}>{v}</text>
          {i < rows.length - 1 && <path d={`M32 ${62 + i * 17}h176`} stroke={hair} strokeDasharray="2 3" />}
        </g>
      ))}
      <circle cx="214" cy="18" r="13" fill="var(--c1)" />
      <text x="214" y="23.5" fontSize="15" fontWeight="700" textAnchor="middle" fill="#fff">?</text>
    </>
  );
}

/** 02 — the same ammonia reading, two very different ponds: only pH tells them apart. */
function SceneSamePh({ t }: { t: T }) {
  const ponds: { cx: number; ph: string; ok: boolean }[] = [
    { cx: 64, ph: "7.4", ok: true },
    { cx: 176, ph: "8.8", ok: false },
  ];
  return (
    <>
      {ponds.map(({ cx, ph, ok }) => {
        const tone = ok ? "#059669" : "#dc2626";
        return (
          <g key={ph}>
            <rect x={cx - 50} y="10" width="100" height="86" rx="12" fill="#fff" stroke={tone} strokeOpacity=".45" strokeWidth="1.5" />
            <text x={cx} y="30" fontSize="10.5" fontWeight="700" textAnchor="middle" fill="#334155">TAN 0.5 ppm</text>
            <rect x={cx - 30} y="38" width="60" height="19" rx="9.5" fill="var(--tint)" stroke="var(--c2)" strokeWidth="1.2" />
            <text x={cx} y="51.5" fontSize="10.5" fontWeight="700" textAnchor="middle" fill="var(--c1)">pH {ph}</text>
            <circle cx={cx - 22} cy="77" r="11" fill={tone} />
            {ok ? (
              <path d={`M${cx - 27} 77l4 4 7-8`} fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <>
                <path d={`M${cx - 22} 71v7`} stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
                <circle cx={cx - 22} cy="82.5" r="1.5" fill="#fff" />
              </>
            )}
            <text x={cx - 6} y="81" fontSize="11.5" fontWeight="700" fill={tone}>{ok ? t.safe : t.toxic}</text>
          </g>
        );
      })}
      <circle cx="120" cy="53" r="11" fill="var(--c1)" />
      <text x="120" y="57.5" fontSize="14" fontWeight="700" textAnchor="middle" fill="#fff">≠</text>
      <text x="120" y="116" fontSize="9" fontWeight="600" textAnchor="middle" fill={ink}>{t.sameAmmonia}</text>
    </>
  );
}

/** 03 — three consultants, three directions. */
function SceneSignpost({ t }: { t: T }) {
  // Plank outlines: pointing left or right of the pole at x = 120.
  const left = (y: number) => `M118 ${y}H34l-14 12 14 12h84z`;
  const right = (y: number) => `M122 ${y}h96l14 12-14 12h-96z`;
  const planks: [string, number, number, string, string][] = [
    [left(26), 1, 78, "A", t.adviceA],
    [right(56), 0.82, 160, "B", t.adviceB],
    [left(86), 0.64, 78, "C", t.adviceC],
  ];
  return (
    <>
      <ellipse cx="120" cy="121" rx="40" ry="4" fill="var(--c1)" opacity=".12" />
      <rect x="116" y="20" width="8" height="101" rx="3" fill="var(--c1)" opacity=".85" />
      <circle cx="120" cy="14" r="9" fill="#fff" stroke="var(--c1)" strokeWidth="2.2" />
      <text x="120" y="18.2" fontSize="11.5" fontWeight="700" textAnchor="middle" fill="var(--c1)">?</text>
      {planks.map(([d, op, tx, who, text]) => (
        <g key={who}>
          <path d={d} fill="var(--c1)" opacity={op} />
          <circle cx={who === "B" ? 212 : 38} cy={who === "A" ? 38 : who === "B" ? 68 : 98} r="8" fill="#fff" opacity=".95" />
          <text x={who === "B" ? 212 : 38} y={who === "A" ? 42 : who === "B" ? 72 : 102} fontSize="10.5" fontWeight="700" textAnchor="middle" fill="var(--c1)">{who}</text>
          <text x={who === "B" ? 164 : 83} y={who === "A" ? 42 : who === "B" ? 72 : 102} fontSize="10.5" fontWeight="700" textAnchor="middle" fill="#fff">{text}</text>
        </g>
      ))}
    </>
  );
}

/** 04 — by the time it is understood, the pond has moved on. */
function SceneSlow({ t }: { t: T }) {
  return (
    <>
      <circle cx="46" cy="64" r="28" fill="#fff" stroke="var(--c1)" strokeWidth="3" />
      <path d="M46 46v18l12 8" fill="none" stroke="var(--c1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="46" cy="64" r="2.6" fill="var(--c1)" />
      <path d="M96 62h110" stroke="var(--c2)" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 8" />
      <circle cx="96" cy="62" r="5" fill="var(--c1)" />
      <circle cx="206" cy="62" r="5" fill="#fff" stroke="var(--c1)" strokeWidth="2.5" />
      <rect x="125" y="48" width="52" height="28" rx="14" fill="var(--c1)" />
      <text x="151" y="66.5" fontSize="11" fontWeight="700" textAnchor="middle" fill="#fff">{t.twoDays}</text>
      <text x="96" y="94" fontSize="9" fontWeight="600" textAnchor="middle" fill={ink}>{t.report}</text>
      <text x="206" y="94" fontSize="9" fontWeight="600" textAnchor="middle" fill={ink}>{t.understood}</text>
    </>
  );
}

/** 05 — the early warning is buried in a dense table. */
function SceneMissed() {
  const widths = [150, 120, 160, 100, 140];
  return (
    <>
      {widths.map((w, i) => (
        <rect
          key={i}
          x="30"
          y={16 + i * 20}
          width={w}
          height="9"
          rx="4.5"
          fill={i === 2 ? "var(--c2)" : hair}
          opacity={i === 2 ? 0.55 : 1}
        />
      ))}
      <g className="motion-safe:animate-pulse">
        <circle cx="204" cy="60" r="19" fill="var(--c1)" opacity=".14" />
        <path d="M204 49l11 19h-22z" fill="#fff" stroke="var(--c1)" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M204 56v6" stroke="var(--c1)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="204" cy="65.5" r="1.4" fill="var(--c1)" />
      </g>
    </>
  );
}

/** 06 — technical English on one side, the farmer's own language on the other. */
function SceneLanguage({ t }: { t: T }) {
  return (
    <>
      <g fontSize="10" fontWeight="600" fill={ink} opacity=".75">
        <text x="20" y="38">Total Ammonia N</text>
        <text x="20" y="62">Nitrite (NO₂⁻)</text>
        <text x="20" y="86">TDS · EC</text>
      </g>
      <path d="M124 14v100" stroke="var(--c1)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 7" />
      <circle cx="124" cy="64" r="13" fill="#fff" stroke="var(--c1)" strokeWidth="2.5" />
      <path d="M118.5 64h11M124 58.5v11" stroke="var(--c1)" strokeWidth="2" strokeLinecap="round" transform="rotate(45 124 64)" />
      <rect x="140" y="30" width="82" height="64" rx="14" fill="#fff" stroke="var(--c2)" strokeWidth="1.5" />
      <text x="181" y="58" fontSize="15" fontWeight="700" textAnchor="middle" fill="var(--c1)">మీ డేటా</text>
      <text x="181" y="78" fontSize="9" fontWeight="600" textAnchor="middle" fill={ink}>{t.inYourLanguage}</text>
    </>
  );
}

const makeScenes = (t: T): ReactNode[] => [
  <ScenePage key="page" t={t} />,
  <SceneSamePh key="samePh" t={t} />,
  <SceneSignpost key="signpost" t={t} />,
  <SceneSlow key="slow" t={t} />,
  <SceneMissed key="missed" />,
  <SceneLanguage key="language" t={t} />,
];

export default function Problem({ lang = "en" }: { lang?: Lang }) {
  const { problem, ui, scenes: sceneText } = getContent(lang);
  const scenes = makeScenes(sceneText);
  return (
    <Section id="problem">
      <p className="mb-16 text-center text-2xl font-semibold tracking-tight text-teal-ink sm:mb-20 sm:text-3xl">
        {problem.banner}
      </p>

      <SectionHeading
        eyebrow={ui.sections.problemEyebrow}
        title={problem.title}
        lead={problem.intro}
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {problem.points.map((point, i) => (
          <SceneCard
            key={point.title}
            index={i}
            title={point.title}
            body={point.body}
            scene={scenes[i % scenes.length]}
          />
        ))}
      </ul>
    </Section>
  );
}
