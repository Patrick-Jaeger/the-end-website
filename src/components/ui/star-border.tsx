import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "4s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "hsl(var(--primary))"

  return (
    <Component 
      className={cn(
        "relative inline-block p-[2px] overflow-hidden rounded-full transition-all duration-300 scale-105 hover:scale-110 select-none cursor-pointer",
        className
      )} 
      {...props}
    >
      <div
        className={cn(
          "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          "opacity-40 dark:opacity-70" 
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
          "opacity-40 dark:opacity-70"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className={cn(
        "relative z-1 border text-center text-base py-3 px-6 rounded-full font-semibold cursor-pointer select-none",
        "bg-[linear-gradient(135deg,hsl(0_0%_8%)_0%,hsl(0_0%_15%)_50%,hsl(0_0%_8%)_100%)] border-primary/30",
        "dark:bg-[linear-gradient(135deg,hsl(0_0%_8%)_0%,hsl(0_0%_15%)_50%,hsl(0_0%_8%)_100%)] dark:border-primary/30 transition-all duration-300",
        "hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:border-primary/60",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5)]"
      )}>
        {children}
      </div>
    </Component>
  )
}
