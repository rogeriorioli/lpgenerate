export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Dog background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              TESET DE TESTE
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              TESET TESTE TESTE
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3b82f6] hover:bg-[#2563eb] uppercase"
              >
                ETSET
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl uppercase">
                TESET
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                TEST ETSTE
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#6366f1] hover:bg-[#4f46e5] uppercase"
                >
                  TESTE
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                className="w-full rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1443&q=80"
                alt="Cat"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                CONTACT INFORMATION
              </h3>
              <div className="mt-4 space-y-2">
                <p className="text-gray-300">TESTE ETSTEBETSTE</p>
                <p className="text-gray-300">234567890</p>
                <p className="text-gray-300">1234567890</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                SOCIAL MEDIA LINKS
              </h3>
              <div className="mt-4 space-y-2">
                <p className="text-gray-300">LINKEDIN: TESE</p>
                <p className="text-gray-300">TWITTER: TESTE</p>
                <p className="text-gray-300">INSTAGRAM: TESTE</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                ADDITIONAL INFORMATION
              </h3>
              <div className="mt-4 space-y-2">
                <p className="text-gray-300">Link 1</p>
                <p className="text-gray-300">Link 2</p>
                <p className="text-gray-300">Link 3</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}