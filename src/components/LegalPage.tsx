import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "./Layout";
import { getContent } from "@/lib/content-i18n";
import type { Lang } from "@/lib/i18n";

export default function LegalPage({
  lang = "en",
  path,
  title,
  updated,
  children,
}: {
  lang?: Lang;
  /** The page's English path (e.g. `/privacy-policy/`), so the language toggle can find its twin. */
  path: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  const { ui } = getContent(lang);
  return (
    <>
      <Header lang={lang} path={path} home={false} />
      <main id="main">
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-ink-faint">
              {ui.legal.lastUpdated} {updated}
            </p>

            <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-ink-muted sm:text-base">
              {children}
            </div>
          </div>
        </Container>
      </main>
      <Footer lang={lang} />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-ink sm:text-xl">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

/** The standard in-text link style on legal pages. */
export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="font-medium text-teal-ink underline decoration-brand-200 underline-offset-4">
      {children}
    </a>
  );
}
