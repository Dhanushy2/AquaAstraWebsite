import type { Metadata } from "next";
import ContactPage, { contactPath, contactMeta } from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/metadata";

const m = contactMeta("en");
export const metadata: Metadata = pageMetadata("en", contactPath, m.title, m.description);

export default function Page() {
  return <ContactPage lang="en" />;
}
