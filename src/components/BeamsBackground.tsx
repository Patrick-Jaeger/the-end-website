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
    y: -200,
    width: 150 + Math.random() * 100, // breiter für mehr Sichtbarkeit
    length: height * 1.5,
    angle,
    speed: 1.5 + Math.random() * 1.5,
    opacity: 0.8 + Math.random() * 0.2, // stark sichtbar
    hue,
    saturation,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.03,
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
  const scale = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * scale;
  canvas.height = window.innerHeight * scale;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset
  ctx.scale(scale, scale); // skaliert alles automatisch
};

    resizeCanvas();

    beamsRef.current = Array.from({ length: 30 }, () =>
      createBeam(window.innerWidth, window.innerHeight)
    );

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.6 + Math.sin(beam.pulse) * 0.4);

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, ${beam.saturation}%, 70%, 0)`);
      gradient.addColorStop(
        0.3,
        `hsla(${beam.hue}, ${beam.saturation}%, 70%, ${pulsingOpacity})`
      );
      gradient.addColorStop(
        0.7,
        `hsla(${beam.hue}, ${beam.saturation}%, 70%, ${pulsingOpacity})`
      );
      gradient.addColorStop(1, `hsla(${beam.hue}, ${beam.saturation}%, 70%, 0)`);

      ctx.fillStyle = gradient;
      ctx.globalCompositeOperation = "lighter"; // additive Blending
      ctx.filter = "blur(15px)";
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
      ctx.filter = "none";
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam, i) => {
        beam.y += beam.speed;
        beam.pulse += beam.pulseSpeed;

        if (beam.y > window.innerHeight + 200) {
          beamsRef.current[i] = createBeam(window.innerWidth, window.innerHeight);
        }

        drawBeam(ctx, beam);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
<canvas
  ref={canvasRef}
  className="fixed inset-0 z-10 w-full h-full"
  style={{ pointerEvents: "none", background: "black" }} // <--- Test
/>

  );
};

export default BeamsBackground;
