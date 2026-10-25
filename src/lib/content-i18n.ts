import * as c from "./content";
import { te } from "./content.te";
import type { Lang } from "./i18n";

/** Widens literal types to their base types, but keeps icon names exact. */
type Widen<T> = T extends c.IconName
  ? T
  : T extends string
    ? string
    : T extends number
      ? number
      : T extends boolean
        ? boolean
        : T extends readonly (infer U)[]
          ? readonly Widen<U>[]
          : T extends object
            ? { -readonly [K in keyof T]: Widen<T[K]> }
            : T;

const en = {
  site: c.site,
  navLinks: c.navLinks,
  hero: c.hero,
  heroPosters: c.heroPosters,
  appWalkthrough: c.appWalkthrough,
  about: c.about,
  highlights: c.highlights,
  problem: c.problem,
  steps: c.steps,
  features: c.features,
  audience: c.audience,
  roadmap: c.roadmap,
  faqs: c.faqs,
  footerLinks: c.footerLinks,
  ui: c.ui,
  scenes: c.scenes,
};

/** Every piece of text on the site, in one language. English is the source; Telugu mirrors its shape. */
export type Content = Omit<Widen<typeof en>, "features"> & { features: c.Feature[] };

const all: Record<Lang, Content> = { en, te };

export function getContent(lang: Lang): Content {
  return all[lang];
}
