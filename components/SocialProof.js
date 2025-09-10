function SocialProof() {
  try {
    const testimonials = [
      {
        name: "Dr. Ana Carolina Silva",
        clinic: "Clínica OdontoExcel",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        rating: 5,
        text: "Em 2 meses, nossa taxa de confirmação de consultas subiu de 60% para 94%. A IA da Qualify Sales é impressionante!"
      },
      {
        name: "Dr. Roberto Mendes",
        clinic: "Sorrir+ Odontologia",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        rating: 5,
        text: "Nunca imaginei que seria possível automatizar o atendimento mantendo a qualidade. Revolucionou nossa clínica!"
      },
      {
        name: "Dra. Camila Santos",
        clinic: "Instituto Dental Avançado",
        avatar: "https://images.unsplash.com/photo-1594824475317-8b9789b6b33d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        rating: 5,
        text: "ROI de 420% em 3 meses. A Qualify Sales pagou o investimento na primeira semana de uso."
      }
    ];

    const badges = [
      { icon: 'trophy', text: 'Top 1 Plataforma 2025', color: 'from-yellow-400 to-orange-500' },
      { icon: 'users', text: '+10.000 Clínicas', color: 'from-blue-500 to-purple-600' },
      { icon: 'star', text: '4.9/5 Avaliação', color: 'from-green-500 to-teal-400' },
      { icon: 'shield-check', text: 'ISO 27001 Certificado', color: 'from-cyan-400 to-blue-500' }
    ];

    return (
      <section id="casos-sucesso" className="py-20 bg-slate-900 relative overflow-hidden" data-name="social-proof" data-file="components/SocialProof.js">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform skew-y-6"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Badges Section */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {badges.map((badge, index) => (
              <div key={index} className={`glass-card bg-gradient-to-r ${badge.color} p-4 transform hover:scale-105 transition-all duration-300`}>
                <div className="flex items-center space-x-3">
                  <div className={`icon-${badge.icon} text-2xl text-white`}></div>
                  <span className="font-bold text-white text-lg">{badge.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Casos de Sucesso
              <span className="gradient-text block">Comprovados</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Veja como clínicas odontológicas estão transformando seus resultados 
              com a Qualify Sales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-500 ring-opacity-50"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-slate-300 text-sm">{testimonial.clinic}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="icon-star text-yellow-400 text-sm"></div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('SocialProof component error:', error);
    return null;
  }
}