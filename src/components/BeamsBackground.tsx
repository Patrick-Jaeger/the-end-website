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
    x: fromLeft ? Math.random() * width * 0.3 : width * 0.7 + Math.random() * width * 0.3,
    y: Math.random() * height, // Start irgendwo oben, nicht ploppen
    width: 60 + Math.random() * 80,
    length: height * 2,
    angle,
    speed: 0.5 + Math.random() * 0.5, // langsam
    opacity: 0.3 + Math.random() * 0.2,
    hue,
    saturation,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.005 + Math.random() * 0.01,
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

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    beamsRef.current = Array.from({ length: 15 }, () =>
      createBeam(canvas.width, canvas.height)
    );

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.7 + Math.sin(beam.pulse) * 0.3);

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, ${beam.saturation}%, 90%, 0)`);
      gradient.addColorStop(0.3, `hsla(${beam.hue}, ${beam.saturation}%, 90%, ${pulsingOpacity})`);
      gradient.addColorStop(0.7, `hsla(${beam.hue}, ${beam.saturation}%, 90%, ${pulsingOpacity})`);
      gradient.addColorStop(1, `hsla(${beam.hue}, ${beam.saturation}%, 90%, 0)`);

      ctx.fillStyle = gradient;
      ctx.filter = "blur(35px)";
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();

      ctx.filter = "none";
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam) => {
        beam.y += beam.speed;
        beam.pulse += beam.pulseSpeed;

        if (beam.y > canvas.height) {
          beam.y = -beam.length; // nach oben zurück
        }

        drawBeam(ctx, beam);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
    />
  );
};

export default BeamsBackground;
