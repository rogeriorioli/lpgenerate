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
    <div className="font-sans">
      <Head>
        <title>Deamand Consultoria</title>
      </Head>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#f2620b] rounded-full flex items-center justify-center text-white font-bold">DC</div>
            <span className="ml-2 text-[#4a4a4a] font-bold">DEMAND CONSULTORIA</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#section1" className="text-[#4a4a4a] hover:text-[#f2620b] font-medium">SERVIÇOS</a>
            <a href="#section2" className="text-[#4a4a4a] hover:text-[#f2620b] font-medium">SOLUÇÕES</a>
            <a href="#section3" className="text-[#4a4a4a] hover:text-[#f2620b] font-medium">SOBRE</a>
            <a href="#section4" className="text-[#4a4a4a] hover:text-[#f2620b] font-medium">PARCEIROS</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#section1" className="text-[#4a4a4a] hover:text-[#f2620b] font-medium" onClick={toggleMenu}>SERVIÇOS</a>
              <a href="#section2" className="text-[#4a4a4a] hover:text-[#f2620b] font-medium" onClick={toggleMenu}>SOLUÇÕES</a>
              <a href="#section3" className="text-[#4a4a4a] hover:text-[#f2620b] font-medium" onClick={toggleMenu}>SOBRE</a>
              <a href="#section4" className="text-[#4a4a4a] hover:text-[#f2620b] font-medium" onClick={toggleMenu}>PARCEIROS</a>
              <a href="#contact" className="bg-[#f2620b] text-white py-2 px-4 rounded-md text-center uppercase font-bold">FALE COM UM ESPECIALISTA</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase">ESTRATÉGIAS DE GERAÇÃO DE DEMANDA SOB MEDIDA PARA NEGÓCIOS B2B</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">Atraia os clientes certos, otimize seu funil de vendas e potencialize o crescimento da sua empresa com estratégias de marketing data-driven.</p>
          <a href="#contact" className="bg-[#f2620b] hover:bg-[#e05a0a] text-white py-3 px-8 rounded-md uppercase font-bold text-lg transition duration-300 inline-block">FALE COM UM ESPECIALISTA</a>
        </div>
      </section>

      {/* Section 1 */}
      <section id="section1" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a4a4a] mb-16 uppercase">POSICIONE SUA EMPRESA NO MERCADO E IMPULSIONE O ENGAJAMENTO DOS SEUS CLIENTES</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <div className="bg-[#6366f1] bg-opacity-10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#4a4a4a] mb-4 uppercase">SOLUÇÕES DE MARKETING INTELIGENTE</h3>
                <p className="text-[#4a4a4a] mb-6">Soluções de marketing inteligente que geram demanda e impulsionam seu sucesso.</p>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-[#f2620b] mb-2 uppercase">INTELIGÊNCIA DE MERCADO</h4>
                    <p className="text-[#4a4a4a]">Identificamos seu Perfil Ideal de Cliente (ICP), analisamos o potencial do seu mercado e utilizamos dados para prever tendências e otimizar suas campanhas.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-[#f2620b] mb-2 uppercase">MARKETING DE PERFORMANCE</h4>
                    <p className="text-[#4a4a4a]">Construímos sua presença digital, otimizamos seus canais de marketing e implementamos campanhas de alta conversão.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-[#f2620b] mb-2 uppercase">MÁQUINA DE VENDAS</h4>
                    <p className="text-[#4a4a4a]">Estruturamos sua esteira comercial, implementamos esteiras de prospecção outbound eficaz e adotamos estratégias de ABM para atração de contas esratégicas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-[#f2620b] bg-opacity-10 p-8 rounded-lg h-full">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-[#6366f1] mb-2 uppercase">LANÇAMENTO DE PRODUTO</h4>
                    <p className="text-[#4a4a4a]">Planejamos e executamos campanhas criativas e estratégicas, online e offline, para aumentar o reconhecimento da marca, gerar impacto e impulsionar a venda de seus produtos.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-[#6366f1] mb-2 uppercase">ESTRATÉGIA DE FOUNDER LED GROWTH</h4>
                    <p className="text-[#4a4a4a]">Amplifique a voz e a influência do seu CEO e contrua uma marca autêntica e engajadora. Desenvolvemos estratégias para posicionar o líder como referência, atraindo clientes e investidores.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-[#6366f1] mb-2 uppercase">DATABASE MARKETING</h4>
                    <p className="text-[#4a4a4a]">Analisamos sua base de clientes para identificar novas oportunidades de negócio, aumentando a receita e fortalecendo o relacionamento com seus clientes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#contact" className="bg-[#6366f1] hover:bg-[#5557d8] text-white py-3 px-8 rounded-md uppercase font-bold text-lg transition duration-300 inline-block">SAIBA MAIS</a>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section2" className="py-20 bg-gradient-to-r from-[#f2620b] to-[#6366f1]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 uppercase">TRANSFORME SEU NEGÓCIO COM ESTRATÉGIAS COMPROVADAS</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-[#f2620b] bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#f2620b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-4 uppercase">CONSULTORIA DE NEGÓCIOS</h3>
              <p className="text-[#4a4a4a]">Transforme seu negócio com uma abordagem estratégica e foco em resultados. Oferecemos consultoria especializada em vendas B2B para empresas que buscam escalar suas operações, otimizar seus processos de vendas e marketing e alcançar um crescimento sustentável.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-[#6366f1] bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-4 uppercase">PALESTRAS & TREINAMENTOS</h3>
              <p className="text-[#4a4a4a]">Oferecemos treinamentos imersivos e palestras inspiradoras sobre Marketing Digital e Funil de vendas, com as mais recentes estratégias de geração de demanda. Desde a definição do ICP até a implementação de ABM.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-[#f2620b] bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#f2620b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-4 uppercase">MENTORIA PARA STARTUPS</h3>
              <p className="text-[#4a4a4a]">Aceleramos o crescimento da sua startup com orientação especializada em marketing, vendas e geração de demanda. Compartilhamos mais de 20 anos de experiência para ajudar você a validar seu modelo de negócio.</p>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#contact" className="bg-white hover:bg-gray-100 text-[#f2620b] py-3 px-8 rounded-md uppercase font-bold text-lg transition duration-300 inline-block">FALE COM UM ESPECIALISTA</a>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section3" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a4a4a] mb-16 uppercase">QUEM FAZ A DEMAND CONSULTORIA</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#f2620b]">
                <img src="https://demandconsultoria.com.br/wp-content/uploads/2025/04/perfil-vanessa-carvalho-ok-1.png" alt="Vanessa Carvalho" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#f2620b] mb-4 uppercase">VANESSA CARVALHO</h3>
                <p className="text-[#4a4a4a] mb-4">Com mais de 20 anos de experiência em marketing, Vanessa Carvalho é especialista em geração de demanda B2B, combinando marketing estratégico e dados para impulsionar o crescimento de empresas.</p>
                <p className="text-[#4a4a4a] mb-4">Ela já atuou em empresas de diversos segmentos como fintechs, área de educação, terceiro setor e serviços, além de startups. Sua expertise abrange desde a definição correta de ICP utilizando business intelligence e estratégias de marketing digital (inbound, outbound, mídia paga e automação) até a implementação de prospecção ABM e otimização de funil de vendas.</p>
                <p className