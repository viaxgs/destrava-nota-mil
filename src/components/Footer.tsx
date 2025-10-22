import { Shield, CreditCard, Headphones } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <div className="font-bold mb-1">Pagamento 100% Seguro</div>
              <div className="text-sm text-primary-foreground/80">Ambiente criptografado</div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <div className="font-bold mb-1">Acesso Imediato</div>
              <div className="text-sm text-primary-foreground/80">Receba por email em segundos</div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
              <Headphones className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <div className="font-bold mb-1">Suporte Humano</div>
              <div className="text-sm text-primary-foreground/80">Estamos aqui para ajudar</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-black mb-2">DESTRAVA REDAÇÃO ENEM</h3>
            <p className="text-primary-foreground/80">Sua aprovação começa aqui 🚀</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-primary-foreground/80">
            <span>Pix</span>
            <span>•</span>
            <span>Cartão de Crédito</span>
            <span>•</span>
            <span>Boleto</span>
          </div>

          <div className="text-sm text-primary-foreground/60">
            <p>© 2025 Destrava Redação ENEM. Todos os direitos reservados.</p>
            <p className="mt-2">CNPJ: 00.000.000/0001-00 | Termos de Uso | Política de Privacidade</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
