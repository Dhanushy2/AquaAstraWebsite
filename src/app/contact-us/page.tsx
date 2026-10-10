import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `How to reach ${site.legalName}, the team behind ${site.name}.`,
};

export default function ContactUsPage() {
  return (
    <LegalPage title="Contact Us" updated="20 September 2026">
      <LegalSection title="Business details">
        <p>
          <strong>{site.legalName}</strong>
          <br />
          {site.registeredAddress}
        </p>
      </LegalSection>

      <LegalSection title="Get in touch">
        <p>
          Email:{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-teal-ink underline decoration-brand-200 underline-offset-4"
          >
            {site.email}
          </a>
        </p>
        <p>
          Phone:{" "}
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="font-medium text-teal-ink underline decoration-brand-200 underline-offset-4"
          >
            {site.phone}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Support hours">
        <p>
          We aim to respond to all queries within 1–2 business days, Monday to
          Saturday.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
