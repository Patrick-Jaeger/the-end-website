import { useEffect, useRef } from "react";

const MeshGradientBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create multiple animated gradient orbs
    const orbs = [
      { x: 20, y: 30, size: 600, color: "215, 85%, 25%", duration: 25 },
      { x: 70, y: 20, size: 500, color: "270, 70%, 20%", duration: 30 },
      { x: 50, y: 70, size: 550, color: "340, 80%, 25%", duration: 28 },
      { x: 10, y: 80, size: 450, color: "215, 85%, 30%", duration: 32 },
      { x: 80, y: 60, size: 500, color: "180, 60%, 20%", duration: 27 },
    ];

    const orbElements = orbs.map((orb, index) => {
      const div = document.createElement("div");
      div.className = "mesh-orb";
      div.style.cssText = `
        position: absolute;
        width: ${orb.size}px;
        height: ${orb.size}px;
        left: ${orb.x}%;
        top: ${orb.y}%;
        background: radial-gradient(circle, hsl(${orb.color}) 0%, transparent 70%);
        filter: blur(60px);
        opacity: 0.6;
        animation: float-orb-${index} ${orb.duration}s ease-in-out infinite alternate;
        will-change: transform;
      `;
      container.appendChild(div);
      return div;
    });

    // Add keyframes dynamically
    const style = document.createElement("style");
    style.textContent = orbs.map((_, index) => `
      @keyframes float-orb-${index} {
        0% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.1); }
        50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0.9); }
        75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.05); }
        100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1); }
      }
    `).join('\n');
    document.head.appendChild(style);

    return () => {
      orbElements.forEach((el) => el.remove());
      style.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden"
      style={{
        background: "hsl(220, 15%, 5%)",
        mixBlendMode: "normal",
      }}
    />
  );
};

export default MeshGradientBackground;
