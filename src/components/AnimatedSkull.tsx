import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSkullProps {
  className?: string;
}

const AnimatedSkull = ({ className = "" }: AnimatedSkullProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    const leftWingOuter = svgRef.current.querySelector("#left-wing-outer");
    const leftWingInner = svgRef.current.querySelector("#left-wing-inner");
    const rightWingOuter = svgRef.current.querySelector("#right-wing-outer");
    const rightWingInner = svgRef.current.querySelector("#right-wing-inner");
    const skull = svgRef.current.querySelector("#skull");

    if (!leftWingOuter || !rightWingOuter) return;

    // Set transform origins for wings
    gsap.set([leftWingOuter, leftWingInner], { transformOrigin: "right center" });
    gsap.set([rightWingOuter, rightWingInner], { transformOrigin: "left center" });

    // Initial wing positions (folded up slightly)
    gsap.set([leftWingOuter, leftWingInner], { rotation: 15, scaleY: 0.9 });
    gsap.set([rightWingOuter, rightWingInner], { rotation: -15, scaleY: 0.9 });

    // Create timeline for wing flapping based on scroll
    const wingFlapTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    // Wing flapping animation - multiple flaps during scroll
    const flapDuration = 0.1;
    const numFlaps = 6;

    for (let i = 0; i < numFlaps; i++) {
      // Flap down
      wingFlapTl.to(
        [leftWingOuter, leftWingInner],
        { rotation: -20, scaleY: 1.1, duration: flapDuration, ease: "power2.out" },
        i * flapDuration * 2
      );
      wingFlapTl.to(
        [rightWingOuter, rightWingInner],
        { rotation: 20, scaleY: 1.1, duration: flapDuration, ease: "power2.out" },
        i * flapDuration * 2
      );
      
      // Flap up
      wingFlapTl.to(
        [leftWingOuter, leftWingInner],
        { rotation: 15, scaleY: 0.9, duration: flapDuration, ease: "power2.in" },
        i * flapDuration * 2 + flapDuration
      );
      wingFlapTl.to(
        [rightWingOuter, rightWingInner],
        { rotation: -15, scaleY: 0.9, duration: flapDuration, ease: "power2.in" },
        i * flapDuration * 2 + flapDuration
      );
    }

    // Final resting position
    wingFlapTl.to(
      [leftWingOuter, leftWingInner],
      { rotation: 0, scaleY: 1, duration: flapDuration * 2, ease: "power2.out" }
    );
    wingFlapTl.to(
      [rightWingOuter, rightWingInner],
      { rotation: 0, scaleY: 1, duration: flapDuration * 2, ease: "power2.out" },
      "<"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={`skull-container ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="w-full h-full"
      >
        {/* Left Wing */}
        <g id="left-wing">
          <path
            id="left-wing-outer"
            d="M 80 150 Q 20 100 10 60 Q 30 80 60 90 Q 25 60 15 30 Q 45 55 75 65 Q 50 30 45 10 Q 75 40 100 60 Q 95 40 100 20 Q 115 50 120 80 L 130 140 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            id="left-wing-inner"
            d="M 90 145 Q 50 110 40 80 Q 60 95 85 100 Q 60 75 55 55 Q 80 75 100 85 L 120 130 Z"
            fill="currentColor"
            opacity="0.7"
          />
        </g>

        {/* Right Wing */}
        <g id="right-wing">
          <path
            id="right-wing-outer"
            d="M 320 150 Q 380 100 390 60 Q 370 80 340 90 Q 375 60 385 30 Q 355 55 325 65 Q 350 30 355 10 Q 325 40 300 60 Q 305 40 300 20 Q 285 50 280 80 L 270 140 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            id="right-wing-inner"
            d="M 310 145 Q 350 110 360 80 Q 340 95 315 100 Q 340 75 345 55 Q 320 75 300 85 L 280 130 Z"
            fill="currentColor"
            opacity="0.7"
          />
        </g>

        {/* Skull */}
        <g id="skull">
          {/* Skull main shape */}
          <ellipse cx="200" cy="160" rx="70" ry="80" fill="currentColor" />

          {/* Skull top */}
          <path d="M 130 160 Q 130 90 200 80 Q 270 90 270 160" fill="currentColor" />

          {/* Left eye socket */}
          <ellipse cx="170" cy="145" rx="22" ry="28" fill="#0a0a0a" />
          <ellipse cx="170" cy="145" rx="18" ry="24" fill="#1a1a1a" />

          {/* Right eye socket */}
          <ellipse cx="230" cy="145" rx="22" ry="28" fill="#0a0a0a" />
          <ellipse cx="230" cy="145" rx="18" ry="24" fill="#1a1a1a" />

          {/* Nose */}
          <path d="M 195 170 L 200 195 L 205 170 Q 200 175 195 170 Z" fill="#0a0a0a" />

          {/* Jaw/Teeth area */}
          <path d="M 150 200 Q 150 240 200 245 Q 250 240 250 200" fill="currentColor" />

          {/* Teeth */}
          <g fill="#0a0a0a">
            <rect x="160" y="210" width="8" height="20" rx="2" />
            <rect x="172" y="210" width="8" height="22" rx="2" />
            <rect x="184" y="210" width="8" height="20" rx="2" />
            <rect x="196" y="210" width="8" height="20" rx="2" />
            <rect x="208" y="210" width="8" height="22" rx="2" />
            <rect x="220" y="210" width="8" height="20" rx="2" />
            <rect x="232" y="210" width="8" height="18" rx="2" />
          </g>

          {/* Skull cracks/details */}
          <path d="M 180 95 Q 175 110 178 130" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
          <path d="M 220 95 Q 225 108 223 125" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
          <path d="M 145 165 Q 140 180 145 195" stroke="#1a1a1a" strokeWidth="1" fill="none" />
          <path d="M 255 165 Q 260 180 255 195" stroke="#1a1a1a" strokeWidth="1" fill="none" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSkull;
