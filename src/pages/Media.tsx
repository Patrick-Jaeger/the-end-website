import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Video } from "lucide-react";
import { useTextSplit, useParallax, useCardWiggle } from "@/hooks/useGSAP";
import { TextScramble } from "@/components/ui/text-scramble";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Media = () => {
  const [isTrigger, setIsTrigger] = useState(false);
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

      {/* Gallery */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <DirectionAwareHover
              key={photo.id}
              imageUrl={photo.imageUrl}
              className="parallax-media card-wiggle"
              onClick={() => {
                setCurrentImageIndex(index);
                setIsImageModalOpen(true);
              }}
              disableModal
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                loading="lazy"
                decoding="async"
                className="hidden"
              />
              <div className="bg-black/50 px-3 py-1 rounded text-sm mb-2 inline-block">
                {photo.category}
              </div>
              <h3 className="font-rock text-lg font-bold">{photo.title}</h3>
            </DirectionAwareHover>
          ))}
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-full max-h-full bg-black/95 border-0">
          <img
            src={photos[currentImageIndex]?.imageUrl}
            alt={photos[currentImageIndex]?.title}
            loading="eager"
            decoding="async"
            className="w-full h-full object-contain"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Media;
