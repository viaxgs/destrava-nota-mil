import { AlertCircle, Clock, BookX, TrendingDown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: BookX,
      title: "Não sabe por onde começar",
      description: "Fica horas na frente da folha em branco sem saber o que escrever."
    },
    {
      icon: TrendingDown,
      title: "Nota baixa sempre",
      description: "Estuda muito mas continua tirando notas frustrantes na redação."
    },
    {
      icon: Clock,
      title: "Perde tempo precioso",
      description: "Demora demais para escrever e acaba não terminando a prova."
    },
    {
      icon: AlertCircle,
      title: "Erros que você não vê",
      description: "Comete os mesmos erros sem saber e perde pontos preciosos."
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Você está cansado de <span className="text-primary">travar na hora de escrever?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Sabemos como é frustrante estudar tanto e ver a nota da redação arruinando suas chances de entrar na faculdade dos sonhos...
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-bold text-lg text-card-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-foreground">
            E se existisse uma forma de <span className="text-accent">mudar isso em segundos?</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
