function Features() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  try {
    const features = [
      {
        icon: 'phone-call',
        title: 'IA Conversacional Odontológica',
        description: 'Chamadas automatizadas que falam como um atendente humano, especializadas em terminologia odontológica.',
        color: 'from-blue-500 to-cyan-400'
      },
      {
        icon: 'calendar-x',
        title: 'Redução de Absenteísmo',
        description: 'Lembretes inteligentes e reagendamentos automáticos reduzem faltas em até 78%.',
        color: 'from-purple-500 to-pink-400'
      },
      {
        icon: 'trending-up',
        title: 'Aumento de Conversões',
        description: 'Qualificação preditiva identifica pacientes com maior potencial de aceitar tratamentos.',
        color: 'from-cyan-400 to-blue-500'
      },
      {
        icon: 'bot',
        title: 'Atendimento 24/7',
        description: 'Nunca mais perca um paciente por falta de atendimento fora do horário comercial.',
        color: 'from-green-500 to-teal-400'
      }
    ];

    return (
      <section id="como-funciona" className="py-20 bg-slate-800 relative" data-name="features" data-file="components/Features.js">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
              <div className="icon-zap text-lg"></div>
              <span className="font-semibold">COMO FUNCIONA</span>
            </div>
            
            <h2 className="text-5xl font-bold text-white mb-6">
              Automação Inteligente para
              <span className="gradient-text block">Clínicas Odontológicas</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Descubra como nossa IA especializada transforma o atendimento da sua clínica 
              e multiplica seus resultados sem esforço adicional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`glass-card transform transition-all duration-300 cursor-pointer ${
                  hoveredCard === index ? 'scale-105 -translate-y-2' : 'hover:scale-105'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <div className={`icon-${feature.icon} text-2xl text-white`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-slate-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}