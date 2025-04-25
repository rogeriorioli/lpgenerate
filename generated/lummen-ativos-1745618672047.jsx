import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen font-sans">
      <Head>
        <title>Lummen Ativos</title>
      </Head>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-800 rounded-lg mr-2"></div>
            <span className="text-xl font-bold text-gray-800">LUMMEN</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#section1" className="text-gray-800 hover:text-blue-500 font-medium">SOBRE</a>
            <a href="#section2" className="text-gray-800 hover:text-blue-500 font-medium">COMO FUNCIONA</a>
            <a href="#section3" className="text-gray-800 hover:text-blue-500 font-medium">DÚVIDAS</a>
            <a href="#section4" className="text-gray-800 hover:text-blue-500 font-medium">CONTATO</a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#section1" className="text-gray-800 hover:text-blue-500 font-medium" onClick={toggleMenu}>SOBRE</a>
              <a href="#section2" className="text-gray-800 hover:text-blue-500 font-medium" onClick={toggleMenu}>COMO FUNCIONA</a>
              <a href="#section3" className="text-gray-800 hover:text-blue-500 font-medium" onClick={toggleMenu}>DÚVIDAS</a>
              <a href="#section4" className="text-gray-800 hover:text-blue-500 font-medium" onClick={toggleMenu}>CONTATO</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">REVOLUÇÃO NA VELOCIDADE DA LUZ!</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fadeIn delay-100">
            A Lummen chega para transformar o mercado de ativos de precatórios, oferecendo uma experiência única e revolucionária!
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-fadeIn delay-200">
            SIMULE AGORA
          </button>
        </div>
      </section>

      {/* Section 1 */}
      <section id="section1" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 uppercase">Transformando o mercado de precatórios</h2>
              <div className="space-y-4 text-gray-700">
                <p>A Lummen traz para o mercado de ativos de precatórios uma experiência inovadora, ágil e transparente. Nossa missão é transformar a antecipação de precatórios, garantindo as melhores condições e um pagamento rápido, seguro e sem burocracia.</p>
                <p>Com uma equipe altamente qualificada e especializada, unimos tecnologia de ponta a um atendimento próximo e humanizado. Nossa plataforma inteligente integra todas as etapas do processo, tornando-o mais eficiente, claro e sem complicações.</p>
                <p>E, para quem valoriza o contato presencial, nosso moderno escritório em Pinheiros, São Paulo, está de portas abertas. Aqui, sua negociação acontece com total transparência, sempre frente a frente, olho no olho.</p>
                <p className="font-semibold">O jeito fácil, confiável e inovador de negociar seus precatórios.</p>
              </div>
              <button className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                FALE COM UM ESPECIALISTA
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-300 h-96 rounded-xl shadow-xl overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Illustration about money</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section2" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase">TUDO O QUE VOCÊ PRECISA SABER PARA VENDER SEU PRECATÓRIO EM 4 PASSOS!</h2>
            <p className="text-xl text-blue-500 font-medium">Simples, rápido e com a agilidade da luz!</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-gray-300 h-96 rounded-xl shadow-xl overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Work process illustration</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase">Conecte-se</h3>
                    <p className="text-gray-700">Fale com um consultor Lummen pelo chat, formulário ou WhatsApp. Envie seus dados e as informações do precatório que deseja negociar.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase">Proposta Sob Medida</h3>
                    <p className="text-gray-700">Receba uma oferta personalizada. Ao aceitar, basta encaminhar a documentação necessária para avançarmos com o processo de análise.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase">Avaliação Estratégica</h3>
                    <p className="text-gray-700">Nosso time analisará o seu precatório e os seus documentos. Sendo tudo aprovado, você receberá todas as orientações para concretizar a venda com total segurança.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase">Dinheiro na Conta</h3>
                    <p className="text-gray-700">Após a realização da cessão de crédito, o pagamento é realizado diretamente na sua conta bancária, tudo de maneira rápida, prática e segura.</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                SIMULE AGORA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section3" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">A LUMMEN ESCLARECE TODAS AS SUAS DÚVIDAS COM TRANSPARÊNCIA.</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 uppercase">Quais as vantagens de vender meu precatório?</h3>
                  <p className="text-gray-300">Com a Lummen, você transforma o seu precatório em dinheiro rapidamente, sem burocracia e com total segurança. Nosso processo é ágil, transparente e garante que você tenha acesso ao seu dinheiro sem precisar esperar anos na fila de pagamento do governo.</p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 uppercase">Quais documentos são necessários?</h3>
                  <p className="text-gray-300">Para dar início ao processo, basta apresentar uma cópia do seu RG/CPF ou CNH e um comprovante de residência atualizado. Apenas o essencial para garantir rapidez e praticidade.</p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 uppercase">Como funciona a antecipação do meu precatório?</h3>
                  <p className="text-gray-300">A Lummen criou um processo simplificado para que você tenha seu dinheiro em mãos no menor tempo possível: 1. Faça seu cadastro em nossa plataforma. 2. Receba e avalie nossa proposta. 3. Assine o termo de cessão. 4. O pagamento é realizado de forma ágil e segura</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 uppercase">Quais são os tipos de precatórios que a Lummen compra?</h3>
                  <p className="text-gray-300">Todos. Nossa equipe de especialistas avalia qualquer tipo de precatório, sempre buscando a melhor solução para você.</p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 uppercase">Meus dados estão seguros com a Lummen?</h3>
                  <p className="text-gray-300">Absolutamente. A Lummen segue rigorosamente as diretrizes da Lei Geral de Proteção de Dados (LGPD), garantindo total sigilo e segurança em todas as etapas do processo. Seu direito à privacidade é uma prioridade para nós.</p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 uppercase">Onde fica a Lummen?</h3>
                  <p className="text-gray-300">Para aqueles que preferem um atendimento presencial, nosso escritório está localizado em Pinheiros, São Paulo. Um ambiente moderno e preparado para oferecer a melhor experiência na negociação, sempre com um atendimento próximo e transparente</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                  SIMULE AGORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section4" className="py-20 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">ANTECIPE SEU PRECATÓRIO COM SEGURANÇA E NA VELOCIDADE DA LUZ!</h2>
            <p className="text-xl mb-8">Preencha o formulário e receba uma proposta sem compromisso, de forma simples e transparente</p>
            
            <div className="bg-white rounded-xl shadow-2xl p-8 text-gray-800">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nome Completo</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Telefone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mensagem</label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                  ENVIAR MENSAGEM
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/*