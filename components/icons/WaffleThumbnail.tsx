import React from 'react';

const WaffleThumbnail: React.FC = () => {
  return (
    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#F7F8FC"/>
      <g transform="translate(50, 25)">
        {/* Waffle */}
        <path d="M10 20 L 90 20 L 95 25 L 95 105 L 90 110 L 10 110 L 5 105 L 5 25 L 10 20 Z" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2" />
        {/* Waffle Grid */}
        <line x1="20" y1="22" x2="20" y2="108" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.5"/>
        <line x1="35" y1="22" x2="35" y2="108" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.5"/>
        <line x1="50" y1="22" x2="50" y2="108" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.5"/>
        <line x1="65" y1="22" x2="65" y2="108" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.5"/>
        <line x1="80" y1="22" x2="80" y2="108" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.5"/>
        <line x1="7" y1="35" x2="93" y2="35" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.5"/>
        <line x1="7" y1="50" x2="93" y2="50" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.5"/>
        <line x1="7" y1="65" x2="93" y2="65" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.5"/>
        <line x1="7" y1="80" x2="93" y2="80" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.5"/>
        <line x1="7" y1="95" x2="93" y2="95" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.5"/>
        
        {/* Drizzle */}
        <path d="M15 40 Q 30 55, 45 40 T 75 40" stroke="#00c9c8" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M25 60 Q 40 75, 55 60 T 85 60" stroke="#00c9c8" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </g>
    </svg>
  );
};

export default WaffleThumbnail;