import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTextSplit, useParallax, useCardWiggle } from "@/hooks/useGSAP";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Media = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // GSAP
  useTextSplit(".text-split-media", 0.3);
  useParallax(".parallax-media", 0.4);
  useCardWiggle(".card-wiggle");

  const photos = [
    { id: 1, title: "Rock im Stodl 2025", category: "Live", imageUrl: "/images/media/2025_rock-im-stodl.jpg" },
    { id: 2, title: "Rock im Stodl 2025", category: "Live", imageUrl: "/images/media/2025_rock-im-stodl1.jpg" },
    { id: 3, title: "Rock im Stodl 2025", category: "Live", imageUrl: "/images/media/2025_rock-im-stodl2.jpg" },
    { id: 4, title: "Rock im Stodl 2025", category: "Live", imageUrl: "/images/media/2025_rock-im-stodl3.jpg" },
    { id: 5, title: "Soundcheck Lauterhofen 2025", category: "BTS", imageUrl: "/images/media/2025_soundcheck-lauterhofen.jpg" },
    { id: 6, title: "Rock in Bouch 2023", category: "Live", imageUrl: "/images/media/2023_rock-in-bouch.jpg" },
    { id: 7, title: "Bandausflug 2023", category: "BTS", imageUrl: "/images/media/2023_bandausflug.jpg" },
    { id: 8, title: "Acoustic Bandprobe 2023", category: "BTS", imageUrl: "/images/media/2023_accoustic-bandprobe.jpg" },
    { id: 9, title: "Rock im Stodl 2022", category: "Live", imageUrl: "/images/media/2022_rock-im-stodl.jpg" },
    { id: 10, title: "DJ Rxxd 2022", category: "Live", imageUrl: "/images/media/2022-dj-rxxd.jpg" },
    { id: 11, title: "Bandprobe mit Freunden 2021", category: "BTS", imageUrl: "/images/media/2021_bandprobe-mit-freunden.jpg" },
    { id: 12, title: "Ausflug zum Thomann 2020", category: "BTS", imageUrl: "/images/media/2020-ausflug-zum-thomann.JPG" },
    { id: 13, title: "Rock in Bouch 2019", category: "Live", imageUrl: "/images/media/2019-rock-in-bouch.jpg" },
    { id: 14, title: "Rock Meets Electro 2018", category: "Live", imageUrl: "/images/media/2018-rock-meets-electro.jpg" },
    { id: 15, title: "Rock in Bouch 2018", category: "Live", imageUrl: "/images/media/2018_rock-in-bouch.jpg" },
    { id: 16, title: "Rock in Bouch 2018", category: "Live", imageUrl: "/images/media/2018_rock-in-bouch1.jpg" },
    { id: 17, title: "Rock in Bouch 2017", category: "Live", imageUrl: "/images/media/2017-rock-in-bouch.jpg" },
    { id: 18, title: "Sommerrock 2015", category: "Live", imageUrl: "/images/media/2015-sommerrock.png" },
    { id: 19, title: "Rock in Bouch 2015", category: "Live", imageUrl: "/images/media/2015-rock-in-bouch.png" },
    { id: 20, title: "Pink Panther Hiatberg 2015", category: "Live", imageUrl: "/images/media/2015-pink-panther-hiatberg.jpg" },
    { id: 21, title: "Over The Hills Festival 2014", category: "Live", imageUrl: "/images/media/2014-over-the-hills-festival.jpg" },
    { id: 22, title: "Rock in Bouch 2010", category: "Live", imageUrl: "/images/media/2010-rock-in-bouch.jpg" },
    { id: 23, title: "Mofarocker 2009", category: "Portrait", imageUrl: "/images/media/2009_mofarocker.jpg" },
    { id: 24, title: "Wo alles begann", category: "BTS", imageUrl: "/images/media/wo-alles-begann.jpg" }
  ];

  const handleNavigate = (dir: "next" | "prev") => {
    setCurrentImageIndex((prev) =>
      dir === "next"
        ? (prev + 1) % photos.length
        : (prev - 1 + photos.length) % photos.length
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isImageModalOpen) return;
      if (e.key === "ArrowLeft") handleNavigate("prev");
      if (e.key === "ArrowRight") handleNavigate("next");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isImageModalOpen]);

  return (
    <div className="min-h-screen bg-rock-gradient">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background/50 to-rock-lighter">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-rock text-4xl md:text-6xl font-bold text-glow mb-6 text-split-media">
            Media
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Erlebe unsere Live-Energie in Bildern und Videos.
          </p>
        </div>
      </section>

      {/* Gallery with fly-in animation */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: (index % 6) * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.02 }}
              className="parallax-media card-wiggle cursor-pointer overflow-hidden rounded-lg"
              onClick={() => {
                setCurrentImageIndex(index);
                setIsImageModalOpen(true);
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-primary/80 px-3 py-1 rounded text-sm mb-2 inline-block text-primary-foreground">
                    {photo.category}
                  </span>
                  <h3 className="font-rock text-lg font-bold text-white">{photo.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Modal with responsive sizing and navigation */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-[85vw] lg:max-w-[75vw] max-h-[90vh] bg-black/95 border-primary/20 p-2 md:p-4">
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate("prev");
              }}
              className="absolute left-2 md:left-4 z-10 p-2 md:p-3 rounded-full bg-black/50 hover:bg-primary/50 transition-colors text-white"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
            </button>

            {/* Image */}
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={photos[currentImageIndex]?.imageUrl}
              alt={photos[currentImageIndex]?.title}
              loading="eager"
              decoding="async"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate("next");
              }}
              className="absolute right-2 md:right-4 z-10 p-2 md:p-3 rounded-full bg-black/50 hover:bg-primary/50 transition-colors text-white"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
            </button>

            {/* Image Title */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-lg">
              <p className="text-white text-sm md:text-base font-rock">
                {photos[currentImageIndex]?.title} ({currentImageIndex + 1}/{photos.length})
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Media;
