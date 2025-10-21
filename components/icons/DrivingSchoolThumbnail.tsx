import React from 'react';

const DrivingSchoolThumbnail: React.FC = () => {
  return (
    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#F7F8FC"/>
      <g transform="translate(50, 25)">
        {/* Road */}
        <path d="M0 100 H 100" stroke="#e0e7ff" strokeWidth="15" />
        <path d="M10 100 H 25 M 40 100 H 55 M 70 100 H 85" stroke="white" strokeWidth="3" strokeLinecap="round" />
        
        {/* Car */}
        <path d="M10 90 C 5 70, 25 60, 40 65 L 70 70 C 85 60, 105 70, 100 90 H 10 Z" fill="#00c9c8" stroke="#18214d" strokeWidth="2"/>
        <rect x="35" y="72" width="40" height="20" fill="white" rx="5" stroke="#18214d" strokeWidth="2"/>
        <circle cx="25" cy="92" r="6" fill="#18214d" stroke="white" strokeWidth="2" />
        <circle cx="85" cy="92" r="6" fill="#18214d" stroke="white" strokeWidth="2" />
      </g>
    </svg>
  );
};

export default DrivingSchoolThumbnail;
