import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Lummen Ativos</title>
      </Head>

      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-800 rounded-lg mr-2"></div>
              <span className="text-xl font-bold text-gray-800">LUMMEN</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#section1" className="text-gray-800 hover:text-blue-500 font-medium">SOBRE</a>
              <a href="#section2" className="text-gray-800 hover:text-blue-500 font-medium">COMO FUNCIONA</a>
              <a href="#section3" className="text-gray-800 hover:text-blue-500 font-medium">DÚVIDAS</a>
              <a href="#section4" className="text-gray-800 hover:text-blue-500 font-medium">CONTATO</a>
            </div>

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

          {isMenuOpen && (
            <div className="md:hidden bg-white py-4 px-2 mt-2 rounded-lg shadow-lg">
              <div className="flex flex-col space-y-3">
                <a href="#section1" className="text-gray-800 hover:text-blue-500 font-medium" onClick={toggleMenu}>SOBRE</a>
                <a href="#section2" className="text-gray-800 hover:text-blue-500 font-medium" onClick={toggleMenu}>COMO FUNCIONA</a>
                <a href="#section3" className="text-gray-800 hover:text-blue-500 font-medium" onClick={toggleMenu}>DÚVIDAS</a>
                <a href="#section4" className="text-gray-800 hover:text-blue-500 font-medium" onClick={toggleMenu}>CONTATO</a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')] bg-cover bg-center absolute inset-0"></div>
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">REVOLUÇÃO NA VELOCIDADE DA LUZ!</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">A Lummen chega para transformar o mercado de ativos de precatórios, oferecendo uma experiência única e revolucionária!</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              SIMULE AGORA
            </button>
          </div>
        </section>

        <section id="section1" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 uppercase">Transformando o mercado de precatórios</h2>
                <p className="text-gray-600 mb-6">A Lummen traz para o mercado de ativos de precatórios uma experiência inovadora, ágil e transparente. Nossa missão é transformar a antecipação de precatórios, garantindo as melhores condições e um pagamento rápido, seguro e sem burocracia.</p>
                <p className="text-gray-600 mb-6">Com uma equipe altamente qualificada e especializada, unimos tecnologia de ponta a um atendimento próximo e humanizado. Nossa plataforma inteligente integra todas as etapas do processo, tornando-o mais eficiente, claro e sem complicações.</p>
                <p className="text-gray-600 mb-8">E, para quem valoriza o contato presencial, nosso moderno escritório em Pinheiros, São Paulo, está de portas abertas. Aqui, sua negociação acontece com total transparência, sempre frente a frente, olho no olho.</p>
                <p className="text-gray-800 font-semibold">O jeito fácil, confiável e inovador de negociar seus precatórios.</p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-indigo-100 rounded-xl overflow-hidden shadow-xl transform rotate-1">
                  <div className="h-80 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section2" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 uppercase">TUDO O QUE VOCÊ PRECISA SABER PARA VENDER SEU PRECATÓRIO EM 4 PASSOS!</h2>
            <p className="text-xl text-center text-blue-500 mb-16">Simples, rápido e com a agilidade da luz!</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 transform hover:-translate-y-2 transition duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-blue-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase">Conecte-se</h3>
                <p className="text-gray-600">Fale com um consultor Lummen pelo chat, formulário ou WhatsApp. Envie seus dados e as informações do precatório que deseja negociar.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500 transform hover:-translate-y-2 transition duration-300">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-indigo-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase">Proposta Sob Medida</h3>
                <p className="text-gray-600">Receba uma oferta personalizada. Ao aceitar, basta encaminhar a documentação necessária para avançarmos com o processo de análise.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 transform hover:-translate-y-2 transition duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-blue-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase">Avaliação Estratégica</h3>
                <p className="text-gray-600">Nosso time analisará o seu precatório e os seus documentos. Sendo tudo aprovado, você receberá todas as orientações para concretizar a venda com total segurança.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500 transform hover:-translate-y-2 transition duration-300">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-indigo-600 text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase">Dinheiro na Conta</h3>
                <p className="text-gray-600">Após a realização da cessão de crédito, o pagamento é realizado diretamente na sua conta bancária, tudo de maneira rápida, prática e segura.</p>
              </div>
            </div>

            <div className="text-center mt-16">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                SIMULE AGORA
              </button>
            </div>
          </div>
        </section>

        <section id="section3" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 uppercase">A LUMMEN ESCLARECE TODAS AS SUAS DÚVIDAS COM TRANSPARÊNCIA.</h2>
            
            <div className="max-w-4xl mx-auto mt-16">
              <div className="mb-6">
                <div className="flex items-start">
                  <span className="text-blue-500 text-2xl mr-3">?</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">QUAIS AS VANTAGENS DE VENDER MEU PRECATÓRIO?</h3>
                    <p className="text-gray-600">Com a Lummen, você transforma o seu precatório em dinheiro rapidamente, sem burocracia e com total segurança. Nosso processo é ágil, transparente e garante que você tenha acesso ao seu dinheiro sem precisar esperar anos na fila de pagamento do governo.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <span className="text-blue-500 text-2xl mr-3">?</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">QUAIS DOCUMENTOS SÃO NECESSÁRIOS?</h3>
                    <p className="text-gray-600">Para dar início ao processo, basta apresentar uma cópia do seu RG/CPF ou CNH e um comprovante de residência atualizado. Apenas o essencial para garantir rapidez e praticidade.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <span className="text-blue-500 text-2xl mr-3">?</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">COMO FUNCIONA A ANTECIPAÇÃO DO MEU PRECATÓRIO?</h3>
                    <p className="text-gray-600">A Lummen criou um processo simplificado para que você tenha seu dinheiro em mãos no menor tempo possível: 1. Faça seu cadastro em nossa plataforma. 2. Receba e avalie nossa proposta. 3. Assine o termo de cessão. 4. O pagamento é realizado de forma ágil e segura</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <span className="text-blue-500 text-2xl mr-3">?</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">QUAIS SÃO OS TIPOS DE PRECATÓRIOS QUE A LUMMEN COMPRA?</h3>
                    <p className="text-gray-600">Todos. Nossa equipe de especialistas avalia qualquer tipo de precatório, sempre buscando a melhor solução para você.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <span className="text-blue-500 text-2xl mr-3">?</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">MEUS DADOS ESTÃO SEGUROS COM A LUMMEN?</h3>
                    <p className="text-gray-600">Absolutamente. A Lummen segue rigorosamente as diretrizes da Lei Geral de Proteção de Dados (LGPD), garantindo total sigilo e segurança em todas as etapas do processo. Seu direito à privacidade é uma prioridade para nós.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <span className="text-blue-500 text-2xl mr-3">?</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">ONDE FICA A LUMMEN?</h3>
                    <p className="text-gray-600">Para aqueles que preferem um atendimento presencial, nosso escritório está localizado em Pinheiros, São Paulo. Um ambiente moderno e preparado para oferecer a melhor experiência na negociação, sempre com um atendimento próximo e transparente</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                SIMULE AGORA
              </button>
            </div>
          </div>
        </section>

        <section id="section4" className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase">ANTECIPE SEU PRECATÓRIO COM SEGURANÇA E NA VELOCIDADE DA LUZ!</h2>
              <p className="text-xl text-white mb-8">Preencha o formulário e receba uma proposta sem compromisso, de forma simples e transparente</p>
              
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <form>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <input type="text" placeholder="Nome Completo" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <input type="email" placeholder="E-mail" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <input type="tel" placeholder="Telefone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <input type="text" placeholder="Valor do Precatório" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-