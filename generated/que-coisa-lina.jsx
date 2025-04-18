export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed w-full bg-white shadow-md z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">LOGO</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#section1" className="hover:text-gray-600">Section 1</a></li>
            </ul>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow pt-16">
        <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center opacity-50"></div>
          <div className="z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">que coisa lina</h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg">
              compre agora
            </button>
          </div>
        </section>

        <section id="section1" className="py-20 bg-gradient-to-r from-purple-100 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">cpomrpe batton</h2>
                <p className="text-gray-600 mb-8">lorem ipsum dolor sit amet</p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full">
                  compre agora
                </button>
              </div>
              <div className="md:w-1/2">
                <img src="https://via.placeholder.com/600x400" alt="Placeholder" className="rounded-lg shadow-xl w-full" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          teste
        </div>
      </footer>
    </div>
  );
}