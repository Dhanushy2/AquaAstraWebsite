import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Refund & Cancellation",
  description: `Refund and cancellation policy for the ${site.name} app, operated by ${site.legalName}.`,
};

const UPDATED = "20 September 2026";

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund & Cancellation" updated={UPDATED}>
      <LegalSection title="1. Current status">
        <p>
          {site.name} is currently in pre-launch and does not charge for access. No
          payments are collected today, so no refund is applicable at this stage. This
          page will be updated with full billing terms before any paid plan launches.
        </p>
      </LegalSection>

      <LegalSection title="2. Future paid plans">
        <p>
          When paid plans become available, the following will apply unless a specific
          plan states otherwise:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>You may cancel a subscription at any time from within the app.</li>
          <li>
            Cancellation stops future billing; it does not automatically refund the
            current billing period.
          </li>
          <li>
            Refund requests made within 7 days of a charge, where the paid features
            were not used, will be reviewed and may be granted at our discretion.
          </li>
          <li>Refunds, where approved, are issued to the original payment method.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How to request a refund or cancellation">
        <p>
          Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-teal-ink underline decoration-brand-200 underline-offset-4"
          >
            {site.email}
          </a>{" "}
          with your account details and the reason for your request. We aim to
          respond within 3 business days.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
