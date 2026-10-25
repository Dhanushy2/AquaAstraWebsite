import LegalPage, { LegalLink, LegalSection } from "@/components/LegalPage";
import { getContent } from "@/lib/content-i18n";
import type { Lang } from "@/lib/i18n";

export const refundPath = "/refund-and-cancellation/";

const UPDATED = { en: "20 September 2026", te: "20 సెప్టెంబర్ 2026" };

export function refundMeta(lang: Lang) {
  const { site } = getContent(lang);
  return lang === "te"
    ? {
        title: "రీఫండ్ & రద్దు",
        description: `${site.legalName} నిర్వహించే ${site.name} యాప్ రీఫండ్, రద్దు విధానం.`,
      }
    : {
        title: "Refund & Cancellation",
        description: `Refund and cancellation policy for the ${site.name} app, operated by ${site.legalName}.`,
      };
}

export default function RefundPage({ lang }: { lang: Lang }) {
  const { site } = getContent(lang);
  const mail = <LegalLink href={`mailto:${site.email}`}>{site.email}</LegalLink>;

  if (lang === "te") {
    return (
      <LegalPage lang="te" path={refundPath} title="రీఫండ్ & రద్దు" updated={UPDATED.te}>
        <LegalSection title="1. ప్రస్తుత స్థితి">
          <p>
            {site.name} ప్రస్తుతం ప్రీ-లాంచ్ దశలో ఉంది, యాక్సెస్ కోసం ఎలాంటి రుసుము వసూలు చేయదు. ఇప్పుడు
            ఎలాంటి చెల్లింపులు తీసుకోవడం లేదు కాబట్టి ఈ దశలో రీఫండ్ వర్తించదు. ఏదైనా చెల్లింపు ప్లాన్
            ప్రారంభించే ముందు ఈ పేజీని పూర్తి బిల్లింగ్ నిబంధనలతో నవీకరిస్తాం.
          </p>
        </LegalSection>

        <LegalSection title="2. భవిష్యత్ చెల్లింపు ప్లాన్లు">
          <p>
            చెల్లింపు ప్లాన్లు అందుబాటులోకి వచ్చినప్పుడు, ఏదైనా ప్లాన్ వేరుగా పేర్కొనకపోతే ఇవి
            వర్తిస్తాయి:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>యాప్ లోపలి నుంచే సబ్‌స్క్రిప్షన్‌ను ఎప్పుడైనా రద్దు చేయవచ్చు.</li>
            <li>
              రద్దు చేస్తే భవిష్యత్ బిల్లింగ్ ఆగుతుంది; ప్రస్తుత బిల్లింగ్ కాలానికి రీఫండ్ ఆటోమేటిక్‌గా
              రాదు.
            </li>
            <li>
              చార్జ్ అయిన 7 రోజుల్లోపు, చెల్లింపు ఫీచర్లు ఉపయోగించకపోతే చేసిన రీఫండ్ అభ్యర్థనలను
              సమీక్షిస్తాం; మా విచక్షణ మేరకు ఆమోదించవచ్చు.
            </li>
            <li>ఆమోదించిన రీఫండ్‌లు అసలు చెల్లింపు పద్ధతికే జమ చేయబడతాయి.</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. రీఫండ్ లేదా రద్దు ఎలా కోరాలి">
          <p>
            మీ ఖాతా వివరాలు, అభ్యర్థనకు కారణంతో {mail} కు ఈమెయిల్ చేయండి. 3 పని దినాల్లో స్పందించడానికి
            ప్రయత్నిస్తాం.
          </p>
        </LegalSection>
      </LegalPage>
    );
  }

  return (
    <LegalPage lang="en" path={refundPath} title="Refund & Cancellation" updated={UPDATED.en}>
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
          Email {mail} with your account details and the reason for your request. We
          aim to respond within 3 business days.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
