import { useEffect, useRef } from "react";

interface Beam {
  originX: number;   // Startpunkt oben
  originY: number;   // Startpunkt oben, 0
  width: number;
  length: number;
  angle: number;     // Schräg nach unten
  pulse: number;
  pulseSpeed: number;
  offsetX: number;   // horizontale Bewegung
  direction: number; // 1 = nach rechts, -1 = nach links
}

function createBeam(canvasWidth: number, canvasHeight: number, fromLeft: boolean, index: number): Beam {
  const originX = fromLeft
    ? 80 + index * 60       // links oben, leicht verschoben
    : canvasWidth - 80 - index * 60; // rechts oben, leicht verschoben

  return {
    originX,
    originY: 0,
    width: 120 + Math.random() * 40,
    length: canvasHeight * 0.6,
    angle: fromLeft ? 45 : -45,  // links->rechts unten, rechts->links unten
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.02,
    offsetX: 0,
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
      ...Array.from({ length: 3 }, (_, i) => createBeam(canvas.width, canvas.height, true, i)),
      ...Array.from({ length: 3 }, (_, i) => createBeam(canvas.width, canvas.height, false, i)),
    ];

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.originX + beam.offsetX, beam.originY);

      // Richtung beibehalten
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = 0.8 + Math.sin(beam.pulse) * 0.2;

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `rgba(255,255,255,${pulsingOpacity})`); // Startpunkt sichtbar
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
        beam.offsetX += beam.direction * 0.6; // Geschwindigkeit
        if (beam.offsetX > 80) beam.direction = -1;
        if (beam.offsetX < -80) beam.direction = 1;

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
