function Benefits() {
  try {
    const stats = [
      { number: '427%', label: 'ROI Médio dos Clientes' },
      { number: '92%', label: 'Taxa de Conexão' },
      { number: '15min', label: 'Tempo Médio p/ Qualificar' },
      { number: '24h', label: 'Implementação Completa' }
    ];

    return (
      <section id="beneficios" className="py-20 gradient-bg" data-name="benefits" data-file="components/Benefits.js">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Veja como empresas como a sua estão alcançando resultados extraordinários
              com a Qualify Sales.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[var(--primary-color)] mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--text-secondary)] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                  Case de Sucesso Real: TechCorp
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="icon-trending-up text-[var(--accent-color)] text-xl mt-1"></div>
                    <p className="text-[var(--text-secondary)]">
                      <strong>Resultado em 30 dias:</strong> Passou de 50 leads qualificados/mês para 847 leads qualificados, 
                      mantendo a mesma equipe de vendas de apenas 3 pessoas.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="icon-dollar-sign text-[var(--accent-color)] text-xl mt-1"></div>
                    <p className="text-[var(--text-secondary)]">
                      <strong>ROI de 520%:</strong> Investimento de R$ 12.000/mês gerou R$ 74.400 em receita adicional 
                      apenas no segundo mês de uso da plataforma.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="icon-clock text-[var(--accent-color)] text-xl mt-1"></div>
                    <p className="text-[var(--text-secondary)]">
                      <strong>Tempo liberado:</strong> Equipe de vendas parou de fazer ligações frias e passou 
                      a focar 100% em closing de negócios já aquecidos pela IA.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Gráficos de performance de vendas" 
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Benefits component error:', error);
    return null;
  }
}