function Header() {
  try {
    return (
      <header className="bg-white shadow-[var(--shadow-light)] sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://app.trickle.so/storage/public/images/usr_14fdc6e500000001/fdccebb4-31eb-41b3-80a9-0eb392e118ad.jpeg" 
                alt="Logo da clínica"
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-[var(--primary-color)]">OdontoAI</h1>
                <p className="text-sm text-[var(--gray-medium)]">Atendimento Automático</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#como-funciona" className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors">
                Como Funciona
              </a>
              <a href="#resultados" className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors">
                Resultados
              </a>
              <a href="#planos" className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors">
                Planos
              </a>
              <button className="btn-primary">
                <div className="icon-phone text-lg mr-2"></div>
                Ativar minha IA
              </button>
            </nav>

            <button className="md:hidden">
              <div className="icon-menu text-xl text-[var(--text-color)]"></div>
            </button>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}