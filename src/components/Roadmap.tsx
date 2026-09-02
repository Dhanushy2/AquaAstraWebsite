import { Section, SectionHeading } from "./Layout";
import { roadmap } from "@/lib/content";

export default function Roadmap() {
  return (
    <Section id="roadmap" className="bg-brand-gradient">
      <SectionHeading
        eyebrow="Roadmap"
        tone="light"
        title="Lab reports first. Whole-farm management next."
        lead="Version one does one job properly: read a report, score it, explain it. These are the capabilities queued behind it."
      />

      <ul className="mt-12 flex flex-wrap gap-3">
        {roadmap.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
