import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import GmailIcon from './icons/GmailIcon';

const socialLinks = [
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/techpearl_creators?igsh=amtvaWp2b203NnVw', 
    icon: InstagramIcon 
  },
  { 
    name: 'WhatsApp', 
    href: 'https://wa.me/916369510851', 
    icon: WhatsappIcon 
  },
  {
    name: 'Gmail',
    href: 'mailto:skannaiah1147@gmail.com',
    icon: GmailIcon
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={link.name}
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TechPearl Creator. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;