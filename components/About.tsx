import React from 'react';
import AboutIllustration from './icons/AboutIllustration';

const values = [
  {
    title: 'Innovation',
    description: 'We constantly explore new technologies and ideas to deliver cutting-edge solutions.'
  },
  {
    title: 'Quality',
    description: 'We are committed to the highest standards of excellence in every project we undertake.'
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients to understand their vision and achieve shared goals.'
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              About TechPearl Creator
            </h2>
            <p className="text-lg text-teal font-semibold mb-6">
              Driving Innovation and Excellence in the Digital World
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are a passionate team of developers, designers, and strategists dedicated to building exceptional digital experiences. Our mission is to empower startups and small businesses by providing them with the high-quality web solutions they need to thrive in a competitive market. We believe in building partnerships, not just projects.
            </p>
            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-navy">{value.title}</h4>
                    <p className="mt-1 text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <AboutIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;