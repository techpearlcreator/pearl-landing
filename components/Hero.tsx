import React from 'react';
import Illustration from './icons/Illustration';
import ArrowRightIcon from './icons/ArrowRightIcon';
import EyeIcon from './icons/EyeIcon';

const Hero: React.FC = () => {
  const hexagonBg = `url("data:image/svg+xml,%3Csvg width='40' height='46' viewBox='0 0 40 46' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 11.5V34.5L20 46L0 34.5V11.5L20 0Z' fill='%23eef2f9' fill-opacity='0.5'/%3E%3C/svg%3E")`;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home"
      className="bg-light-gray"
      style={{ backgroundImage: hexagonBg, backgroundSize: '100px' }}
    >
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight">
              BRINGING DIGITAL INNOVATION TO BUSINESSES
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Crafting bespoke web solutions for startups & small businesses
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#services"
                onClick={(e) => handleScrollTo(e, '#services')}
                className="group inline-flex items-center justify-center px-8 py-3 bg-teal text-white font-semibold rounded-lg shadow-lg hover:bg-teal-dark transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Services
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRightIcon />
                </span>
              </a>
              <a 
                href="#work"
                onClick={(e) => handleScrollTo(e, '#work')}
                className="group inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-teal text-teal font-semibold rounded-lg hover:bg-teal hover:text-white transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="mr-2">
                  <EyeIcon />
                </span>
                View Projects
              </a>
            </div>
          </div>
          <div>
            <Illustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;