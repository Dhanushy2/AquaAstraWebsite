import LanguageToggle from "./LanguageToggle";
import { Container } from "./Layout";
import Logo from "./Logo";
import { getContent } from "@/lib/content-i18n";
import { type Lang, localePath } from "@/lib/i18n";

/**
 * Sticky header. The mobile menu is a native <details> element rather than
 * React state, which keeps the whole site zero-JavaScript.
 */
export default function Header({
  home = true,
  lang = "en",
  path = "/",
}: {
  home?: boolean;
  lang?: Lang;
  /** This page's English path, e.g. "/about/", so the toggle can link to its twin. */
  path?: string;
}) {
  const { navLinks, ui } = getContent(lang);
  /** Telugu labels run longer, so the full nav waits for a wider screen. */
  const te = lang === "te";
  /** On other pages, in-page anchors point back at the home page. */
  const to = (href: string) =>
    home || !href.startsWith("#") ? href : `${localePath(lang, "/")}${href}`;

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/70 bg-canvas/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3 sm:h-18 sm:gap-6 lg:gap-4 xl:gap-6">
          <a
            href={home ? "#top" : localePath(lang, "/")}
            className="-ml-2 flex shrink-0 items-center gap-2.5 rounded-lg sm:-ml-3"
            aria-label={ui.header.homeAria}
          >
            <Logo className="h-12 w-auto sm:h-14" />
            {/* The tagline sits beside the logo from tablet width up; it shrinks a step while the full nav is tight. */}
            <span
              className={`hidden whitespace-nowrap font-semibold tracking-tight text-ink sm:inline md:text-2xl ${
                te ? "text-lg xl:text-lg" : "text-xl lg:text-lg xl:text-xl"
              }`}
            >
              <span className="text-[#0f8a4f]">Grow</span> <span className="text-[#0376b5]">Together</span>
            </span>
          </a>

          <nav className={`hidden items-center ${te ? "gap-3.5 xl:flex" : "gap-3 lg:flex xl:gap-6"}`} aria-label={ui.header.primaryNav}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={to(link.href)}
                className="whitespace-nowrap text-sm font-medium text-ink-muted transition-colors hover:text-teal-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageToggle
              lang={lang}
              enHref={localePath("en", path)}
              teHref={localePath("te", path)}
              label={ui.header.languageLabel}
            />

            <a
              href={to("#get-app")}
              className="hidden whitespace-nowrap rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/25 transition-colors hover:bg-brand-700 sm:inline-block"
            >
              {ui.header.getApp}
            </a>

            <details
              className={`relative ${te ? "xl:hidden" : "lg:hidden"} [&[open]_.menu-close]:block [&[open]_.menu-open]:hidden`}
            >
              <summary
                className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-hairline text-ink [&::-webkit-details-marker]:hidden"
                aria-label={ui.header.toggleMenu}
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
                    href={to(link.href)}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-brand-50 hover:text-teal-ink"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={to("#get-app")}
                  className="mt-1 block rounded-xl bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  {ui.header.getApp}
                </a>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}
