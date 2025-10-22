import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amanda Silva",
      age: 19,
      city: "Recife, PE",
      beforeScore: 560,
      afterScore: 940,
      text: "Eu tirava 560, depois do Destrava fui pra 940! Consegui ver exatamente onde eu errava. Agora vou prestar medicina com confiança!",
      stars: 5
    },
    {
      name: "Lucas Mendes",
      age: 17,
      city: "São Paulo, SP",
      beforeScore: 620,
      afterScore: 880,
      text: "Minha maior dificuldade era a competência 5. A IA explicou direitinho e subi 260 pontos! Melhor investimento que fiz.",
      stars: 5
    },
    {
      name: "Júlia Costa",
      age: 18,
      city: "Belo Horizonte, MG",
      beforeScore: 480,
      afterScore: 920,
      text: "Achava que nunca ia conseguir escrever bem. O Destrava me mostrou que eu conseguia sim! Passei de 480 pra 920 em 2 meses!",
      stars: 5
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-divider-gradient" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground font-poppins px-4">
            Eles destravaram. <span className="text-primary">Você também pode!</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
            Mais de 10.000 estudantes já estão melhorando suas notas com o Destrava Redação ENEM
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-card-gradient backdrop-blur-glass rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-elegant transition-all duration-200 border border-white/10 relative hover:-translate-y-1"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <div className="font-bold text-foreground text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.age} anos, {testimonial.city}</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-destructive/10 to-primary/10 rounded-xl p-3 sm:p-4 flex items-center justify-between border border-white/5">
                <div className="text-center flex-1">
                  <div className="text-xl sm:text-2xl font-black text-destructive">{testimonial.beforeScore}</div>
                  <div className="text-xs text-muted-foreground">Antes</div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-primary">→</div>
                <div className="text-center flex-1">
                  <div className="text-xl sm:text-2xl font-black text-primary">{testimonial.afterScore}</div>
                  <div className="text-xs text-muted-foreground">Depois</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-card-gradient backdrop-blur-glass px-5 sm:px-6 py-4 rounded-2xl border border-white/10 shadow-card">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-accent-foreground font-bold border-2 border-background shadow-glow text-sm sm:text-base">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="font-bold text-foreground text-sm sm:text-base">+10.000 estudantes</div>
              <div className="text-xs sm:text-sm text-muted-foreground">melhoraram suas notas</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-divider-gradient" />
    </section>
  );
};

export default Testimonials;
