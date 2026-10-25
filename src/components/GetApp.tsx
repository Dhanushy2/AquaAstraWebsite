import Image from "next/image";
import type { ReactNode } from "react";
import PhoneMockup from "./PhoneMockup";
import { Section } from "./Layout";
import { getContent } from "@/lib/content-i18n";
import type { Lang } from "@/lib/i18n";

export default function GetApp({ lang = "en" }: { lang?: Lang }) {
  const { site, ui } = getContent(lang);
  const t = ui.getApp;
  const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
  return (
    <Section id="get-app" className="bg-white">
      <div className="bg-brand-gradient relative overflow-hidden rounded-[2rem] text-white shadow-xl shadow-teal-deep/15">
        {/* Light, bubbles and a wave of water. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(closest-side, rgba(255,255,255,.85), transparent 70%)",
            backgroundSize: "44rem 44rem",
            backgroundPosition: "92% -30%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <span aria-hidden="true" className="pointer-events-none absolute left-[46%] top-10 hidden h-5 w-5 rounded-full lg:block border border-white/40 bg-white/10" />
        <span aria-hidden="true" className="pointer-events-none absolute left-[41%] top-28 hidden h-3 w-3 rounded-full lg:block border border-white/40 bg-white/10" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-24 left-8 h-4 w-4 rounded-full border border-white/40 bg-white/10" />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px left-0 h-24 w-full text-white/[0.07]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path fill="currentColor" d="M0 64c160 32 320 48 480 32s320-64 480-64 320 32 480 48v40H0z" />
        </svg>

        <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-6 lg:p-16">
          {/* The pitch. */}
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              {t.live}
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              {t.titleBefore} <span className="text-[#bdf3e8]">{t.brand}</span>
              {t.titleAfter && " " + t.titleAfter}
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
              {t.lead}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <StoreButton href={site.playStoreUrl} sub={t.getItOn} name={t.googlePlay} />
              <StoreButton sub={t.comingSoonTo} name={t.appStore} />
            </div>

            {/* Scan to install, for visitors on a computer. */}
            <div className="mt-8 hidden items-center gap-4 sm:flex">
              <span className="rounded-2xl bg-white p-2 shadow-lg shadow-black/20">
                <Image
                  src="/qr-playstore.svg"
                  alt={t.qrAlt}
                  width={88}
                  height={88}
                  className="h-[5.5rem] w-[5.5rem]"
                />
              </span>
              <p className="text-sm leading-snug text-white/80">
                <span className="block font-semibold text-white">{t.onComputer}</span>
                {t.scanToInstall}
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2.5 text-xs font-semibold">
              {t.chips.map((chip) => (
                <li key={chip} className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                  {chip}
                </li>
              ))}
            </ul>
          </div>

          {/* The app. */}
          <div className="relative flex justify-center lg:justify-end lg:pr-6">
            <PhoneMockup text={ui.phone} />

            <div className="flow-float absolute left-0 top-[16%] hidden rounded-2xl bg-white px-3.5 py-2.5 text-ink shadow-xl shadow-black/20 [--tilt:-3deg] sm:block lg:-left-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint">{t.floatHealthLabel}</p>
              <p className="mt-0.5 flex items-baseline gap-1.5 text-sm font-semibold">
                <span className="text-2xl font-bold text-emerald-600">91</span> {t.floatHealthValue}
              </p>
            </div>
            <div className="flow-float absolute bottom-[26%] left-2 hidden rounded-2xl bg-white px-3.5 py-2.5 text-ink shadow-xl shadow-black/20 [--tilt:3deg] sm:block lg:-left-6">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint">{t.floatLanguageLabel}</p>
              <p className="mt-0.5 text-sm font-semibold">
                English <span className="text-ink-faint">·</span> తెలుగు
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get in touch. */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <ContactTile label={t.email} href={`mailto:${site.email}`} icon={<EmailIcon />}>
          {site.email}
        </ContactTile>
        <ContactTile label={t.phone} href={phoneHref} icon={<PhoneIcon />}>
          {site.phone}
        </ContactTile>
        <ContactTile label={t.basedIn} icon={<PinIcon />}>
          <address className="not-italic">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </ContactTile>
      </div>
    </Section>
  );
}

function ContactTile({
  label,
  href,
  icon,
  children,
}: {
  label: string;
  href?: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-teal-ink">
        {icon}
      </span>
      <span className="min-w-0 text-sm">
        <span className="block text-xs font-semibold uppercase tracking-wider text-ink-faint">{label}</span>
        <span className="mt-1 block break-words font-medium leading-snug text-ink">{children}</span>
      </span>
    </>
  );
  const base = "flex items-start gap-4 rounded-2xl border border-hairline bg-canvas p-5";
  return href ? (
    <a href={href} className={`${base} transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md hover:shadow-ink/5`}>
      {inner}
    </a>
  ) : (
    <div className={base}>{inner}</div>
  );
}

/**
 * A store badge. With an `href` it is a live link that opens in a new tab; without
 * one it is a muted, non-clickable "coming soon" badge.
 */
function StoreButton({ href, sub, name }: { href?: string; sub: string; name: string }) {
  const body = (
    <>
      {href ? <PlayMark /> : <DownloadMark />}
      <span className="text-left leading-tight">
        <span className={`block text-[10px] uppercase tracking-wider ${href ? "text-ink/60" : "text-white/70"}`}>{sub}</span>
        <span className="block text-sm font-semibold">{name}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className="flex cursor-default items-center gap-3 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-white backdrop-blur-sm"
      >
        {body}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-ink shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-xl"
    >
      {body}
    </a>
  );
}

/** The four-colour Google Play mark. */
function PlayMark() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285f4" d="M3.6 2.2 13.4 12l-9.8 9.8c-.3-.2-.5-.6-.5-1.1V3.3c0-.5.2-.9.5-1.1Z" />
      <path fill="#34a853" d="M3.6 2.2c.3-.2.8-.2 1.3.1l11.5 6.6-3 3.1Z" />
      <path fill="#fbbc04" d="m16.4 8.9 3.6 2.1c.8.4.8 1.6 0 2l-3.6 2.1-3-3.1Z" />
      <path fill="#ea4335" d="m13.4 12 3 3.1-11.5 6.6c-.5.3-1 .3-1.3.1Z" />
    </svg>
  );
}

function DownloadMark() {
  return (
    <svg
      className="h-7 w-7"
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
  );
}

const stroke = {
  className: "h-5 w-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function EmailIcon() {
  return (
    <svg {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...stroke}>
      <path d="M5 4h3.5l1.7 4.4-2.2 1.4a11 11 0 0 0 6.2 6.2l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg {...stroke}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
