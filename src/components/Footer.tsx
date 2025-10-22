const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-black text-primary font-poppins">DESTRAVA REDAÇÃO ENEM</h3>
          <p className="text-muted-foreground">
            Destrave sua escrita e conquiste a nota 1000
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              💳 Pagamento 100% Seguro
            </span>
            <span className="flex items-center gap-2">
              ⚡ Acesso Imediato
            </span>
            <span className="flex items-center gap-2">
              🤝 Suporte Humano
            </span>
          </div>
          <div className="pt-6 border-t border-white/10 text-sm text-muted-foreground">
            © 2024 Destrava Redação ENEM. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
