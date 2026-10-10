import { Section, SectionHeading } from "./Layout";
import { roadmap } from "@/lib/content";

export default function Roadmap() {
  return (
    <Section id="roadmap" className="bg-brand-gradient">
      <SectionHeading
        eyebrow="Roadmap"
        tone="light"
        title="Lab reports first. Whole-farm management next."
        lead="Version one does one job properly: read a report, score it, explain it. This is the capability queued behind it."
      />

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <p className="text-lg font-semibold text-white/90">Next Step:</p>
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
