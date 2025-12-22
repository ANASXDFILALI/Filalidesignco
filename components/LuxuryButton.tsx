import React from 'react';
import { motion } from 'framer-motion';

interface LuxuryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const LuxuryButton: React.FC<LuxuryButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}) => {
  const isPrimary = variant === 'primary';
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden px-10 py-4 font-royal text-xs tracking-[0.2em] uppercase transition-colors duration-500 group ${className} ${
        isPrimary 
          ? 'bg-riad-red text-riad-white' 
          : 'border border-riad-gold-light text-riad-gold-light hover:text-riad-blue'
      }`}
      whileHover="hover"
      initial="initial"
      whileTap={{ scale: 0.98 }}
    >
      {/* Background Fill Animation */}
      <motion.div
        variants={{
          initial: { scaleX: 0, originX: 0 },
          hover: { scaleX: 1 }
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Custom cubic bezier for "luxury" ease
        className={`absolute inset-0 z-0 ${
          isPrimary ? 'bg-riad-brown' : 'bg-riad-gold-light'
        }`}
        style={{ originX: 0 }}
      />

      {/* Text Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default LuxuryButton;