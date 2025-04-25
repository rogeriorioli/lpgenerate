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
        <title>Demand Consultoria</title>
      </Head>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1e4477]">DEMAND</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#section1" className="font-medium uppercase text-[#5c5c5c] hover:text-[#f2620b] transition-colors">Soluções</a>
            <a href="#section2" className="font-medium uppercase text-[#5c5c5c] hover:text-[#f2620b] transition-colors">Serviços</a>
            <a href="#section3" className="font-medium uppercase text-[#5c5c5c] hover:text-[#f2620b] transition-colors">Sobre</a>
            <a href="#contact" className="font-medium uppercase bg-[#f2620b] text-white px-6 py-2 rounded-md hover:bg-[#d45609] transition-colors">FALE COM UM ESPECIALISTA</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#1e4477]" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#section1" className="font-medium uppercase text-[#5c5c5c] hover:text-[#f2620b] transition-colors" onClick={() => setIsMenuOpen(false)}>Soluções</a>
              <a href="#section2" className="font-medium uppercase text-[#5c5c5c] hover:text-[#f2620b] transition-colors" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#section3" className="font-medium uppercase text-[#5c5c5c] hover:text-[#f2620b] transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre</a>
              <a href="#contact" className="font-medium uppercase bg-[#f2620b] text-white px-6 py-2 rounded-md hover:bg-[#d45609] transition-colors text-center" onClick={() => setIsMenuOpen(false)}>FALE COM UM ESPECIALISTA</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#1e4477] opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">ESTRATÉGIAS DE GERAÇÃO DE DEMANDA SOB MEDIDA PARA NEGÓCIOS B2B</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">Atraia os clientes certos, otimize seu funil de vendas e potencialize o crescimento da sua empresa com estratégias de marketing data-driven.</p>
          <a href="#contact" className="inline-block bg-[#f2620b] hover:bg-[#d45609] text-white font-bold uppercase px-8 py-4 rounded-md transition-colors">FALE COM UM ESPECIALISTA</a>
        </div>
      </section>

      {/* Section 1 */}
      <section id="section1" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase text-[#1e4477]">POSICIONE SUA EMPRESA NO MERCADO E IMPULSIONE O ENGAJAMENTO DOS SEUS CLIENTES</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-[#1e4477] p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-6 uppercase">Soluções de marketing inteligente que geram demanda e impulsionam seu sucesso.</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase text-[#f2620b]">Inteligência de Mercado</h4>
                    <p>Identificamos seu Perfil Ideal de Cliente (ICP), analisamos o potencial do seu mercado e utilizamos dados para prever tendências e otimizar suas campanhas.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase text-[#f2620b]">Marketing de Performance</h4>
                    <p>Construímos sua presença digital, otimizamos seus canais de marketing e implementamos campanhas de alta conversão.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase text-[#f2620b]">Máquina de Vendas</h4>
                    <p>Estruturamos sua esteira comercial, implementamos esteiras de prospecção outbound eficaz e adotamos estratégias de ABM para atração de contas esratégicas.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase text-[#f2620b]">Lançamento de Produto</h4>
                    <p>Planejamos e executamos campanhas criativas e estratégicas, online e offline, para aumentar o reconhecimento da marca, gerar impacto e impulsionar a venda de seus produtos.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase text-[#f2620b]">Estratégia de Founder Led Growth</h4>
                    <p>Amplifique a voz e a influência do seu CEO e contrua uma marca autêntica e engajadora. Desenvolvemos estratégias para posicionar o líder como referência, atraindo clientes e investidores.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase text-[#f2620b]">Database Marketing</h4>
                    <p>Analisamos sua base de clientes para identificar novas oportunidades de negócio, aumentando a receita e fortalecendo o relacionamento com seus clientes.</p>
                  </div>
                </div>
                <a href="#contact" className="inline-block mt-8 bg-[#f2620b] hover:bg-[#d45609] text-white font-bold uppercase px-6 py-3 rounded-md transition-colors">FALE COM UM ESPECIALISTA</a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Database marketing" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section2" className="py-20 bg-[#1e4477] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase">TRANSFORME SEU NEGÓCIO COM ESTRATÉGIAS COMPROVADAS</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Business partners" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-6 uppercase">Veja o que a Demand Consultoria oferece:</h3>
              <div className="space-y-8">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-2 uppercase text-[#f2620b]">Consultoria de Negócios</h4>
                  <p>Transforme seu negócio com uma abordagem estratégica e foco em resultados. Oferecemos consultoria especializada em vendas B2B para empresas que buscam escalar suas operações, otimizar seus processos de vendas e marketing e alcançar um crescimento sustentável. Além de análise do seu cenário atual, definição de objetivos estratégicos e criação de um plano de marketing para otimizar seus canais digitais, gerar leads, aumentar a eficiência, a previsibilidade e a escalabilidade das suas vendas.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-2 uppercase text-[#f2620b]">Palestras & Treinamentos</h4>
                  <p>Oferecemos treinamentos imersivos e palestras inspiradoras sobre Marketing Digital e Funil de vendas, com as mais recentes estratégias de geração de demanda. Desde a definição do ICP até a implementação de ABM, capacitamos você e seu time para atrair, engajar e converter os melhores clientes.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-2 uppercase text-[#f2620b]">Mentoria para Startups</h4>
                  <p>Aceleramos o crescimento da sua startup com orientação especializada em marketing, vendas e geração de demanda. Compartilhamos mais de 20 anos de experiência para ajudar você a validar seu modelo de negócio, definir seu ICP, construir um funil de vendas escalável e conquistar seus primeiros clientes.</p>
                </div>
              </div>
              <a href="#contact" className="inline-block mt-8 bg-[#f2620b] hover:bg-[#d45609] text-white font-bold uppercase px-6 py-3 rounded-md transition-colors">FALE COM UM ESPECIALISTA</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section3" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase text-[#1e4477]">QUEM FAZ A DEMAND CONSULTORIA</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <img 
                src="https://demandconsultoria.com.br/wp-content/uploads/2025/04/perfil-vanessa-carvalho-ok-1.png" 
                alt="Vanessa Carvalho" 
                className="w-full h-auto rounded-full border-8 border-[#f2620b] shadow-xl"
              />
            </div>
            <div className="lg:w-2/3">
              <div className="prose max-w-none">
                <p className="text-lg mb-6">Com mais de 20 anos de experiência em marketing, Vanessa Carvalho é especialista em geração de demanda B2B, combinando marketing estratégico e dados para impulsionar o crescimento de empresas. Ela já atuou em empresas de diversos segmentos como fintechs, área de educação, terceiro setor e serviços, além de startups. Sua expertise abrange desde a definição correta de ICP utilizando business intelligence e estratégias de marketing digital (inbound, outbound, mídia paga e automação) até a implementação de prospecção ABM e otimização de funil de vendas.</p>
                <p className="text-lg mb-6">Oferecemos consultoria personalizada, mentoria para startups e treinamentos práticos, capacitando empresas a escalar suas operações e conquistarem seus objetivos de crescimento.</p>
                <p className="text-lg mb-6">Nosso foco: Transformar dados em estratégias eficazes, alinhando marketing e vendas para maximizar os resultados do negócio e construir relacionamentos duradouros com os clientes.</p>
                <p className="text-lg mb-6">Acreditamos em soluções inovadoras e criativas, impulsionadas por análise de dados e um profundo entendimento dos clientes de cada negócio.</p>
                <p className="text-lg font-bold text-[#f2620b]">Será um prazer trabalharmos juntos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#5c5c5c] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">CONTATO</h3>
              <address className="not-italic">
                <p className="mb-2">São Paulo, SP</p>
                <p className="mb-2">(11) 99999-9999</p>
                <p className="mb-2">WhatsApp: (11) 99999-9999</p>
              </address>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">REDES SOCIAIS</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#f2620b] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[#f2620b] transition-colors">Twitter</a>
                <a href="#" className="hover:text-[#f2620b] transition-colors">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">INFORMAÇÕES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#f2620b] transition-colors">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-[#f2620b] transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-[#f2620b] transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Demand Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>