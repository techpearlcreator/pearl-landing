import React from 'react';
import BeansAndBloomsThumbnail from './icons/BeansAndBloomsThumbnail';
import DrivingSchoolThumbnail from './icons/DrivingSchoolThumbnail';
import WaffleThumbnail from './icons/WaffleThumbnail';

interface Project {
  title: string;
  description: string;
  href: string;
  thumbnail: React.FC;
}

const projects: Project[] = [
  {
    title: 'Beans & Blooms Cafe',
    description: 'A cozy and elegant website for a local cafe that combines the love for coffee and flowers, featuring a full menu and gallery.',
    href: 'https://techpearlcreator.github.io/BeansAndBlooms/',
    thumbnail: BeansAndBloomsThumbnail,
  },
  {
    title: 'Sri Muniskanna Driving School',
    description: 'A professional and informative website for a driving school, designed to attract new students and provide course details.',
    href: 'https://tirunelvelidrivingschool.netlify.app/',
    thumbnail: DrivingSchoolThumbnail,
  },
  {
    title: 'I Love Waffle',
    description: 'A delicious and vibrant single-page website for a waffle house, designed to make mouths water and attract hungry customers.',
    href: 'https://techpearlcreator.github.io/waffles/',
    thumbnail: WaffleThumbnail,
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const Thumbnail = project.thumbnail;
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group"
    >
      <div className="relative h-56 bg-light-gray flex items-center justify-center">
        <Thumbnail />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy group-hover:text-teal transition-colors duration-300">{project.title}</h3>
        <p className="mt-2 text-gray-600">{project.description}</p>
      </div>
    </a>
  );
};

const Work: React.FC = () => {
  return (
    <section id="work" className="py-20 lg:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Our Recent Work
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in the solutions we deliver. Here are some of our favorite projects we've launched.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;