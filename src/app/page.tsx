import DirectService from "@/components/DirectService";
import FaqAndForm from "@/components/FaqAndForm";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Problems from "@/components/Problems";
import SpecificService from "@/components/SpecificService";
import TrustBanner from "@/components/TrustBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBanner />
        <DirectService />
        <Problems />
        <SpecificService />
        <HowItWorks />
        <FaqAndForm />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
