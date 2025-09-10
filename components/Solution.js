function Solution() {
  try {
    const features = [
      {
        icon: "phone-call",
        title: "Liga imediatamente quando o lead chega",
        description: "Resposta em segundos, não em horas"
      },
      {
        icon: "file-text",
        title: "Segue um script perfeito, sem erros",
        description: "Padronização total do atendimento"
      },
      {
        icon: "message-circle",
        title: "Qualifica, faz perguntas, coleta respostas",
        description: "Inteligência artificial conversacional"
      },
      {
        icon: "calendar-check",
        title: "Agenda consultas e próximos passos",
        description: "Automatiza todo o processo de agendamento"
      },
      {
        icon: "refresh-cw",
        title: "Faz follow-up automático, sem falhar",
        description: "Nunca mais perde um paciente por esquecimento"
      },
      {
        icon: "clock",
        title: "Trabalha 24 horas por dia",
        description: "Sem salário, sem férias, sem desculpas"
      }
    ];

    return (
      <section className="py-20" id="como-funciona" data-name="solution" data-file="components/Solution.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">O OdontoAI faz isso pra você:</h2>
            <p className="text-xl text-[var(--gray-medium)]">
              Transforme seu atendimento com inteligência artificial que nunca falha
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-[var(--shadow-large)] transition-shadow">
                <div className="w-16 h-16 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <div className={`icon-${feature.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <div className="flex items-start mb-3">
                  <div className="icon-check text-lg text-[var(--success-color)] mr-2 mt-1 flex-shrink-0"></div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                </div>
                <p className="text-[var(--gray-medium)]">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[var(--primary-color)] bg-opacity-5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Veja a IA em ação</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h4 className="font-bold mb-2">Lead chega no funil</h4>
                <p className="text-sm text-[var(--gray-medium)]">Site, anúncio, formulário, etc.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h4 className="font-bold mb-2">IA liga automaticamente</h4>
                <p className="text-sm text-[var(--gray-medium)]">Em segundos, não em horas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h4 className="font-bold mb-2">Qualifica e agenda</h4>
                <p className="text-sm text-[var(--gray-medium)]">Script personalizado, sem erros</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--success-color)] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h4 className="font-bold mb-2">Paciente pronto para você</h4>
                <p className="text-sm text-[var(--gray-medium)]">Qualificado, interessado e agendado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Solution component error:', error);
    return null;
  }
}