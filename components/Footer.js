function Footer() {
  try {
    return (
      <footer className="bg-[var(--accent-color)] text-white py-16" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pare de perder pacientes por atendimento lento</h2>
            <p className="text-xl opacity-90 mb-8">
              Sua IA pode estar rodando ainda hoje
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-[var(--primary-color)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all">
                <div className="icon-rocket text-xl mr-2"></div>
                Ativar minha IA agora
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[var(--accent-color)] transition-all">
                <div className="icon-phone text-xl mr-2"></div>
                Falar com um especialista
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[var(--primary-color)]">24-72h</div>
                <p className="opacity-80">Implementação completa</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--success-color)]">98%</div>
                <p className="opacity-80">Taxa de satisfação</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--secondary-color)]">24/7</div>
                <p className="opacity-80">Suporte disponível</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white border-opacity-20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_14fdc6e500000001/fdccebb4-31eb-41b3-80a9-0eb392e118ad.jpeg" 
                  alt="Logo OdontoAI"
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold">OdontoAI</h3>
                  <p className="text-sm opacity-80">Atendimento Automático</p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-sm opacity-80">© 2025 OdontoAI. Todos os direitos reservados.</p>
                <p className="text-xs opacity-60 mt-1">
                  Transformando o atendimento odontológico com inteligência artificial
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}