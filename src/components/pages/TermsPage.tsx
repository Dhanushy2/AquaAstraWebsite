import LegalPage, { LegalLink, LegalSection } from "@/components/LegalPage";
import { getContent } from "@/lib/content-i18n";
import { localePath, type Lang } from "@/lib/i18n";

export const termsPath = "/terms-and-conditions/";

const UPDATED = { en: "20 September 2026", te: "20 సెప్టెంబర్ 2026" };

export function termsMeta(lang: Lang) {
  const { site } = getContent(lang);
  return lang === "te"
    ? {
        title: "నిబంధనలు & షరతులు",
        description: `${site.legalName} నిర్వహించే ${site.name} యాప్, వెబ్‌సైట్ వినియోగాన్ని నియంత్రించే నిబంధనలు.`,
      }
    : {
        title: "Terms & Conditions",
        description: `The terms that govern use of the ${site.name} app and website, operated by ${site.legalName}.`,
      };
}

export default function TermsPage({ lang }: { lang: Lang }) {
  const { site } = getContent(lang);
  const mail = <LegalLink href={`mailto:${site.email}`}>{site.email}</LegalLink>;

  if (lang === "te") {
    return (
      <LegalPage lang="te" path={termsPath} title="నిబంధనలు & షరతులు" updated={UPDATED.te}>
        <p>
          ఈ నిబంధనలు {site.legalName} (“మేము” లేదా “మా”) నిర్వహించే {site.name} మొబైల్ యాప్, వెబ్‌సైట్
          (కలిపి “సేవ”) వినియోగాన్ని నియంత్రిస్తాయి. ఖాతా సృష్టించడం ద్వారా లేదా సేవను ఉపయోగించడం
          ద్వారా మీరు ఈ నిబంధనలకు అంగీకరిస్తున్నారు.
        </p>

        <LegalSection title="1. సేవ">
          <p>
            {site.name} రొయ్యల చెరువు ల్యాబ్ రిపోర్ట్‌లను చదివి, పారామీటర్లను శాస్త్రీయ పరిమితులతో
            పోల్చి, English మరియు తెలుగులో సులభమైన వివరణలు, సిఫార్సులు అందిస్తుంది.{" "}
            <strong>
              {site.name} నిర్ణయాలకు సహాయపడే సాధనం మాత్రమే; వృత్తిపరమైన వ్యవసాయ, పశువైద్య లేదా ల్యాబ్
              సలహాకు ప్రత్యామ్నాయం కాదు.
            </strong>{" "}
            ఆర్థికంగా లేదా జీవపరంగా ముఖ్యమైన పరిణామాలున్న నిర్ణయాలను అర్హత కలిగిన కన్సల్టెంట్ ఒకసారి
            సమీక్షించడం మంచిది.
          </p>
        </LegalSection>

        <LegalSection title="2. ఖాతాలు">
          <p>
            ఖాతా సృష్టించేటప్పుడు ఖచ్చితమైన సమాచారం ఇవ్వాలి, మీ లాగిన్ వివరాలను సురక్షితంగా ఉంచుకోవాలి.
            మీ ఖాతా కింద జరిగే కార్యకలాపాలకు మీరే బాధ్యులు.
          </p>
        </LegalSection>

        <LegalSection title="3. ఆమోదయోగ్య వినియోగం">
          <p>మీరు ఈ క్రింది వాటిని చేయకూడదు:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>పంచుకునే హక్కు మీకు లేని కంటెంట్‌ను అప్‌లోడ్ చేయడం.</li>
            <li>
              సేవను రివర్స్-ఇంజనీర్ చేయడానికి, అంతరాయం కలిగించడానికి లేదా అనధికారంగా ప్రవేశించడానికి
              ప్రయత్నించడం.
            </li>
            <li>సేవను ఏదైనా చట్టవిరుద్ధ ప్రయోజనం కోసం ఉపయోగించడం.</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. WhatsApp, ఇతర సంభాషణలు">
          <p>
            మీరు ఫోన్ నంబర్ ఇచ్చి, సమ్మతి తెలిపినప్పుడు, రిపోర్ట్ ఫలితాలు, సేవ నోటిఫికేషన్‌లు, మీరు
            అంగీకరించి ఉంటే మార్కెటింగ్ సందేశాలతో WhatsApp ద్వారా (WhatsApp Business Platform, మా
            బిజినెస్ సొల్యూషన్ ప్రొవైడర్ AiSensy ద్వారా) మిమ్మల్ని సంప్రదించవచ్చు. వివరాల కోసం, వద్దనుకుంటే
            ఎలా ఆపాలో తెలుసుకోవడానికి మా{" "}
            <LegalLink href={localePath("te", "/privacy-policy/")}>గోప్యతా విధానం</LegalLink> చూడండి.
          </p>
        </LegalSection>

        <LegalSection title="5. మేధో సంపత్తి">
          <p>
            సేవ — దాని సాఫ్ట్‌వేర్, రూల్ ఇంజిన్, కంటెంట్‌తో సహా — {site.legalName} లేదా దాని
            లైసెన్సర్లకు చెందుతుంది. మీరు అప్‌లోడ్ చేసే రిపోర్ట్‌లు, డేటాపై యాజమాన్యం మీదే; సేవను మీకు
            అందించడానికి మాత్రమే వాటిని ప్రాసెస్ చేసేందుకు మీరు మాకు లైసెన్స్ ఇస్తున్నారు.
          </p>
        </LegalSection>

        <LegalSection title="6. నిరాకరణలు, బాధ్యత పరిమితి">
          <p>
            సేవ ఏ విధమైన హామీ లేకుండా “ఉన్నది ఉన్నట్లుగా” అందించబడుతుంది. చట్టం అనుమతించే గరిష్ట
            పరిధి వరకు, సేవ ఫలితాలపై ఆధారపడటం వల్ల కలిగే పంట, ఆదాయం లేదా పశు నష్టంతో సహా పరోక్ష,
            అనుషంగిక లేదా పర్యవసాన నష్టాలకు {site.legalName} బాధ్యత వహించదు.
          </p>
        </LegalSection>

        <LegalSection title="7. రద్దు">
          <p>
            మీరు సేవను ఎప్పుడైనా ఉపయోగించడం ఆపవచ్చు. ఈ నిబంధనలు ఉల్లంఘించినా, లేదా చట్టపరమైన
            బాధ్యతలను పాటించడానికి అవసరమైనా, మేము యాక్సెస్‌ను నిలిపివేయవచ్చు లేదా రద్దు చేయవచ్చు.
          </p>
        </LegalSection>

        <LegalSection title="8. వర్తించే చట్టం">
          <p>
            ఈ నిబంధనలు భారతదేశ చట్టాలకు లోబడి ఉంటాయి; వివాదాలు {site.location} పై అధికార పరిధి
            కలిగిన న్యాయస్థానాల ప్రత్యేక అధికార పరిధికి లోబడి ఉంటాయి.
          </p>
        </LegalSection>

        <LegalSection title="9. ఈ నిబంధనలలో మార్పులు">
          <p>
            ఈ నిబంధనలను మేము అప్పుడప్పుడు నవీకరించవచ్చు. మార్పులు అమల్లోకి వచ్చిన తర్వాత కూడా సేవను
            ఉపయోగించడం, నవీకరించిన నిబంధనలకు అంగీకారంగా పరిగణించబడుతుంది.
          </p>
        </LegalSection>

        <LegalSection title="10. మమ్మల్ని సంప్రదించండి">
          <p>ఈ నిబంధనల గురించి ప్రశ్నలను {mail} కు పంపవచ్చు.</p>
        </LegalSection>
      </LegalPage>
    );
  }

  return (
    <LegalPage lang="en" path={termsPath} title="Terms & Conditions" updated={UPDATED.en}>
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
          <LegalLink href="/privacy-policy/">Privacy Policy</LegalLink> for details and
          how to opt out.
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
        <p>Questions about these terms can be sent to {mail}.</p>
      </LegalSection>
    </LegalPage>
  );
}
