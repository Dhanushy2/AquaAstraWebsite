import type { Metadata } from "next";
import ContactPage, { contactPath, contactMeta } from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/metadata";

const m = contactMeta("te");
export const metadata: Metadata = pageMetadata("te", contactPath, m.title, m.description);

export default function Page() {
  return <ContactPage lang="te" />;
}
