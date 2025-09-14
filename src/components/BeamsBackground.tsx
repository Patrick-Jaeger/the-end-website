import { useEffect, useRef } from "react";

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  saturation: number;
  pulse: number;
  pulseSpeed: number;
  direction: 1 | -1; // 1 = nach unten, -1 = nach oben
}

function createBeam(width: number, height: number): Beam {
  const fromLeft = Math.random() > 0.5;
  const angle = fromLeft ? -30 + Math.random() * 15 : 30 + Math.random() * 15;
  const isBlue = Math.random() > 0.3;
  const hue = isBlue ? 210 + Math.random() * 40 : 0;
  const saturation = isBlue ? 100 : 0;

  return {
    x: fromLeft
      ? Math.random() * width * 0.3
      : width * 0.7 + Math.random() * width * 0.3,
    y: Math.random() * height,           // Start zufällig zwischen 0 und Höhe
    width: 150 + Math.random() * 100,
    length: height * 2.5,                // längere Strahlen für sanften Effekt
    angle,
    speed: 0.3 + Math.random() * 0.5,   // langsameres Wandern
    opacity: 0.7 + Math.random() * 0.3,
    hue,
    saturation,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.005 + Math.random() * 0.01,
    direction: 1,                        // Start nach unten
  };
}

const BeamsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Weniger Strahlen für ruhigeren Effekt
    beamsRef.current = Array.from({ length: 8 }, () =>
      createBeam(canvas.width, canvas.height)
    );

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `rgba(255,255,255,0)`);
      gradient.addColorStop(0.2, `rgba(255,255,255,${pulsingOpacity})`);
      gradient.addColorStop(0.8, `rgba(255,255,255,0.2)`);
      gradient.addColorStop(1, `rgba(255,255,255,0)`);

      ctx.fillStyle = gradient;
      ctx.filter = "blur(15px)";
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
      ctx.filter = "none";
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam) => {
        // Bewegung nach oben oder unten
        beam.y += beam.speed * beam.direction;
        beam.pulse += beam.pulseSpeed;

        // Richtungswechsel, wenn oben oder unten
        if (beam.y > canvas.height + 50) beam.direction = -1;
        if (beam.y < -beam.length) beam.direction = 1;

        drawBeam(ctx, beam);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 w-full h-full"
      style={{ pointerEvents: "none", background: "transparent" }}
    />
  );
};

export default BeamsBackground;
