import LegalPage, { LegalLink, LegalSection } from "@/components/LegalPage";
import { getContent } from "@/lib/content-i18n";
import { localePath, type Lang } from "@/lib/i18n";

export const privacyPath = "/privacy-policy/";

const UPDATED = { en: "20 September 2026", te: "20 సెప్టెంబర్ 2026" };

export function privacyMeta(lang: Lang) {
  const { site } = getContent(lang);
  return lang === "te"
    ? {
        title: "గోప్యతా విధానం",
        description: `${site.name} యాప్, వెబ్‌సైట్, WhatsApp సందేశాల ద్వారా ${site.legalName} మీ డేటాను ఎలా సేకరిస్తుంది, ఉపయోగిస్తుంది, కాపాడుతుంది.`,
      }
    : {
        title: "Privacy Policy",
        description: `How ${site.legalName} collects, uses and protects your data across the ${site.name} app, website and WhatsApp messaging.`,
      };
}

export default function PrivacyPage({ lang }: { lang: Lang }) {
  const { site } = getContent(lang);
  const mail = <LegalLink href={`mailto:${site.email}`}>{site.email}</LegalLink>;
  const domain = site.url.replace("https://", "");

  if (lang === "te") {
    return (
      <LegalPage lang="te" path={privacyPath} title="గోప్యతా విధానం" updated={UPDATED.te}>
        <p>
          {site.legalName} (“{site.name}”, “మేము” లేదా “మా”) {site.name} మొబైల్ యాప్‌ను, {domain}{" "}
          వెబ్‌సైట్‌ను (కలిపి “సేవ”) నిర్వహిస్తుంది. మేము ఏ సమాచారం సేకరిస్తాం, దానిని ఎలా
          ఉపయోగిస్తాం, మీకు ఉన్న ఎంపికలు ఏమిటి — WhatsApp ద్వారా మిమ్మల్ని సంప్రదించినప్పుడు
          సహా — అనేది ఈ విధానం వివరిస్తుంది.
        </p>

        <LegalSection title="1. మేము సేకరించే సమాచారం">
          <p>మేము ఈ కింది రకాల సమాచారాన్ని సేకరిస్తాం:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>ఖాతా సమాచారం:</strong> మీ పేరు, ఫోన్ నంబర్, ఈమెయిల్ చిరునామా, మీరు ఎంచుకున్న
              భాష (English లేదా తెలుగు).
            </li>
            <li>
              <strong>ఫారమ్, రిపోర్ట్ డేటా:</strong> మీరు అప్‌లోడ్ చేసే ల్యాబ్ రిపోర్ట్ ఫోటోలు లేదా
              PDFలు, వాటి నుంచి తీసిన పారామీటర్ విలువలు, హెల్త్ స్కోర్‌లు, మీరు వాటికి అనుసంధానించే
              ఫారమ్‌లు/చెరువులు.
            </li>
            <li>
              <strong>సంభాషణలు:</strong> సపోర్ట్ కోసం మీరు మాకు పంపే సందేశాలు, మేము మీకు పంపే
              సందేశాల విషయం (WhatsApp ద్వారా పంపేవి సహా).
            </li>
            <li>
              <strong>పరికరం, వినియోగ డేటా:</strong> యాప్ వెర్షన్, పరికరం రకం, సమస్యలను గుర్తించడానికి,
              సేవను మెరుగుపరచడానికి ఉపయోగించే ప్రాథమిక వినియోగ లాగ్‌లు.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="2. WhatsApp సందేశాలు">
          <p>
            మీరు మీ ఫోన్ నంబర్ ఇచ్చి, WhatsApp అప్‌డేట్‌లకు అంగీకరిస్తే, Meta Platforms, Inc.
            (“Meta”) నిర్వహించే WhatsApp Business Platform ద్వారా, Meta అనుమతి పొందిన బిజినెస్
            సొల్యూషన్ ప్రొవైడర్ (ప్రస్తుతం AiSensy) సహాయంతో మీకు సందేశాలు పంపుతాం. వీటిలో ఉండవచ్చు:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>లావాదేవీ సందేశాలు:</strong> ల్యాబ్ రిపోర్ట్ విశ్లేషణ ఫలితాలు, చెరువు ఆరోగ్య
              హెచ్చరికలు, ఖాతా లేదా సేవ సంబంధిత నోటిఫికేషన్‌లు.
            </li>
            <li>
              <strong>మార్కెటింగ్ సందేశాలు:</strong> ఉత్పత్తి అప్‌డేట్‌లు, కొత్త ఫీచర్లు, ఆఫర్లు — మీరు
              అంగీకరించినప్పుడు మాత్రమే పంపుతాం.
            </li>
          </ul>
          <p>
            ఈ సందేశాలు అందించడానికి, మీ ఫోన్ నంబర్‌ను, సంబంధిత సందేశ విషయాన్ని Metaకు, మా బిజినెస్
            సొల్యూషన్ ప్రొవైడర్‌కు పంచుకుంటాం; వారు మా ప్రాసెసర్లుగా తమ సొంత గోప్యతా, డేటా-ప్రాసెసింగ్
            నిబంధనల ప్రకారం ఈ డేటాను నిర్వహిస్తారు. WhatsAppలో “STOP” అని రిప్లై చేయడం ద్వారా లేదా{" "}
            {mail} వద్ద మమ్మల్ని సంప్రదించడం ద్వారా మార్కెటింగ్ సందేశాలను ఎప్పుడైనా ఆపవచ్చు. మీరు
            సమర్పించిన రిపోర్ట్‌కు నేరుగా సంబంధించిన లావాదేవీ సందేశాలు, మీరు కోరిన సేవను అందించడంలో
            భాగంగా కొనసాగవచ్చు.
          </p>
        </LegalSection>

        <LegalSection title="3. మీ సమాచారాన్ని మేము ఎలా ఉపయోగిస్తాం">
          <ul className="list-disc space-y-2 pl-5">
            <li>రిపోర్ట్ విశ్లేషణ, హెల్త్ స్కోర్‌లు, సిఫార్సులు అందించడానికి.</li>
            <li>పైన వివరించిన లావాదేవీ, మార్కెటింగ్ సందేశాలు పంపడానికి.</li>
            <li>ఒక చెరువు, ఫారమ్ రిపోర్ట్ చరిత్రను కాలక్రమేణా భద్రపరచడానికి.</li>
            <li>కస్టమర్ సపోర్ట్ ఇవ్వడానికి, మీ అభ్యర్థనలకు స్పందించడానికి.</li>
            <li>సేవ ఖచ్చితత్వాన్ని, నమ్మకాన్ని మెరుగుపరచడానికి.</li>
            <li>చట్టపరమైన, నియంత్రణ, భద్రతా బాధ్యతలను నెరవేర్చడానికి.</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. మేము ఎవరితో సమాచారం పంచుకుంటాం">
          <p>మేము మీ వ్యక్తిగత సమాచారాన్ని అమ్మము. కేవలం వీరితో మాత్రమే పంచుకుంటాం:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              2వ విభాగంలో వివరించినట్లు WhatsApp సందేశాలు అందించడానికి Meta, మా WhatsApp బిజినెస్
              సొల్యూషన్ ప్రొవైడర్ (AiSensy).
            </li>
            <li>
              మా తరపున డేటాను నిల్వ చేసే క్లౌడ్ ఇన్‌ఫ్రాస్ట్రక్చర్, హోస్టింగ్ ప్రొవైడర్లు — గోప్యత
              పాటించాలనే ఒప్పంద బాధ్యతలతో.
            </li>
            <li>వర్తించే చట్టం కోరినప్పుడు అధికారులకు.</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. డేటా నిలుపుదల, భద్రత">
          <p>
            మీ ఖాతా క్రియాశీలంగా ఉన్నంత కాలం రిపోర్ట్, ఖాతా డేటాను ఉంచుతాం — తద్వారా మీరు చెరువు
            చరిత్రను కాలక్రమేణా చూసుకోవచ్చు. మీ డేటాను కాపాడటానికి ఎన్‌క్రిప్టెడ్ నిల్వ, యాక్సెస్
            నియంత్రణలతో సహా పరిశ్రమ ప్రమాణాల సాంకేతిక, సంస్థాగత చర్యలు ఉపయోగిస్తాం. ఏ ప్రసార లేదా
            నిల్వ పద్ధతీ పూర్తిగా సురక్షితం కాదు; పూర్తి భద్రతకు మేము హామీ ఇవ్వలేము.
          </p>
        </LegalSection>

        <LegalSection title="6. మీ హక్కులు">
          <p>
            మీ వ్యక్తిగత సమాచారాన్ని చూడటానికి, సరిచేయడానికి లేదా తొలగించడానికి అభ్యర్థించవచ్చు;
            WhatsApp లేదా మార్కెటింగ్ సందేశాలకు ఇచ్చిన సమ్మతిని ఎప్పుడైనా ఉపసంహరించుకోవచ్చు — {mail}{" "}
            కు వ్రాయండి. వర్తించే చట్టానికి అనుగుణంగా, సహేతుక సమయంలో స్పందిస్తాం.
          </p>
        </LegalSection>

        <LegalSection title="7. పిల్లల గోప్యత">
          <p>
            ఈ సేవ పెద్దలు వ్యాపార, వ్యవసాయ అవసరాల కోసం ఉపయోగించడానికి ఉద్దేశించింది; పిల్లల కోసం
            కాదు. పిల్లల నుంచి వ్యక్తిగత సమాచారాన్ని మేము తెలిసి సేకరించము.
          </p>
        </LegalSection>

        <LegalSection title="8. ఈ విధానంలో మార్పులు">
          <p>
            ఈ విధానాన్ని మేము అప్పుడప్పుడు నవీకరించవచ్చు. ముఖ్యమైన మార్పులను పైన ఉన్న “చివరిగా
            నవీకరించినది” తేదీని మార్చడం ద్వారా తెలియజేస్తాం; అవసరమైతే యాప్ ద్వారా లేదా ఈమెయిల్
            ద్వారా కూడా తెలియజేస్తాం.
          </p>
        </LegalSection>

        <LegalSection title="9. మమ్మల్ని సంప్రదించండి">
          <p>
            గోప్యత గురించి ఏ ప్రశ్నలు లేదా అభ్యర్థనల కోసమైనా {site.legalName}ను {mail} వద్ద
            సంప్రదించండి, లేదా మా{" "}
            <LegalLink href={localePath("te", "/contact-us/")}>మమ్మల్ని సంప్రదించండి</LegalLink> పేజీ
            చూడండి.
          </p>
        </LegalSection>
      </LegalPage>
    );
  }

  return (
    <LegalPage lang="en" path={privacyPath} title="Privacy Policy" updated={UPDATED.en}>
      <p>
        {site.legalName} (&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
        &ldquo;our&rdquo;) operates the {site.name} mobile app and the website at {domain}{" "}
        (together, the &ldquo;Service&rdquo;). This policy explains what information we
        collect, how we use it, and the choices you have — including when we contact you
        over WhatsApp.
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
          &ldquo;STOP&rdquo; on WhatsApp or by contacting us at {mail}. Transactional
          messages directly related to a report you submitted may continue as part of
          delivering the Service you requested.
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
          communications at any time, by writing to {mail}. We will respond within a
          reasonable time and in line with applicable law.
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
          For any privacy questions or requests, contact {site.legalName} at {mail} or
          see our <LegalLink href="/contact-us/">Contact Us</LegalLink> page.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
