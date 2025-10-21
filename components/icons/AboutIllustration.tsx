import React from 'react';

const AboutIllustration: React.FC = () => {
  return (
    <svg width="450" height="400" viewBox="0 0 450 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
          <feOffset dx="3" dy="5" result="offsetblur"/>
          <feFlood floodColor="#000000" floodOpacity="0.1"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#00c9c8', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#00b0af', stopOpacity: 1}} />
        </linearGradient>
      </defs>

      {/* Background shape */}
      <path d="M 50,100 C 50,0 400,0 400,100 S 450,300 350,350 S 50,400 50,300 S 50,200 50,100" fill="#f7f8fc" />

      {/* Core element - Navy */}
      <circle cx="225" cy="200" r="100" fill="#18214d" filter="url(#softShadow)" />
      
      {/* Abstract gear/sun shape - Teal */}
      <g transform="translate(225, 200)">
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            transform={`rotate(${i * 45})`}
            d="M 0 -120 C 20 -120, 20 -140, 0 -140 S -20 -120, 0 -120"
            fill="url(#tealGradient)"
          />
        ))}
      </g>
      
      {/* Inner Circles */}
      <circle cx="225" cy="200" r="70" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
      <circle cx="225" cy="200" r="40" fill="white" stroke="#18214d" strokeWidth="3" />
      
      {/* Orbiting dots */}
      <circle cx="345" cy="180" r="12" fill="url(#tealGradient)" filter="url(#softShadow)" />
      <circle cx="100" cy="250" r="18" fill="white" filter="url(#softShadow)" />
      <circle cx="110" cy="110" r="8" fill="#f7f8fc" filter="url(#softShadow)" />
      <circle cx="300" cy="320" r="15" fill="#18214d" stroke="white" strokeWidth="2" filter="url(#softShadow)" />

      {/* Lightbulb for 'Innovation' */}
      <g transform="translate(207, 182)">
        <path d="M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 13.5641 4.79373 16.2363 7.5 17.449V20H13.5V17.449C16.2063 16.2363 18 13.5641 18 10.5Z" fill="#ffc107"/>
        <rect x="7.5" y="20" width="6" height="2" rx="1" fill="#ffc107"/>
      </g>
    </svg>
  );
};

export default AboutIllustration;