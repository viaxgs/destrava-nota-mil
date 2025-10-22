import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, TrendingUp, CheckCircle2 } from "lucide-react";
import aiAnalysisImage from "@/assets/ai-analysis.jpg";

const Solution = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Especialista em ENEM",
      description: "Treinada com milhares de redações nota 1000 e os critérios oficiais do Inep"
    },
    {
      icon: Zap,
      title: "Correção em Segundos",
      description: "Análise completa das 5 competências em menos de 10 segundos"
    },
    {
      icon: Target,
      title: "Feedback Detalhado",
      description: "Explica cada erro e mostra exatamente como melhorar"
    },
    {
      icon: TrendingUp,
      title: "Evolução Garantida",
      description: "Reescreve sua redação com padrão nota 1000 para você aprender"
    }
  ];

  const scrollToPricing = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-accent-foreground font-medium text-sm">
            <Brain className="w-4 h-4 text-accent" />
            A Solução
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Conheça o <span className="text-primary">DESTRAVA REDAÇÃO ENEM</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            O professor particular de redação que <span className="font-bold text-accent">nunca dorme</span> e está sempre disponível para você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div className="relative">
            <img 
              src={aiAnalysisImage} 
              alt="IA analisando as 5 competências do ENEM" 
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold shadow-glow">
              5 Competências ✓
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 p-4 rounded-xl hover:bg-secondary transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-elegant">
          <h3 className="text-3xl md:text-4xl font-black text-primary-foreground mb-6">
            Diferenciais que fazem a diferença
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              "Correção ortográfica e gramatical automática",
              "Análise das 5 competências do ENEM",
              "Explicação detalhada de cada erro",
              "Versão reescrita com padrão nota 1000",
              "Banco de temas, teses e exemplos",
              "Suporte humano sempre que precisar"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-primary-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
          <Button 
            size="lg" 
            onClick={scrollToPricing}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 shadow-glow hover:scale-105 transition-all duration-300"
          >
            Quero ter acesso agora! 🚀
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
