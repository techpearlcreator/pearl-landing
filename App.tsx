import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <div 
        className={`bg-white text-gray-800 font-sans transition-opacity duration-700 ease-in ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        <Header />
        <main>
          <Hero />
          <Services />
          <Work />
          <About />
          <CallToAction />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
