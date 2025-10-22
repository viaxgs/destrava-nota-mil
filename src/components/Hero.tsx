import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-card-gradient backdrop-blur-glass px-5 py-2.5 rounded-full border border-white/10 shadow-card">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-foreground/90 font-medium text-sm">Baseado nas 5 Competências do ENEM</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] font-poppins">
              Destrave sua Redação e
              <span className="block text-primary mt-2"> vá buscar a Nota 1000.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              IA especialista que analisa, corrige e reescreve suas redações em segundos — com base nos critérios oficiais do ENEM.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToPricing}
                className="bg-yellow-gradient text-accent-foreground font-bold text-lg px-8 py-7 shadow-glow hover:shadow-glow-hover transition-all duration-200 hover:-translate-y-0.5 rounded-[14px] border-0 hover:brightness-105"
              >
                Quero destravar minha redação agora
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToHowItWorks}
                className="border-2 border-foreground/20 text-foreground font-bold text-lg px-8 py-7 rounded-[14px] hover:bg-primary hover:text-accent-foreground hover:border-primary transition-all duration-200"
              >
                Ver como funciona
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">R$ 29,99</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-white/10">
              <img 
                src={heroImage} 
                alt="Interface IA corrigindo redação do ENEM em tempo real" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-gradient text-accent-foreground px-6 py-4 rounded-xl shadow-glow-hover font-black text-2xl border border-primary/20">
              Nota 1000 🎯
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
