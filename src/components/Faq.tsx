import type { CSSProperties, ReactNode } from "react";
import { Section, SectionHeading } from "./Layout";
import { accents } from "./SceneCard";
import { getContent } from "@/lib/content-i18n";
import type { Lang } from "@/lib/i18n";

/** One icon per question (24 × 24, stroked in white on the card's accent). */
const icons: ReactNode[] = [
  // What does it analyse? — a report.
  <>
    <path d="M7 3h7l4 4v14H7z" />
    <path d="M14 3v4h4M10 12h5M10 16h5" />
  </>,
  // Do I need to type values? — a scan frame.
  <>
    <path d="M3 8V6a3 3 0 0 1 3-3h2M16 3h2a3 3 0 0 1 3 3v2M21 16v2a3 3 0 0 1-3 3h-2M8 21H6a3 3 0 0 1-3-3v-2" />
    <path d="M7 12h10" />
  </>,
  // Is it in Telugu? — language globe.
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3.5 9h17M3.5 15h17" />
    <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
  </>,
  // Does it replace my consultant? — people.
  <>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3 19.5a6 6 0 0 1 12 0" />
    <circle cx="17" cy="9.5" r="2.6" />
    <path d="M15.5 14.2a5 5 0 0 1 6 5.3" />
  </>,
  // Where is my data stored? — a lock.
  <>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15.5" r="1.2" />
  </>,
];

/**
 * Native <details> accordions — accessible and JavaScript-free. Each question is a
 * card with its own icon and accent; the answer opens as a reply bubble.
 */
export default function Faq({ lang = "en" }: { lang?: Lang }) {
  const { faqs, ui } = getContent(lang);
  const copy = ui.sections.faq;
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        lead={copy.lead}
        align="center"
      />

      <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3.5">
        {faqs.map((item, i) => {
          const [strong, light, tint] = accents[i % accents.length];
          return (
            <details
              key={item.q}
              style={{ "--c1": strong, "--c2": light, "--tint": tint } as CSSProperties}
              className="group rounded-2xl border border-hairline bg-white shadow-sm shadow-ink/[0.03] transition duration-200 hover:shadow-md hover:shadow-ink/5 open:border-[color-mix(in_srgb,var(--c2)_45%,white)] open:shadow-md open:shadow-ink/5"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 p-4 text-left sm:p-5 [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
                  style={{ backgroundImage: "linear-gradient(135deg, var(--c1), var(--c2))" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.9}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icons[i % icons.length]}
                  </svg>
                </span>

                <span className="flex-1 text-base font-semibold tracking-tight text-ink">{item.q}</span>

                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-open:rotate-45"
                  style={{ backgroundColor: "var(--tint)", color: "var(--c1)" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>

              {/* The reply: a bubble from the Aqua Astra avatar. */}
              <div className="faq-answer flex gap-3 px-4 pb-5 sm:px-5">
                <span
                  aria-hidden="true"
                  className="bg-brand-gradient mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#fff">
                    <path d="M11 3.5c1.25 4.4 2.75 5.9 7.2 7.2c-4.45 1.3-5.95 2.8-7.2 7.2c-1.25-4.4-2.75-5.9-7.2-7.2c4.45-1.3 5.95-2.8 7.2-7.2z" />
                    <path d="M18.6 14.6c.45 1.55 1 2.1 2.55 2.55c-1.55.45-2.1 1-2.55 2.55c-.45-1.55-1-2.1-2.55-2.55c1.55-.45 2.1-1 2.55-2.55z" opacity=".85" />
                  </svg>
                </span>
                <p
                  className="max-w-2xl rounded-2xl rounded-tl-md border px-4 py-3 text-sm leading-relaxed text-ink"
                  style={{
                    backgroundImage: "linear-gradient(160deg, var(--tint) 0%, #ffffff 90%)",
                    borderColor: "color-mix(in srgb, var(--c2) 30%, white)",
                  }}
                >
                  {item.a}
                </p>
              </div>
            </details>
          );
        })}
      </div>
    </Section>
  );
}
