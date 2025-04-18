export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">LOGO</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#section1" className="text-gray-700 hover:text-indigo-600 transition">Solução</a></li>
              <li><a href="#section2" className="text-gray-700 hover:text-indigo-600 transition">Serviços</a></li>
              <li><a href="#section3" className="text-gray-700 hover:text-indigo-600 transition">Tecnologias</a></li>
            </ul>
          </nav>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-[url('https://www.convertesites.com.br/_next/image?url=%2Fbg.jpg&w=1200&q=75')] bg-cover bg-center absolute inset-0"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Somos Inovadores em Desenvolvimento e Design UX/UI para Negócios Digitais</h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition">
            Vamos conversar
          </button>
        </div>
      </section>

      <section id="section1" className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Vamos Além de UX e Código: Entregamos Performance e Experiência Completa</h2>
              <p className="text-gray-600 mb-8">Acreditamos que uma excelente experiência digital vai além de um bom design e código bem estruturado. Focamos também na performance, garantindo carregamento rápido e navegação fluida para uma experiência completa e eficiente.</p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition">
                Vem ser Converte
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="https://www.convertesites.com.br/_next/image?url=%2Fabout.png&w=750&q=75" alt="About" className="rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="section2" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Entregamos Experiência Completa</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">•</span> Desenvolvimento Web/Mobile
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Performance e Otimização
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Design gráfico Web design (UX/UI)
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Automação do funil de vendas
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Alocação de Profissionais
                </li>
              </ul>
              <button className="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-3 px-8 rounded-full transition">
                Vamos Conversar
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="https://www.convertesites.com.br/_next/image?url=%2Fbg.jpg&w=1200&q=75" alt="Services" className="rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="section3" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Tecnologias de Ponta para Potencializar Seu Negócio Digital</h2>
              <p className="text-gray-600 mb-8">Utilizamos as melhores ferramentas e tecnologias do mercado, como WordPress, VTEX, Mautic, Amazon, Azure, Resend, Twilio, Node.js, React e React Native, para criar soluções robustas, escaláveis e inovadoras que impulsionam seu sucesso digital.</p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition">
                Vamos conversar
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="https://www.convertesites.com.br/_next/image?url=%2Ftechs.png&w=640&q=75" alt="Technologies" className="rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Converte Sites e Treinamentos. Todos os direitos reservados - CNPJ: 58.532.850/0001-10</p>
        </div>
      </footer>
    </div>
  );
}