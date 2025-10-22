import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full text-accent-foreground font-medium text-sm backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Tecnologia aprovada por 10.000+ estudantes
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-tight">
              Destrave sua escrita e
              <span className="block text-accent"> conquiste nota 1000</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-2xl">
              Mesmo que você ache que escreve mal. Nossa IA analisa, corrige e reescreve sua redação em segundos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToPricing}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Quero destravar minha redação agora 🚀
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <span className="text-3xl">✓</span>
                <span className="font-medium">Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">✓</span>
                <span className="font-medium">Apenas R$ 29,99</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Estudante usando IA para melhorar redação do ENEM" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-glow font-bold text-2xl">
              Nota 1000 🎯
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
