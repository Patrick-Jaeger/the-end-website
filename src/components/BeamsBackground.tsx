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
  pulse: number;
  pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
  // Bestimme ob Strahl von links oder rechts kommt
  const fromLeft = Math.random() > 0.5;
  const angle = fromLeft ? -35 + Math.random() * 20 : -55 - Math.random() * 20; // von Ecken nach innen
  
  return {
    x: fromLeft ? Math.random() * width * 0.3 : width * 0.7 + Math.random() * width * 0.3, // von Ecken
    y: Math.random() * height * 0.2, // oben starten
    width: 80 + Math.random() * 120, // breiter
    length: height * 2.5,
    angle,
    speed: 0.3 + Math.random() * 0.6,
    opacity: 0.15 + Math.random() * 0.2,
    hue: Math.random() > 0.3 ? 210 + Math.random() * 30 : 0, // Mehr Blau, einige Weiß
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

    beamsRef.current = Array.from({ length: 25 }, () =>
      createBeam(window.innerWidth, window.innerHeight)
    );

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity =
        beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, 100%, 80%, 0)`);
      gradient.addColorStop(0.2, `hsla(${beam.hue}, 100%, 85%, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(0.5, `hsla(${beam.hue}, 100%, 90%, ${pulsingOpacity})`);
      gradient.addColorStop(0.8, `hsla(${beam.hue}, 100%, 85%, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(1, `hsla(${beam.hue}, 100%, 80%, 0)`);

      ctx.fillStyle = gradient;
      ctx.filter = "blur(50px)"; // starker Blur für weichen Look
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = "rgba(10,10,10,0.85)"; // dunkler Hintergrund, halbtransparent
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      beamsRef.current.forEach((beam) => {
        beam.y += beam.speed;
        beam.pulse += beam.pulseSpeed;

        // Reset beam wenn es unten raus ist
        if (beam.y > window.innerHeight + 200) {
          Object.assign(beam, createBeam(window.innerWidth, window.innerHeight));
          beam.y = -200;
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
      beamsRef.current = Array.from({ length: 25 }, () =>
        createBeam(window.innerWidth, window.innerHeight)
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', handleResize);
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