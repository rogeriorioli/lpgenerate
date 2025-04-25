import { useState } from 'react';
import Head from 'next/head';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Demand Consultoria</title>
      </Head>

      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#3b82f6]">DEMAND</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#section1" className="text-[#89898b] hover:text-[#3b82f6] font-medium">SERVIÇOS</a>
            <a href="#section2" className="text-[#89898b] hover:text-[#3b82f6] font-medium">QUEM SOMOS</a>
            <a href="#section3" className="text-[#89898b] hover:text-[#3b82f6] font-medium">PARCEIROS</a>
            <a href="#section4" className="text-[#89898b] hover:text-[#3b82f6] font-medium">CONTATO</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#89898b]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              <a href="#section1" className="text-[#89898b] hover:text-[#3b82f6] font-medium">SERVIÇOS</a>
              <a href="#section2" className="text-[#89898b] hover:text-[#3b82f6] font-medium">QUEM SOMOS</a>
              <a href="#section3" className="text-[#89898b] hover:text-[#3b82f6] font-medium">PARCEIROS</a>
              <a href="#section4" className="text-[#89898b] hover:text-[#3b82f6] font-medium">CONTATO</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ESTRATÉGIAS DE GERAÇÃO DE DEMANDA SOB MEDIDA PARA NEGÓCIOS B2B
          </h1>
          <p className="text-xl text-white mb-8">
            Atraia os clientes certos, otimize seu funil de vendas e potencialize o crescimento da sua empresa com estratégias de marketing data-driven.
          </p>
          <button className="bg-[#f78502] hover:bg-[#e67800] text-white font-bold py-3 px-8 rounded-full uppercase">
            FALE COM UM ESPECIALISTA
          </button>
        </div>
      </section>

      {/* Section 1 */}
      <section id="section1" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#3b82f6] mb-16 uppercase">
            Posicione sua empresa no mercado e impulsione o engajamento dos seus clientes.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Business" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-[#89898b] mb-8">
                Soluções de marketing inteligente que geram demanda e impulsionam seu sucesso.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Inteligência de Mercado", desc: "Identificamos seu Perfil Ideal de Cliente (ICP), analisamos o potencial do seu mercado e utilizamos dados para prever tendências e otimizar suas campanhas." },
                  { title: "Marketing de Performance", desc: "Construímos sua presença digital, otimizamos seus canais de marketing e implementamos campanhas de alta conversão." },
                  { title: "Máquina de Vendas", desc: "Estruturamos sua esteira comercial, implementamos esteiras de prospecção outbound eficaz e adotamos estratégias de ABM para atração de contas esratégicas." },
                  { title: "Lançamento de Produto", desc: "Planejamos e executamos campanhas criativas e estratégicas, online e offline, para aumentar o reconhecimento da marca, gerar impacto e impulsionar a venda de seus produtos." },
                  { title: "Estratégia de Founder Led Growth", desc: "Amplifique a voz e a influência do seu CEO e contrua uma marca autêntica e engajadora. Desenvolvemos estratégias para posicionar o líder como referência, atraindo clientes e investidores." },
                  { title: "Database Marketing", desc: "Analisamos sua base de clientes para identificar novas oportunidades de negócio, aumentando a receita e fortalecendo o relacionamento com seus clientes." }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-[#3b82f6] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#89898b]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-3 px-8 rounded-full uppercase">
              FALE COM UM ESPECIALISTA
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section2" className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-[#f78502] mb-16 uppercase">
            Quem faz a Demand Consultoria
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="https://demandconsultoria.com.br/wp-content/uploads/2025/04/perfil-vanessa-carvalho-ok-1.png" 
                alt="Vanessa Carvalho" 
                className="rounded-full w-64 h-64 object-cover shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-[#89898b] mb-6">
                Com mais de 20 anos de experiência em marketing, Vanessa Carvalho é especialista em geração de demanda B2B, combinando marketing estratégico e dados para impulsionar o crescimento de empresas. Ela já atuou em empresas de diversos segmentos como fintechs, área de educação, terceiro setor e serviços, além de startups. Sua expertise abrange desde a definição correta de ICP utilizando business intelligence e estratégias de marketing digital (inbound, outbound, mídia paga e automação) até a implementação de prospecção ABM e otimização de funil de vendas.
              </p>
              <p className="text-[#89898b] mb-6">
                Oferecemos consultoria personalizada, mentoria para startups e treinamentos práticos, capacitando empresas a escalar suas operações e conquistarem seus objetivos de crescimento.
              </p>
              <p className="text-[#89898b] mb-6">
                Nosso foco: Transformar dados em estratégias eficazes, alinhando marketing e vendas para maximizar os resultados do negócio e construir relacionamentos duradouros com os clientes.
              </p>
              <p className="text-[#89898b] mb-8">
                Acreditamos em soluções inovadoras e criativas, impulsionadas por análise de dados e um profundo entendimento dos clientes de cada negócio. Será um prazer trabalharmos juntos.
              </p>
              
              <button className="bg-[#f78502] hover:bg-[#e67800] text-white font-bold py-3 px-8 rounded-full uppercase">
                FALE COMIGO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section3" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#3b82f6] mb-16 uppercase">
            Parceiros que confiam em nosso trabalho
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote: "Vanessa tem uma uma capacidade excepcional para desenvolver e implementar estratégias de marketing inovadoras, trazendo resultados expressivos para as empresas.",
                name: "Anderson Miranda",
                position: "Diretor Comercial"
              },
              {
                quote: "Vanessa é uma profissional incrível que se destaca tecnicamente e por sua visão estratégica de marketing e vendas diferenciada para os negócios. Sempre que tive a oportunidade de lhe apresentar um desafio, ela agiu de forma a construir uma solução prática, tangível, coerente com os recursos disponíveis e passível de resultado no curto prazo.",
                name: "Mírian Souza",
                position: "Executiva de TI | Advisor | TEDx Speaker"
              },
              {
                quote: "Excelente profissional, atualizada, atenciosa no contato com o cliente, empática, resiliente e assertiva",
                name: "Isabel Piñeiro",
                position: "CEO Paradigma Soluções em RH"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <p className="text-[#89898b] italic mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-[#3b82f6]">{testimonial.name}</p>
                <p className="text-sm text-[#89898b]">{testimonial.position}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Partners" 
              className="rounded-lg max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section4" className="py-20 px-4 bg-[#3b82f6]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-8 uppercase">
            Pronto para transformar sua estratégia de marketing?
          </h2>
          <p className="text-xl text-white mb-8">
            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer.
          </p>
          <button className="bg-[#f78502] hover:bg-[#e67800] text-white font-bold py-3 px-8 rounded-full uppercase">
            AGENDE UMA CONVERSA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase">Contato</h3>
              <p className="mb-2">São Paulo, Brasil</p>
              <p className="mb-2">+55 11 99999-9999</p>
              <p>WhatsApp: +55 11 99999-9999</p>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#3b82f6]">LinkedIn</a>
                <a href="#" className="hover:text-[#3b82f6]">Twitter</a>
                <a href="#" className="hover:text-[#3b82f6]">Instagram</a>
              </div>
            </div>
            
            {/* Additional Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase">Links</h3>
              <div className="flex flex-col space-y-2">
                <a href="#section1" className="hover:text-[#3b82f6]">Serviços</a>
                <a href="#section2" className="hover:text-[#3b82f6]">Sobre Nós</a>
                <a href="#section3" className="hover:text-[#3b82f6]">Depoimentos</a>
                <a href="#section4" className="hover:text-[#3b82f6]">Contato</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Demand Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}