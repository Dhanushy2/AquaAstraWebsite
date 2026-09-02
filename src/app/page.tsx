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

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Audience />
        <Roadmap />
        <Faq />
        <GetApp />
      </main>
      <Footer />
    </>
  );
}
