import { useEffect, useRef } from "react";

interface Beam {
  x: number;            // aktuelle horizontale Position (wird animiert)
  y: number;            // Startpunkt (oben)
  width: number;
  length: number;
  angle: number;        // Strahlwinkel
  speedX: number;       // horizontale Geschwindigkeit
  direction: number;    // 1 = nach rechts, -1 = nach links
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  startX: number;       // fixierter Startpunkt für links/rechts
}

function createBeams(canvasWidth: number, canvasHeight: number): Beam[] {
  const beams: Beam[] = [];

  const topOffset = 50; // etwas Abstand vom oberen Rand
  const length = canvasHeight * 1.2; // Strahllänge über Boden hinaus

  // 3 Strahlen links
  for (let i = 0; i < 3; i++) {
    beams.push({
      x: 50, // links oben fixiert
      startX: 50,
      y: topOffset,
      width: 120 + Math.random() * 80,
      length,
      angle: 45 + Math.random() * 10, // leicht variierende Diagonale nach rechts unten
      speedX: 0.5 + Math.random() * 0.5,
      direction: 1,
      opacity: 0.7 + Math.random() * 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
    });
  }

  // 3 Strahlen rechts
  for (let i = 0; i < 3; i++) {
    beams.push({
      x: canvasWidth - 50, // rechts oben fixiert
      startX: canvasWidth - 50,
      y: topOffset,
      width: 120 + Math.random() * 80,
      length,
      angle: -45 - Math.random() * 10, // leicht variierende Diagonale nach links unten
      speedX: 0.5 + Math.random() * 0.5,
      direction: -1,
      opacity: 0.7 + Math.random() * 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
    });
  }

  return beams;
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
      beamsRef.current = createBeams(canvas.width, canvas.height);
    };
    resizeCanvas();

    const drawBeam = (ctx: CanvasRenderingContext2D, beam: Beam) => {
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
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam) => {
        // horizontale Bewegung
        beam.x += beam.speedX * beam.direction;

        // Rückwärtsrichtung, wenn bestimmter Bereich erreicht
        if (beam.direction === 1 && beam.x > beam.startX + 150) beam.direction = -1;
        if (beam.direction === -1 && beam.x < beam.startX - 150) beam.direction = 1;

        // leicht pulsieren
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
