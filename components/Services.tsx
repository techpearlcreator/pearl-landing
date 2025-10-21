import React from 'react';
import WebDevelopmentIcon from './icons/WebDevelopmentIcon';
import UIDesignIcon from './icons/UIDesignIcon';
import WebDesigningIcon from './icons/WebDesigningIcon';

interface Service {
  icon: React.FC;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: WebDevelopmentIcon,
    title: 'Web Development',
    description: 'We build responsive, high-performance websites and web applications tailored to your specific business needs using the latest technologies.',
  },
  {
    icon: UIDesignIcon,
    title: 'UI/UX Design',
    description: 'Our design team creates intuitive, engaging, and user-friendly interfaces that provide a seamless user experience and boost customer satisfaction.',
  },
  {
    icon: WebDesigningIcon,
    title: 'Web Designing',
    description: 'We create visually stunning and modern web designs that are tailored to your brand identity, ensuring a unique and memorable online presence.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
      <div className="bg-teal/10 p-4 rounded-full mb-6">
        <Icon />
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of digital services to help your business grow and succeed in the modern market.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;