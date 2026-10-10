import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that govern use of the ${site.name} app and website, operated by ${site.legalName}.`,
};

const UPDATED = "20 September 2026";

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated={UPDATED}>
      <p>
        These terms govern your use of the {site.name} mobile app and website
        (together, the &ldquo;Service&rdquo;), operated by {site.legalName}{" "}
        (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). By creating an account
        or using the Service, you agree to these terms.
      </p>

      <LegalSection title="1. The Service">
        <p>
          {site.name} reads shrimp pond laboratory reports, evaluates the parameters
          against scientific thresholds, and provides plain-language explanations and
          recommendations in English and Telugu.{" "}
          <strong>
            {site.name} is a decision-support tool, not a substitute for professional
            agronomic, veterinary or laboratory advice.
          </strong>{" "}
          Decisions with material financial or biological consequences should still be
          reviewed by a qualified consultant.
        </p>
      </LegalSection>

      <LegalSection title="2. Accounts">
        <p>
          You must provide accurate information when creating an account and keep your
          login credentials secure. You are responsible for activity that occurs under
          your account.
        </p>
      </LegalSection>

      <LegalSection title="3. Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Upload content you do not have the right to share.</li>
          <li>Attempt to reverse-engineer, disrupt, or gain unauthorised access to the Service.</li>
          <li>Use the Service for any unlawful purpose.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. WhatsApp and other communications">
        <p>
          Where you provide a phone number and consent, we may contact you over
          WhatsApp (via the WhatsApp Business Platform and our Business Solution
          Provider, AiSensy) with report results, service notifications and, where
          opted in, marketing messages. See our{" "}
          <a
            href="/privacy-policy/"
            className="font-medium text-teal-ink underline decoration-brand-200 underline-offset-4"
          >
            Privacy Policy
          </a>{" "}
          for details and how to opt out.
        </p>
      </LegalSection>

      <LegalSection title="5. Intellectual property">
        <p>
          The Service, including its software, rule engine, and content, is owned by{" "}
          {site.legalName} or its licensors. You retain ownership of the reports and
          data you upload; you grant us a licence to process it solely to provide the
          Service to you.
        </p>
      </LegalSection>

      <LegalSection title="6. Disclaimers and limitation of liability">
        <p>
          The Service is provided &ldquo;as is&rdquo; without warranties of any kind.
          To the fullest extent permitted by law, {site.legalName} is not liable for
          any indirect, incidental, or consequential damages, including loss of crop,
          income, or livestock arising from reliance on the Service&rsquo;s output.
        </p>
      </LegalSection>

      <LegalSection title="7. Termination">
        <p>
          You may stop using the Service at any time. We may suspend or terminate
          access if these terms are violated, or to comply with legal obligations.
        </p>
      </LegalSection>

      <LegalSection title="8. Governing law">
        <p>
          These terms are governed by the laws of India, and disputes are subject to
          the exclusive jurisdiction of the courts having jurisdiction over{" "}
          {site.location}.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to these terms">
        <p>
          We may update these terms from time to time. Continued use of the Service
          after changes take effect constitutes acceptance of the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact us">
        <p>
          Questions about these terms can be sent to{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-teal-ink underline decoration-brand-200 underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
