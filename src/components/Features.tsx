import type { ReactNode } from "react";
import { Section, SectionHeading } from "./Layout";
import SceneCard, { sceneHair as hair, sceneInk as ink } from "./SceneCard";
import type { Feature } from "@/lib/content";
import { type Content, getContent } from "@/lib/content-i18n";
import type { Lang } from "@/lib/i18n";

/** The words drawn inside the scenes, in the page language. */
type T = Content["scenes"];

const statusStyles: Record<Feature["status"], string> = {
  Available: "bg-teal-brand/12 text-teal-ink",
  "In progress": "bg-warn/12 text-warn",
  Planned: "bg-ink-faint/15 text-ink-muted",
};

const green = "#059669";
const amber = "#d97706";
const red = "#dc2626";

/* ── One little scene per feature. Decorative: the title and text carry the meaning. ── */

/** Lab report analysis — a parameter-by-parameter reading, in seconds. */
function SceneAnalysis({ t }: { t: T }) {
  const rows: [string, string, string, boolean][] = [
    ["pH", "7.9", green, true],
    [t.salinity, "18", green, true],
    [t.alkalinity, "118", green, true],
    [t.ammonia, "0.4", amber, false],
  ];
  return (
    <>
      <rect x="14" y="8" width="136" height="112" rx="10" fill="#fff" stroke={hair} strokeWidth="1.5" />
      <rect x="26" y="18" width="52" height="6" rx="3" fill={hair} />
      {rows.map(([label, value, tone, ok], i) => {
        const y = 42 + i * 21;
        return (
          <g key={label}>
            <text x="26" y={y + 3.5} fontSize="10" fontWeight="700" fill="#334155">{label}</text>
            <text x="92" y={y + 3.5} fontSize="10" fill={ink}>{value}</text>
            <circle cx="134" cy={y} r="7" fill={tone} />
            {ok ? (
              <path d={`M130.4 ${y}l2.6 2.6 4.4-5.2`} fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <>
                <path d={`M134 ${y - 3.6}v4`} stroke="#fff" strokeWidth="1.9" strokeLinecap="round" />
                <circle cx="134" cy={y + 3} r="1" fill="#fff" />
              </>
            )}
          </g>
        );
      })}
      <path className="flow-dash" d="M156 64h12" stroke="var(--c2)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="4 4" />
      <rect x="192" y="34" width="12" height="5" rx="2" fill="var(--c1)" />
      <circle cx="198" cy="64" r="24" fill="#fff" stroke="var(--c1)" strokeWidth="3" />
      <text x="198" y="69.5" fontSize="17" fontWeight="700" textAnchor="middle" fill="var(--c1)">5 s</text>
      <text x="198" y="104" fontSize="9" fontWeight="700" textAnchor="middle" fill={ink}>{t.inSeconds}</text>
    </>
  );
}

/** Pond health score — which ponds are fine and which are not, at a glance. */
function ScenePonds({ t }: { t: T }) {
  const ponds: [string, number, string, string][] = [
    [`${t.pond} 1`, 91, green, t.fine],
    [`${t.pond} 2`, 62, amber, t.watch],
    [`${t.pond} 3`, 38, red, t.actNow],
  ];
  return (
    <>
      {ponds.map(([name, score, tone, word], i) => {
        const y = 10 + i * 38;
        return (
          <g key={name}>
            <rect x="16" y={y} width="208" height="32" rx="16" fill="#fff" stroke={tone} strokeOpacity=".45" strokeWidth="1.5" />
            <circle cx="35" cy={y + 16} r="12" fill={tone} />
            <text x="35" y={y + 20.5} fontSize="12" fontWeight="700" textAnchor="middle" fill="#fff">{score}</text>
            <text x="56" y={y + 20} fontSize="11" fontWeight="700" fill="#334155">{name}</text>
            <rect x="108" y={y + 12} width="62" height="8" rx="4" fill={hair} />
            <rect x="108" y={y + 12} width={(62 * score) / 100} height="8" rx="4" fill={tone} />
            <text x="212" y={y + 20} fontSize="10.5" fontWeight="700" textAnchor="end" fill={tone}>{word}</text>
          </g>
        );
      })}
    </>
  );
}

/** English & Telugu — the whole app, switchable at any time. */
function SceneLanguages() {
  return (
    <>
      <rect x="54" y="10" width="132" height="28" rx="14" fill="#fff" stroke="var(--c2)" strokeWidth="1.6" />
      <rect x="121" y="13" width="62" height="22" rx="11" fill="var(--c1)" />
      <text x="87" y="28" fontSize="10.5" fontWeight="700" textAnchor="middle" fill={ink}>English</text>
      <text x="152" y="28" fontSize="11" fontWeight="700" textAnchor="middle" fill="#fff">తెలుగు</text>

      {[
        [16, "Health score"],
        [124, "ఆరోగ్య స్కోర్"],
      ].map(([x, label]) => (
        <g key={String(x)}>
          <rect x={x as number} y="52" width="100" height="62" rx="12" fill="#fff" stroke={hair} strokeWidth="1.5" />
          <text x={(x as number) + 50} y="72" fontSize="10" fontWeight="700" textAnchor="middle" fill={ink}>{label}</text>
          <text x={(x as number) + 50} y="102" fontSize="26" fontWeight="700" textAnchor="middle" fill={green}>91</text>
        </g>
      ))}
    </>
  );
}

/** Actionable recommendations — steps tied to the parameter that triggered them. */
function SceneActions({ t }: { t: T }) {
  const steps = [t.correctPh, t.retest, t.trackResult];
  return (
    <>
      <rect x="14" y="42" width="62" height="44" rx="13" fill="#fff" stroke={red} strokeWidth="2" />
      <text x="45" y="60" fontSize="9" fontWeight="700" textAnchor="middle" fill={ink}>pH</text>
      <text x="45" y="78" fontSize="15" fontWeight="700" textAnchor="middle" fill={red}>8.8 ↑</text>
      <path className="flow-dash" d="M80 64h20" stroke="var(--c2)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="4 4" />
      <rect x="104" y="12" width="124" height="104" rx="11" fill="#fff" stroke="var(--c2)" strokeWidth="1.6" />
      <text x="116" y="31" fontSize="9" fontWeight="700" letterSpacing="1.2" fill={ink} opacity=".8">{t.doThis}</text>
      {steps.map((text, i) => {
        const y = 52 + i * 26;
        return (
          <g key={text}>
            <circle cx="122" cy={y} r="8" fill="var(--c1)" />
            <path d={`M118.2 ${y}l2.6 2.7 4.8-5.6`} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="136" y={y + 3.6} fontSize="10" fontWeight="700" fill="#334155">{text}</text>
          </g>
        );
      })}
    </>
  );
}

/** Report history — every analysis stored against the pond, so the trend shows. */
function SceneHistoryStack({ t }: { t: T }) {
  const dates: [string, number, string][] = [
    [t.oct20, 91, green],
    [t.oct15, 84, green],
    [t.oct1, 72, amber],
  ];
  return (
    <>
      <rect x="40" y="10" width="100" height="94" rx="9" fill="#fff" stroke={hair} strokeWidth="1.5" opacity=".6" />
      <rect x="30" y="20" width="100" height="94" rx="9" fill="#fff" stroke={hair} strokeWidth="1.5" opacity=".85" />
      <rect x="20" y="30" width="100" height="92" rx="9" fill="#fff" stroke="var(--c2)" strokeWidth="1.8" />
      <rect x="32" y="42" width="40" height="6" rx="3" fill={hair} />
      <polyline points="32,104 50,96 68,100 86,84 104,74" fill="none" stroke="var(--c1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="104" cy="74" r="4.5" fill="var(--c1)" />

      <path d="M148 28v72" stroke="var(--c2)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="1 6" />
      {dates.map(([d, score, tone], i) => {
        const y = 30 + i * 33;
        return (
          <g key={d}>
            <circle cx="148" cy={y} r="5.5" fill="#fff" stroke="var(--c1)" strokeWidth="2.4" />
            <rect x="160" y={y - 12} width="64" height="24" rx="12" fill="#fff" stroke="var(--c2)" strokeWidth="1.5" />
            <text x="170" y={y + 3.6} fontSize="9.5" fontWeight="700" fill="#334155">{d}</text>
            <circle cx="210" cy={y} r="8" fill={tone} />
            <text x="210" y={y + 3.2} fontSize="8.2" fontWeight="700" textAnchor="middle" fill="#fff">{score}</text>
          </g>
        );
      })}
    </>
  );
}

/** Weather context — local conditions alongside the readings. */
function SceneWeather({ t }: { t: T }) {
  const chips: [string, string][] = [
    [t.air, "28 °C"],
    [t.rain, "12 mm"],
    ["pH", "7.6 ↓"],
  ];
  return (
    <>
      <g transform="translate(14 8) scale(3.6)" fill="#fff" stroke="var(--c1)" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.5 17.5a4 4 0 0 1 .4-8a5.5 5.5 0 0 1 10.5 1.6a3.4 3.4 0 0 1-.6 6.4H7.5z" transform="translate(-4 -6)" />
      </g>
      <g stroke="var(--c2)" strokeWidth="3" strokeLinecap="round">
        <path className="motion-safe:animate-pulse" d="M30 80l-4 12M48 80l-4 12M66 80l-4 12M84 80l-4 12" />
      </g>
      <path d="M14 108c10-5 18-5 28 0s18 5 28 0 18-5 28 0" fill="none" stroke="var(--c1)" strokeWidth="3" strokeLinecap="round" opacity=".55" />

      {chips.map(([label, value], i) => {
        const y = 14 + i * 36;
        return (
          <g key={label}>
            <rect x="136" y={y} width="92" height="28" rx="14" fill="#fff" stroke="var(--c2)" strokeWidth="1.6" />
            <circle cx="150" cy={y + 14} r="6" fill="var(--c1)" />
            <text x="162" y={y + 18} fontSize="9.5" fontWeight="600" fill={ink}>{label}</text>
            <text x="220" y={y + 18} fontSize="11" fontWeight="700" textAnchor="end" fill="var(--c1)">{value}</text>
          </g>
        );
      })}
    </>
  );
}

const makeScenes = (t: T): ReactNode[] => [
  <SceneAnalysis key="analysis" t={t} />,
  <ScenePonds key="ponds" t={t} />,
  <SceneLanguages key="languages" />,
  <SceneActions key="actions" t={t} />,
  <SceneHistoryStack key="history" t={t} />,
  <SceneWeather key="weather" t={t} />,
];

export default function Features({ lang = "en" }: { lang?: Lang }) {
  const { features, ui, scenes: sceneText } = getContent(lang);
  const copy = ui.sections.features;
  const scenes = makeScenes(sceneText);
  return (
    <Section id="features">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        lead={copy.lead}
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <SceneCard
            key={f.title}
            index={i}
            title={f.title}
            body={f.body}
            scene={scenes[i % scenes.length]}
            footer={
              <span
                className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[f.status]}`}
              >
                {ui.featureStatus[f.status]}
              </span>
            }
          />
        ))}
      </ul>
    </Section>
  );
}
