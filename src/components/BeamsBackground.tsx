import React from 'react';

interface BeamsBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const BeamsBackground: React.FC<BeamsBackgroundProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`} style={{ backgroundColor: '#1a1a1a' }}>
      {/* Beams Container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="beams-container">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="beam"
              style={{
                '--rotation': `${i * 36}deg`,
                '--delay': `${i * 0.2}s`
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .beams-container {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200%;
            height: 200%;
            transform: translate(-50%, -50%);
            animation: beams-rotate 2s linear infinite;
          }
          
          .beam {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 2px;
            height: 100%;
            background: linear-gradient(
              to bottom,
              transparent 0%,
              #e7029a 20%,
              #e7029a 80%,
              transparent 100%
            );
            transform-origin: center top;
            transform: translateX(-50%) rotate(var(--rotation));
            opacity: 0.6;
            animation-delay: var(--delay);
          }
          
          .beam::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            width: 4px;
            height: 100%;
            background: linear-gradient(
              to bottom,
              transparent 0%,
              rgba(231, 2, 154, 0.3) 20%,
              rgba(231, 2, 154, 0.3) 80%,
              transparent 100%
            );
            transform: translateX(-50%);
            filter: blur(2px);
          }
          
          @keyframes beams-rotate {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `
      }} />
    </div>
  );
};

export default BeamsBackground;