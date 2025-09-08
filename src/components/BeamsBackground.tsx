import React, { useRef, useEffect } from "react";

interface Beam {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  width: number;
  opacity: number;
  color: string;
}

const BeamsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beams: Beam[] = [];
  const animationRef = useRef<number>();

  const NUM_BEAMS = 35;
  const COLORS = ["#e7029a", "#f472b6", "#bd5fff", "#ec4899"];

  // Generate random beams
  const generateBeams = (width: number, height: number) => {
    beams.length = 0;
    for (let i = 0; i < NUM_BEAMS; i++) {
      beams.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: 150 + Math.random() * 350,
        angle: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.002,
        width: 0.5 + Math.random() * 1.5,
        opacity: 0.3 + Math.random() * 0.4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    generateBeams(width, height);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Set background
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, width, height);

      // Draw beams
      beams.forEach((beam) => {
        ctx.save();
        ctx.translate(beam.x, beam.y);
        ctx.rotate(beam.angle);
        
        // Create gradient for beam
        const gradient = ctx.createLinearGradient(0, 0, beam.length, 0);
        gradient.addColorStop(0, `${beam.color}00`);
        gradient.addColorStop(0.5, `${beam.color}${Math.floor(beam.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${beam.color}00`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = beam.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(beam.length, 0);
        ctx.stroke();
        ctx.restore();

        // Update beam rotation
        beam.angle += beam.speed;
        
        // Occasionally change direction slightly
        if (Math.random() < 0.001) {
          beam.speed *= -1;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      generateBeams(width, height);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default BeamsBackground;