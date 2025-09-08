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

  const NUM_BEAMS = 12; // Weniger Strahlen, aber breiter
  const COLORS = ["#e7029a", "#f472b6", "#bd5fff", "#ec4899"];

  // Generate beams starting from left-top and right-top
  const generateBeams = (width: number, height: number) => {
    beams.length = 0;
    for (let i = 0; i < NUM_BEAMS; i++) {
      const fromLeft = i % 2 === 0;
      beams.push({
        x: fromLeft ? 0 : width, // Start links oder rechts
        y: 0, // von oben
        length: height * 1.5, // länger, damit es nach unten reicht
        angle: fromLeft
          ? Math.PI / 3 + Math.random() * 0.2 // leicht nach innen geneigt
          : (2 * Math.PI) / 3 - Math.random() * 0.2,
        speed: (Math.random() - 0.5) * 0.0005, // nur minimaler „wabernder" Effekt
        width: 80 + Math.random() * 100, // viel breiter!
        opacity: 0.15 + Math.random() * 0.1,
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

      // Hintergrund dunkel
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, width, height);

      beams.forEach((beam) => {
        ctx.save();
        ctx.translate(beam.x, beam.y);
        ctx.rotate(beam.angle);

        // Weicher Glow
        ctx.shadowColor = beam.color;
        ctx.shadowBlur = 100;

        // Gradient für Lichtkegel
        const gradient = ctx.createLinearGradient(0, 0, beam.length, 0);
        gradient.addColorStop(0, `${beam.color}00`);
        gradient.addColorStop(
          0.3,
          `${beam.color}${Math.floor(beam.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`
        );
        gradient.addColorStop(1, `${beam.color}00`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = beam.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(beam.length, 0);
        ctx.stroke();
        ctx.restore();

        // Kleiner "Wabereffekt"
        beam.angle += beam.speed;
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