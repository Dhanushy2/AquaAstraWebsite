import type { Metadata } from "next";
import RefundPage, { refundPath, refundMeta } from "@/components/pages/RefundPage";
import { pageMetadata } from "@/lib/metadata";

const m = refundMeta("te");
export const metadata: Metadata = pageMetadata("te", refundPath, m.title, m.description);

export default function Page() {
  return <RefundPage lang="te" />;
}
