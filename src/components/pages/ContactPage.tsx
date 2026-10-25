import LegalPage, { LegalLink, LegalSection } from "@/components/LegalPage";
import { getContent } from "@/lib/content-i18n";
import type { Lang } from "@/lib/i18n";

export const contactPath = "/contact-us/";

export function contactMeta(lang: Lang) {
  const { site, ui } = getContent(lang);
  return {
    title: ui.contact.metaTitle,
    description:
      lang === "te"
        ? `${site.name} వెనుక ఉన్న ${site.legalName} బృందాన్ని ఎలా సంప్రదించాలి.`
        : `How to reach ${site.legalName}, the team behind ${site.name}.`,
  };
}

export default function ContactPage({ lang }: { lang: Lang }) {
  const { site, ui } = getContent(lang);
  const t = ui.contact;
  return (
    <LegalPage lang={lang} path={contactPath} title={t.title} updated={t.updated}>
      <LegalSection title={t.businessDetails}>
        <p>
          <strong>{site.legalName}</strong>
          <br />
          {site.registeredAddress}
        </p>
      </LegalSection>

      <LegalSection title={t.getInTouch}>
        <p>
          {t.email} <LegalLink href={`mailto:${site.email}`}>{site.email}</LegalLink>
        </p>
        <p>
          {t.phone} <LegalLink href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</LegalLink>
        </p>
      </LegalSection>

      <LegalSection title={t.supportHours}>
        <p>{t.supportText}</p>
      </LegalSection>
    </LegalPage>
  );
}
