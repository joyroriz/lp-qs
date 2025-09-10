function Problems() {
  try {
    const problems = [
      {
        icon: "clock",
        title: "Está perdendo consultas por não atender rápido",
        description: "Pacientes em urgência esfriam enquanto esperam resposta"
      },
      {
        icon: "user-x",
        title: "Sua equipe demora horas ou dias pra responder",
        description: "Processo manual lento e ineficiente"
      },
      {
        icon: "trending-down",
        title: "Pacientes desistem e não voltam",
        description: "Oportunidades perdidas para sempre"
      },
      {
        icon: "alert-circle",
        title: "Você perde dinheiro, não sabe onde e nem como",
        description: "Falta de controle e visibilidade do processo"
      }
    ];

    return (
      <section className="py-20 bg-[var(--gray-light)]" data-name="problems" data-file="components/Problems.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Se você gera leads, mas...</h2>
            <p className="text-xl text-[var(--gray-medium)]">Reconhece algum desses problemas na sua clínica?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {problems.map((problem, index) => (
              <div key={index} className="card">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className={`icon-${problem.icon} text-xl text-[var(--secondary-color)]`}></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                    <p className="text-[var(--gray-medium)]">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="stat-card border-l-[var(--secondary-color)]">
              <div className="text-4xl font-bold text-[var(--secondary-color)] mb-2">50%</div>
              <p className="text-lg font-semibold mb-1">dos pacientes são perdidos</p>
              <p className="text-[var(--gray-medium)]">por atendimento lento</p>
            </div>
            <div className="stat-card border-l-[var(--secondary-color)]">
              <div className="text-4xl font-bold text-[var(--secondary-color)] mb-2">24h</div>
              <p className="text-lg font-semibold mb-1">tempo médio de resposta</p>
              <p className="text-[var(--gray-medium)]">muito tarde para converter</p>
            </div>
            <div className="stat-card border-l-[var(--secondary-color)]">
              <div className="text-4xl font-bold text-[var(--secondary-color)] mb-2">R$ 100k+</div>
              <p className="text-lg font-semibold mb-1">perdidos por mês</p>
              <p className="text-[var(--gray-medium)]">em oportunidades desperdiçadas</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-[var(--text-color)]">
              Você tem um problema de atendimento. Não de marketing.
            </h3>
            <p className="text-xl text-[var(--gray-medium)] mt-4">
              Não adianta gerar mais leads se você não consegue atendê-los adequadamente. 
              O problema não está na geração, está na conversão.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Problems component error:', error);
    return null;
  }
}