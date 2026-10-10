import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} collects, uses and protects your data across the ${site.name} app, website and WhatsApp messaging.`,
};

const UPDATED = "20 September 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated={UPDATED}>
      <p>
        {site.legalName} (&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
        &ldquo;our&rdquo;) operates the {site.name} mobile app and the website at{" "}
        {site.url.replace("https://", "")} (together, the &ldquo;Service&rdquo;). This
        policy explains what information we collect, how we use it, and the choices you
        have — including when we contact you over WhatsApp.
      </p>

      <LegalSection title="1. Information we collect">
        <p>We collect the following categories of information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Account information:</strong> your name, phone number, email
            address, and preferred language (English or Telugu).
          </li>
          <li>
            <strong>Farm and report data:</strong> lab report photos or PDFs you upload,
            the extracted parameter values, health scores, and the farms/ponds you
            associate with them.
          </li>
          <li>
            <strong>Communications:</strong> messages you send us for support, and the
            content of messages we send you (including over WhatsApp).
          </li>
          <li>
            <strong>Device and usage data:</strong> app version, device type, and basic
            usage logs used to diagnose issues and improve the Service.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. WhatsApp messaging">
        <p>
          If you provide your phone number and consent to WhatsApp updates, we send
          messages to you using the WhatsApp Business Platform, operated by Meta
          Platforms, Inc. (&ldquo;Meta&rdquo;), through a Meta-authorised Business
          Solution Provider (currently AiSensy). This may include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Transactional messages:</strong> lab report analysis results, pond
            health alerts, and account or service notifications.
          </li>
          <li>
            <strong>Marketing messages:</strong> product updates, new features, and
            offers, sent only where you have opted in.
          </li>
        </ul>
        <p>
          To deliver these messages, we share your phone number and the relevant
          message content with Meta and our Business Solution Provider, who process
          this data under their own privacy and data-processing terms as our
          processors. You can opt out of marketing messages at any time by replying
          &ldquo;STOP&rdquo; on WhatsApp or by contacting us at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-teal-ink underline decoration-brand-200 underline-offset-4"
          >
            {site.email}
          </a>
          . Transactional messages directly related to a report you submitted may
          continue as part of delivering the Service you requested.
        </p>
      </LegalSection>

      <LegalSection title="3. How we use your information">
        <ul className="list-disc space-y-2 pl-5">
          <li>To provide report analysis, health scores and recommendations.</li>
          <li>To send the transactional and marketing messages described above.</li>
          <li>To maintain your report history across a pond and farm over time.</li>
          <li>To provide customer support and respond to your requests.</li>
          <li>To improve the accuracy and reliability of the Service.</li>
          <li>To meet legal, regulatory and security obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Who we share information with">
        <p>We do not sell your personal information. We share it only with:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Meta and our WhatsApp Business Solution Provider (AiSensy), to deliver
            WhatsApp messages as described in Section 2.
          </li>
          <li>
            Cloud infrastructure and hosting providers who store data on our behalf,
            under contractual confidentiality obligations.
          </li>
          <li>Authorities, where required by applicable law.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Data retention and security">
        <p>
          We retain report and account data for as long as your account is active, so
          that you can review a pond&rsquo;s history over time. We use industry-standard
          technical and organisational measures to protect your data, including
          encrypted storage and access controls. No method of transmission or storage
          is completely secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="6. Your rights">
        <p>
          You may request access to, correction of, or deletion of your personal
          information, and you may withdraw consent to WhatsApp or marketing
          communications at any time, by writing to{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-teal-ink underline decoration-brand-200 underline-offset-4"
          >
            {site.email}
          </a>
          . We will respond within a reasonable time and in line with applicable law.
        </p>
      </LegalSection>

      <LegalSection title="7. Children’s privacy">
        <p>
          The Service is intended for business and agricultural use by adults and is
          not directed at children. We do not knowingly collect personal information
          from children.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to this policy">
        <p>
          We may update this policy from time to time. Material changes will be
          reflected by updating the &ldquo;Last updated&rdquo; date above, and where
          appropriate, we will notify you through the app or by email.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact us">
        <p>
          For any privacy questions or requests, contact {site.legalName} at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-teal-ink underline decoration-brand-200 underline-offset-4"
          >
            {site.email}
          </a>{" "}
          or see our{" "}
          <a
            href="/contact-us/"
            className="font-medium text-teal-ink underline decoration-brand-200 underline-offset-4"
          >
            Contact Us
          </a>{" "}
          page.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
