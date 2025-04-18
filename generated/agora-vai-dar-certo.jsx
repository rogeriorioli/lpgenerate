```tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>agora vai dar certo</title>
        <meta name="description" content="Landing page" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">agora vai dar certo</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
            compre agora
          </button>
          <div className="mt-10 flex justify-center">
            <div className="relative w-64 h-64">
              <Image 
                src="/placeholder.png" 
                alt="Placeholder" 
                fill 
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Nossos Diferenciais</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="relative w-full h-48 mb-4">
                  <Image 
                    src="/placeholder.png" 
                    alt="Feature 1" 
                    fill 
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Recurso Incrível</h3>
                <p className="text-gray-600">Descrição do recurso incrível que vai mudar sua vida.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="relative w-full h-48 mb-4">
                  <Image 
                    src="/placeholder.png" 
                    alt="Feature 2" 
                    fill 
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Outro Recurso</h3>
                <p className="text-gray-600">Mais uma descrição de um recurso fantástico.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
```