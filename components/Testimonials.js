function Testimonials() {
  try {
    const testimonials = [
      {
        quote: "Perdíamos 50% dos pacientes. Hoje atendemos todos em 60 segundos. Nossa conversão aumentou 400% em 2 meses.",
        result: "+400% conversão",
        name: "Dr. Carlos Mendes",
        title: "Cirurgião-Dentista",
        clinic: "Clínica OdontoCare"
      },
      {
        quote: "A IA do OdontoAI é impressionante. Fala como humano e qualifica melhor que nossa equipe anterior.",
        result: "+73 agendamentos em 10 dias",
        name: "Dra. Ana Paula",
        title: "Diretora Clínica",
        clinic: "Sorrisos & Cia"
      },
      {
        quote: "Antes gastávamos R$ 15k/mês com recepção. Hoje gastamos R$ 7k e temos 3x mais resultados.",
        result: "3x mais resultados",
        name: "Dr. Roberto Silva",
        title: "Proprietário",
        clinic: "Dental Express"
      }
    ];

    return (
      <section className="py-20" data-name="testimonials" data-file="components/Testimonials.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Resultados Comprovados</h2>
            <p className="text-xl text-[var(--gray-medium)]">
              Veja o que nossos clientes estão alcançando com o OdontoAI
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="icon-star text-xl text-yellow-400"></div>
                  ))}
                </div>
                
                <blockquote className="text-lg mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center text-green-700">
                    <div className="icon-trending-up text-lg mr-2"></div>
                    <span className="font-bold">{testimonial.result}</span>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center mr-4">
                    <div className="icon-user text-xl text-white"></div>
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-[var(--gray-medium)]">{testimonial.title}</p>
                    <p className="text-xs text-[var(--gray-medium)]">{testimonial.clinic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-[var(--primary-color)] bg-opacity-5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Mais de 500 clínicas já confiam no OdontoAI</h3>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-lg font-bold">OdontoCare</div>
                <div className="text-lg font-bold">DentalMax</div>
                <div className="text-lg font-bold">Sorrisos Pro</div>
                <div className="text-lg font-bold">Dental Plus</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    return null;
  }
}