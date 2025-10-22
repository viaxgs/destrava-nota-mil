import { Button } from "@/components/ui/button";
import { Check, Sparkles, Shield, Zap } from "lucide-react";

const Pricing = () => {
  const handleBuyClick = () => {
    window.open("https://pay.kiwify.com.br/seu-link-aqui", "_blank");
  };

  return (
    <section id="oferta" className="py-12 sm:py-16 lg:py-24 bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-divider-gradient" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-card-gradient backdrop-blur-glass px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-primary/20 shadow-card text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-foreground/90 font-medium">Oferta Especial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground font-poppins px-4">
            Por <span className="text-primary">menos que uma pizza.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="w-full max-w-2xl bg-card-gradient backdrop-blur-glass rounded-2xl p-6 sm:p-8 shadow-card border-2 border-primary/20">
              <div className="text-center mb-6">
                <div className="text-xs sm:text-sm text-muted-foreground line-through mb-2">De R$ 97,00</div>
                <div className="text-5xl sm:text-6xl font-black text-primary mb-2 font-poppins">R$ 29,99</div>
                <div className="text-base sm:text-lg text-muted-foreground font-medium">Pagamento único • Acesso vitalício</div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Correções ilimitadas de redações",
                  "Análise das 5 competências do ENEM",
                  "Feedback detalhado em segundos",
                  "Versões nota 1000 para aprender",
                  "Banco de temas e repertórios",
                  "Suporte humano via WhatsApp",
                  "Atualizações gratuitas",
                  "Garantia de satisfação"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3 group">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-foreground font-medium text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                onClick={handleBuyClick}
                className="w-full bg-yellow-gradient text-accent-foreground font-bold text-lg sm:text-xl py-6 sm:py-7 shadow-glow hover:shadow-glow-hover transition-all duration-200 hover:-translate-y-0.5 rounded-[14px] border-0 hover:brightness-105 mb-6 min-h-[52px]"
              >
                Quero destravar minha redação agora! 🚀
              </Button>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight">Pagamento Seguro</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight">Acesso Imediato</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight">Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card-gradient backdrop-blur-glass border border-primary/20 rounded-2xl p-5 sm:p-6 text-center max-w-3xl mx-auto shadow-card">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-3 font-poppins">
              💯 Comparação de Valor
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-left">
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
                <div className="font-bold text-muted-foreground mb-2 text-sm sm:text-base">Aula particular:</div>
                <div className="text-destructive font-bold text-lg sm:text-xl">R$ 80-150 por hora</div>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                <div className="font-bold text-foreground mb-2 text-sm sm:text-base">Destrava Redação:</div>
                <div className="text-primary font-bold text-lg sm:text-xl">R$ 29,99 para sempre</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-divider-gradient" />
    </section>
  );
};

export default Pricing;
