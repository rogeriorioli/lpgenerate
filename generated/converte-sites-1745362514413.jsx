import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">
      <Head>
        <title>Converte Sites</title>
      </Head>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#6e6e6e]">CONVERTE SITES</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#section1" className="text-[#6e6e6e] hover:text-[#6fc388] font-medium">SERVIÇOS</a></li>
              <li><a href="#section2" className="text-[#6e6e6e] hover:text-[#6fc388] font-medium">EXPERIÊNCIA</a></li>
              <li><a href="#section3" className="text-[#6e6e6e] hover:text-[#6fc388] font-medium">TECNOLOGIAS</a></li>
              <li><a href="#footer" className="text-[#6e6e6e] hover:text-[#6fc388] font-medium">CONTATO</a></li>
            </ul>
          </nav>
          <button className="md:hidden text-[#6e6e6e]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          marginTop: '-80px'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 z-10 text-center text-white pt-32 pb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">SOMOS PARCEIROS EM DESENVOLVIMENTO E DESIGN UX/UI PARA NEGÓCIOS DIGITAIS</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto">Criamos soluções inovadoras de desenvolvimento e design, focadas em proporcionar experiências digitais envolventes e eficazes para diversos tipos de negócios, impulsionando resultados e crescendo junto com você.</p>
          <button className="bg-[#6fc388] hover:bg-[#73bf5f] text-white font-bold py-4 px-10 rounded-full text-lg uppercase transition-colors duration-300">
            VAMOS CONVERSAR
          </button>
        </div>
      </section>

      {/* Section 1 */}
      <section id="section1" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6e6e6e] uppercase">VAMOS ALÉM DE UX E CÓDIGO: ENTREGAMOS PERFORMANCE E EXPERIÊNCIA COMPLETA</h2>
              <p className="text-lg text-[#6e6e6e] mb-8">Acreditamos que uma excelente experiência digital vai além de um bom design e código bem estruturado. Focamos também na performance, garantindo carregamento rápido e navegação fluida para uma experiência completa e eficiente.</p>
              <button className="bg-[#6fc388] hover:bg-[#73bf5f] text-white font-bold py-3 px-8 rounded-full text-md uppercase transition-colors duration-300">
                VAMOS CONVERSAR
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-4xl text-[#6e6e6e]">DESIGN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section2" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6e6e6e] uppercase">ENTREGAMOS EXPERIÊNCIA COMPLETA</h2>
              <p className="text-lg text-[#6e6e6e] mb-4">Oferecemos um conjunto integrado de design, desenvolvimento e performance para criar experiências digitais que geram resultados reais e impactam positivamente seu negócio.</p>
              <ul className="mb-8 text-[#6e6e6e]">
                <li className="mb-2 flex items-center">
                  <span className="w-2 h-2 bg-[#6fc388] rounded-full mr-2"></span>
                  Desenvolvimento Web/Mobile
                </li>
                <li className="mb-2 flex items-center">
                  <span className="w-2 h-2 bg-[#6fc388] rounded-full mr-2"></span>
                  Performance e Otimização
                </li>
                <li className="mb-2 flex items-center">
                  <span className="w-2 h-2 bg-[#6fc388] rounded-full mr-2"></span>
                  Design gráfico Web design (UX/UI)
                </li>
                <li className="mb-2 flex items-center">
                  <span className="w-2 h-2 bg-[#6fc388] rounded-full mr-2"></span>
                  Automação do funil de vendas
                </li>
                <li className="mb-2 flex items-center">
                  <span className="w-2 h-2 bg-[#6fc388] rounded-full mr-2"></span>
                  Alocação de Profissionais
                </li>
              </ul>
              <button className="bg-[#6fc388] hover:bg-[#73bf5f] text-white font-bold py-3 px-8 rounded-full text-md uppercase transition-colors duration-300">
                VAMOS CONVERSAR
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
                <span className="text-4xl text-[#6e6e6e]">TECH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section3" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6e6e6e] uppercase">TECNOLOGIAS DE PONTA PARA POTENCIALIZAR SEU NEGÓCIO DIGITAL</h2>
              <p className="text-lg text-[#6e6e6e] mb-8">Utilizamos as melhores ferramentas e tecnologias do mercado, como WordPress, VTEX, Mautic, Amazon, Azure, Resend, Twilio, Node.js, React e React Native, para criar soluções robustas, escaláveis e inovadoras que impulsionam seu sucesso digital.</p>
              <button className="bg-[#6fc388] hover:bg-[#73bf5f] text-white font-bold py-3 px-8 rounded-full text-md uppercase transition-colors duration-300">
                VAMOS CONVERSAR
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-4xl text-[#6e6e6e]">DEVELOPMENT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#6e6e6e] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">Contato</h3>
              <p className="mb-2">Rua do React, 100</p>
              <p className="mb-2">Telefone: 123456789</p>
              <p>WhatsApp: 123456789</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">Redes Sociais</h3>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-[#6fc388]">LinkedIn: convertesites</a></li>
                <li className="mb-2"><a href="#" className="hover:text-[#6fc388]">Twitter: convertesites</a></li>
                <li><a href="#" className="hover:text-[#6fc388]">Instagram: convertesites</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">Links Úteis</h3>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-[#6fc388]">Política de Privacidade</a></li>
                <li className="mb-2"><a href="#" className="hover:text-[#6fc388]">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-[#6fc388]">Trabalhe Conosco</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-500 mt-10 pt-6 text-center">
            <p>© {new Date().getFullYear()} Converte Sites. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}