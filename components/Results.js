function Results() {
  try {
    return (
      <section className="py-20" id="resultados" data-name="results" data-file="components/Results.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Resultados que nossos clientes alcançam</h2>
            <p className="text-xl text-[var(--gray-medium)]">Transformação real e mensurável</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-24 h-24 bg-[var(--success-color)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="icon-trending-up text-3xl text-[var(--success-color)]"></div>
              </div>
              <div className="text-5xl font-bold text-[var(--success-color)] mb-2">+300%</div>
              <h3 className="text-xl font-bold mb-2">Taxa de Conversão</h3>
              <p className="text-[var(--gray-medium)]">de leads em consultas</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="icon-zap text-3xl text-[var(--primary-color)]"></div>
              </div>
              <div className="text-5xl font-bold text-[var(--primary-color)] mb-2">-90%</div>
              <h3 className="text-xl font-bold mb-2">Tempo de Resposta</h3>
              <p className="text-[var(--gray-medium)]">de horas para segundos</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[var(--secondary-color)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="icon-dollar-sign text-3xl text-[var(--secondary-color)]"></div>
              </div>
              <div className="text-5xl font-bold text-[var(--secondary-color)] mb-2">+500%</div>
              <h3 className="text-xl font-bold mb-2">ROI em Marketing</h3>
              <p className="text-[var(--gray-medium)]">aproveitamento máximo</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Dashboard em Tempo Real</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">+73</div>
                <p className="font-semibold">Agendamentos</p>
                <p className="text-sm text-[var(--gray-medium)]">em 10 dias</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--success-color)] mb-2">+400%</div>
                <p className="font-semibold">Conversão</p>
                <p className="text-sm text-[var(--gray-medium)]">em 60 dias</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--secondary-color)] mb-2">60s</div>
                <p className="font-semibold">Tempo de resposta</p>
                <p className="text-sm text-[var(--gray-medium)]">máximo</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">98%</div>
                <p className="font-semibold">Satisfação</p>
                <p className="text-sm text-[var(--gray-medium)]">dos pacientes</p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12">
            <div className="card">
              <h4 className="text-xl font-bold mb-4 text-[var(--secondary-color)]">😰 Antes do OdontoAI</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="icon-x text-lg text-[var(--secondary-color)] mr-3"></div>
                  <span>50% dos pacientes perdidos</span>
                </li>
                <li className="flex items-center">
                  <div className="icon-x text-lg text-[var(--secondary-color)] mr-3"></div>
                  <span>24h+ tempo de resposta</span>
                </li>
                <li className="flex items-center">
                  <div className="icon-x text-lg text-[var(--secondary-color)] mr-3"></div>
                  <span>Equipe sobrecarregada</span>
                </li>
                <li className="flex items-center">
                  <div className="icon-x text-lg text-[var(--secondary-color)] mr-3"></div>
                  <span>Processo desorganizado</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h4 className="text-xl font-bold mb-4 text-[var(--success-color)]">🚀 Depois do OdontoAI</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="icon-check text-lg text-[var(--success-color)] mr-3"></div>
                  <span>100% dos pacientes atendidos</span>
                </li>
                <li className="flex items-center">
                  <div className="icon-check text-lg text-[var(--success-color)] mr-3"></div>
                  <span>60s tempo de resposta</span>
                </li>
                <li className="flex items-center">
                  <div className="icon-check text-lg text-[var(--success-color)] mr-3"></div>
                  <span>Equipe focada em vendas</span>
                </li>
                <li className="flex items-center">
                  <div className="icon-check text-lg text-[var(--success-color)] mr-3"></div>
                  <span>Processo automatizado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Results component error:', error);
    return null;
  }
}