import { useEffect, useRef } from "react";

interface GroundFogProps {
  className?: string;
  fogColor?: string;
  fogOpacity?: number;
  height?: number;
}

const GroundFog = ({ 
  className = "", 
  fogColor = "#4079ff",
  fogOpacity = 0.6,
  height = 200
}: GroundFogProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = height;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(canvas.width / 15);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 80 + 40,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
    };

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 64, g: 121, b: 255 };
    };

    const rgb = hexToRgb(fogColor);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw fog gradient at bottom
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(0.3, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${fogOpacity * 0.1})`);
      gradient.addColorStop(0.7, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${fogOpacity * 0.3})`);
      gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${fogOpacity * 0.5})`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY + Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.2;

        // Wrap around edges
        if (particle.x < -particle.radius) particle.x = canvas.width + particle.radius;
        if (particle.x > canvas.width + particle.radius) particle.x = -particle.radius;
        if (particle.y < -particle.radius / 2) particle.y = canvas.height;
        if (particle.y > canvas.height + particle.radius / 2) particle.y = 0;

        // Draw particle
        const particleGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius
        );
        
        particleGradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity * fogOpacity})`);
        particleGradient.addColorStop(0.4, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${particle.opacity * fogOpacity * 0.5})`);
        particleGradient.addColorStop(1, "transparent");

        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [fogColor, fogOpacity, height]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ height }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ 
          filter: "blur(20px)",
          mixBlendMode: "screen"
        }}
      />
      {/* Additional glow layer */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: `linear-gradient(to top, rgba(64, 121, 255, 0.15) 0%, transparent 100%)`,
          filter: "blur(30px)"
        }}
      />
    </div>
  );
};

export default GroundFog;
