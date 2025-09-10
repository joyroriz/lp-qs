function Integrations() {
  const [activeFlow, setActiveFlow] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  try {
    const integrations = [
      { name: 'WhatsApp', icon: 'message-circle', color: 'text-green-500' },
      { name: 'CRM Dental', icon: 'database', color: 'text-blue-500' },
      { name: 'Agenda Online', icon: 'calendar', color: 'text-purple-500' },
      { name: 'Sistema de Pagamento', icon: 'credit-card', color: 'text-cyan-500' }
    ];

    return (
      <section className="py-20 bg-slate-800 relative overflow-hidden" data-name="integrations" data-file="components/Integrations.js">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Integrações
              <span className="gradient-text block">Automáticas</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Conecte-se automaticamente com todas as ferramentas que sua clínica já utiliza.
              Sem complicação, sem mudanças drásticas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Flow Visualization */}
            <div className="relative">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Fluxo Automatizado
                </h3>
                
                <div className="space-y-6">
                  <div className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 ${activeFlow === 0 ? 'bg-blue-500 bg-opacity-20 scale-105' : 'bg-slate-700'}`}>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                      <div className="icon-phone text-white text-xl"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">1. Chamada Automática</div>
                      <div className="text-slate-300 text-sm">IA liga para o paciente</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  </div>

                  <div className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 ${activeFlow === 1 ? 'bg-purple-500 bg-opacity-20 scale-105' : 'bg-slate-700'}`}>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                      <div className="icon-brain text-white text-xl"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">2. Qualificação IA</div>
                      <div className="text-slate-300 text-sm">Identifica necessidades</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-green-500"></div>
                  </div>

                  <div className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 ${activeFlow === 2 ? 'bg-green-500 bg-opacity-20 scale-105' : 'bg-slate-700'}`}>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-400 rounded-xl flex items-center justify-center">
                      <div className="icon-calendar-check text-white text-xl"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">3. Agendamento</div>
                      <div className="text-slate-300 text-sm">Confirma consulta automaticamente</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrations Grid */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white text-center">
                Conecta com suas Ferramentas
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {integrations.map((integration, index) => (
                  <div key={index} className="glass-card p-6 text-center transform hover:scale-105 transition-all duration-300">
                    <div className={`icon-${integration.icon} text-4xl ${integration.color} mb-4`}></div>
                    <div className="font-semibold text-white">{integration.name}</div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <button className="btn-primary">
                  <div className="icon-settings text-lg mr-2"></div>
                  Ver Todas as Integrações
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Integrations component error:', error);
    return null;
  }
}
