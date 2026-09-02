import Icon from "./Icon";
import { Section, SectionHeading } from "./Layout";
import { features, type Feature } from "@/lib/content";

const statusStyles: Record<Feature["status"], string> = {
  Available: "bg-teal-brand/12 text-teal-ink",
  "In progress": "bg-warn/12 text-warn",
  Planned: "bg-ink-faint/15 text-ink-muted",
};

export default function Features() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="Features"
        title="Everything the app does, honestly labelled"
        lead="Aqua Astra is shipping in stages. Rather than describe the finished product as if it already existed, each capability below carries its real status."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <article
            key={f.title}
            className="flex flex-col rounded-2xl border border-hairline bg-white p-6 shadow-sm shadow-ink/[0.02] transition-shadow hover:shadow-md hover:shadow-ink/5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-teal-ink">
              <Icon name={f.icon} className="h-5 w-5" />
            </span>

            <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">
              {f.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{f.body}</p>

            <span
              className={`mt-4 inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[f.status]}`}
            >
              {f.status}
            </span>
          </article>
        ))}
      </div>
    </Section>
  );
}
