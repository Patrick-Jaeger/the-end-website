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
  direction: 1 | -1; // für wieder nach oben wandern
}

function createBeam(width: number, height: number): Beam {
  const fromLeft = Math.random() > 0.5;
  const angle = fromLeft ? -30 + Math.random() * 15 : 30 + Math.random() * 15;

  const isBlue = Math.random() > 0.3;
  const hue = isBlue ? 210 + Math.random() * 40 : 0;
  const saturation = isBlue ? 100 : 0;

  return {
    x: fromLeft ? Math.random() * width * 0.3 : width * 0.7 + Math.random() * width * 0.3,
    y: Math.random() * height, // zufällige Startposition
    width: 60 + Math.random() * 80,
    length: height * 1.5,
    angle,
    speed: 0.3 + Math.random() * 0.7,
    opacity: 0.3 + Math.random() * 0.3,
    hue,
    saturation,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.005 + Math.random() * 0.01,
    direction: 1,
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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      beamsRef.current = Array.from({ length: 15 }, () =>
        createBeam(canvas.width, canvas.height)
      );
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawBeam = (beam: Beam) => {
      if (!ctx) return;
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, ${beam.saturation}%, 95%, 0)`);
      gradient.addColorStop(0.3, `hsla(${beam.hue}, ${beam.saturation}%, 95%, ${pulsingOpacity})`);
      gradient.addColorStop(0.7, `hsla(${beam.hue}, ${beam.saturation}%, 95%, ${pulsingOpacity})`);
      gradient.addColorStop(1, `hsla(${beam.hue}, ${beam.saturation}%, 95%, 0)`);

      ctx.fillStyle = gradient;
      ctx.filter = "blur(30px)";
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
      ctx.filter = "none";
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam) => {
        beam.y += beam.speed * beam.direction;
        beam.pulse += beam.pulseSpeed;

        // wenn Strahl zu weit nach unten oder oben, Richtung umkehren
        if (beam.y > canvas.height || beam.y < 0) {
          beam.direction *= -1;
        }

        drawBeam(beam);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", resizeCanvas);
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
