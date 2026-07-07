import React, { useState } from 'react';

const NewTabIcon = ({ size = 20, baseColor = '#4a5568', hoverColor = '#1a0dab' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{backgroundColor: isHovered ? "#c2eaf2" : "#d3f7ff", borderRadius: '36px', width: '30px', height:'30px', display: "flex", justifyContent: "center", alignItems: "center"}}>
        <svg
        xmlns="http://w3.org"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={"#014f5a"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: 'stroke 0.2s ease-in-out', cursor: 'pointer' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    </div>
  );
};

export default NewTabIcon;
