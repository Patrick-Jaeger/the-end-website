import { useState, forwardRef, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-120%",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, value, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const showLabel = isFocused || (value && String(value).length > 0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const syncPointer = (e: PointerEvent) => {
        const { clientX: x, clientY: y } = e;
        
        if (containerRef.current) {
          containerRef.current.style.setProperty('--x', x.toFixed(2));
          containerRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
          containerRef.current.style.setProperty('--y', y.toFixed(2));
          containerRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
        }
      };

      document.addEventListener('pointermove', syncPointer);
      return () => document.removeEventListener('pointermove', syncPointer);
    }, []);

    const glowStyles: React.CSSProperties = {
      ['--base' as any]: 220,
      ['--spread' as any]: 200,
      ['--radius' as any]: '8',
      ['--border' as any]: '2',
      ['--backdrop' as any]: 'transparent',
      ['--backup-border' as any]: 'hsl(var(--border))',
      ['--size' as any]: '200',
      ['--outer' as any]: '1',
      ['--border-size' as any]: 'calc(var(--border, 2) * 1px)',
      ['--spotlight-size' as any]: 'calc(var(--size, 150) * 1px)',
      ['--hue' as any]: 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
      )`,
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      backgroundAttachment: 'fixed',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative',
      touchAction: 'none',
    };

    const beforeAfterStyles = `
      .glow-textarea::before,
      .glow-textarea::after {
        pointer-events: none;
        content: "";
        position: absolute;
        inset: calc(var(--border-size) * -1);
        border: var(--border-size) solid transparent;
        border-radius: calc(var(--radius) * 1px);
        background-attachment: fixed;
        background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
        background-repeat: no-repeat;
        background-position: 50% 50%;
        mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
      }
      
      .glow-textarea::before {
        background-image: radial-gradient(
          calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
          calc(var(--x, 0) * 1px)
          calc(var(--y, 0) * 1px),
          hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
        );
        filter: brightness(2);
      }
      
      .glow-textarea::after {
        background-image: radial-gradient(
          calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
          calc(var(--x, 0) * 1px)
          calc(var(--y, 0) * 1px),
          hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
        );
      }
    `;

    if (!label) {
      return (
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          value={value}
          {...props}
        />
      );
    }

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
        <div 
          ref={containerRef}
          className={cn("relative glow-textarea rounded-lg", className)}
          style={glowStyles}
        >
          <motion.div
            className="absolute top-4 left-3 pointer-events-none text-foreground"
            variants={containerVariants}
            initial="initial"
            animate={showLabel ? "animate" : "initial"}
          >
            {label.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block text-sm"
                variants={letterVariants}
                style={{ willChange: "transform" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <textarea
            ref={ref}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
            className="outline-none py-3 px-3 w-full text-base font-medium text-foreground bg-transparent placeholder-transparent focus-visible:placeholder:text-muted-foreground min-h-[100px] resize-y rounded-lg"
          />
        </div>
      </>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
