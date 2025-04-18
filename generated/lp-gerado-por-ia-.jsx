import { useState } from 'react';
import Head from 'next/head';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>lp gerado por ia</title>
        <meta name="description" content="Landing page gerada por IA" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">lp gerado por ia</h1>
        <p className="text-xl text-gray-600 mb-8">Solução inteligente para suas necessidades</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
          compre agora
        </button>
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-md h-64 bg-gray-300 rounded-lg"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossos Diferenciais</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 rounded-lg shadow-md bg-gray-50">
              <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
              <h3 className="text-xl font-semibold mb-3">Recurso {item}</h3>
              <p className="text-gray-600">Descrição breve do recurso oferecido pela nossa plataforma.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
        <p className="text-xl mb-8">Junte-se a milhares de usuários satisfeitos</p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor email"
            className="flex-grow px-4 py-3 rounded-lg text-gray-900"
          />
          <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
            compre agora
          </button>
        </div>
      </section>
    </div>
  );
}