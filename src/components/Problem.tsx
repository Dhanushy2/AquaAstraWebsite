import { Section, SectionHeading } from "./Layout";
import { problem } from "@/lib/content";

export default function Problem() {
  return (
    <Section id="problem">
      <p className="mb-16 text-center text-2xl font-semibold tracking-tight text-teal-ink sm:mb-20 sm:text-3xl">
        {problem.banner}
      </p>

      <SectionHeading
        eyebrow="The problem"
        title={problem.title}
        lead={problem.intro}
      />

      <ul className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {problem.points.map((point, i) => (
          <li key={point.title} className="border-t border-hairline pt-5">
            <span className="text-xs font-semibold tabular-nums text-brand-400">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-base font-semibold text-ink">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
