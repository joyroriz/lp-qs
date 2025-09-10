function Hero() {
  try {
    return (
      <section className="gradient-bg text-white py-20" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-shadow">
                IA de Atendimento Automático
              </h1>
              <h2 className="text-2xl mb-6 opacity-90">
                O paciente que você não atende, marca com o concorrente.
              </h2>
              <p className="text-xl mb-8 opacity-80">
                IA que faz ligações automáticas, responde, qualifica e agenda consultas — 24h por dia, sem salário, sem erro.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="icon-clock text-2xl text-white"></div>
                  </div>
                  <p className="font-semibold">Atendimento<br />Imediato</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="icon-calendar text-2xl text-white"></div>
                  </div>
                  <p className="font-semibold">24/7<br />Disponível</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="icon-shield-check text-2xl text-white"></div>
                  </div>
                  <p className="font-semibold">Zero<br />Erros</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[var(--primary-color)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all">
                  <div className="icon-play text-xl mr-2"></div>
                  Ativar minha IA agora
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all">
                  <div className="icon-fire text-xl mr-2"></div>
                  Ver planos e preços
                </button>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  <span className="font-semibold">OdontoAI Conectado</span>
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-4 text-[var(--text-color)]">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">João Silva</p>
                      <p className="text-sm text-[var(--gray-medium)]">Lead qualificado automaticamente</p>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
                    <div className="flex items-center text-green-700">
                      <div className="icon-check text-lg mr-2"></div>
                      <span className="font-semibold">Consulta agendada para amanhã 14h</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold">+73</p>
                    <p className="text-sm opacity-80">Agendamentos<br />em 10 dias</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">24/7</p>
                    <p className="text-sm opacity-80">Disponível<br />sem parar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}