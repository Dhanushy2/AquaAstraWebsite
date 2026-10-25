import { Container } from "./Layout";
import Logo from "./Logo";
import { getContent } from "@/lib/content-i18n";
import type { Lang } from "@/lib/i18n";

export default function Footer({ lang = "en" }: { lang?: Lang }) {
  const { footerLinks, site, ui } = getContent(lang);
  return (
    <footer className="border-t border-hairline bg-canvas">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-16 w-auto" />
              <span className="text-lg font-semibold tracking-tight text-ink">
                <span className="text-[#0f8a4f]">Grow</span> <span className="text-[#0376b5]">Together</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {site.description}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm font-medium text-teal-ink underline decoration-brand-200 underline-offset-4"
            >
              {site.email}
            </a>
          </div>

          <FooterColumn title={ui.footer.product} links={footerLinks.product} />
          <FooterColumn title={ui.footer.industryBodies} links={footerLinks.resources} external />
          <FooterColumn title={ui.footer.legal} links={footerLinks.legal} />
        </div>

        <div className="flex flex-col gap-3 border-t border-hairline py-7 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {ui.footer.rights}
          </p>
          <p>{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  external = false,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
  external?: boolean;
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="text-sm text-ink-muted transition-colors hover:text-teal-ink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
