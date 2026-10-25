import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { getContent } from "@/lib/content-i18n";
import { pageAlternates } from "@/lib/i18n";

const { site } = getContent("en");

export const metadata: Metadata = {
  title: { absolute: `${site.name} — ${site.tagline}` },
  description: site.description,
  alternates: pageAlternates("en", "/"),
};

export default function Page() {
  return <HomePage lang="en" />;
}
