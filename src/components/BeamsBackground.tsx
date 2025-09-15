import { useEffect, useRef } from "react";

interface Beam {
  startX: number;       // fixer Startpunkt horizontal (oben)
  startY: number;       // fixer Startpunkt vertikal (oben)
  endX: number;         // beweglicher Endpunkt horizontal (unten)
  endY: number;         // fixer Endpunkt vertikal (unten)
  width: number;
  speedX: number;       // horizontale Geschwindigkeit am Boden
  direction: number;    // 1 = nach rechts, -1 = nach links
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  baseEndX: number;     // Basis-Endpunkt für Bewegung
}

function createBeams(canvasWidth: number, canvasHeight: number): Beam[] {
  const beams: Beam[] = [];

  // 3 Strahlen links oben
  for (let i = 0; i < 3; i++) {
    const baseEndX = canvasWidth * 0.6 + Math.random() * canvasWidth * 0.3; // Basis-Endpunkt im rechten unteren Bereich
    beams.push({
      startX: 0, // fixer Startpunkt links oben
      startY: 0,
      endX: baseEndX, // wird animiert
      endY: canvasHeight,
      baseEndX: baseEndX,
      width: 80 + Math.random() * 40,
      speedX: 0.8 + Math.random() * 0.4,
      direction: 1,
      opacity: 0.7 + Math.random() * 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
    });
  }

  // 3 Strahlen rechts oben
  for (let i = 0; i < 3; i++) {
    const baseEndX = canvasWidth * 0.1 + Math.random() * canvasWidth * 0.3; // Basis-Endpunkt im linken unteren Bereich
    beams.push({
      startX: canvasWidth, // fixer Startpunkt rechts oben
      startY: 0,
      endX: baseEndX, // wird animiert
      endY: canvasHeight,
      baseEndX: baseEndX,
      width: 80 + Math.random() * 40,
      speedX: 0.8 + Math.random() * 0.4,
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

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
      const length = Math.sqrt(Math.pow(beam.endX - beam.startX, 2) + Math.pow(beam.endY - beam.startY, 2));
      const angle = Math.atan2(beam.endY - beam.startY, beam.endX - beam.startX);

      // Positioniere am Startpunkt
      ctx.translate(beam.startX, beam.startY);
      ctx.rotate(angle);

      const gradient = ctx.createLinearGradient(0, 0, length, 0);
      gradient.addColorStop(0, `rgba(255,255,255,${pulsingOpacity})`);
      gradient.addColorStop(0.2, `rgba(255,255,255,${pulsingOpacity})`);
      gradient.addColorStop(0.8, `rgba(255,255,255,0.2)`);
      gradient.addColorStop(1, `rgba(255,255,255,0)`);

      ctx.fillStyle = gradient;
      ctx.filter = "blur(15px)";
      ctx.fillRect(0, -beam.width / 2, length, beam.width);
      ctx.restore();
      ctx.filter = "none";
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam) => {
        // horizontale Bewegung am Endpunkt (Boden)
        beam.endX += beam.speedX * beam.direction;

        // Rückwärtsrichtung nach +-150px vom Basis-Endpunkt
        if (beam.direction === 1 && beam.endX > beam.baseEndX + 150) beam.direction = -1;
        if (beam.direction === -1 && beam.endX < beam.baseEndX - 150) beam.direction = 1;

        // Pulsieren
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
      className="absolute inset-0 w-full h-full z-10"
      style={{ 
        pointerEvents: "none", 
        background: "transparent"
      }}
    />
  );
};

export default BeamsBackground;
