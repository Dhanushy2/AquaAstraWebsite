import type { Metadata } from "next";
import TermsPage, { termsPath, termsMeta } from "@/components/pages/TermsPage";
import { pageMetadata } from "@/lib/metadata";

const m = termsMeta("te");
export const metadata: Metadata = pageMetadata("te", termsPath, m.title, m.description);

export default function Page() {
  return <TermsPage lang="te" />;
}
