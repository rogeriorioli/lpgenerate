export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">Converte Sites</h1>
        <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
          fale conosco
        </button>
      </header>

      <main className="flex-grow">
        <section className="py-12 px-6 md:flex items-center justify-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">serviços</h2>
            <p className="text-gray-600 mb-6">contrate serviços de exxlencoa</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              fale agoora
            </button>
          </div>
          <div className="md:w-1/2 bg-gray-200 h-64 flex items-center justify-center">
            <span>placeholder</span>
          </div>
        </section>

        <section className="py-12 px-6 bg-gray-50 md:flex items-center justify-center gap-12 flex-row-reverse">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">quem somos</h2>
            <p className="text-gray-600 mb-6">
              somos uma empresa robusta que atende milhares de clientes o ano todo em fdiversos segmentos
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              fale agora mesmo
            </button>
          </div>
          <div className="md:w-1/2 bg-gray-200 h-64 flex items-center justify-center">
            <span>placeholder</span>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2025 - converte-sites</p>
      </footer>
    </div>
  );
}