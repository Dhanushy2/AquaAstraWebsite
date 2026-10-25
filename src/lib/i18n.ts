/**
 * Languages and locale-aware links. English lives at the site root (`/about/`);
 * Telugu lives under `/te/` (`/te/about/`). Each language has its own copy of every
 * page, so the toggle is just a link between the two.
 */
export type Lang = "en" | "te";

export const langs: readonly Lang[] = ["en", "te"];

/** BCP 47 tags, for `lang` and `hreflang`. */
export const htmlLang: Record<Lang, string> = { en: "en", te: "te" };

/** `/about/` in English, `/te/about/` in Telugu. `/` becomes `/te/`. */
export function localePath(lang: Lang, path: string): string {
  if (lang === "en") return path;
  return path === "/" ? "/te/" : `/te${path}`;
}

/** The same page in the other language. */
export function otherLangPath(lang: Lang, path: string): { lang: Lang; href: string } {
  const other: Lang = lang === "en" ? "te" : "en";
  return { lang: other, href: localePath(other, path) };
}

/** `<link rel="alternate" hreflang>` and canonical metadata for a page that exists in both languages. */
export function pageAlternates(lang: Lang, path: string) {
  return {
    canonical: localePath(lang, path),
    languages: {
      en: localePath("en", path),
      te: localePath("te", path),
      "x-default": localePath("en", path),
    },
  };
}
