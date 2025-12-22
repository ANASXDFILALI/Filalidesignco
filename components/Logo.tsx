import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Filali Design Co. Logo"
    >
      {/* Outer Decorative Ring */}
      <circle cx="50" cy="50" r="48" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="0.5" opacity="0.2" />
      
      {/* Geometric 8-point Star Base (Islamic Pattern Base) */}
      <path 
        d="M50 10 L60 35 L85 35 L65 55 L75 80 L50 65 L25 80 L35 55 L15 35 L40 35 Z" 
        stroke={color} 
        strokeWidth="0.5" 
        opacity="0.1" 
      />

      {/* Stylized Monogram 'F' / Arabic 'Fa' fusion */}
      <path 
        d="M35 35 C35 25 45 20 50 20 C65 20 70 30 65 40 C60 50 40 50 40 65 C40 75 45 80 50 80" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round"
      />
      <path 
        d="M68 28 C68 29.1 67.1 30 66 30 C64.9 30 64 29.1 64 28 C64 26.9 64.9 26 66 26 C67.1 26 68 26.9 68 28 Z" 
        fill={color} 
      />
      
      {/* Horizontal decorative line */}
      <path d="M30 50 L70 50" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
    </svg>
  );
};

export default Logo;