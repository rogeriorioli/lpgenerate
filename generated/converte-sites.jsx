export default function LandingPage() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="fixed w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white text-2xl font-bold">LOGO</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-white hover:text-gray-300 uppercase text-sm font-medium">SOBRE NÓS</a></li>
              <li><a href="#mission" className="text-white hover:text-gray-300 uppercase text-sm font-medium">NOSSA MISSÃO</a></li>
              <li><a href="#skills" className="text-white hover:text-gray-300 uppercase text-sm font-medium">COMPETÊNCIAS</a></li>
              <li><button className="bg-white text-black px-6 py-2 rounded-full uppercase text-sm font-bold hover:bg-gray-200">FALE CONOSCO</button></li>
            </ul>
          </nav>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        <img src="https://via.placeholder.com/800x400?text=Image+Placeholder" alt="Hero" className="absolute w-full h-full object-cover opacity-70" />
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase mb-8">CONVERTE SITES</h1>
          <button className="bg-white text-black px-8 py-3 rounded-full uppercase font-bold hover:bg-gray-200">FALE CONOSCO</button>
        </div>
      </section>

      {/* Section 1 */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold uppercase mb-6">SOBRE NÓS</h2>
              <p className="text-lg mb-8">Somos Inovadores em Desenvolvimento e Design UX/UI para Negócios Digitais</p>
              <button className="bg-black text-white px-8 py-3 rounded-full uppercase font-bold hover:bg-gray-800">VAMOS CONVERSAR</button>
            </div>
            <div className="md:w-1/2">
              <img src="https://via.placeholder.com/800x400?text=Image+Placeholder" alt="About" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="mission" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold uppercase mb-6">VEM SER CONVERTE VAMOS ALÉM DE UX E CÓDIGO: ENTREGAMOS PERFORMANCE E EXPERIÊNCIA COMPLETA</h2>
              <p className="text-lg mb-8">Acreditamos que uma excelente experiência digital vai além de um bom design e código bem estruturado. Focamos também na performance, garantindo carregamento rápido e navegação fluida para uma experiência completa e eficiente.</p>
              <button className="bg-white text-black px-8 py-3 rounded-full uppercase font-bold hover:bg-gray-200">VAMOS CONVERSAR</button>
            </div>
            <div className="md:w-1/2">
              <img src="https://via.placeholder.com/800x400?text=Image+Placeholder" alt="Mission" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="skills" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase mb-6">NOSSAS COMPETÊNCIAS ENTREGAMOS EXPERIÊNCIA COMPLETA</h2>
            <p className="text-lg max-w-3xl mx-auto">Oferecemos um conjunto integrado de design, desenvolvimento e performance para criar experiências digitais que geram resultados reais e impactam positivamente seu negócio.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">Desenvolvimento Web/Mobile</li>
                <li className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">Performance e Otimização</li>
                <li className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">Design gráfico Web design (UX/UI)</li>
                <li className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">Automação do funil de vendas</li>
                <li className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">Alocação de</li>
              </ul>
              <button className="mt-8 bg-white text-black px-8 py-3 rounded-full uppercase font-bold hover:bg-gray-200">VAMOS CONVERSAR</button>
            </div>
            <div className="md:w-1/2">
              <img src="https://via.placeholder.com/800x400?text=Image+Placeholder" alt="Skills" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          © 2025 Converte Sites e Treinamentos. Todos os direitos reservados - CNPJ: 58.532.850/0001-10
        </div>
      </footer>
    </div>
  );
}