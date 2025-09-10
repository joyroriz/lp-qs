function Pricing() {
  try {
    const plans = [
      {
        name: "Start",
        subtitle: "Teste ou operações pequenas",
        price: "R$ 2.500",
        minutes: "1.000",
        features: ["1.000 minutos de ligação", "Setup completo incluído", "Script personalizado", "Dashboard básico", "Suporte por email", "Integração com 1 sistema"],
        buttonText: "Ver Detalhes",
        popular: false
      },
      {
        name: "Growth",
        subtitle: "Operações médias",
        price: "R$ 4.500",
        minutes: "2.000",
        features: ["2.000 minutos de ligação", "Setup completo incluído", "Script personalizado avançado", "Dashboard completo", "Suporte prioritário", "Integração com 3 sistemas", "Follow-up automático"],
        buttonText: "Escolher Plano",
        popular: true
      },
      {
        name: "Pro",
        subtitle: "Operações padrão",
        price: "R$ 7.000",
        minutes: "3.500",
        features: ["3.500 minutos de ligação", "Setup completo incluído", "Script personalizado premium", "Dashboard avançado", "Suporte 24/7", "Integração ilimitada", "Follow-up inteligente", "API personalizada"],
        buttonText: "Ver Detalhes",
        popular: false
      }
    ];

    return (
      <section className="py-20 bg-[var(--gray-light)]" id="planos" data-name="pricing" data-file="components/Pricing.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Planos e Preços</h2>
            <p className="text-xl text-[var(--gray-medium)]">Escolha o plano ideal para o tamanho da sua clínica</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div key={index} className={`card relative ${plan.popular ? 'border-2 border-[var(--primary-color)]' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[var(--primary-color)] text-white px-4 py-1 rounded-full text-sm font-bold">
                      🔥 Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-[var(--gray-medium)] mb-4">{plan.subtitle}</p>
                  <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">{plan.price}</div>
                  <p className="text-sm text-[var(--gray-medium)]">por mês</p>
                  <div className="text-2xl font-bold text-[var(--text-color)] mt-4">{plan.minutes}</div>
                  <p className="text-sm text-[var(--gray-medium)]">minutos inclusos</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="icon-check text-lg text-[var(--success-color)] mr-3 flex-shrink-0 mt-0.5"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'bg-[var(--primary-color)] text-white hover:opacity-90'
                    : 'border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          <div className="card text-center">
            <div className="icon-shield text-4xl text-[var(--success-color)] mx-auto mb-4"></div>
            <h3 className="text-2xl font-bold mb-4">💰 Garantia de ROI</h3>
            <p className="text-lg mb-6">
              Se você não aumentar suas consultas em pelo menos 200% nos primeiros 60 dias, 
              devolvemos 100% do seu investimento.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[var(--primary-color)]">60 dias</div>
                <p className="text-sm text-[var(--gray-medium)]">Garantia total</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--success-color)]">200%+</div>
                <p className="text-sm text-[var(--gray-medium)]">Aumento em consultas</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--secondary-color)]">100%</div>
                <p className="text-sm text-[var(--gray-medium)]">Dinheiro de volta</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Pricing component error:', error);
    return null;
  }
}