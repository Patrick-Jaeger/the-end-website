import { useEffect, useRef } from "react";

interface Beam {
  startX: number;
  startY: number;
  xOffset: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  saturation: number;
  pulse: number;
  pulseSpeed: number;
  direction: 1 | -1; // horizontal wander direction
  range: number; // horizontal movement range
}

function createBeams(viewportWidth: number, viewportHeight: number): Beam[] {
  const beams: Beam[] = [];

  // 3 links oben
  for (let i = 0; i < 3; i++) {
    beams.push({
      startX: 0,
      startY: 0,
      xOffset: 0,
      width: 100 + i * 20,
      length: viewportHeight,
      angle: 30, // nach rechts unten
      speed: 0.5 + i * 0.2,
      opacity: 0.8,
      hue: 210,
      saturation: 100,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.01,
      direction: 1,
      range: 200 + i * 50,
    });
  }

  // 3 rechts oben
  for (let i = 0; i < 3; i++) {
    beams.push({
      startX: viewportWidth,
      startY: 0,
      xOffset: 0,
      width: 100 + i * 20,
      length: viewportHeight,
      angle: -30, // nach links unten
      speed: 0.5 + i * 0.2,
      opacity: 0.8,
      hue: 0,
      saturation: 100,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.01,
      direction: -1,
      range: 200 + i * 50,
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

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.startX + beam.xOffset, beam.startY);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `rgba(255,255,255,${pulsingOpacity})`); // sofort sichtbar
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
        // horizontal wandern
        beam.xOffset += beam.speed * beam.direction;
        if (Math.abs(beam.xOffset) > beam.range) beam.direction *= -1;

        // pulsen
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
