import { Section, SectionHeading } from "./Layout";
import { audience } from "@/lib/content";

export default function Audience() {
  return (
    <Section id="audience" className="bg-white">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Who it is for"
            title="Built around the farmer, useful to everyone near the pond"
            lead="The app is designed for someone with a phone, a report and no time — and it happens to be just as useful to the people advising them."
          />
        </div>

        <dl className="divide-y divide-hairline">
          {audience.map((a) => (
            <div key={a.title} className="py-6 first:pt-0 last:pb-0">
              <dt className="text-lg font-semibold tracking-tight text-ink">{a.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-muted">{a.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
