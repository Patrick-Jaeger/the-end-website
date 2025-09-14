import { useEffect, useRef } from "react";

interface Beam {
  x: number;        // aktuelle horizontale Position des Lichtkegels
  y: number;        // feste vertikale Position (Startpunkt oben)
  width: number;    // Breite des Kegels
  length: number;   // Länge des Kegels
  angle: number;    // Rotationswinkel
  speed: number;    // horizontale Geschwindigkeit
  pulse: number;    // für leichte Helligkeitspulse
  pulseSpeed: number;
  direction: number; // horizontal: 1 = rechts, -1 = links
  originX: number;  // feste X-Position der Lichtquelle
}

function createBeam(canvasWidth: number, canvasHeight: number, fromLeft: boolean, index: number): Beam {
  const originX = fromLeft
    ? 50 + index * 20   // kleine Verschiebung pro Strahl
    : canvasWidth - 50 - index * 20;

  return {
    x: originX,
    y: 0, // Startpunkt oben
    width: 150 + Math.random() * 50,
    length: canvasHeight * 0.7, // Lichtkegel reicht bis Boden
    angle: fromLeft ? 30 : -30,
    speed: 0.8 + Math.random() * 0.5,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.02,
    direction: fromLeft ? 1 : -1,
    originX,
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
      ctx.translate(beam.originX, beam.y); // Startpunkt fix
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = 0.8 + Math.sin(beam.pulse) * 0.2;

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `rgba(255,255,255,${pulsingOpacity})`);
      gradient.addColorStop(0.2, `rgba(255,255,255,${pulsingOpacity})`);
      gradient.addColorStop(0.8, `rgba(255,255,255,0.2)`);
      gradient.addColorStop(1, `rgba(255,255,255,0)`);

      ctx.fillStyle = gradient;
      ctx.filter = "blur(15px)";
      ctx.fillRect(-beam.width / 2 + beam.x, 0, beam.width, beam.length);
      ctx.restore();
      ctx.filter = "none";
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam) => {
        // horizontale Bewegung innerhalb +/-50px vom Ursprung
        beam.x += beam.speed * beam.direction;
        if (beam.x > 50) beam.direction = -1;
        if (beam.x < -50) beam.direction = 1;

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
