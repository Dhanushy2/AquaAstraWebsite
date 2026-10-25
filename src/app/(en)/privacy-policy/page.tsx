import type { Metadata } from "next";
import PrivacyPage, { privacyPath, privacyMeta } from "@/components/pages/PrivacyPage";
import { pageMetadata } from "@/lib/metadata";

const m = privacyMeta("en");
export const metadata: Metadata = pageMetadata("en", privacyPath, m.title, m.description);

export default function Page() {
  return <PrivacyPage lang="en" />;
}
