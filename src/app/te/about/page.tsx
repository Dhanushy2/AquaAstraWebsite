import type { Metadata } from "next";
import AboutPage, { aboutPath, aboutMeta } from "@/components/pages/AboutPage";
import { pageMetadata } from "@/lib/metadata";

const m = aboutMeta("te");
export const metadata: Metadata = pageMetadata("te", aboutPath, m.title, m.description);

export default function Page() {
  return <AboutPage lang="te" />;
}
