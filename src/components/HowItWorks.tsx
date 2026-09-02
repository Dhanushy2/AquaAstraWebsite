import { Section, SectionHeading } from "./Layout";
import { steps } from "@/lib/content";

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-white">
      <SectionHeading
        eyebrow="How it works"
        title="From a photo of a report to a decision, in six steps"
        lead="The pipeline is deliberately boring: read the page, check it against science, then explain it. Every step is inspectable, so you can see why a recommendation was made."
      />

      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <li
            key={s.step}
            className="group relative rounded-2xl border border-hairline bg-canvas p-6 transition-colors hover:border-brand-200"
          >
            <span className="text-sm font-semibold tabular-nums text-brand-gradient">
              {s.step}
            </span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
              {s.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
