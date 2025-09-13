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

    beamsRef.current = Array.from({ length: 30 }, () =>
      createBeam(canvas.width, canvas.height)
    );

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.6 + Math.sin(beam.pulse) * 0.4);

      // heller Kern, dunklere Ränder
      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, ${beam.saturation}%, 70%, 0)`);
      gradient.addColorStop(
        0.2,
        `hsla(${beam.hue}, ${beam.saturation}%, 60%, ${pulsingOpacity})`
      );
      gradient.addColorStop(
        0.5,
        `hsla(${beam.hue}, ${beam.saturation}%, 75%, ${pulsingOpacity * 1.2})`
      );
      gradient.addColorStop(
        0.8,
        `hsla(${beam.hue}, ${beam.saturation}%, 60%, ${pulsingOpacity})`
      );
      gradient.addColorStop(1, `hsla(${beam.hue}, ${beam.saturation}%, 70%, 0)`);

      ctx.fillStyle = gradient;
      ctx.globalCompositeOperation = "lighter"; // Strahlen überlagern sich → Spotlight-Effekt
      ctx.filter = "blur(12px)";
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

        if (beam.y > canvas.height + 200) {
          beamsRef.current[i] = createBeam(canvas.width, canvas.height);
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
      style={{ pointerEvents: "none", background: "transparent" }}
    />
  );
};
