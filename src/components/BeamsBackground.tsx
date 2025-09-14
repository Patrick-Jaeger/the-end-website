import { useEffect, useRef } from "react";

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  direction: number; // 1 = nach rechts, -1 = nach links
}

function createBeam(canvasWidth: number, canvasHeight: number, fromLeft: boolean): Beam {
  const angle = fromLeft ? -30 + Math.random() * 15 : 30 + Math.random() * 15;
  
  return {
    x: fromLeft 
        ? Math.random() * 50 // leichtes zufälliges Start-X
        : canvasWidth - Math.random() * 50,
    y: canvasHeight * 0.7 + Math.random() * canvasHeight * 0.2, // fixe vertikale Position (unten)
    width: 150 + Math.random() * 100,
    length: 300 + Math.random() * 200,
    angle,
    speed: 1 + Math.random() * 1.5,
    opacity: 0.8 + Math.random() * 0.2,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.03,
    direction: fromLeft ? 1 : -1,
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

    // 3 Strahlen links, 3 rechts
    beamsRef.current = [
      ...Array.from({ length: 3 }, () => createBeam(canvas.width, canvas.height, true)),
      ...Array.from({ length: 3 }, () => createBeam(canvas.width, canvas.height, false)),
    ];

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `rgba(255,255,255,${pulsingOpacity})`);
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
        beam.x += beam.speed * beam.direction;

        // horizontale Begrenzung und Rückrichtung
        if (beam.direction > 0 && beam.x > canvas.width - 50) beam.direction = -1;
        if (beam.direction < 0 && beam.x < 50) beam.direction = 1;

        beam.pulse += beam.pulseSpeed;
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
