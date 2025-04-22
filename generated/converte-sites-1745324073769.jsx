export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 uppercase">Somos Experientes em Desenvolvimento e Design UX/UI para Negócios Digitais</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">Criamos soluções inovadoras de desenvolvimento e design, focadas em proporcionar experiências digitais envolventes e eficazes para diversos tipos de negócios, impulsionando resultados e crescendo junto com você.</p>
          <button className="bg-[#69e298] hover:bg-[#58c487] text-[#46494e] font-bold py-3 px-8 rounded-full text-lg uppercase transition duration-300">Vamos conversar</button>
        </div>
      </div>

      {/* Section 1 */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#46494e] mb-6 uppercase">Vamos Além de UX e Código: Entregamos Performance e Experiência Completa</h2>
            <p className="text-lg text-[#a2a2a9] mb-8">Acreditamos que uma excelente experiência digital vai além de um bom design e código bem estruturado. Focamos também na performance, garantindo carregamento rápido e navegação fluida para uma experiência completa e eficiente.</p>
            <button className="bg-[#69e298] hover:bg-[#58c487] text-[#46494e] font-bold py-3 px-8 rounded-full text-lg uppercase transition duration-300">Vamos conversar</button>
          </div>
          <div className="h-96 bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}></div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#46494e]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="h-96 bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}></div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 uppercase">Entregamos Experiência Completa</h2>
            <p className="text-lg text-[#a2a2a9] mb-8">Oferecemos um conjunto integrado de design, desenvolvimento e performance para criar experiências digitais que geram resultados reais e impactam positivamente seu negócio.</p>
            <button className="bg-[#69e298] hover:bg-[#58c487] text-[#46494e] font-bold py-3 px-8 rounded-full text-lg uppercase transition duration-300">Vamos conversar</button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#46494e] mb-6 uppercase">Tecnologias de Ponta para Potencializar Seu Negócio Digital</h2>
            <p className="text-lg text-[#a2a2a9] mb-8">Utilizamos as melhores ferramentas e tecnologias do mercado, como WordPress, VTEX, Mautic, Amazon, Azure, Resend, Twilio, Node.js, React e React Native, para criar soluções robustas, escaláveis e inovadoras que impulsionam seu sucesso digital.</p>
            <button className="bg-[#69e298] hover:bg-[#58c487] text-[#46494e] font-bold py-3 px-8 rounded-full text-lg uppercase transition duration-300">Vamos conversar</button>
          </div>
          <div className="h-96 bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80')" }}></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#46494e] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Informações de Contato</h3>
            <p className="mb-2">servidão morro verde, 51</p>
            <p className="mb-2">+55 48991775899</p>
            <p>+55 48991775899 (WhatsApp)</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Redes Sociais</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#69e298] transition duration-300">LinkedIn: convertesites</a></li>
              <li><a href="#" className="hover:text-[#69e298] transition duration-300">Twitter: convertesites</a></li>
              <li><a href="#" className="hover:text-[#69e298] transition duration-300">Instagram: convertesites</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#69e298] transition duration-300">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-[#69e298] transition duration-300">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-[#69e298] transition duration-300">Trabalhe Conosco</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#a2a2a9] text-center">
          <p>© {new Date().getFullYear()} Converte Sites. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}