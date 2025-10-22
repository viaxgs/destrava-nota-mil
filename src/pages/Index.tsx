import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
