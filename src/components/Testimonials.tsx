import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amanda Silva",
      age: 19,
      city: "Recife, PE",
      beforeScore: 560,
      afterScore: 940,
      text: "Eu tirava 560, depois do Destrava fui pra 940! Consegui ver exatamente onde eu errava. Agora vou prestar medicina com confiança! 🧠🔥",
      stars: 5
    },
    {
      name: "Lucas Mendes",
      age: 17,
      city: "São Paulo, SP",
      beforeScore: 620,
      afterScore: 880,
      text: "Minha maior dificuldade era a competência 5. A IA explicou direitinho e subi 260 pontos! Melhor investimento que fiz. 🚀",
      stars: 5
    },
    {
      name: "Júlia Costa",
      age: 18,
      city: "Belo Horizonte, MG",
      beforeScore: 480,
      afterScore: 920,
      text: "Achava que nunca ia conseguir escrever bem. O Destrava me mostrou que eu conseguia sim! Passei de 480 pra 920 em 2 meses! ✨",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Eles destravaram. <span className="text-accent">Você também pode!</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Mais de 10.000 estudantes já estão melhorando suas notas com o Destrava Redação ENEM
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-elegant hover:shadow-xl transition-all duration-300 border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <div className="font-bold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.age} anos, {testimonial.city}</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-destructive/10 to-accent/10 rounded-lg p-4 flex items-center justify-between">
                <div className="text-center flex-1">
                  <div className="text-2xl font-black text-destructive">{testimonial.beforeScore}</div>
                  <div className="text-xs text-muted-foreground">Antes</div>
                </div>
                <div className="text-2xl font-bold text-muted-foreground">→</div>
                <div className="text-center flex-1">
                  <div className="text-2xl font-black text-accent">{testimonial.afterScore}</div>
                  <div className="text-xs text-muted-foreground">Depois</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-accent/10 px-6 py-4 rounded-xl">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold border-2 border-background">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-foreground">+10.000 estudantes</div>
              <div className="text-sm text-muted-foreground">melhoraram suas notas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
