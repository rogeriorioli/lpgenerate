Here's the fully functional React component for your landing page:

```jsx
import { useState, useEffect } from 'react';
import Head from 'next/head';

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
    <>
      <Head>
        <title>appilo</title>
      </Head>

      <header className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-gray-900' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-2xl">APPILO</div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#hero" className="text-white hover:text-purple-400 transition-colors">HOME</a></li>
              <li><a href="#section1" className="text-white hover:text-purple-400 transition-colors">FEATURES</a></li>
              <li><a href="#section2" className="text-white hover:text-purple-400 transition-colors">MANAGE</a></li>
              <li><a href="#section3" className="text-white hover:text-purple-400 transition-colors">INTEGRATION</a></li>
            </ul>
          </nav>

          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 px-4 py-2">
            <ul className="flex flex-col space-y-2">
              <li><a href="#hero" className="text-white hover:text-purple-400 transition-colors block py-2">HOME</a></li>
              <li><a href="#section1" className="text-white hover:text-purple-400 transition-colors block py-2">FEATURES</a></li>
              <li><a href="#section2" className="text-white hover:text-purple-400 transition-colors block py-2">MANAGE</a></li>
              <li><a href="#section3" className="text-white hover:text-purple-400 transition-colors block py-2">INTEGRATION</a></li>
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center bg-[url('https://html.themexriver.com/appilo-update/img/slider-moc-2.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-[#723fbc] before:opacity-90 before:z-0">
          <div className="container mx-auto px-4 py-32 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase">AWESOME APP FOR YOUR MODERN LIFESTYLE</h1>
              <p className="text-lg text-white mb-8">Increase productivity with a simple to-do app. app for managing your personal budgets.</p>
              <button className="bg-[#cd3499] hover:bg-[#a82a80] text-white font-bold py-3 px-8 rounded-full uppercase transition-colors">
                DOWNLOAD APP
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl">
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-white text-2xl font-bold">265</p>
                <p className="text-white text-sm">USERS</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-white text-2xl font-bold">1,000</p>
                <p className="text-white text-sm">DOWNLOAD</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-white text-2xl font-bold">508</p>
                <p className="text-white text-sm">LIKES</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-white text-2xl font-bold">809</p>
                <p className="text-white text-sm">5 STAR RATING</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section id="section1" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase">HOW DOES THIS APP WORK?</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img src="https://html.themexriver.com/appilo-update/img/how-we-work-slide-1.png" alt="App workflow" className="w-full" />
              </div>
              
              <div className="md:w-1/2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase">MAKE A PROFILE</h3>
                  <p className="text-gray-600">We use a customized application tobe specifically designed a testing gnose to keep away for people.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase">DOWNLOAD IT FOR FREE</h3>
                  <p className="text-gray-600">We use a customized application tobe specifically designed a testing gnose to keep away for people.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase">ENJOY THIS APP</h3>
                  <p className="text-gray-600">We use a customized application tobe specifically designed a testing gnose to keep away for people.</p>
                </div>
                
                <button className="bg-[#723fbc] hover:bg-[#5a3197] text-white font-bold py-3 px-8 rounded-full uppercase transition-colors">
                  DOWNLOAD APP
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section2" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <img src="https://html.themexriver.com/appilo-update/img/data-moc.png" alt="Data management" className="w-full" />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">EASY TO MANAGE YOUR ALL DATA BY THIS APP</h2>
                <p className="text-gray-600 mb-8">In order to design a mobile app that is going to be module downloaded and accessed frequently by users, you need offer an experience that isn't available elsewhere. Often businesses get caught up.</p>
                <button className="bg-[#cd3499] hover:bg-[#a82a80] text-white font-bold py-3 px-8 rounded-full uppercase transition-colors">
                  DISCOVER
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="section3" className="py-20 bg-[#723fbc]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img src="https://html.themexriver.com/appilo-update/img/responsive-moc.png" alt="App integration" className="w-full" />
              </div>
              
              <div className="md:w-1/2 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">DESIGNED & WORKED BY THE LATEST INTEGRATION</h2>
                <p className="mb-8">A Private Limited is the most popular type of partnership Malta. The limited liabilityis, in fact, the only type of the company allowed by Companies.</p>
                <button className="bg-white hover:bg-gray-200 text-[#723fbc] font-bold py-3 px-8 rounded-full uppercase transition-colors">
                  ALL INTEGRATION
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">Contact Info</h3>
              <p className="text-gray-400">Address: </p>
              <p className="text-gray-400">Phone: </p>
              <p className="text-gray-400">WhatsApp: </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">Social Links</h3>
              <p className="text-gray-400">LinkedIn: </p>
              <p className="text-gray-400">Twitter: </p>
              <p className="text-gray-400">Instagram: </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">Extras</h3>
              <p className="text-gray-400">Additional information</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} APPILO. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </>
  );
}