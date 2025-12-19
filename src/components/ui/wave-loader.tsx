"use client"

import { cva } from "class-variance-authority"
import { HTMLMotionProps, motion } from "framer-motion"
import { cn } from "@/lib/utils"

const waveLoaderVariants = cva("flex gap-1 items-center justify-center", {
  variants: {
    messagePlacement: {
      bottom: "flex-col",
      right: "flex-row",
      left: "flex-row-reverse",
    },
  },
  defaultVariants: {
    messagePlacement: "right",
  },
})

export interface WaveLoaderProps {
  bars?: number
  message?: string
  messagePlacement?: "bottom" | "left" | "right"
  barClassName?: string
}

export function WaveLoader({
  bars = 5,
  message,
  messagePlacement = "right",
  className,
  barClassName,
  ...props
}: HTMLMotionProps<"div"> & WaveLoaderProps) {
  return (
    <motion.div
      className={cn(waveLoaderVariants({ messagePlacement }), className)}
      {...props}
    >
      <div className="flex items-end gap-0.5 h-5">
        {Array(bars)
          .fill(undefined)
          .map((_, index) => (
            <motion.div
              key={index}
              className={cn("w-1 bg-primary rounded-full", barClassName)}
              initial={{ height: 8 }}
              animate={{ height: [8, 20, 8] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      {message && <p className="text-primary font-bold">{message}</p>}
    </motion.div>
  )
}
