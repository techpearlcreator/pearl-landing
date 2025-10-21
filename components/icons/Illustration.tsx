
import React from 'react';

const Illustration: React.FC = () => {
  return (
    <svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="5" stdDeviation="5" floodColor="#000" floodOpacity="0.1"/>
        </filter>
      </defs>

      {/* Background shapes */}
      <rect x="150" y="50" width="200" height="120" rx="10" fill="#ffffff" filter="url(#shadow)" />
      <rect x="160" y="60" width="180" height="10" rx="3" fill="#e0e7ff"/>
      <rect x="160" y="75" width="120" height="5" rx="2" fill="#e0e7ff"/>
      <rect x="160" y="85" width="160" height="5" rx="2" fill="#e0e7ff"/>
      <rect x="160" y="95" width="140" height="5" rx="2" fill="#e0e7ff"/>
      <rect x="160" y="105" width="100" height="5" rx="2" fill="#e0e7ff"/>
      <circle cx="325" cy="65" r="10" fill="#00c9c8" />

      <rect x="50" y="100" width="150" height="90" rx="10" fill="#ffffff" filter="url(#shadow)" />
      <rect x="60" y="110" width="130" height="8" rx="3" fill="#e0e7ff"/>
      <rect x="60" y="123" width="90" height="5" rx="2" fill="#e0e7ff"/>
      <rect x="60" y="133" width="110" height="5" rx="2" fill="#e0e7ff"/>
      <circle cx="80" cy="160" r="12" fill="#00c9c8"/>
      <path d="M76 160 l4 4 l8 -8" stroke="white" strokeWidth="2" fill="none"/>

      <rect x="370" y="130" width="120" height="70" rx="10" fill="#ffffff" filter="url(#shadow)" />
      <rect x="380" y="140" width="100" height="8" rx="3" fill="#e0e7ff"/>
      <rect x="380" y="153" width="60" height="5" rx="2" fill="#e0e7ff"/>
      <circle cx="460" cy="175" r="10" fill="#00c9c8" />

      {/* Table */}
      <path d="M80 250 L420 250 L410 265 L90 265 Z" fill="#ffffff" stroke="#e0e7ff" strokeWidth="2"/>
      <rect x="180" y="265" width="10" height="50" fill="#18214d"/>
      <rect x="310" y="265" width="10" height="50" fill="#18214d"/>

      {/* Laptop */}
      <rect x="220" y="220" width="60" height="30" rx="3" fill="#e0e7ff"/>
      <rect x="215" y="250" width="70" height="5" rx="2" fill="#d1d5db"/>

      {/* People */}
      {/* Person 1 */}
      <g transform="translate(120, 200)">
        <rect x="0" y="50" width="30" height="60" rx="15" fill="#00c9c8" />
        <circle cx="15" cy="25" r="15" fill="#18214d" />
        <circle cx="15" cy="20" r="12" fill="#ffc107" />
      </g>
      
      {/* Person 2 */}
      <g transform="translate(190, 190)">
        <rect x="0" y="60" width="30" height="60" rx="15" fill="#18214d" />
        <circle cx="15" cy="35" r="15" fill="#18214d" />
        <circle cx="15" cy="30" r="12" fill="#ffc107" />
      </g>

      {/* Person 3 */}
      <g transform="translate(280, 190)">
        <rect x="0" y="60" width="30" height="60" rx="15" fill="#00c9c8" />
        <circle cx="15" cy="35" r="15" fill="#18214d" />
        <circle cx="15" cy="30" r="12" fill="#ffc107" />
      </g>
      
      {/* Person 4 */}
      <g transform="translate(350, 200)">
        <rect x="0" y="50" width="30" height="60" rx="15" fill="#18214d" />
        <circle cx="15" cy="25" r="15" fill="#18214d" />
        <circle cx="15" cy="20" r="12" fill="#ffc107" />
      </g>

      {/* Plant */}
      <g transform="translate(430, 200)">
        <path d="M20 50 C 20 30, 30 30, 30 10" stroke="#22c55e" strokeWidth="3" fill="none" />
        <path d="M20 50 C 20 30, 10 30, 10 10" stroke="#22c55e" strokeWidth="3" fill="none" />
        <path d="M20 50 C 25 40, 30 40, 35 25" stroke="#22c55e" strokeWidth="3" fill="none" />
        <path d="M20 50 C 15 40, 10 40, 5 25" stroke="#22c55e" strokeWidth="3" fill="none" />
        <rect x="15" y="50" width="10" height="15" fill="#8d6e63" />
      </g>
    </svg>
  );
};

export default Illustration;
