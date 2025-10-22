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
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-card-gradient backdrop-blur-glass px-5 py-2.5 rounded-full border border-destructive/20 shadow-card">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="text-foreground/90 font-medium text-sm">O Problema</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground font-poppins">
            Você não está sozinho <span className="text-destructive">nessa luta.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Milhares de estudantes enfrentam os mesmos desafios na redação do ENEM
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card-gradient backdrop-blur-glass border border-white/10 shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <p className="text-foreground font-medium leading-relaxed">
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
