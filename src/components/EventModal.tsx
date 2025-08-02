import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  location: string;
  description: string;
  flyerImage?: string;
}

const EventModal = ({ isOpen, onClose, title, date, location, description, flyerImage }: EventModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto bg-card border border-border">
        <div className="relative">
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="p-6">
            {flyerImage && (
              <div className="mb-6">
                <img
                  src={flyerImage}
                  alt={`Flyer für ${title}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
            
            <div className="space-y-4">
              <h2 className="font-rock text-2xl font-bold">{title}</h2>
              
              <div className="space-y-2">
                <p className="text-primary font-semibold">{date}</p>
                <p className="text-muted-foreground">{location}</p>
              </div>
              
              <p className="text-foreground leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;