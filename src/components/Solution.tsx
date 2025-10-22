import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, TrendingUp, CheckCircle2 } from "lucide-react";
import aiAnalysisImage from "@/assets/ai-analysis.jpg";

const Solution = () => {
  const features = [
    {
      icon: Brain,
      title: "Corrige gramática e ortografia",
      description: "Identifica e corrige todos os erros de português automaticamente"
    },
    {
      icon: Target,
      title: "Nota por competência (0–200)",
      description: "Analisa cada uma das 5 competências do ENEM individualmente"
    },
    {
      icon: Zap,
      title: "Explica os erros (didático)",
      description: "Feedback detalhado sobre o que melhorar e como fazer isso"
    },
    {
      icon: TrendingUp,
      title: "Reescreve em padrão nota 1000",
      description: "Versão aprimorada da sua redação para você aprender na prática"
    },
    {
      icon: CheckCircle2,
      title: "Dá temas, teses e repertório",
      description: "Banco completo de recursos para treinar e evoluir constantemente"
    }
  ];

  const scrollToPricing = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-divider-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-card-gradient backdrop-blur-glass px-5 py-2.5 rounded-full border border-primary/20 shadow-card">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-foreground/90 font-medium text-sm">A Solução</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground font-poppins">
            Conheça o <span className="text-primary">DESTRAVA REDAÇÃO ENEM</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            O professor particular de redação que <span className="font-bold text-primary">nunca dorme</span> e está sempre disponível para você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div className="relative order-2 lg:order-1">
            <img 
              src={aiAnalysisImage} 
              alt="IA analisando redação nas 5 competências do ENEM" 
              className="w-full h-auto rounded-2xl shadow-elegant border border-white/10"
            />
            <div className="absolute -top-4 -right-4 bg-yellow-gradient text-accent-foreground px-5 py-3 rounded-xl font-bold shadow-glow-hover border border-primary/20">
              5 Competências ✓
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group flex gap-4 p-5 rounded-2xl bg-card-gradient backdrop-blur-glass border border-white/10 shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card-gradient backdrop-blur-glass border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-card">
          <h3 className="text-3xl md:text-4xl font-black text-foreground mb-8 font-poppins">
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
              <div key={index} className="flex items-start gap-3 text-left group">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
          <Button 
            size="lg" 
            onClick={scrollToPricing}
            className="bg-yellow-gradient text-accent-foreground font-bold text-lg px-8 py-7 shadow-glow hover:shadow-glow-hover transition-all duration-200 hover:-translate-y-0.5 rounded-[14px] border-0 hover:brightness-105"
          >
            Quero ter acesso agora! 🚀
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-divider-gradient" />
    </section>
  );
};

export default Solution;
