import { Section } from "./Layout";
import { site } from "@/lib/content";

export default function GetApp() {
  return (
    <Section id="get-app" className="bg-white">
      <div className="overflow-hidden rounded-3xl border border-hairline bg-canvas">
        <div className="grid gap-10 p-9 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Put the next report through Aqua Astra
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
              The Android app is in testing. Tell us about your farm and we will
              get you on the build, plus a note the day it reaches the Play Store.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <StoreButton
                href={`mailto:${site.email}?subject=Aqua%20Astra%20early%20access`}
                sub="Coming soon to"
                name="Google Play"
              />
              <StoreButton
                href={`mailto:${site.email}?subject=Aqua%20Astra%20early%20access`}
                sub="Coming soon to"
                name="App Store"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-hairline bg-white p-7">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-ink">
              Get in touch
            </h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-ink-faint">Email</dt>
                <dd className="mt-0.5">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-ink underline decoration-brand-200 underline-offset-4 transition-colors hover:text-teal-ink"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-ink-faint">Phone</dt>
                <dd className="mt-0.5 font-medium text-ink">{site.phone}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Based in</dt>
                <dd className="mt-0.5 font-medium text-ink">
                  <address className="not-italic">
                    {site.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}

function StoreButton({
  href,
  sub,
  name,
}: {
  href: string;
  sub: string;
  name: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-xl bg-ink px-5 py-3 text-white transition-opacity hover:opacity-90"
    >
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v12M8 11.5l4 4 4-4M4.5 20h15" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wider text-white/60">
          {sub}
        </span>
        <span className="block text-sm font-semibold">{name}</span>
      </span>
    </a>
  );
}
