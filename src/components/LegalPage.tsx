import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "./Layout";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main">
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-ink-faint">Last updated: {updated}</p>

            <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-ink-muted sm:text-base">
              {children}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
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
