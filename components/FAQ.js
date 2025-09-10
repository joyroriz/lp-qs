function FAQ() {
  try {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
      {
        question: "A IA fala como humano?",
        answer: "Sim. Nossa IA utiliza tecnologia de ponta em processamento de linguagem natural. Ela conversa de forma natural, entende contexto, faz perguntas inteligentes e responde de acordo com o script personalizado da sua clínica. A maioria dos pacientes nem percebe que está falando com uma IA."
      },
      {
        question: "O que acontece se eu não usar os minutos?",
        answer: "Garantimos que você vai aproveitar ao máximo seu plano. Se não usar pelo menos 80% dos minutos, estendemos seu período até você usar tudo, sem custos adicionais."
      },
      {
        question: "É difícil de usar?",
        answer: "Não. Nossa equipe faz todo o setup para você. Em 24-72 horas sua IA está funcionando perfeitamente. Você só precisa acompanhar os resultados no dashboard."
      },
      {
        question: "É só ligação?",
        answer: "Não. Além de ligações, a IA pode responder WhatsApp, emails, formulários e integrar com seu CRM. É um sistema completo de atendimento."
      },
      {
        question: "Quanto tempo leva para implementar?",
        answer: "Entre 24 e 72 horas. Nossa equipe técnica configura tudo: script personalizado, integração com seus sistemas e testes completos antes do go-live."
      },
      {
        question: "A IA pode integrar com meu sistema atual?",
        answer: "Sim. Integramos com os principais CRMs, sistemas de agendamento e ferramentas que você já usa. Se houver alguma integração específica, nossa equipe desenvolve para você."
      }
    ];

    return (
      <section className="py-20 bg-[var(--gray-light)]" data-name="faq" data-file="components/FAQ.js">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Perguntas Frequentes</h2>
            <p className="text-xl text-[var(--gray-medium)]">
              Tire todas as suas dúvidas sobre o OdontoAI
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-bold pr-4">{faq.question}</h3>
                  <div className={`icon-chevron-down text-xl text-[var(--primary-color)] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}></div>
                </button>
                
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-start">
                      <div className="icon-check text-lg text-[var(--success-color)] mr-3 flex-shrink-0 mt-1"></div>
                      <p className="text-[var(--gray-medium)]">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
              <p className="text-[var(--gray-medium)] mb-6">
                Nossa equipe está pronta para esclarecer qualquer questão e te ajudar a escolher o melhor plano.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  <div className="icon-message-circle text-lg mr-2"></div>
                  Falar com especialista
                </button>
                <button className="btn-outline">
                  <div className="icon-calendar text-lg mr-2"></div>
                  Agendar demonstração
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('FAQ component error:', error);
    return null;
  }
}