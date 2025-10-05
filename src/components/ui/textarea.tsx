import { useState, forwardRef } from "react";
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

    if (!label) {
      // Fallback for textareas without labels
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
      <div className={cn("relative", className)}>
        <motion.div
          className="absolute top-4 pointer-events-none text-foreground px-3"
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
          className="outline-none border-b-2 border-input py-3 w-full text-base font-medium text-foreground bg-transparent placeholder:text-muted-foreground focus:placeholder-transparent focus-visible:border-primary transition-colors min-h-[100px] resize-y"
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
