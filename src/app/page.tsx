import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Features />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
