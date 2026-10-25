import { Section, SectionHeading } from "./Layout";
import { getContent } from "@/lib/content-i18n";
import type { Lang } from "@/lib/i18n";

export default function Roadmap({ lang = "en" }: { lang?: Lang }) {
  const { roadmap, ui } = getContent(lang);
  const copy = ui.sections.roadmap;
  return (
    <Section id="roadmap" className="bg-brand-gradient">
      <SectionHeading
        eyebrow={copy.eyebrow}
        tone="light"
        title={copy.title}
        lead={copy.lead}
      />

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <p className="text-lg font-semibold text-white/90">{copy.nextStep}</p>
        <ul className="flex flex-wrap gap-3">
          {roadmap.map((item) => (
            <li
              key={item}
              className="rounded-full bg-white px-7 py-3.5 text-base font-semibold text-teal-deep shadow-lg shadow-black/15"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
