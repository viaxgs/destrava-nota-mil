import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-glass border-t border-white/10 p-3 sm:p-4 shadow-elegant">
      <div className="container mx-auto">
        <Button
          onClick={scrollToPricing}
          className="w-full bg-yellow-gradient text-accent-foreground font-bold text-base sm:text-lg py-6 shadow-glow hover:shadow-glow-hover transition-all duration-200 rounded-[14px] border-0 hover:brightness-105 min-h-[52px]"
        >
          Quero destravar agora! 🚀
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
