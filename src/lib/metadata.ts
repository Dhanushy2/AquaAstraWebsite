import type { Metadata } from "next";
import { getContent } from "./content-i18n";
import { htmlLang, pageAlternates, type Lang } from "./i18n";

const keywords: Record<Lang, string[]> = {
  en: ["shrimp farming", "aquaculture", "pond health", "lab report analysis", "vannamei", "Aqua Astra"],
  te: ["రొయ్యల పెంపకం", "ఆక్వాకల్చర్", "చెరువు ఆరోగ్యం", "ల్యాబ్ రిపోర్ట్", "వనామీ", "Aqua Astra"],
};

/** Site-wide metadata for a language's root layout. */
export function rootMetadata(lang: Lang): Metadata {
  const { site } = getContent(lang);
  const title = `${site.name} — ${site.tagline}`;
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s · ${site.name}` },
    description: site.description,
    keywords: keywords[lang],
    openGraph: {
      title,
      description: site.description,
      type: "website",
      siteName: site.name,
      url: site.url,
      locale: lang === "te" ? "te_IN" : "en_IN",
    },
    icons: { icon: "/favicon.svg" },
    verification: {
      other: { "facebook-domain-verification": "ijg40cyzpf3a1qz5kyd3vebs57ispv" },
    },
  };
}

/** Per-page metadata: title, description and the canonical + hreflang links for both languages. */
export function pageMetadata(lang: Lang, path: string, title: string, description: string): Metadata {
  return { title, description, alternates: pageAlternates(lang, path) };
}

export { htmlLang };
