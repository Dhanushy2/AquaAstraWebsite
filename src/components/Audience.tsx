import type { ReactNode } from "react";
import { Section, SectionHeading } from "./Layout";
import SceneCard, { sceneHair as hair, sceneInk as ink } from "./SceneCard";
import { type Content, getContent } from "@/lib/content-i18n";
import type { Lang } from "@/lib/i18n";

/** The words drawn inside the scenes, in the page language. */
type T = Content["scenes"];

const green = "#059669";
const amber = "#f59e0b";
const red = "#ef4444";

/* ── One little scene per audience. Decorative: the title and text carry the meaning. ── */

/** Vannamei shrimp farmers — the pond score on the phone in your pocket, in your own language. */
function SceneFarmer({ t }: { t: T }) {
  return (
    <>
      {/* The farmer. */}
      <path d="M16 106a28 28 0 0 1 56 0z" fill="var(--c1)" opacity=".85" />
      <circle cx="44" cy="62" r="14" fill="#f2c6a0" />
      <path d="M26 56a18 14 0 0 1 36 0z" fill="var(--c1)" />
      <ellipse cx="44" cy="56" rx="24" ry="5.5" fill="var(--c2)" />
      <path className="flow-dash" d="M74 76h38" stroke="var(--c2)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="4 4" fill="none" />

      {/* The phone. */}
      <rect x="118" y="10" width="82" height="108" rx="13" fill="#fff" stroke="var(--c1)" strokeWidth="2.5" />
      <rect x="146" y="16" width="26" height="4" rx="2" fill={hair} />
      <text x="159" y="38" fontSize="9" fontWeight="700" textAnchor="middle" fill={ink}>{t.pond} 1</text>
      <text x="159" y="68" fontSize="28" fontWeight="700" textAnchor="middle" fill={green}>91</text>
      <rect x="124" y="75" width="70" height="18" rx="9" fill={green} />
      <text x="159" y="87.2" fontSize="7.4" fontWeight="700" textAnchor="middle" fill="#fff">ఆరోగ్యంగా ఉంది</text>
      <path d="M126 104c8-5 14-5 22 0s14 5 22 0 14-5 22 0" fill="none" stroke="var(--c2)" strokeWidth="2.6" strokeLinecap="round" />
    </>
  );
}

/** Consultants — many farms watched from one place. */
function SceneConsultant({ t }: { t: T }) {
  const pins: [number, number, string][] = [
    [26, 24, green],
    [58, 50, amber],
    [26, 80, green],
    [60, 104, red],
  ];
  return (
    <>
      {pins.map(([x, y, tone]) => (
        <path
          key={`${x}-${y}`}
          className="flow-dash"
          d={`M${x + 10} ${y}C${x + 40} ${y} ${x + 36} 62 130 62`}
          fill="none"
          stroke="var(--c2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
          opacity=".9"
        />
      ))}
      {pins.map(([x, y, tone]) => (
        <g key={`pin-${x}-${y}`}>
          <circle cx={x} cy={y} r="11" fill={tone} />
          <circle cx={x} cy={y} r="4.4" fill="#fff" />
        </g>
      ))}

      {/* The one dashboard. */}
      <rect x="130" y="14" width="98" height="86" rx="9" fill="#fff" stroke="var(--c1)" strokeWidth="2.2" />
      <path d="M130 23a9 9 0 0 1 9-9h80a9 9 0 0 1 9 9v7H130z" fill="var(--c1)" />
      <g fill="#fff"><circle cx="141" cy="22" r="2" /><circle cx="149" cy="22" r="2" /><circle cx="157" cy="22" r="2" /></g>
      {[green, amber, green, red].map((tone, i) => (
        <g key={i}>
          <circle cx="143" cy={43 + i * 14} r="4.4" fill={tone} />
          <rect x="154" y={40 + i * 14} width={[56, 42, 62, 34][i]} height="7" rx="3.5" fill={hair} />
        </g>
      ))}
      <rect x="170" y="100" width="16" height="6" fill={hair} />
      <rect x="156" y="106" width="44" height="4" rx="2" fill={hair} />
      <text x="178" y="124" fontSize="9" fontWeight="700" textAnchor="middle" fill={ink}>{t.allFarms}</text>
    </>
  );
}

/** Laboratories — an interpretation layer on top of the numbers you already produce. */
function SceneLab({ t }: { t: T }) {
  return (
    <>
      {/* The flask. */}
      <path d="M43 12v28L20 88a9 9 0 0 0 8 12h44a9 9 0 0 0 8-12L57 40V12" fill="#fff" stroke="var(--c1)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M27 74h46l7 14a9 9 0 0 1-8 12H28a9 9 0 0 1-8-12z" fill="var(--c2)" opacity=".55" />
      <path d="M38 12h24" stroke="var(--c1)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="44" cy="86" r="2.6" fill="#fff" opacity=".9" /><circle cx="56" cy="92" r="2" fill="#fff" opacity=".9" />
      <path className="flow-dash" d="M86 62h12" stroke="var(--c2)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="4 4" fill="none" />

      {/* The raw numbers… */}
      <rect x="104" y="8" width="122" height="76" rx="9" fill="#fff" stroke={hair} strokeWidth="1.5" />
      <g fontSize="9.5" fill={ink} opacity=".75">
        <text x="116" y="26">pH 7.92</text><text x="116" y="42">NH₃ 0.184</text><text x="116" y="58">Alk 118.4</text>
        <text x="176" y="26">Sal 18.2</text><text x="176" y="42">DO 5.6</text>
      </g>

      {/* …and the interpretation layer on top. */}
      <rect x="118" y="46" width="108" height="76" rx="11" fill="#fff" stroke="var(--c1)" strokeWidth="2.2" />
      <text x="130" y="64" fontSize="8.5" fontWeight="700" letterSpacing="1.2" fill="var(--c1)">{t.interpreted}</text>
      <rect x="126" y="72" width="40" height="18" rx="9" fill={green} />
      <text x="146" y="84.2" fontSize="8.5" fontWeight="700" textAnchor="middle" fill="#fff">{t.phOk}</text>
      <rect x="170" y="72" width="50" height="18" rx="9" fill={amber} />
      <text x="195" y="84.2" fontSize="8.5" fontWeight="700" textAnchor="middle" fill="#fff">{t.nh3High}</text>
      <rect x="126" y="96" width="94" height="19" rx="9.5" fill="var(--tint)" stroke="var(--c2)" strokeWidth="1.4" />
      <text x="173" y="108.6" fontSize="8" fontWeight="700" textAnchor="middle" fill="var(--c1)">{t.plainReport}</text>
    </>
  );
}

/** Managers & researchers — a clean, queryable record of every report across every pond. */
function SceneRecord({ t }: { t: T }) {
  const scores: number[][] = [
    [91, 88, 90, 86, 92, 94, 90, 93, 95],
    [72, 68, 80, 84, 76, 88, 90, 87, 91],
    [85, 80, 66, 48, 60, 74, 82, 88, 90],
    [93, 92, 95, 91, 90, 94, 96, 95, 97],
  ];
  const tone = (s: number) => (s >= 85 ? green : s >= 60 ? amber : red);
  return (
    <>
      <rect x="16" y="8" width="208" height="26" rx="13" fill="#fff" stroke="var(--c2)" strokeWidth="1.6" />
      <circle cx="33" cy="20.5" r="5.6" fill="none" stroke="var(--c1)" strokeWidth="2.2" />
      <path d="M37.2 24.7l5 5" stroke="var(--c1)" strokeWidth="2.4" strokeLinecap="round" />
      <text x="50" y="25" fontSize="10" fontWeight="700" fill="#334155">{t.pondEveryReport}</text>

      <rect x="20" y="81" width="200" height="25" rx="6" fill="none" stroke="var(--c1)" strokeWidth="2.2" />
      {scores.map((row, r) =>
        row.map((s, c) => (
          <rect
            key={`${r}-${c}`}
            x={27 + c * 21}
            y={43 + r * 21}
            width="17"
            height="17"
            rx="4"
            fill={tone(s)}
            opacity={r === 2 ? 1 : 0.55}
          />
        )),
      )}
    </>
  );
}

const makeScenes = (t: T): ReactNode[] => [
  <SceneFarmer key="farmer" t={t} />,
  <SceneConsultant key="consultant" t={t} />,
  <SceneLab key="lab" t={t} />,
  <SceneRecord key="record" t={t} />,
];

export default function Audience({ lang = "en" }: { lang?: Lang }) {
  const { audience, ui, scenes: sceneText } = getContent(lang);
  const copy = ui.sections.audience;
  const scenes = makeScenes(sceneText);
  return (
    <Section id="audience" className="bg-white">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            lead={copy.lead}
          />
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {audience.map((a, i) => (
            <SceneCard
              key={a.title}
              index={i}
              title={a.title}
              body={a.body}
              scene={scenes[i % scenes.length]}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
}
