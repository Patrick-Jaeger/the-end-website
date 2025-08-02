import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const useGSAP = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      // Initialize GSAP ScrollTrigger
      ScrollTrigger.refresh();
      isInitialized.current = true;
    }

    return () => {
      // Cleanup on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return {
    gsap,
    ScrollTrigger,
    TextPlugin
  };
};

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (selector: string, animation: object, trigger?: object) => {
  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length > 0) {
      elements.forEach(element => {
        gsap.fromTo(element, 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              ...trigger
            },
            ...animation
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, animation, trigger, gsap, ScrollTrigger]);
};

// Custom hook for text split animations
export const useTextSplit = (selector: string, delay: number = 0) => {
  const { gsap } = useGSAP();

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      const text = element.textContent || '';
      const chars = text.split('').map(char => 
        char === ' ' ? '&nbsp;' : char
      );
      
      element.innerHTML = chars
        .map(char => `<span class="char">${char}</span>`)
        .join('');
      
      const charElements = element.querySelectorAll('.char');
      
      gsap.fromTo(charElements, 
        { opacity: 0, y: 50, rotationX: 90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.02,
          delay,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, delay, gsap]);
};

// Custom hook for parallax effects
export const useParallax = (selector: string, speed: number = 0.5) => {
  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      gsap.to(element, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, speed, gsap, ScrollTrigger]);
};

// Custom hook for hover effects
export const useHoverEffect = (selector: string, hoverAnimation: object, leaveAnimation: object) => {
  const { gsap } = useGSAP();

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      const handleMouseEnter = () => {
        gsap.to(element, {
          duration: 0.3,
          ease: "power2.out",
          ...hoverAnimation
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          duration: 0.3,
          ease: "power2.out",
          ...leaveAnimation
        });
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, [selector, hoverAnimation, leaveAnimation, gsap]);
};

// Custom hook for card wiggle effect
export const useCardWiggle = (selector: string) => {
  const { gsap } = useGSAP();

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      // Create wiggle animation on scroll into view
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: 50,
          rotation: -3
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Add hover wiggle
      const handleMouseEnter = () => {
        gsap.to(element, {
          duration: 0.3,
          rotation: 2,
          scale: 1.05,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          duration: 0.3,
          rotation: 0,
          scale: 1,
          ease: "power2.out"
        });
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, gsap]);
};
