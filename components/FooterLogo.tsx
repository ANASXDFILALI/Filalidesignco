import React from 'react';
import ColorLogoWithBg from './logos/Logo Files/svg/Color logo with background.svg';
import WhiteLogoNoBg from './logos/Logo Files/svg/White logo - no background.svg';

interface FooterLogoProps {
  className?: string;
  size?: 'default' | 'compact';
}

const FooterLogo: React.FC<FooterLogoProps> = ({ className = "", size = 'default' }) => {
  const isCompact = size === 'compact';
  
  // Use Color logo with background for full size, White logo for compact
  const logoSrc = isCompact ? WhiteLogoNoBg : ColorLogoWithBg;
  
  return (
    <div className={`relative inline-block ${className}`}>
      <img 
        src={logoSrc}
        alt="Filalidesignco Logo"
        className={isCompact ? 'h-12 w-auto' : 'h-auto w-full max-w-md'}
      />
    </div>
  );
};

export default FooterLogo;

