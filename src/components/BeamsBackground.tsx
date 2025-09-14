import { useEffect, useRef } from "react";

interface Beam {
  originX: number;
  originY: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  saturation: number;
  pulse: number;
  pulseSpeed: number;
  offsetX: number;
  direction: number; // +1 oder -1 für horizontalen Pendel
}

function createBeam(isLeft: boolean, canvasWidth: number, canvasHeight: number): Beam {
  const hue = isLeft ? 210 + Math.random() * 40 : 0;
  const saturation = isLeft ? 100 : 0;
  const angle = isLeft ? 45 + Math.random() * 10 : 135 + Math.random() * 10;

  return {
    originX: isLeft ? 0 : canvasWidth,
    originY: 0,
    width: 150 + Math.random() * 50,
    length: canvasHeight * 0.6,
    angle,
    speed: 0.5 + Math.random() * 0.3,
    opacity: 0.8 + Math.random() * 0.2,
    hue,
    saturation,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.02,
    offsetX: 0,
    direction: 1,
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

    // 3 links, 3 rechts
    beamsRef.current = [
      createBeam(true, canvas.width, canvas.height),
      createBeam(true, canvas.width, canvas.height),
      createBeam(true, canvas.width, canvas.height),
      createBeam(false, canvas.width, canvas.height),
      createBeam(false, canvas.width, canvas.height),
      createBeam(false, canvas.width, canvas.height),
    ];

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.originX + beam.offsetX, beam.originY);
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
        // horizontal pendeln
        beam.offsetX += beam.direction * 0.5;
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
