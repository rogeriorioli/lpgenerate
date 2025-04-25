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

  return (
    <>
      <Head>
        <title>LUMMEN ATIVOS</title>
      </Head>

      <header className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">LOGO</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#section1" className="font-medium hover:text-blue-500 transition-colors">INOVAÇÃO</a></li>
              <li><a href="#section2" className="font-medium hover:text-blue-500 transition-colors">PASSOS</a></li>
              <li><a href="#section3" className="font-medium hover:text-blue-500 transition-colors">DÚVIDAS</a></li>
              <li><a href="#section4" className="font-medium hover:text-blue-500 transition-colors">CONTATO</a></li>
            </ul>
          </nav>
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <ul className="space-y-3">
              <li><a href="#section1" className="block font-medium hover:text-blue-500 transition-colors">INOVAÇÃO</a></li>
              <li><a href="#section2" className="block font-medium hover:text-blue-500 transition-colors">PASSOS</a></li>
              <li><a href="#section3" className="block font-medium hover:text-blue-500 transition-colors">DÚVIDAS</a></li>
              <li><a href="#section4" className="block font-medium hover:text-blue-500 transition-colors">CONTATO</a></li>
            </ul>
          </div>
        )}
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">REVOLUÇÃO NA VELOCIDADE DA LUZ!</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">A LUMMEN CHEGA PARA TRANSFORMAR O MERCADO DE ATIVOS DE PRECATÓRIOS, OFERECENDO UMA EXPERIÊNCIA ÚNICA E REVOLUCIONÁRIA!</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors">TESTE</button>
          </div>
        </section>

        <section id="section1" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">INOVAÇÃO E VELOCIDADE</h2>
                <div className="space-y-4 text-gray-700">
                  <p>A Lummen traz para o mercado de ativos de precatórios uma experiência inovadora, ágil e transparente. Nossa missão é transformar a antecipação de precatórios, garantindo as melhores condições e um pagamento rápido, seguro e sem burocracia.</p>
                  <p>Com uma equipe altamente qualificada e especializada, unimos tecnologia de ponta a um atendimento próximo e humanizado. Nossa plataforma inteligente integra todas as etapas do processo, tornando-o mais eficiente, claro e sem complicações.</p>
                  <p>E, para quem valoriza o contato presencial, nosso moderno escritório em Pinheiros, São Paulo, está de portas abertas. Aqui, sua negociação acontece com total transparência, sempre frente a frente, olho no olho.</p>
                  <p>O jeito fácil, confiável e inovador de negociar seus precatórios.</p>
                </div>
                <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors">TESTE</button>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Fast" className="rounded-xl shadow-xl w-full" />
              </div>
            </div>
          </div>
        </section>

        <section id="section2" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">TUDO O QUE VOCÊ PRECISA SABER PARA VENDER SEU PRECATÓRIO EM 4 PASSOS!</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Work" className="rounded-xl shadow-xl w-full" />
              </div>
              <div className="md:w-1/2 md:pl-10">
                <p className="text-xl text-indigo-600 font-semibold mb-8">SIMPLES, RÁPIDO E COM A AGILIDADE DA LUZ!</p>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="bg-blue-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">CONECTE-SE</h3>
                      <p className="text-gray-700">Fale com um consultor Lummen pelo chat, formulário ou WhatsApp. Envie seus dados e as informações do precatório que deseja negociar.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-blue-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">PROPOSTA SOB MEDIDA</h3>
                      <p className="text-gray-700">Receba uma oferta personalizada. Ao aceitar, basta encaminhar a documentação necessária para avançarmos com o processo de análise.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-blue-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">AVALIAÇÃO ESTRATÉGICA</h3>
                      <p className="text-gray-700">Nosso time analisará o seu precatório e os seus documentos. Sendo tudo aprovado, você receberá todas as orientações para concretizar a venda com total segurança.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-blue-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">DINHEIRO NA CONTA</h3>
                      <p className="text-gray-700">Após a realização da cessão de crédito, o pagamento é realizado diretamente na sua conta bancária, tudo de maneira rápida, prática e segura.</p>
                    </div>
                  </div>
                </div>
                <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors">SIMULE AGORA</button>
              </div>
            </div>
          </div>
        </section>

        <section id="section3" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">A LUMMEN ESCLARECE TODAS AS SUAS DÚVIDAS COM TRANSPARÊNCIA.</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">QUAIS AS VANTAGENS DE VENDER MEU PRECATÓRIO?</h3>
                  <p className="text-gray-300">Com a Lummen, você transforma o seu precatório em dinheiro rapidamente, sem burocracia e com total segurança. Nosso processo é ágil, transparente e garante que você tenha acesso ao seu dinheiro sem precisar esperar anos na fila de pagamento do governo.</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">QUAIS DOCUMENTOS SÃO NECESSÁRIOS?</h3>
                  <p className="text-gray-300">Para dar início ao processo, basta apresentar uma cópia do seu RG/CPF ou CNH e um comprovante de residência atualizado. Apenas o essencial para garantir rapidez e praticidade.</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">COMO FUNCIONA A ANTECIPAÇÃO DO MEU PRECATÓRIO?</h3>
                  <p className="text-gray-300">A Lummen criou um processo simplificado para que você tenha seu dinheiro em mãos no menor tempo possível: 1. Faça seu cadastro em nossa plataforma. 2. Receba e avalie nossa proposta. 3. Assine o termo de cessão. 4. O pagamento é realizado de forma ágil e segura</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">QUAIS SÃO OS TIPOS DE PRECATÓRIOS QUE A LUMMEN COMPRA?</h3>
                  <p className="text-gray-300">Todos. Nossa equipe de especialistas avalia qualquer tipo de precatório, sempre buscando a melhor solução para você.</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">MEUS DADOS ESTÃO SEGUROS COM A LUMMEN?</h3>
                  <p className="text-gray-300">Absolutamente. A Lummen segue rigorosamente as diretrizes da Lei Geral de Proteção de Dados (LGPD), garantindo total sigilo e segurança em todas as etapas do processo. Seu direito à privacidade é uma prioridade para nós.</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">ONDE FICA A LUMMEN?</h3>
                  <p className="text-gray-300">Para aqueles que preferem um atendimento presencial, nosso escritório está localizado em Pinheiros, São Paulo. Um ambiente moderno e preparado para oferecer a melhor experiência na negociação, sempre com um atendimento próximo e transparente</p>
                </div>
              </div>
              <div className="text-center mt-12">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors">SIMULE AGORA</button>
              </div>
            </div>
          </div>
        </section>

        <section id="section4" className="py-20 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ANTECIPE SEU PRECATÓRIO COM SEGURANÇA E NA VELOCIDADE DA LUZ!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">SIMULE AGORA! PREENCHA O FORMULÁRIO E RECEBA UMA PROPOSTA SEM COMPROMISSO, DE FORMA SIMPLES E TRANSPARENTE</p>
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-full transition-colors">TESTE</button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">CONTATO</h3>
              <p className="mb-2">TESTE</p>
              <p className="mb-2">TESTETE</p>
              <p>TESET</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">REDES SOCIAIS</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors">LINKEDIN</a>
                <a href="#" className="hover:text-blue-400 transition-colors">TWITTER</a>
                <a href="#" className="hover:text-blue-400 transition-colors">INSTAGRAM</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">INFORMAÇÕES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">TERMOS DE USO</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">POLÍTICA DE PRIVACIDADE</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} LUMMEN ATIVOS. TODOS OS DIREITOS RESERVADOS.</p>
          </div>
        </div>
      </footer>
    </>
  );
}