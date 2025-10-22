import { AlertCircle, Brain, Clock, TrendingDown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: Brain,
      text: "Travar na hora de começar ou desenvolver ideias"
    },
    {
      icon: AlertCircle,
      text: "Medo constante de fugir do tema"
    },
    {
      icon: TrendingDown,
      text: "Nota estagnada, sem entender o que melhorar"
    },
    {
      icon: Clock,
      text: "Falta de feedback rápido e didático"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-card-gradient backdrop-blur-glass px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-destructive/20 shadow-card text-xs sm:text-sm">
            <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
            <span className="text-foreground/90 font-medium">O Problema</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground font-poppins px-4">
            Você não está sozinho <span className="text-destructive">nessa luta.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
            Milhares de estudantes enfrentam os mesmos desafios na redação do ENEM
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-5 sm:p-6 rounded-2xl bg-card-gradient backdrop-blur-glass border border-white/10 shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors flex-shrink-0">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <p className="text-foreground font-medium leading-relaxed text-sm sm:text-base">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
