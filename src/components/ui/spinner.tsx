import { Loader, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export const Spinner = ({ size = "md", className }: SpinnerProps) => {
  return (
    <Loader
      className={cn(
        "animate-spin text-primary",
        sizeClasses[size],
        className
      )}
    />
  );
};

export const SuccessCheck = ({ size = "md", className }: SpinnerProps) => {
  return (
    <div className="p-0.5 bg-emerald-500/20 rounded-full">
      <Check
        className={cn(
          "text-emerald-500",
          sizeClasses[size],
          className
        )}
      />
    </div>
  );
};
