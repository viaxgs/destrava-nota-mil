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
      title: "A IA analisa nas 5 competências",
      description: "Em segundos, recebe análise completa com notas e explicações detalhadas"
    },
    {
      number: "3",
      icon: Award,
      title: "Receba nota + explicação + versão aprimorada",
      description: "Vê sua pontuação, entende seus erros e aprende com a versão nota 1000"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-divider-gradient" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground font-poppins">
            Como funciona? <span className="text-primary">É simples!</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Você não precisa ser nenhum expert em tecnologia. É tão fácil quanto mandar uma mensagem!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="p-8 rounded-2xl bg-card-gradient backdrop-blur-glass border border-white/10 shadow-card hover:shadow-elegant transition-all duration-200 h-full hover:-translate-y-1">
                <div className="absolute -top-6 left-8 w-14 h-14 bg-yellow-gradient rounded-xl flex items-center justify-center font-black text-3xl text-accent-foreground shadow-glow-hover border border-primary/20">
                  {step.number}
                </div>
                
                <div className="mt-6 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="font-bold text-xl text-foreground mb-3 font-poppins">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-primary z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-card-gradient backdrop-blur-glass border border-primary/20 rounded-2xl p-6 shadow-card">
            <p className="text-xl font-bold text-foreground font-poppins">
              Pronto! Agora é só repetir o processo até alcançar a nota 1000 🎯
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-divider-gradient" />
    </section>
  );
};

export default HowItWorks;
