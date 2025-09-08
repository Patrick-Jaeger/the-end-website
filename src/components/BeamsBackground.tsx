import React, { useRef, useEffect } from "react";

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

const BeamsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beams: Beam[] = [];
  const animationRef = useRef<number>();

  const NUM_BEAMS = 12;

  function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
      x: Math.random() * width * 1.5 - width * 0.25,
      y: Math.random() * height * 1.5 - height * 0.25,
      width: 80 + Math.random() * 120, // breiter
      length: height * 2.5,
      angle,
      speed: 0.8 + Math.random() * 0.8,
      opacity: 0.15 + Math.random() * 0.2,
      // Mischung aus Weiß (0) und Blau (~210–240)
      hue: Math.random() > 0.3 ? 210 + Math.random() * 30 : 0,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
    };
  }

  function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam, intensity: number) {
    ctx.save();
    ctx.translate(beam.x, beam.y);
    ctx.rotate((beam.angle * Math.PI) / 180);

    const pulsingOpacity =
      beam.opacity *
      (0.8 + Math.sin(beam.pulse) * 0.2) *
      intensity;

    const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

    gradient.addColorStop(0, `hsla(${beam.hue}, 100%, 80%, 0)`);
    gradient.addColorStop(0.2, `hsla(${beam.hue}, 100%, 85%, ${pulsingOpacity * 0.5})`);
    gradient.addColorStop(0.5, `hsla(${beam.hue}, 100%, 90%, ${pulsingOpacity})`);
    gradient.addColorStop(0.8, `hsla(${beam.hue}, 100%, 85%, ${pulsingOpacity * 0.5})`);
    gradient.addColorStop(1, `hsla(${beam.hue}, 100%, 80%, 0)`);

    ctx.fillStyle = gradient;
    ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
    ctx.restore();
  }

  // Generate beams
  const generateBeams = (width: number, height: number) => {
    beams.length = 0;
    for (let i = 0; i < NUM_BEAMS; i++) {
      beams.push(createBeam(width, height));
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

      // Hintergrund dunkel
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, width, height);

      // Set blur filter
      ctx.filter = "blur(50px)";

      beams.forEach((beam) => {
        drawBeam(ctx, beam, 1.0);

        // Update pulse
        beam.pulse += beam.pulseSpeed;

        // Slight movement
        beam.angle += beam.speed * 0.01;
      });

      // Reset filter
      ctx.filter = "none";

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
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default BeamsBackground;