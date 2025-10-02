import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface AnimatedBorderButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const AnimatedBorderButton = ({ 
  text, 
  icon, 
  className 
}: AnimatedBorderButtonProps) => {
  return (
    <div className={cn(
      "relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none",
      className
    )}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--rock-blue))_0%,hsl(var(--rock-blue-glow))_50%,hsl(var(--primary-glow))_100%)]"></span>
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-background px-7 text-sm font-medium text-foreground backdrop-blur-3xl gap-2">
        <span>{text}</span>
        {icon || <FaLocationArrow />}
      </span>
    </div>
  );
};

export default AnimatedBorderButton;
