import { Section, SectionHeading } from "./Layout";
import { faqs } from "@/lib/content";

/** Native <details> accordions — accessible and JavaScript-free. */
export default function Faq() {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions worth answering up front"
        align="center"
      />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-hairline border-y border-hairline">
        {faqs.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left [&::-webkit-details-marker]:hidden">
              <span className="text-base font-medium text-ink">{item.q}</span>
              <svg
                className="h-5 w-5 shrink-0 text-ink-faint transition-transform duration-200 group-open:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="mt-3 max-w-2xl pr-11 text-sm leading-relaxed text-ink-muted">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
