import { Container } from "./Layout";
import Logo from "./Logo";
import { navLinks, site } from "@/lib/content";

/**
 * Sticky header. The mobile menu is a native <details> element rather than
 * React state, which keeps the whole site zero-JavaScript.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline/70 bg-canvas/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 sm:h-18">
          <a
            href="#top"
            className="flex items-center gap-2.5 rounded-lg"
            aria-label={`${site.name} home`}
          >
            <Logo className="h-9 w-9" />
            <span className="text-lg font-semibold tracking-tight text-ink">
              Aqua <span className="text-teal-ink">Astra</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-teal-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#get-app"
              className="hidden rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-teal-deep/20 transition-opacity hover:opacity-90 sm:inline-block"
            >
              Get the app
            </a>

            <details className="relative lg:hidden [&[open]_.menu-close]:block [&[open]_.menu-open]:hidden">
              <summary
                className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-hairline text-ink [&::-webkit-details-marker]:hidden"
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="menu-open h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
                <svg
                  className="menu-close hidden h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </summary>

              <div className="absolute right-0 top-12 w-60 rounded-2xl border border-hairline bg-white p-2 shadow-xl shadow-ink/5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-brand-50 hover:text-teal-ink"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#get-app"
                  className="mt-1 block rounded-xl bg-brand-gradient px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Get the app
                </a>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}
