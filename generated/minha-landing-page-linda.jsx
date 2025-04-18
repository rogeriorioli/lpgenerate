import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Minha Landing page Linda</h1>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            fale conosco
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recursos Incríveis</h2>
            <p className="text-lg text-gray-600 mb-6">
              Descubra tudo o que nossa plataforma pode oferecer para transformar seu negócio.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Solução completa para suas necessidades</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Suporte 24/7 para ajudar você</span>
              </li>
            </ul>
          </div>
          <div className="relative h-80">
            <Image 
              src="/placeholder.png" 
              alt="Feature image" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 order-last md:order-first">
            <Image 
              src="/placeholder.png" 
              alt="Testimonial image" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O que dizem sobre nós</h2>
            <blockquote className="text-lg text-gray-600 italic mb-6">
              "Incrível experiência com este produto. Transformou completamente nosso fluxo de trabalho!"
            </blockquote>
            <p className="font-semibold text-gray-800">- Cliente Satisfeito</p>
          </div>
        </div>
      </section>
    </div>
  );
}