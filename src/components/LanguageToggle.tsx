"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

/**
 * English | తెలుగు switch. Each side is a real link to the same page in that
 * language, so it works without scripting, can be opened in a new tab and is
 * crawlable. Once mounted it also carries the current `#section` across, so
 * switching language keeps you where you were reading.
 */
export default function LanguageToggle({
  lang,
  enHref,
  teHref,
  label,
}: {
  lang: Lang;
  enHref: string;
  teHref: string;
  label: string;
}) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const options: { code: Lang; text: string; href: string }[] = [
    { code: "en", text: "English", href: enHref },
    { code: "te", text: "తెలుగు", href: teHref },
  ];

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-hairline bg-white p-0.5 text-[11px] font-semibold sm:text-xs shadow-sm shadow-ink/[0.03]"
    >
      {options.map((o) => {
        const active = o.code === lang;
        return (
          <a
            key={o.code}
            href={`${o.href}${hash}`}
            lang={o.code}
            hrefLang={o.code}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1.5 transition-colors sm:px-3 ${
              active
                ? "bg-brand-600 text-white shadow-sm shadow-brand-600/25"
                : "text-ink-muted hover:text-teal-ink"
            }`}
          >
            {o.text}
          </a>
        );
      })}
    </div>
  );
}
