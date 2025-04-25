import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className={`text-2xl font-bold ${scrolled ? 'text-white' : 'text-gray-900'}`}>STARTUP</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className={`font-medium ${scrolled ? 'text-white' : 'text-gray-900'} hover:text-blue-500`}>HOME</a>
            <a href="#section1" className={`font-medium ${scrolled ? 'text-white' : 'text-gray-900'} hover:text-blue-500`}>FEATURES</a>
            <a href="#section4" className={`font-medium ${scrolled ? 'text-white' : 'text-gray-900'} hover:text-blue-500`}>CONTACT</a>
          </nav>
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke={scrolled ? 'white' : 'currentColor'} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 px-4 py-2">
            <a href="#hero" className="block py-2 text-white hover:text-blue-500">HOME</a>
            <a href="#section1" className="block py-2 text-white hover:text-blue-500">FEATURES</a>
            <a href="#section4" className="block py-2 text-white hover:text-blue-500">CONTACT</a>
          </div>
        )}
      </header>

      <section id="hero" className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-70"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">LANDING TEMPLATE FOR STARTUPS</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full uppercase hover:bg-gray-100 transition duration-300">GET EARLY ACCESS</button>
        </div>
      </section>

      <section id="section1" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold uppercase mb-6 text-gray-900">AMAZING FEATURES, COMING SOON.</h2>
              <p className="text-gray-600 mb-6">Quam quisque id diam vel quam elementum pulvinar. Ut etiam sit amet nisl purus in mollis nunc. Odio morbi quis commodo odio aenean sed adipiscing diam donec.</p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mobile" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="section2" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
              <h2 className="text-3xl font-bold uppercase mb-6 text-gray-900">AMAZING FEATURES, COMING SOON.</h2>
              <p className="text-gray-600 mb-6">Quam quisque id diam vel quam elementum pulvinar. Ut etiam sit amet nisl purus in mollis nunc. Odio morbi quis commodo odio aenean sed adipiscing diam donec.</p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="Internet" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="section3" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold uppercase mb-6 text-gray-900">AMAZING FEATURES, COMING SOON.</h2>
              <p className="text-gray-600 mb-6">Quam quisque id diam vel quam elementum pulvinar. Ut etiam sit amet nisl purus in mollis nunc. Odio morbi quis commodo odio aenean sed adipiscing diam donec.</p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mockup" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="section4" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold uppercase mb-6">STAY IN THE KNOW</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
          <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full uppercase hover:bg-blue-600 transition duration-300">GET EARLY ACCESS</button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold uppercase mb-4">CONTACT INFO</h3>
              <p className="text-gray-400">Address: </p>
              <p className="text-gray-400">Phone: </p>
              <p className="text-gray-400">WhatsApp: </p>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase mb-4">SOCIAL LINKS</h3>
              <p className="text-gray-400">LinkedIn: </p>
              <p className="text-gray-400">Twitter: </p>
              <p className="text-gray-400">Instagram: </p>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase mb-4">EXTRAS</h3>
              <p className="text-gray-400">Additional links or info</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            &copy; {new Date().getFullYear()} STARTUP. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}