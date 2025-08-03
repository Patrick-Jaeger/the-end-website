import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BandMember {
  name: string;
  role: string;
  image: string;
}

interface BandCarouselProps {
  members: BandMember[];
}

const BandCarousel = ({ members }: BandCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    e.preventDefault(); // Prevent scrolling
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setDragOffset(0);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + members.length) % members.length;
    let transform = '';
    let zIndex = 0;
    let opacity = 0.4;
    let scale = 0.8;

    if (diff === 0) {
      // Center card (front)
      transform = `translateX(${dragOffset}px) translateZ(100px) scale(1)`;
      zIndex = 5;
      opacity = 1;
      scale = 1;
    } else if (diff === 1 || diff === -(members.length - 1)) {
      // Right card (middle right)
      transform = `translateX(${120 + dragOffset}px) translateZ(0px) scale(0.85)`;
      zIndex = 3;
      opacity = 0.7;
    } else if (diff === members.length - 1 || diff === -1) {
      // Left card (middle left)
      transform = `translateX(${-120 + dragOffset}px) translateZ(0px) scale(0.85)`;
      zIndex = 3;
      opacity = 0.7;
    } else if (diff === 2 || diff === -(members.length - 2)) {
      // Far right card (back right)
      transform = `translateX(${200 + dragOffset}px) translateZ(-100px) scale(0.7)`;
      zIndex = 1;
      opacity = 0.5;
    } else if (diff === members.length - 2 || diff === -2) {
      // Far left card (back left)
      transform = `translateX(${-200 + dragOffset}px) translateZ(-100px) scale(0.7)`;
      zIndex = 1;
      opacity = 0.5;
    } else {
      // Hidden cards
      transform = `translateX(${diff > members.length / 2 ? -400 : 400}px) translateZ(-200px) scale(0.6)`;
      zIndex = 0;
      opacity = 0;
    }

    return {
      transform,
      zIndex,
      opacity,
      scale,
    };
  };

  return (
    <div className="relative w-full h-96 overflow-hidden perspective-1000">
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-x"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        style={{ perspective: '1000px' }}
      >
        {members.map((member, index) => {
          const style = getCardStyle(index);
          
          return (
            <motion.div
              key={index}
              className="absolute w-64 h-80 bg-card border border-border rounded-lg p-6 shadow-rock transform-gpu"
              style={{
                transform: style.transform,
                zIndex: style.zIndex,
                opacity: style.opacity,
              }}
              animate={{
                transform: style.transform,
                opacity: style.opacity,
              }}
              transition={{
                duration: isDragging ? 0 : 0.3,
                ease: "easeOut"
              }}
            >
              <div className="text-center h-full flex flex-col justify-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-secondary">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-2">
                  <h3 className="font-rock text-lg font-bold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {members.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary' : 'bg-muted'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BandCarousel;