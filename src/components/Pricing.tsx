import { Button } from "@/components/ui/button";
import { Check, Sparkles, Shield, Zap } from "lucide-react";
import beforeAfterImage from "@/assets/before-after.jpg";

const Pricing = () => {
  const handleBuyClick = () => {
    window.open("https://pay.kiwify.com.br/seu-link-aqui", "_blank");
  };

  return (
    <section id="oferta" className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full text-accent-foreground font-medium">
            <Sparkles className="w-4 h-4 text-accent" />
            Oferta Especial
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Invista em você por <span className="text-accent">menos que uma pizza</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative">
              <img 
                src={beforeAfterImage} 
                alt="Antes e depois da correção - de 520 para 980 pontos" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-xl border-2 border-accent">
              <div className="text-center mb-6">
                <div className="text-sm text-muted-foreground line-through mb-2">De R$ 97,00</div>
                <div className="text-6xl font-black text-accent mb-2">R$ 29,99</div>
                <div className="text-lg text-muted-foreground font-medium">Pagamento único • Acesso vitalício</div>
              </div>

              <div className="space-y-4 mb-8">
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
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                onClick={handleBuyClick}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl py-7 shadow-glow hover:scale-105 transition-all duration-300"
              >
                Quero destravar minha redação agora! 🚀
              </Button>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Pagamento Seguro</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Acesso Imediato</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 border-2 border-accent rounded-xl p-6 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              💯 Comparação de Valor
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-background rounded-lg p-4">
                <div className="font-bold text-muted-foreground mb-2">Aula particular:</div>
                <div className="text-destructive font-bold">R$ 80-150 por hora</div>
              </div>
              <div className="bg-background rounded-lg p-4">
                <div className="font-bold text-primary mb-2">Destrava Redação:</div>
                <div className="text-accent font-bold">R$ 29,99 para sempre</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
