```javascript
import React from 'react';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">lp teste</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Bem-vindo ao lp teste</h2>
        <p className="text-xl text-gray-600 mb-8">Descubra a melhor solução para você</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
          compre agora
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Nossos Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6">
                <Image 
                  src="https://via.placeholder.com/300" 
                  alt="Feature 1" 
                  width={300} 
                  height={200} 
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Feature 1</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image 
                  src="https://via.placeholder.com/300" 
                  alt="Feature 2" 
                  width={300} 
                  height={200} 
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Feature 2</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image 
                  src="https://via.placeholder.com/300" 
                  alt="Feature 3" 
                  width={300} 
                  height={200} 
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Feature 3</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para começar?</h2>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg">
            compre agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} lp teste. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
```