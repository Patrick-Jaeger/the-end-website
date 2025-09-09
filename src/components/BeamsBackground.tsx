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
}

function createBeam(width: number, height: number): Beam {
  const fromLeft = Math.random() > 0.5;
  const angle = fromLeft ? -30 + Math.random() * 15 : 30 + Math.random() * 15;

  const isBlue = Math.random() > 0.3; // 70% blau, 30% weiß
  const hue = isBlue ? 210 + Math.random() * 40 : 0;
  const saturation = isBlue ? 100 : 0;

  return {
    x: fromLeft
      ? Math.random() * width * 0.3
      : width * 0.7 + Math.random() * 0.3 * width,
    y: -200,
    width: 80 + Math.random() * 120,
    length: height * 2,
    angle,
    speed: 1 + Math.random() * 1.5,
    opacity: 0.25 + Math.random() * 0.25,
    hue,
    saturation,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.02,
  };
}

const BeamsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);

    const beamCount = 25;
    beamsRef.current = Array.from({ length: beamCount }, () =>
      createBeam(window.innerWidth, window.innerHeight)
    );

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, ${beam.saturation}%, 90%, 0)`);
      gradient.addColorStop(
        0.3,
        `hsla(${beam.hue}, ${beam.saturation}%, 90%, ${pulsingOpacity})`
      );
      gradient.addColorStop(
        0.7,
        `hsla(${beam.hue}, ${beam.saturation}%, 95%, ${pulsingOpacity})`
      );
      gradient.addColorStop(1, `hsla(${beam.hue}, ${beam.saturation}%, 90%, 0)`);

      ctx.fillStyle = gradient;
      ctx.filter = "blur(30px)";
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();

      ctx.filter = "none"; // Reset filter
    }

    function animate() {
  // Nicht mehr füllen, nur clearRect
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  beamsRef.current.forEach((beam, i) => {
    beam.y += beam.speed;
    beam.pulse += beam.pulseSpeed;

    if (beam.y > window.innerHeight + 200) {
      beamsRef.current[i] = createBeam(window.innerWidth, window.innerHeight);
    }

    drawBeam(ctx, beam);
  });

  animationFrameRef.current = requestAnimationFrame(animate);
}

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      beamsRef.current = Array.from({ length: beamCount }, () =>
        createBeam(window.innerWidth, window.innerHeight)
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default BeamsBackground;
