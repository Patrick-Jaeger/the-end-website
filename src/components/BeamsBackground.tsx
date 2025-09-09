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

  const isBlue = Math.random() > 0.3;
  const hue = isBlue ? 210 + Math.random() * 40 : 0;
  const saturation = isBlue ? 100 : 0;

  return {
    x: fromLeft
      ? Math.random() * width * 0.3
      : width * 0.7 + Math.random() * width * 0.3,
    y: -Math.random() * height, // start etwas über dem sichtbaren Bereich
    width: 60 + Math.random() * 80,
    length: height * 2,
    angle,
    speed: 0.3 + Math.random() * 0.5, // langsame, sanfte Bewegung
    opacity: 0.5 + Math.random() * 0.3, // sichtbar, aber nicht überstrahlend
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

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);

    const beamCount = 25; // moderat, nicht zu viele
    beamsRef.current = Array.from({ length: beamCount }, () =>
      createBeam(window.innerWidth, window.innerHeight)
    );

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, ${beam.saturation}%, 100%, 0)`);
      gradient.addColorStop(0.3, `hsla(${beam.hue}, ${beam.saturation}%, 100%, ${pulsingOpacity * 0.6})`);
      gradient.addColorStop(0.5, `hsla(${beam.hue}, ${beam.saturation}%, 100%, ${pulsingOpacity})`);
      gradient.addColorStop(0.8, `hsla(${beam.hue}, ${beam.saturation}%, 100%, ${pulsingOpacity * 0.6})`);
      gradient.addColorStop(1, `hsla(${beam.hue}, ${beam.saturation}%, 100%, 0)`);

      ctx.fillStyle = gradient;
      ctx.filter = "blur(35px)";
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
      ctx.filter = "none";
    }

    function animate() {
      // dunkler Hintergrund, leicht transparent für Strahlen sichtbar
      ctx.fillStyle = "rgba(10,10,20,0.35)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      beamsRef.current.forEach((beam) => {
        beam.y += beam.speed;
        beam.pulse += beam.pulseSpeed;

        if (beam.y > window.innerHeight + 200) {
          beam.y = -200; // wieder oben starten, kein Ploppen
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
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
    />
  );
};

export default BeamsBackground;
