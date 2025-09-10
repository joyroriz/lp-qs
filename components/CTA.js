function CTA() {
  try {
    return (
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden" data-name="cta" data-file="components/CTA.js">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-400 bg-opacity-10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 text-white">
              <div className="icon-sparkles text-lg"></div>
              <span className="font-semibold">OFERTA ESPECIAL DE LANÇAMENTO</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Seja uma das Primeiras
              <span className="block gradient-text">1.000 Clínicas</span>
            </h2>
            
            <p className="text-2xl text-blue-100 mb-8 leading-relaxed">
              Transforme sua clínica odontológica hoje mesmo e ganhe 
              <span className="font-bold text-cyan-400"> 3 meses gratuitos</span> na implementação.
            </p>
            
            <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-3xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-cyan-400">78%</div>
                  <div className="text-white text-sm">Redução Absenteísmo</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400">347%</div>
                  <div className="text-white text-sm">Aumento Conversão</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400">24h</div>
                  <div className="text-white text-sm">Implementação</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-2xl transform hover:scale-105">
                <div className="icon-rocket text-2xl mr-3"></div>
                Experimente Gratuitamente
              </button>
              <button className="border-3 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
                <div className="icon-phone text-xl mr-3"></div>
                Falar com Especialista
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <div className="icon-shield-check text-xl"></div>
                <span className="text-sm">100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="icon-clock text-xl"></div>
                <span className="text-sm">Suporte 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="icon-award text-xl"></div>
                <span className="text-sm">Garantia de Resultado</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CTA component error:', error);
    return null;
  }
}