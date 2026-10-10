import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/privacy-policy/", "/terms-and-conditions/", "/refund-and-cancellation/", "/contact-us/", "/about/"];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "yearly",
    priority: path === "/" ? 1 : 0.5,
  }));
}
