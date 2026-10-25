import type { Metadata } from "next";
import PrivacyPage, { privacyPath, privacyMeta } from "@/components/pages/PrivacyPage";
import { pageMetadata } from "@/lib/metadata";

const m = privacyMeta("te");
export const metadata: Metadata = pageMetadata("te", privacyPath, m.title, m.description);

export default function Page() {
  return <PrivacyPage lang="te" />;
}
