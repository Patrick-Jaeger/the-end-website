import { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, value, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const showLabel = isFocused || (value && String(value).length > 0);

    if (!label) {
      // Fallback for inputs without labels (like in sidebar)
      return (
        <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm cursor-pointer",
            className
          )}
          ref={ref}
          value={value}
          {...props}
        />
      );
    }

    return (
      <div className={cn("relative", className)}>
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none text-foreground px-3"
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

        <input
          ref={ref}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
          className="outline-none border-b-2 border-input py-3 w-full text-base font-medium text-foreground bg-transparent placeholder:text-muted-foreground focus:placeholder-transparent focus-visible:border-primary transition-colors cursor-pointer"
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
