import Audience from "@/components/Audience";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Problem from "@/components/Problem";
import Roadmap from "@/components/Roadmap";
import type { Lang } from "@/lib/i18n";

/** The home page, in either language. `/` is English and `/te/` is Telugu. */
export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <Header lang={lang} path="/" />
      <main id="main">
        <Hero lang={lang} />
        <Problem lang={lang} />
        <HowItWorks lang={lang} />
        <Features lang={lang} />
        <Audience lang={lang} />
        <Roadmap lang={lang} />
        <Faq lang={lang} />
        <GetApp lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
