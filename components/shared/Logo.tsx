import React from 'react';

interface LogoProps {
  className?: string;
  textClassName?: string;
}

const CompanyLogo: React.FC<LogoProps> = ({ 
  className = '',
  textClassName = ''
}) => {
  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 600 200"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
      >
        {/* Background */}
        <rect 
          width="600" 
          height="200" 
          fill="oklch(0.98 0.02 95)" 
          rx="15" 
          ry="15"
        />
        
        {/* Main Company Name */}
        <text 
          x="300" 
          y="100" 
          textAnchor="middle" 
          fontFamily="Arial, sans-serif" 
          fontWeight="bold" 
          fontSize="64" 
          className={`fill-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${textClassName}`}
        >
          HAJJ A.M JACK
        </text>
        
        {/* Company Type */}
        <text 
          x="300" 
          y="150" 
          textAnchor="middle" 
          fontFamily="Arial, sans-serif" 
          fontWeight="normal" 
          fontSize="24" 
          className={`fill-foreground text-sm sm:text-base md:text-lg ${textClassName}`}
        >
          FI COMPANY LTD
        </text>
        
        {/* Underline */}
        <line 
          x1="150" 
          y1="170" 
          x2="450" 
          y2="170" 
          stroke="oklch(0.85 0.05 105)" 
          strokeWidth="3"
          className="stroke-border"
        />
      </svg>
    </div>
  );
};

export default CompanyLogo;