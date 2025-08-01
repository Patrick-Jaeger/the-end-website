import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Add event listeners for hover states
    const hoverElements = document.querySelectorAll('a, button, [role="button"]');
    
    hoverElements.forEach(el => {
      (el as HTMLElement).style.cursor = 'none';
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach(el => {
        (el as HTMLElement).style.cursor = 'auto';
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main drumstick cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Custom Drumstick SVG */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 645.15504 12.034625" 
          fill="none" 
          className="w-full h-full"
        >
          <g transform="translate(-50.087272,-357.5313)">
            <path
              transform="matrix(1.0839,0,0,0.73309,-48.984,99.185)"
              d="m 686.62,360.59 c 0,4.5144 -1.2199,8.1741 -2.7247,8.1741 -1.5048,0 -2.7247,-3.6597 -2.7247,-8.1741 0,-4.5144 1.2199,-8.1741 2.7247,-8.1741 1.5048,0 2.7247,3.6597 2.7247,8.1741 z"
              fill="hsl(var(--primary))"
            />
            <path
              d="m 252.71,357.68 439.51,-0.14935 c 0,0 0.48148,4.2617 0.48026,6.2823 -8.7e-4,1.9825 -0.48026,5.7104 -0.48026,5.7104 H 252.4 l 0.30788,-11.843 z"
              fill="hsl(var(--primary))"
            />
            <path
              d="m 63.47,360.61 c 0,0 64.206,-1.9667 96.131,-2.4858 31.225,-0.50775 93.234,-0.45486 93.234,-0.45486 0,0 0.23839,4.0951 0.23793,6.1157 -3.4e-4,1.9825 -0.18351,5.7104 -0.18351,5.7104 0,0 -61.461,0.29476 -92.68,-0.3884 -31.949,-0.69915 -96.74,-3.8064 -96.74,-3.8064 v -4.6905 z"
              fill="hsl(var(--primary))"
            />
            <path
              d="m 64.473,362.96 c 0,1.2562 0.64632,2.3402 -0.81038,3.2168 -2.3543,1.4167 -3.7335,1.3324 -8.2137,1.3324 -2.2639,0 -2.6512,-0.50918 -4.1347,-1.3324 -1.4835,-0.82322 -1.2054,-1.9605 -1.2054,-3.2168 0,-1.2563 -0.27813,-2.3935 1.2054,-3.2167 1.48353,-0.8232 1.8709,-1.3324 4.1347,-1.3324 4.9551,0 6.2552,-0.0843 8.2137,1.3324 1.3847,1.0016 0.81038,1.9605 0.81038,3.2168 z"
              fill="hsl(var(--primary-glow))"
            />
          </g>
        </svg>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9998] bg-primary/20 rounded-full blur-sm"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </>
  );
};

export default CustomCursor;