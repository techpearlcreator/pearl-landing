import React from 'react';

const BeansAndBloomsThumbnail: React.FC = () => {
  return (
    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#F7F8FC"/>
      <g transform="translate(50, 25)">
        {/* Coffee Cup */}
        <path d="M15 20 H 85 V 80 C 85 91.0457 76.0457 100 65 100 H 35 C 23.9543 100 15 91.0457 15 80 V 20 Z" fill="white" stroke="#18214d" strokeWidth="2"/>
        <path d="M85 40 H 95 C 100.523 40 105 44.4772 105 50 V 60 C 105 65.5228 100.523 70 95 70 H 85 V 40 Z" fill="white" stroke="#18214d" strokeWidth="2"/>
        
        {/* Steam / Leaf */}
        <path d="M50 15 C 55 -5, 75 -5, 80 15" stroke="#00c9c8" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M50 15 C 60 5, 65 10, 70 0" stroke="#00c9c8" strokeWidth="2.5" fill="none" strokeLinecap="round" transform="translate(-25, 5) rotate(-15)"/>
        <path d="M50 25 C 50 10, 40 10, 35 0" stroke="#00c9c8" strokeWidth="2" fill="none" strokeLinecap="round" transform="translate(-10, 0)"/>
      </g>
    </svg>
  );
};

export default BeansAndBloomsThumbnail;
