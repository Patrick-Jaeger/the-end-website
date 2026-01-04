"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, active]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const handleImageClick = (src: string) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        {/* Image Section */}
        <div>
          <div className="relative h-96 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                const offset = (index - active + testimonials.length) % testimonials.length;
                const rotation = offset === 0 ? 0 : (offset % 2 === 1 ? 5 : -5);
                return (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: 0,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95 - offset * 0.02,
                      z: isActive(index) ? 0 : -100 - offset * 20,
                      rotate: rotation,
                      zIndex: isActive(index)
                        ? 999
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? 0 : offset * 5,
                    }}
                    exit={{
                      x: -300,
                      opacity: 0,
                      scale: 0.9,
                      z: -200,
                      rotate: -10,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      draggable={false}
                      onClick={() => handleImageClick(testimonial.src)}
                      className="h-full w-full rounded-3xl object-cover aspect-square cursor-pointer"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          {/* Mobile Navigation - Below Image */}
          <div className="flex gap-4 justify-center mt-14 md:hidden">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <ArrowLeft className="h-6 w-6 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <ArrowRight className="h-6 w-6 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
        
        {/* Text Section */}
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-muted-foreground mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.03 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          
          {/* Desktop Navigation - Below Text */}
          <div className="hidden md:flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <ArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <ArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-full max-h-full md:max-w-[95vw] md:max-h-[95vh] w-full h-full md:w-auto md:h-auto p-0 md:p-2 bg-black/95 border-0 md:border border-border flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={modalImageSrc}
              alt="Enlarged view"
              className="w-full h-full md:w-auto md:h-auto object-contain md:max-w-full md:max-h-[90vh] md:rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
