Here's the complete functional React component for your landing page:

```javascript
import { useState, useEffect } from 'react';

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
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">L</div>
            <span className="ml-2 font-bold text-gray-800 hidden sm:block">LUMMEN ATIVOS</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#section1" className="font-medium hover:text-indigo-600 transition">SOBRE</a>
            <a href="#section2" className="font-medium hover:text-indigo-600 transition">COMO FUNCIONA</a>
            <a href="#section3" className="font-medium hover:text-indigo-600 transition">DÚVIDAS</a>
            <a href="#section4" className="font-medium hover:text-indigo-600 transition">CONTATO</a>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <a href="#section1" className="block py-2 font-medium hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>SOBRE</a>
            <a href="#section2" className="block py-2 font-medium hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>COMO FUNCIONA</a>
            <a href="#section3" className="block py-2 font-medium hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>DÚVIDAS</a>
            <a href="#section4" className="block py-2 font-medium hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>CONTATO</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">Revolução na Velocidade da Luz!</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A Lummen chega para transformar o mercado de ativos de precatórios, oferecendo uma experiência única e revolucionária!
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
            SIMULE AGORA
          </button>
        </div>
      </section>

      {/* Section 1 */}
      <section id="section1" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase text-gray-900">Transformando o mercado de precatórios</h2>
              <div className="space-y-4 text-gray-700">
                <p>A Lummen traz para o mercado de ativos de precatórios uma experiência inovadora, ágil e transparente. Nossa missão é transformar a antecipação de precatórios, garantindo as melhores condições e um pagamento rápido, seguro e sem burocracia.</p>
                <p>Com uma equipe altamente qualificada e especializada, unimos tecnologia de ponta a um atendimento próximo e humanizado. Nossa plataforma inteligente integra todas as etapas do processo, tornando-o mais eficiente, claro e sem complicações.</p>
                <p>E, para quem valoriza o contato presencial, nosso moderno escritório em Pinheiros, São Paulo, está de portas abertas. Aqui, sua negociação acontece com total transparência, sempre frente a frente, olho no olho.</p>
                <p className="font-bold">O jeito fácil, confiável e inovador de negociar seus precatórios.</p>
              </div>
              <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                FALE CONOSCO
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-blue-500 rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Business" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section2" className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center uppercase">Tudo o que você precisa saber para vender seu precatório em 4 passos!</h2>
          <p className="text-xl text-center mb-16">Simples, rápido e com a agilidade da luz!</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "1. Conecte-se",
                desc: "Fale com um consultor Lummen pelo chat, formulário ou WhatsApp. Envie seus dados e as informações do precatório que deseja negociar."
              },
              {
                title: "2. Proposta Sob Medida",
                desc: "Receba uma oferta personalizada. Ao aceitar, basta encaminhar a documentação necessária para avançarmos com o processo de análise."
              },
              {
                title: "3. Avaliação Estratégica",
                desc: "Nosso time analisará o seu precatório e os seus documentos. Sendo tudo aprovado, você receberá todas as orientações para concretizar a venda com total segurança."
              },
              {
                title: "4. Dinheiro na Conta",
                desc: "Após a realização da cessão de crédito, o pagamento é realizado diretamente na sua conta bancária, tudo de maneira rápida, prática e segura."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition duration-300">
                <div className="text-2xl font-bold mb-4">{step.title}</div>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              SIMULE AGORA
            </button>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section3" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center uppercase text-gray-900">A Lummen esclarece todas as suas dúvidas com transparência.</h2>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "Quais as vantagens de vender meu precatório?",
                answer: "Com a Lummen, você transforma o seu precatório em dinheiro rapidamente, sem burocracia e com total segurança. Nosso processo é ágil, transparente e garante que você tenha acesso ao seu dinheiro sem precisar esperar anos na fila de pagamento do governo."
              },
              {
                question: "Quais documentos são necessários?",
                answer: "Para dar início ao processo, basta apresentar uma cópia do seu RG/CPF ou CNH e um comprovante de residência atualizado. Apenas o essencial para garantir rapidez e praticidade."
              },
              {
                question: "Como funciona a antecipação do meu precatório?",
                answer: "A Lummen criou um processo simplificado para que você tenha seu dinheiro em mãos no menor tempo possível: 1. Faça seu cadastro em nossa plataforma. 2. Receba e avalie nossa proposta. 3. Assine o termo de cessão. 4. O pagamento é realizado de forma ágil e segura"
              },
              {
                question: "Quais são os tipos de precatórios que a Lummen compra?",
                answer: "Todos. Nossa equipe de especialistas avalia qualquer tipo de precatório, sempre buscando a melhor solução para você."
              },
              {
                question: "Meus dados estão seguros com a Lummen?",
                answer: "Absolutamente. A Lummen segue rigorosamente as diretrizes da Lei Geral de Proteção de Dados (LGPD), garantindo total sigilo e segurança em todas as etapas do processo. Seu direito à privacidade é uma prioridade para nós."
              },
              {
                question: "Onde fica a Lummen?",
                answer: "Para aqueles que preferem um atendimento presencial, nosso escritório está localizado em Pinheiros, São Paulo. Um ambiente moderno e preparado para oferecer a melhor experiência na negociação, sempre com um atendimento próximo e transparente"
              }
            ].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="flex items-start">
                    <div className="text-2xl font-bold text-indigo-600 mr-4">?</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              SIMULE AGORA
            </button>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section4" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">Antecipe seu precatório com segurança e na velocidade da luz!</h2>
            <p className="text-xl mb-10">Simule agora! Preencha o formulário e receba uma proposta sem compromisso, de forma simples e transparente</p>
            
            <form className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nome Completo" className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input type="email" placeholder="E-mail" className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input type="tel" placeholder="Telefone" className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input type="text" placeholder="Valor do Precatório" className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <div className="md:col-span-2">
                <textarea placeholder="Mensagem" rows="4" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105">
                  ENVIAR MENSAGEM
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">Contato</h3>
              <p className="mb-2">Rua dos Pinheiros, 1234</p>
              <p className="mb-2">Pinheiros, São Paulo - SP</p>
              <p className="mb-2">CEP: 05422-000</p>
              <p className="mb-2">Telefone: (11) 1234-5678</p>
              <p>WhatsApp: (11) 98765-4321</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.