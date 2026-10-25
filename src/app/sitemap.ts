import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { langs, localePath } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/privacy-policy/", "/terms-and-conditions/", "/refund-and-cancellation/", "/contact-us/", "/about/"];

  return routes.flatMap((path) =>
    langs.map((lang) => ({
      url: `${site.url}${localePath(lang, path)}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("weekly" as const) : ("yearly" as const),
      priority: path === "/" ? 1 : 0.5,
      alternates: {
        languages: Object.fromEntries(langs.map((l) => [l, `${site.url}${localePath(l, path)}`])),
      },
    })),
  );
}
