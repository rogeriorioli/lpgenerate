export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="fixed w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">LOGO</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#section1" className="hover:text-gray-300 transition">SECTION 1</a></li>
              <li><a href="#section2" className="hover:text-gray-300 transition">SECTION 2</a></li>
              <li><a href="#section3" className="hover:text-gray-300 transition">SECTION 3</a></li>
            </ul>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(https://via.placeholder.com/800x400?text=Image+Placeholder)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase">LANDING PAGES GENERATE</h1>
          <button className="bg-white text-black px-8 py-3 font-bold uppercase hover:bg-opacity-90 transition">
            GENERATE YOUR OWN
          </button>
        </div>
      </section>

      {/* Section 1 */}
      <section id="section1" className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase">EASY TO CREATE</h2>
            <p className="text-white mb-8">Use IA to generate a sccofold of your landing page FAST!</p>
            <button className="bg-white text-indigo-600 px-6 py-2 font-bold uppercase hover:bg-opacity-90 transition">
              CREATE NOW
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="https://via.placeholder.com/800x400?text=Image+Placeholder" alt="Section 1" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section2" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 uppercase">MODERNS RESOURCES</h2>
            <p className="text-gray-600 mb-8">Your lading page use the most modern soluctions like a React , Next JS and fast and optimized for SEO</p>
            <button className="bg-black text-white px-6 py-2 font-bold uppercase hover:bg-opacity-90 transition">
              CREATE YOUR OWN NOW!
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="https://via.placeholder.com/800x400?text=Image+Placeholder" alt="Section 2" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section3" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 uppercase">CREATE FAST</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Get starerd righr now</p>
          <div className="mb-12">
            <img src="https://via.placeholder.com/800x400?text=Image+Placeholder" alt="Section 3" className="rounded-lg shadow-xl mx-auto" />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 font-bold uppercase hover:bg-opacity-90 transition">
            CREATE NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Converte Sites e Treinamentos. Todos os direitos reservados - CNPJ: 58.532.850/0001-10</p>
        </div>
      </footer>
    </div>
  );
}