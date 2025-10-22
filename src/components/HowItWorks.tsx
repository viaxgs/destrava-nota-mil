import { FileText, Brain, Award } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Cole sua redação ou peça um tema",
      description: "Basta colar o texto que você escreveu ou pedir um tema novo para praticar"
    },
    {
      number: "2",
      icon: Brain,
      title: "A IA analisa e explica",
      description: "Em segundos, recebe análise completa das 5 competências com explicações detalhadas"
    },
    {
      number: "3",
      icon: Award,
      title: "Recebe nota + correção + versão nota 1000",
      description: "Vê sua nota, entende seus erros e aprende com a versão perfeita da sua redação"
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Como funciona? <span className="text-primary">É simples!</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Você não precisa ser nenhum expert em tecnologia. É tão fácil quanto mandar uma mensagem!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card p-8 rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-300 h-full border border-border">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-accent rounded-xl flex items-center justify-center font-black text-2xl text-accent-foreground shadow-glow">
                  {step.number}
                </div>
                
                <div className="mt-6 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="font-bold text-xl text-card-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-accent z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-accent/10 border-2 border-accent rounded-xl p-6">
            <p className="text-xl font-bold text-foreground">
              Pronto! Agora é só repetir o processo até alcançar a nota 1000 🎯
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
