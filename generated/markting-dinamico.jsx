export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">LOGO</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#servicos" className="hover:text-blue-500">SERVICOS</a></li>
              <li><a href="#ferramentas" className="hover:text-blue-500">FERRAMENTAS</a></li>
              <li><a href="#depoimentos" className="hover:text-blue-500">DEPOIMENTOS</a></li>
            </ul>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center absolute inset-0"></div>
        <div className="z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Markting Dinamico</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg">
            Fale agora
          </button>
        </div>
      </section>

      <section id="servicos" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">SERVICOS</h2>
              <p className="text-gray-600 mb-6">confora nosos servicos</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                compre agora
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="https://via.placeholder.com/600x400" alt="Serviços" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="ferramentas" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
              <h2 className="text-3xl font-bold mb-4">ferrantas que usamos</h2>
              <p className="text-gray-300 mb-6">confoia as feramamentas que usamos</p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full">
                compre agora
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="https://via.placeholder.com/600x400" alt="Ferramentas" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">depoimetos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">confroa quem acredita no nosso trabakho</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-yellow-50 p-8 rounded-xl shadow-lg max-w-md text-center">
              <img src="https://via.placeholder.com/150" alt="Depoimento" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-gray-700 mb-4">"Excelente serviço! Recomendo muito."</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full">
                compre agra
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>20525 md - ja seu</p>
        </div>
      </footer>
    </div>
  );
}