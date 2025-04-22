export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-screen flex items-center justify-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase mb-4">SDASD</h1>
          <p className="text-xl md:text-2xl text-white mb-8">SDSAD</p>
          <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-3 px-8 rounded-full uppercase transition duration-300">
            SDSAD
          </button>
        </div>
      </div>

      {/* Section 1 */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#111827] uppercase mb-6">TESTE</h2>
              <p className="text-lg text-gray-600 mb-8">TESTE</p>
              <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold py-3 px-6 rounded-full uppercase transition duration-300">
                TESTE
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Developer" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">CONTACT INFORMATION</h3>
            <p className="mb-2">ERTYUIOP[</p>
            <p className="mb-2">Phone: 123456789</p>
            <p>WhatsApp: 123456789</p>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">SOCIAL MEDIA LINKS</h3>
            <p className="mb-2">LinkedIn: 12345678</p>
            <p className="mb-2">Twitter: Q234567</p>
            <p>Instagram: 1234567</p>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">ADDITIONAL INFORMATION</h3>
            <p className="mb-2">Privacy Policy</p>
            <p className="mb-2">Terms of Service</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>© 2023 SDSDSA. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}