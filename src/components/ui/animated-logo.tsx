"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";

const AnimatedLogo = ({ className = "" }: { className?: string }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;

    // Get all letter paths (the filled ones)
    const letterPaths = svgRef.current.querySelectorAll(".letter-path");
    
    // Set initial state - paths are invisible and stroke-dasharray is set
    letterPaths.forEach((path: Element) => {
      const pathElement = path as SVGPathElement;
      const length = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = `${length}`;
      pathElement.style.strokeDashoffset = `${length}`;
      pathElement.style.fill = "transparent";
      pathElement.style.stroke = "#ffffff";
      pathElement.style.strokeWidth = "1";
    });

    // Animate drawing the stroke
    animate(letterPaths, {
      strokeDashoffset: 0,
      ease: "inOutSine",
      duration: 2500,
      delay: stagger(150),
      onComplete: () => {
        // After stroke animation, fill the letters with white
        letterPaths.forEach((path: Element) => {
          const pathElement = path as SVGPathElement;
          pathElement.style.fill = "#ffffff";
          pathElement.style.stroke = "#ffffff";
          pathElement.style.strokeWidth = "0";
        });
        setAnimationComplete(true);
      }
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      width="1000"
      height="470"
      viewBox="0 0 264.58328 124.35417"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* T */}
      <path
        className="letter-path"
        d="M 36.474193,3.2205521 V 17.166737 H 27.03032 v 86.056383 q -9.004623,0 -13.580143,16.10583 L 13.559989,17.166737 H 4.116116 V 3.2205521 Z"
      />
      {/* H */}
      <path
        className="letter-path"
        d="M 78.935021,3.2205521 V 103.22312 H 65.428087 V 59.444542 h -6.442334 l -0.256228,43.778578 q -7.320833,2.92833 -13.470332,16.69149 L 45.478818,3.2205521 H 58.985753 V 45.937608 h 6.442334 V 3.2205521 Z"
      />
      {/* E (first) */}
      <path
        className="letter-path"
        d="M 111.91537,3.2205521 V 17.313155 h -9.15104 v 30.747493 h 9.15104 v 13.470335 h -9.15104 v 27.74595 h 9.15104 l -0.0366,14.239017 Q 95.480104,100.29478 89.037773,119.91461 L 89.257398,3.2205521 Z"
      />
      {/* E (second) */}
      <path
        className="letter-path"
        d="M 169.85975,3.2205521 V 17.313155 h -9.15104 v 30.747493 h 9.15104 v 13.470335 h -9.15104 v 27.74595 h 9.15104 l -0.0366,14.239017 q -16.39867,-3.22117 -22.841,16.39866 L 147.20178,3.2205521 Z"
      />
      {/* N */}
      <path
        className="letter-path"
        d="M 215.57836,3.2205521 V 103.22312 h -13.50694 l -9.29746,-56.077576 -0.21962,56.077576 q -5.85667,3.22116 -13.47033,16.10583 L 179.26703,3.2205521 h 13.50693 l 9.29746,55.4553039 V 3.2205521 Z"
      />
      {/* D */}
      <path
        className="letter-path"
        d="M 224.69279,119.62178 224.91242,3.3669701 q 0.65887,0 2.04983,-0.07321 1.39096,-0.07321 2.15965,-0.07321 30.89391,0 30.89391,48.7201369 0,12.848066 -1.57398,22.731186 -1.53737,9.88312 -6.51554,17.31377 -2.30606,3.47739 -5.96648,6.03968 -3.62381,2.562287 -6.58875,4.026457 -2.96494,1.46417 -6.77177,4.24608 -3.80683,2.78192 -7.9065,13.32392 z m 13.72656,-99.453501 v 67.022214 q 7.50386,-4.97816 7.50386,-33.89545 0,-10.761623 -1.31775,-20.095683 -1.31775,-9.370666 -6.18611,-13.031081 z"
      />
    </svg>
  );
};

export default AnimatedLogo;
