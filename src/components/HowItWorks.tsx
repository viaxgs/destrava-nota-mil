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
    <section id="como-funciona" className="py-12 sm:py-16 lg:py-24 bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-divider-gradient" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground font-poppins px-4">
            Como funciona? <span className="text-primary">É simples!</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
            Você não precisa ser nenhum expert em tecnologia. É tão fácil quanto mandar uma mensagem!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="p-6 sm:p-8 rounded-2xl bg-card-gradient backdrop-blur-glass border border-white/10 shadow-card hover:shadow-elegant transition-all duration-200 h-full hover:-translate-y-1">
                <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 w-12 h-12 sm:w-14 sm:h-14 bg-yellow-gradient rounded-xl flex items-center justify-center font-black text-2xl sm:text-3xl text-accent-foreground shadow-glow-hover border border-primary/20">
                  {step.number}
                </div>
                
                <div className="mt-6 mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2 sm:mb-3 font-poppins">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-3xl sm:text-4xl text-primary z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-card-gradient backdrop-blur-glass border border-primary/20 rounded-2xl p-5 sm:p-6 shadow-card">
            <p className="text-base sm:text-lg md:text-xl font-bold text-foreground font-poppins">
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
