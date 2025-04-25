import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Masty</title>
      </Head>

      <header className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">
            <span className={isScrolled ? 'text-white' : 'text-gray-900'}>MASTY</span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#" className={`font-medium ${isScrolled ? 'text-white' : 'text-gray-900'}`}>HOME</a></li>
              <li><a href="#" className={`font-medium ${isScrolled ? 'text-white' : 'text-gray-900'}`}>ABOUT</a></li>
              <li><a href="#" className={`font-medium ${isScrolled ? 'text-white' : 'text-gray-900'}`}>SERVICES</a></li>
              <li><a href="#" className={`font-medium ${isScrolled ? 'text-white' : 'text-gray-900'}`}>CONTACT</a></li>
            </ul>
          </nav>

          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke={isScrolled ? 'white' : 'currentColor'} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 py-4 px-4">
            <ul className="flex flex-col space-y-4">
              <li><a href="#" className="text-white font-medium">HOME</a></li>
              <li><a href="#" className="text-white font-medium">ABOUT</a></li>
              <li><a href="#" className="text-white font-medium">SERVICES</a></li>
              <li><a href="#" className="text-white font-medium">CONTACT</a></li>
            </ul>
          </div>
        )}
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: "url('https://htmlbeans.com/html/masty/images/img15.jpg')" }}
          ></div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white uppercase mb-6">
                THANK YOU FOR HELPING US MAKE THIS A REALITY!
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10">
                Agencies around the world are moving to the digital agencies.
                So, It is high time to introduce your agency digitaly.
              </p>
              <div className="mb-10">
                <iframe 
                  className="w-full h-64 md:h-96 mx-auto rounded-lg"
                  src="https://www.youtube.com/embed/GGSKpJGpyuo" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-colors duration-300">
                GETSTARTED
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold uppercase mb-4">CONTACT INFO</h3>
              <ul className="space-y-2">
                <li>123 Business Ave, Suite 100</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>WhatsApp: +1 (555) 123-4567</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold uppercase mb-4">SOCIAL LINKS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold uppercase mb-4">EXTRAS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} MASTY. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </>
  );
}