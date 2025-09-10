function HowItWorks() {
  try {
    return (
      <section className="py-20 bg-[var(--gray-light)]" data-name="how-it-works" data-file="components/HowItWorks.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Como funciona?</h2>
            <p className="text-xl text-[var(--gray-medium)]">Explicação simples em 5 passos</p>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">O paciente chega no seu funil</h3>
                </div>
                <p className="text-[var(--gray-medium)] mb-4">Site, anúncio, formulário, etc.</p>
                <p className="text-sm text-[var(--gray-medium)]">Qualquer fonte de leads que você já usa</p>
              </div>
              <div className="card bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex items-center">
                  <div className="icon-user-plus text-2xl text-[var(--primary-color)] mr-3"></div>
                  <div>
                    <p className="font-bold text-[var(--primary-color)]">Novo paciente detectado!</p>
                    <p className="text-[var(--gray-medium)]">João Silva - Interessado em implante</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="card bg-gradient-to-r from-green-50 to-green-100">
                  <div className="flex items-center">
                    <div className="icon-phone text-2xl text-green-600 mr-3"></div>
                    <div>
                      <p className="font-bold text-green-600">Ligando em 3 segundos...</p>
                      <p className="text-[var(--gray-medium)]">Conexão automática iniciada</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">Em segundos, sua IA liga automaticamente</h3>
                </div>
                <p className="text-[var(--gray-medium)] mb-4">Resposta imediata, sem delay</p>
                <p className="text-sm text-[var(--gray-medium)]">Integração automática com seus sistemas</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">Faz o atendimento, segue seu script e agenda</h3>
                </div>
                <p className="text-[var(--gray-medium)] mb-4">Conversa natural e inteligente</p>
                <p className="text-sm text-[var(--gray-medium)]">Script personalizado para sua clínica</p>
              </div>
              <div className="card bg-gradient-to-r from-purple-50 to-purple-100">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="icon-bot text-sm text-white"></div>
                    </div>
                    <p className="bg-white p-2 rounded-lg text-sm">Olá João! Vi que você se interessou por implantes...</p>
                  </div>
                  <div className="flex items-start justify-end">
                    <p className="bg-blue-500 text-white p-2 rounded-lg text-sm">Sim, gostaria de uma consulta.</p>
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center ml-3 mt-1">
                      <div className="icon-user text-sm text-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="card bg-gradient-to-r from-orange-50 to-orange-100">
                  <div className="flex items-center">
                    <div className="icon-calendar-check text-2xl text-orange-600 mr-3"></div>
                    <div>
                      <p className="font-bold text-orange-600">Consulta agendada!</p>
                      <p className="text-[var(--gray-medium)]">Paciente qualificado e pronto</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    4
                  </div>
                  <h3 className="text-2xl font-bold">Você recebe pacientes prontos e qualificados</h3>
                </div>
                <p className="text-[var(--gray-medium)] mb-4">Só pacientes com real potencial</p>
                <p className="text-sm text-[var(--gray-medium)]">Filtrados e organizados automaticamente</p>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="bg-[var(--success-color)] bg-opacity-5 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-[var(--success-color)] mb-4">Simples assim!</h3>
                <p className="text-xl text-[var(--gray-medium)]">
                  Sua IA pode estar funcionando ainda hoje. Não perca mais nenhum paciente por atendimento lento.
                </p>
                <button className="btn-primary mt-6">
                  <div className="icon-rocket text-xl mr-2"></div>
                  Quero minha IA agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HowItWorks component error:', error);
    return null;
  }
}
