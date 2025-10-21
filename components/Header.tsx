import React, { useState, useEffect } from 'react';
import Logo from './icons/Logo';

const navItems = [
  { name: 'Home', href: '#', id: 'home' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'Work', href: '#work', id: 'work' },
  { name: 'About', href: '#about', id: 'about' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set active section
      const headerOffset = 150; 
      const scrollY = window.scrollY + headerOffset;
      let currentSection = 'home';

      navItems.slice(1).forEach(item => {
        const element = document.getElementById(item.id);
        if (element && scrollY >= element.offsetTop) {
          currentSection = item.id;
        }
      });
      setActiveSection(currentSection);

      // Set scrolled state for header style change
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMenuOpen(false);
  };
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLinks: React.FC<{isMobile?: boolean}> = ({ isMobile = false }) => (
    <>
      <ul className={`flex ${isMobile ? 'flex-col space-y-6 text-center' : 'items-center space-x-2'}`}>
        {navItems.map(item => {
          const isActive = activeSection === item.id;
          const activeClasses = "bg-teal text-white";
          const inactiveClasses = "text-white hover:text-teal transition-colors";
          return (
            <li key={item.name}>
              <a 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${isActive ? activeClasses : inactiveClasses} ${isMobile ? 'block text-lg' : ''}`}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <a 
        href="#contact"
        onClick={(e) => handleNavClick(e, '#contact')}
        className={`px-5 py-2 bg-teal text-white rounded-md text-sm font-medium hover:bg-teal-dark transition-colors shadow-md ${isMobile ? 'mt-8 w-full text-center text-lg' : 'ml-4'}`}
      >
        Contact
      </a>
    </>
  );

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/95 shadow-lg backdrop-blur-sm' : 'bg-navy'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex items-center">
            <NavLinks />
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none z-50 relative" aria-label="Toggle menu">
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block w-full h-0.5 bg-white transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-white transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      
      {/* Off-canvas Menu */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-xs bg-navy shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full p-8">
            <NavLinks isMobile />
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden" 
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Header;