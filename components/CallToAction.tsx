import React from 'react';

const CallToAction: React.FC = () => {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.querySelector('#contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-navy">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Ready to Build Something Amazing?
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Let's collaborate to bring your digital vision to life. Reach out today for a free, no-obligation quote.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            onClick={handleCTAClick}
            className="inline-block px-10 py-4 bg-teal text-white font-semibold rounded-lg shadow-lg hover:bg-teal-dark transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;