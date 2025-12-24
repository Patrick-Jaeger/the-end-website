import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
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

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    // Only respond to horizontal scroll or significant vertical scroll
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || Math.abs(e.deltaY) > 30) {
      const direction = e.deltaX !== 0 ? e.deltaX : e.deltaY;
      
      if (direction > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + members.length) % members.length;
    let transform = '';
    let zIndex = 0;
    let opacity = 0.4;

    if (diff === 0) {
      // 1. Ebene (Front/Center) 
      transform = `translateX(${dragOffset}px) translateZ(100px) scale(1.05)`;
      zIndex = 10;
      opacity = 1;
    } else if (diff === 1) {
      // 2. Ebene (links)
      transform = `translateX(${-160 + dragOffset}px) translateZ(80px) scale(0.95) rotateY(10deg)`;
      zIndex = 8;
      opacity = 0.9;
    } else if (diff === 5) {
      // 2. Ebene (rechts)
      transform = `translateX(${160 + dragOffset}px) translateZ(80px) scale(0.95) rotateY(-10deg)`;
      zIndex = 8;
      opacity = 0.9;
    } else if (diff === 2) {
      // 3. Ebene (links)
      transform = `translateX(${-280 + dragOffset}px) translateZ(60px) scale(0.85) rotateY(20deg)`;
      zIndex = 6;
      opacity = 0.7;
    } else if (diff === 4) {
      // 3. Ebene (rechts)
      transform = `translateX(${280 + dragOffset}px) translateZ(60px) scale(0.85) rotateY(-20deg)`;
      zIndex = 6;
      opacity = 0.7;
    } else if (diff === 3) {
      // 4. Ebene (nur links)
      transform = `translateX(${-380 + dragOffset}px) translateZ(40px) scale(0.75) rotateY(30deg)`;
      zIndex = 4;
      opacity = 0.5;
    }

    return {
      transform,
      zIndex,
      opacity,
    };
  };

  return (
    <div className="w-full py-8">
      {/* Desktop/Tablet Carousel */}
      <div className="hidden md:block relative">
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
            onWheel={handleWheel}
          >
            {members.map((member, index) => {
              const style = getCardStyle(index);
              return (
              <motion.div
                  key={index}
                  className={`absolute left-1/2 top-1/2 w-64 h-80 sm:w-60 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-[22rem] bg-card border border-border rounded-lg shadow-rock ${index === currentIndex ? 'cursor-pointer' : 'cursor-pointer'}`}
                  style={{
                    transform: `translate(-50%, -50%) ${style.transform}`,
                    zIndex: style.zIndex,
                    opacity: style.opacity,
                  }}
                  transition={{
                    duration: isDragging ? 0 : 0.5,
                    ease: "easeOut"
                  }}
                  onClick={() => {
                    if (Math.abs(dragOffset) < 10) {
                      if (index === currentIndex) {
                        setSelectedImage(member.image);
                      } else {
                        setCurrentIndex(index);
                      }
                    }
                  }}
                >
                  <div className={`h-full flex flex-col p-5 ${index === currentIndex ? 'cursor-pointer' : 'cursor-pointer'}`}>
                    <div 
                      className={`w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-secondary flex-shrink-0 ${index === currentIndex ? 'cursor-pointer hover:ring-2 hover:ring-primary' : 'cursor-pointer'} transition-all`}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center flex-1 flex flex-col justify-start cursor-pointer">
                      <h3 className="font-rock text-base font-bold mb-1.5 text-foreground cursor-pointer">{member.name}</h3>
                      <p className="text-primary font-medium text-xs mb-2 cursor-pointer">{member.role}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed overflow-hidden line-clamp-6 cursor-pointer">{member.description}</p>
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

      {/* Mobile Stack */}
      <div className="block md:hidden space-y-6">
        {members.map((member, index) => (
          <Card 
            key={index} 
            className="bg-card border-border shadow-rock transition-rock hover-rock cursor-pointer"
            onClick={() => setSelectedImage(member.image)}
          >
            <CardContent className="p-6 cursor-pointer">
              <div className="flex flex-col items-center text-center cursor-pointer">
                <div 
                  className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-secondary flex-shrink-0 cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                <h3 className="font-rock text-xl font-bold mb-2 text-foreground cursor-pointer">{member.name}</h3>
                <p className="text-primary font-medium text-base mb-3 cursor-pointer">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed cursor-pointer">{member.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-full max-h-full md:max-w-[95vw] md:max-h-[95vh] w-full h-full md:w-auto md:h-auto p-0 md:p-2 bg-black/95 border-0 md:border border-border flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={selectedImage || ''}
              alt="Enlarged view"
              className="w-full h-full md:w-auto md:h-auto object-contain md:max-w-full md:max-h-[90vh] md:rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BandCarousel;