import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// GSAP Plugins registrieren (einmalig)
gsap.registerPlugin(ScrollTrigger, TextPlugin);

/**
 * Basis-Hook für GSAP in einer SPA
 * - KEIN ScrollTrigger.refresh()
 * - KEIN globales killAll()
 */
export const useGSAP = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      ScrollTrigger.config({
        ignoreMobileResize: true
      });

      initialized.current = true;
    }
  }, []);

  return { gsap, ScrollTrigger, TextPlugin };
};

/**
 * Scroll-basierte Fade/Move Animation
 */
export const useScrollAnimation = (
  selector: string,
  animation: gsap.TweenVars = {},
  triggerOptions: ScrollTrigger.Vars = {}
) => {
  const { gsap } = useGSAP();
  const triggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          ...animation,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            ...triggerOptions
          }
        }
      );

      if (tween.scrollTrigger) {
        triggers.current.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggers.current.forEach(t => t.kill());
      triggers.current = [];
    };
  }, [selector]);
};

/**
 * Text-Split Animation (Hash-sicher)
 */
export const useTextSplit = (selector: string, delay = 0) => {
  const { gsap } = useGSAP();
  const { hash } = useLocation();
  const triggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // ⛔ Keine Text-Manipulation bei Hash-Navigation
    if (hash) return;

    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
      const text = el.textContent || "";
      const chars = text.split("").map(c => (c === " " ? "&nbsp;" : c));

      el.innerHTML = chars.map(c => `<span class="char">${c}</span>`).join("");

      const tween = gsap.fromTo(
        el.querySelectorAll(".char"),
        { opacity: 0, y: 30, rotationX: 45 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.03,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      if (tween.scrollTrigger) {
        triggers.current.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggers.current.forEach(t => t.kill());
      triggers.current = [];
    };
  }, [selector, delay, gsap, hash]);
};

/**
 * Parallax Effekt
 */
export const useParallax = (selector: string, speed = 0.5) => {
  const { gsap } = useGSAP();
  const triggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
      const tween = gsap.to(el, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      if (tween.scrollTrigger) {
        triggers.current.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggers.current.forEach(t => t.kill());
      triggers.current = [];
    };
  }, [selector, speed, gsap]);
};

/**
 * Hover Animation
 */
export const useHoverEffect = (
  selector: string,
  hoverAnimation: gsap.TweenVars,
  leaveAnimation: gsap.TweenVars
) => {
  const { gsap } = useGSAP();

  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
      const enter = () => gsap.to(el, { duration: 0.3, ...hoverAnimation });
      const leave = () => gsap.to(el, { duration: 0.3, ...leaveAnimation });

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);

      return () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    });
  }, [selector, hoverAnimation, leaveAnimation, gsap]);
};

/**
 * Card Wiggle Effekt
 */
export const useCardWiggle = (selector: string) => {
  const { gsap } = useGSAP();

  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
      const enter = () =>
        gsap.to(el, {
          duration: 0.3,
          rotation: 2,
          scale: 1.05,
          ease: "power2.out"
        });

      const leave = () =>
        gsap.to(el, {
          duration: 0.3,
          rotation: 0,
          scale: 1,
          ease: "power2.out"
        });

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);

      return () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    });
  }, [selector, gsap]);
};
