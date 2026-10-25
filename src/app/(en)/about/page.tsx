import type { Metadata } from "next";
import AboutPage, { aboutPath, aboutMeta } from "@/components/pages/AboutPage";
import { pageMetadata } from "@/lib/metadata";

const m = aboutMeta("en");
export const metadata: Metadata = pageMetadata("en", aboutPath, m.title, m.description);

export default function Page() {
  return <AboutPage lang="en" />;
}
