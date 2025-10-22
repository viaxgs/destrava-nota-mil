import { Brain, TrendingUp, Target, Sparkles } from "lucide-react";

const PredictiveAnalysis = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-divider-gradient" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 border-2 border-primary/30 rounded-3xl p-8 sm:p-10 md:p-12 shadow-elegant relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />

            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 bg-yellow-gradient px-5 py-2.5 rounded-full border border-primary/20 shadow-glow-hover mb-6">
                <Sparkles className="w-5 h-5 text-accent-foreground" />
                <span className="text-accent-foreground font-bold text-sm sm:text-base">Exclusivo do Destrava</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 sm:mb-6 font-poppins">
                Análise Preditiva <span className="text-primary">Exclusiva</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                O Destrava Redação ENEM vai além da correção — ele analisa milhares de redações nota 1000 e usa IA para prever os temas mais prováveis do próximo ENEM, com base em dados reais das provas anteriores.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-card-gradient backdrop-blur-glass rounded-2xl p-5 sm:p-6 border border-white/10 shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2 font-poppins">
                  Mapeia Padrões
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Analisa estruturas e temas das redações nota 1000 dos últimos anos
                </p>
              </div>

              <div className="bg-card-gradient backdrop-blur-glass rounded-2xl p-5 sm:p-6 border border-white/10 shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2 font-poppins">
                  Prevê Temas
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Identifica assuntos com maior probabilidade de aparecer na próxima prova
                </p>
              </div>

              <div className="bg-card-gradient backdrop-blur-glass rounded-2xl p-5 sm:p-6 border border-white/10 shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2 font-poppins">
                  Direciona Estudos
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Oferece dicas personalizadas sobre o que estudar e como se preparar
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 text-center">
              <div className="inline-flex items-center gap-2 bg-card-gradient backdrop-blur-glass px-5 sm:px-6 py-3 sm:py-4 rounded-2xl border border-primary/20 shadow-card">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-foreground font-bold text-sm sm:text-base">
                  A única IA que prevê temas e padrões reais do ENEM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-divider-gradient" />
    </section>
  );
};

export default PredictiveAnalysis;
