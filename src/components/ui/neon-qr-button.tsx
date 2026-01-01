import React, { useState } from "react";
import { QrCode } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const NeonQrButton = () => {
  const [hovered, setHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setHovered(false);
  };

  return (
    <>
      <div
        className="relative inline-block cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Circular button matching other social icons */}
        <button
          aria-label="Show QR code"
          onClick={handleOpenModal}
          className="
            relative p-2 rounded-full
            bg-secondary hover:bg-primary
            transition-rock hover-rock
            flex items-center justify-center
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            cursor-pointer select-none
          "
        >
          <QrCode className="h-5 w-5 pointer-events-none" strokeWidth={2} />
        </button>

        {/* QR Code popover on hover */}
        <div
          onClick={handleOpenModal}
          className={`
            absolute left-1/2 bottom-full mb-3
            w-52 h-52
            -translate-x-1/2
            rounded-2xl
            bg-gradient-to-tr from-rock-dark via-rock to-rock-dark
            border border-primary/30
            shadow-[0_0_25px_5px_hsl(var(--primary)/0.3)]
            flex items-center justify-center
            transform origin-bottom
            transition-all duration-300 ease-in-out
            z-50
            cursor-pointer
            ${hovered ? "opacity-100 scale-100 visible" : "opacity-0 scale-75 invisible pointer-events-none"}
          `}
        >
          <div className="bg-white rounded-xl p-2 flex items-center justify-center">
            <img 
              src="/images/qr-code.png" 
              alt="QR Code" 
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Modal for full-size QR code */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md bg-black/95 border-primary/20 p-4">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white rounded-2xl p-4">
              <img 
                src="/images/qr-code.png" 
                alt="QR Code" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain"
              />
            </div>
            <p className="text-muted-foreground mt-4 text-center">
              Scanne den QR-Code für mehr Infos
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

NeonQrButton.displayName = "NeonQrButton";

export { NeonQrButton };
