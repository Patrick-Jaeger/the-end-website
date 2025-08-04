import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BandMember {
  name: string;
  role: string;
  image: string;
  description?: string;
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
    
    e.preventDefault();
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
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

    if (diff === 0) {
      // Center front card (left position)
      transform = `translateX(${-80 + dragOffset}px) translateZ(100px) scale(1.05)`;
      zIndex = 10;
      opacity = 1;
    } else if (diff === 1 || diff === -(members.length - 1)) {
      // Center front card (right position) 
      transform = `translateX(${80 + dragOffset}px) translateZ(100px) scale(1.05)`;
      zIndex = 10;
      opacity = 1;
    } else if (diff === members.length - 1 || diff === -1) {
      // Left side card (half visible)
      transform = `translateX(${-240 + dragOffset}px) translateZ(50px) scale(0.9) rotateY(15deg)`;
      zIndex = 5;
      opacity = 0.7;
    } else if (diff === 2 || diff === -(members.length - 2)) {
      // Right side card (half visible)
      transform = `translateX(${240 + dragOffset}px) translateZ(50px) scale(0.9) rotateY(-15deg)`;
      zIndex = 5;
      opacity = 0.7;
    } else if (diff === members.length - 2 || diff === -2) {
      // Far left back card (slightly visible)
      transform = `translateX(${-360 + dragOffset}px) translateZ(-20px) scale(0.8) rotateY(25deg)`;
      zIndex = 2;
      opacity = 0.5;
    } else if (diff === 3 || diff === -(members.length - 3)) {
      // Far right back card (slightly visible)
      transform = `translateX(${360 + dragOffset}px) translateZ(-20px) scale(0.8) rotateY(-25deg)`;
      zIndex = 2;
      opacity = 0.5;
    } else {
      // Hidden cards
      transform = `translateX(${diff > members.length / 2 ? -500 : 500}px) translateZ(-200px) scale(0.6)`;
      zIndex = 0;
      opacity = 0;
    }

    return {
      transform,
      zIndex,
      opacity,
    };
  };

  return (
    <div className="relative w-full py-8">
      {/* Carousel Container */}
      <div 
        className="relative h-96 overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        <div
          ref={containerRef}
          className="relative w-full h-full cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {members.map((member, index) => {
            const style = getCardStyle(index);
            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 w-64 h-80 bg-card border border-border rounded-lg shadow-rock"
                style={{
                  transform: `translate(-50%, -50%) ${style.transform}`,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                }}
                transition={{ 
                  duration: isDragging ? 0 : 0.5,
                  ease: "easeOut"
                }}
              >
                <div className="h-full flex flex-col p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-secondary flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center flex-1 flex flex-col justify-start">
                    <h3 className="font-rock text-lg font-bold mb-2 text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed overflow-hidden">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
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