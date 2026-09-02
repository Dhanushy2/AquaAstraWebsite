import type { ReactNode } from "react";

/** Shared page gutter. Every section uses this so edges line up vertically. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Eyebrow + heading + optional lead paragraph, used at the top of sections. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const leadColor = tone === "light" ? "text-white/75" : "text-ink-muted";
  const eyebrowColor = tone === "light" ? "text-brand-200" : "text-teal-ink";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {lead && <p className={`mt-5 text-lg leading-relaxed ${leadColor}`}>{lead}</p>}
    </div>
  );
}
