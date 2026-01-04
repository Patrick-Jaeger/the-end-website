import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SkullScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const skullRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const techContentRef = useRef<HTMLDivElement>(null);
  const contactContentRef = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !skullRef.current || !svgRef.current) return;

    const ctx = gsap.context(() => {
      const skull = skullRef.current;
      const leftWingOuter = svgRef.current?.querySelector("#left-wing-outer");
      const leftWingInner = svgRef.current?.querySelector("#left-wing-inner");
      const rightWingOuter = svgRef.current?.querySelector("#right-wing-outer");
      const rightWingInner = svgRef.current?.querySelector("#right-wing-inner");

      if (!leftWingOuter || !rightWingOuter || !skull) return;

      // Set transform origins for wings
      gsap.set([leftWingOuter, leftWingInner], { transformOrigin: "right center" });
      gsap.set([rightWingOuter, rightWingInner], { transformOrigin: "left center" });

      // Initial wing position
      gsap.set([leftWingOuter, leftWingInner], { rotation: 10, scaleY: 0.95 });
      gsap.set([rightWingOuter, rightWingInner], { rotation: -10, scaleY: 0.95 });

      // Hide content initially
      gsap.set([techContentRef.current, contactContentRef.current], {
        opacity: 0,
        y: 30,
      });

      // Create main scroll timeline
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      // Wing flap helper
      const addWingFlap = (position: number, intensity: number = 1) => {
        mainTl.to(
          [leftWingOuter, leftWingInner],
          { rotation: -20 * intensity, scaleY: 1.05, duration: 0.05, ease: "power2.out" },
          position
        );
        mainTl.to(
          [rightWingOuter, rightWingInner],
          { rotation: 20 * intensity, scaleY: 1.05, duration: 0.05, ease: "power2.out" },
          position
        );
        mainTl.to(
          [leftWingOuter, leftWingInner],
          { rotation: 10 * intensity, scaleY: 0.95, duration: 0.05, ease: "power2.in" },
          position + 0.05
        );
        mainTl.to(
          [rightWingOuter, rightWingInner],
          { rotation: -10 * intensity, scaleY: 0.95, duration: 0.05, ease: "power2.in" },
          position + 0.05
        );
      };

      // Section 1: Initial flaps
      addWingFlap(0, 0.5);
      addWingFlap(0.1, 0.7);

      // Section 2: Move right + flap
      mainTl.to(
        skull,
        {
          x: isMobile ? 0 : "30vw",
          duration: 0.2,
          ease: "power2.inOut",
        },
        0.15
      );
      addWingFlap(0.2, 1);
      addWingFlap(0.3, 1.2);

      // Section 3: Move left + reveal content
      mainTl.to(
        skull,
        {
          x: isMobile ? 0 : "-20vw",
          duration: 0.25,
          ease: "power2.inOut",
        },
        0.4
      );
      addWingFlap(0.45, 0.8);
      
      // Reveal content
      mainTl.to(
        techContentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          ease: "power2.out",
        },
        0.5
      );
      mainTl.to(
        contactContentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          ease: "power2.out",
        },
        0.55
      );
      addWingFlap(0.6, 0.6);

      // Section 4: Move to center bottom
      mainTl.to(
        skull,
        {
          x: 0,
          y: "20vh",
          scale: 0.8,
          duration: 0.2,
          ease: "power2.inOut",
        },
        0.7
      );
      
      // Final wing rest
      mainTl.to(
        [leftWingOuter, leftWingInner],
        { rotation: 0, scaleY: 1, duration: 0.1, ease: "power2.out" },
        0.9
      );
      mainTl.to(
        [rightWingOuter, rightWingInner],
        { rotation: 0, scaleY: 1, duration: 0.1, ease: "power2.out" },
        0.9
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div ref={containerRef} className="relative bg-rock-lighter">
      {/* Section 1 - Intro with Skull */}
      <div
        ref={section1Ref}
        className="min-h-screen flex flex-col items-center justify-center relative pt-20"
      >
        {/* Skull - positioned with CSS */}
        <div
          ref={skullRef}
          className="text-primary drop-shadow-[0_0_30px_rgba(64,121,255,0.5)] w-[300px] md:w-[500px] lg:w-[600px]"
        >
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
              <ellipse cx="200" cy="160" rx="70" ry="80" fill="currentColor" />
              <path d="M 130 160 Q 130 90 200 80 Q 270 90 270 160" fill="currentColor" />
              <ellipse cx="170" cy="145" rx="22" ry="28" fill="#0a0a0a" />
              <ellipse cx="170" cy="145" rx="18" ry="24" fill="#1a1a1a" />
              <ellipse cx="230" cy="145" rx="22" ry="28" fill="#0a0a0a" />
              <ellipse cx="230" cy="145" rx="18" ry="24" fill="#1a1a1a" />
              <path d="M 195 170 L 200 195 L 205 170 Q 200 175 195 170 Z" fill="#0a0a0a" />
              <path d="M 150 200 Q 150 240 200 245 Q 250 240 250 200" fill="currentColor" />
              <g fill="#0a0a0a">
                <rect x="160" y="210" width="8" height="20" rx="2" />
                <rect x="172" y="210" width="8" height="22" rx="2" />
                <rect x="184" y="210" width="8" height="20" rx="2" />
                <rect x="196" y="210" width="8" height="20" rx="2" />
                <rect x="208" y="210" width="8" height="22" rx="2" />
                <rect x="220" y="210" width="8" height="20" rx="2" />
                <rect x="232" y="210" width="8" height="18" rx="2" />
              </g>
              <path d="M 180 95 Q 175 110 178 130" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
              <path d="M 220 95 Q 225 108 223 125" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
            </g>
          </svg>
        </div>
        
        <p className="text-lg text-muted-foreground text-center max-w-2xl px-4 mt-8">
          Scrolle nach unten für mehr Infos
        </p>
      </div>

      {/* Section 2 - Spacer for right movement */}
      <div className="min-h-[50vh]" />

      {/* Section 3 - Content reveal */}
      <div className="min-h-screen relative flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:ml-auto md:max-w-2xl">
            {/* Technical Requirements */}
            <motion.div ref={techContentRef}>
              <Card className="bg-card border-border shadow-rock">
                <CardContent className="p-6">
                  <h3 className="font-rock text-lg font-bold text-primary mb-4">
                    Technical Requirements
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Bühnengröße optimal: 6x5 Meter und 3 Meter hoch</li>
                    <li>• Überdachung</li>
                    <li>• Stromanschluss: 16A oder 9 KW Aggregat</li>
                    <li>• Aufbauzeit: ca. 3 Stunden</li>
                    <li>• Set-Dauer: 3 Stunden (flexibel)</li>
                    <li>• Umkreis: 20km kostenfrei</li>
                  </ul>
                  <a href="/Stagerider_The-End.pdf" download>
                    <Button className="btn-outline-rock mt-4 w-full rounded-full">
                      Technical Rider
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div ref={contactContentRef}>
              <Card className="bg-card border-border shadow-rock">
                <CardContent className="p-6">
                  <h3 className="font-rock text-lg font-bold text-primary mb-4">
                    Kontakt-Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-rock font-bold text-sm mb-1">E-Mail</h4>
                        <p className="text-muted-foreground text-sm">booking@rockband.de</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-rock font-bold text-sm mb-1">Region</h4>
                        <p className="text-muted-foreground text-sm">92277 Hohenburg & Umgebung</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 4 - Final banner */}
      <div className="min-h-[50vh] relative flex items-end justify-center pb-20">
        <div className="text-center">
          <h2 className="font-rock text-2xl md:text-4xl font-bold text-glow">
            THE END – Punk, Rock & Metal Coverband
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SkullScrollAnimation;
