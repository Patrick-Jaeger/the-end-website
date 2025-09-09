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
}

function createBeam(width: number, height: number): Beam {
  const isBlue = Math.random() > 0.3;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    width: 50 + Math.random() * 50,
    length: height * 1.5,
    angle: Math.random() * 30 - 15,
    speed: 0.2 + Math.random() * 0.3,
    opacity: 0.4 + Math.random() * 0.4,
    hue: isBlue ? 210 + Math.random() * 40 : 0,
    saturation: isBlue ? 100 : 0,
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
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    beamsRef.current = Array.from({ length: 12 }, () =>
      createBeam(canvas.width, canvas.height)
    );

    function drawBeam(beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue},${beam.saturation}%,90%,0)`);
      gradient.addColorStop(0.2, `hsla(${beam.hue},${beam.saturation}%,95%,${beam.opacity})`);
      gradient.addColorStop(0.8, `hsla(${beam.hue},${beam.saturation}%,95%,${beam.opacity})`);
      gradient.addColorStop(1, `hsla(${beam.hue},${beam.saturation}%,90%,0)`);

      ctx.fillStyle = gradient;
      ctx.filter = "blur(40px)";
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
      ctx.filter = "none";
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam) => {
        beam.y += beam.speed;
        if (beam.y > canvas.height) beam.y = -beam.length;
        drawBeam(beam);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default BeamsBackground;
