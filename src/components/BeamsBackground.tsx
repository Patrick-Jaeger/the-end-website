import { useEffect, useRef } from "react";

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
  const fromLeft = Math.random() > 0.5;
  const angle = fromLeft ? -35 + Math.random() * 20 : 35 + Math.random() * 20;

  // zufällige Wahl zwischen Blau und Weiß
  const isBlue = Math.random() > 0.3;
  const color = isBlue
    ? `hsla(${200 + Math.random() * 40}, 100%, 75%,`
    : `hsla(0, 0%, 100%,`;

  return {
    x: fromLeft ? Math.random() * width * 0.3 : width * 0.7 + Math.random() * width * 0.3,
    y: -200, // Start oben
    width: 100 + Math.random() * 120,
    length: height * 2,
    angle,
    speed: 1 + Math.random() * 1.5,
    opacity: 0.2 + Math.random() * 0.3,
    color,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.02,
  };
}

const BeamsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);

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

    beamsRef.current = Array.from({ length: 20 }, () =>
      createBeam(window.innerWidth, window.innerHeight)
    );

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `${beam.color}0)`);
      gradient.addColorStop(0.2, `${beam.color}${pulsingOpacity * 0.5})`);
      gradient.addColorStop(0.5, `${beam.color}${pulsingOpacity})`);
      gradient.addColorStop(0.8, `${beam.color}${pulsingOpacity * 0.5})`);
      gradient.addColorStop(1, `${beam.color}0)`);

      ctx.fillStyle = gradient;
      ctx.filter = "blur(80px)"; // noch stärker verschwommen
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = "rgba(10,10,20,0.6)"; // dunkler Hintergrund, aber transparenter
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

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

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default BeamsBackground;