import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Video } from "lucide-react";
import { useTextSplit, useParallax, useCardWiggle } from "@/hooks/useGSAP";
import { TextScramble } from "@/components/ui/text-scramble";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";


const Media = () => {
  const [isTrigger, setIsTrigger] = useState(false);

  // GSAP Animations
  useTextSplit('.text-split-media', 0.3);
  useParallax('.parallax-media', 0.4);
  useCardWiggle('.card-wiggle');
  

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
    { id: 13, title: "Bandprobe 2019", category: "BTS", imageUrl: "/images/media/2019-bandprobe.jpg" },
    { id: 14, title: "Rock in Bouch 2019", category: "Live", imageUrl: "/images/media/2019-rock-in-bouch.jpg" },
    { id: 15, title: "Rock Meets Electro 2018", category: "Live", imageUrl: "/images/media/2018-rock-meets-electro.jpg" },
    { id: 16, title: "Rock in Bouch 2018", category: "Live", imageUrl: "/images/media/2018_rock-in-bouch.jpg" },
    { id: 17, title: "Rock in Bouch 2018", category: "Live", imageUrl: "/images/media/2018_rock-in-bouch1.jpg" },
    { id: 18, title: "Rock in Bouch 2017", category: "Live", imageUrl: "/images/media/2017-rock-in-bouch.jpg" },
    { id: 19, title: "Sommerrock 2015", category: "Live", imageUrl: "/images/media/2015-sommerrock.png" },
    { id: 20, title: "Rock in Bouch 2015", category: "Live", imageUrl: "/images/media/2015-rock-in-bouch.png" },
    { id: 21, title: "Pink Panther Hiatberg 2015", category: "Live", imageUrl: "/images/media/2015-pink-panther-hiatberg.jpg" },
    { id: 22, title: "Over The Hills Festival 2014", category: "Live", imageUrl: "/images/media/2014-over-the-hills-festival.jpg" },
    { id: 23, title: "Rock in Bouch 2010", category: "Live", imageUrl: "/images/media/2010-rock-in-bouch.jpg" },
    { id: 24, title: "Mofarocker 2009", category: "Portrait", imageUrl: "/images/media/2009_mofarocker.jpg" },
    { id: 25, title: "Wo alles begann", category: "BTS", imageUrl: "/images/media/wo-alles-begann.jpg" }
  ];

  const videos = [
    {
      id: 1,
      title: "Enter Sandman - Live Cover",
      description: "Unser Cover des Metallica-Klassikers live beim Herbstrock Festival",
      thumbnail: "youtube-thumb-1"
    },
    {
      id: 2,
      title: "Smells Like Teen Spirit - Acoustic Version",
      description: "Eine acoustic Version des Nirvana-Hits in unserem Proberaum",
      thumbnail: "youtube-thumb-2"
    },
    {
      id: 3,
      title: "Full Live Set - Sommernachtstraum 2024",
      description: "Komplettes Live-Set von unserem Open-Air Auftritt",
      thumbnail: "youtube-thumb-3"
    }
  ];

  const referenzen = [
    {
      quote: "Eine unvergessliche Rock-Nacht mit energiegeladenen Performances und begeistertem Publikum.",
      name: "Rock im Stodl 2025",
      designation: "Festival",
      src: "/images/referenzen/2025_rock-im-stodl.jpg",
    },
    {
      quote: "Ein großartiges Event mit professioneller Band und ausgelassener Stimmung.",
      name: "Das Event Lauterhofen 2025",
      designation: "Veranstaltung",
      src: "/images/referenzen/2025-das-event-lauterhofen.jpg",
    },
    {
      quote: "The End hat unsere Geburtstagsfeier zu einem echten Highlight gemacht.",
      name: "2x40 Geburtstag Altenricht 2024",
      designation: "Private Feier",
      src: "/images/referenzen/2024-2x40-geburtstag-altenricht.jpg",
    },
    {
      quote: "Eine fantastische Party mit der besten Rock-Musik.",
      name: "40. Geburtstag Ehenfeld 2024",
      designation: "Private Feier",
      src: "/images/referenzen/2024-40-geburtstag-ehenfeld.jpg",
    },
    {
      quote: "Das Sandlochfest wurde durch The End zu einem unvergesslichen Erlebnis.",
      name: "Sandlochfest Ehenfeld 2023",
      designation: "Dorffest",
      src: "/images/referenzen/2023-sandlochfest-ehenfeld.jpg",
    },
    {
      quote: "Eine gelungene Geburtstagsfeier mit mitreißender Live-Musik.",
      name: "Geburtstag Hohenburg 2023",
      designation: "Private Feier",
      src: "/images/referenzen/2023-geburtstag-hohenburg.jpg",
    },
    {
      quote: "Rock in Bouch war ein voller Erfolg dank The End!",
      name: "Rock in Bouch 2019",
      designation: "Rock Festival",
      src: "/images/referenzen/2019_rock-in-bouch.jpg",
    },
    {
      quote: "Eine großartige 40. Geburtstagsfeier mit energiegeladener Rock-Musik.",
      name: "40. Geburtstag Hohenburg 2019",
      designation: "Private Feier",
      src: "/images/referenzen/2019-40-geburtstag-hohenburg.JPG",
    },
    {
      quote: "Rock am LKW war ein voller Erfolg mit begeistertem Publikum.",
      name: "Rock am LKW TUS Hohenburg 2014",
      designation: "Vereinsfest",
      src: "/images/referenzen/2014-rock-am-lkw-tus-hohenburg.JPG",
    },
    {
      quote: "Over The Hills wurde durch The End zu einem unvergesslichen Event.",
      name: "Over The Hills Pfaffenhofen 2014",
      designation: "Festival",
      src: "/images/referenzen/2014-over-the-hills-pfaffenhofen.JPG",
    },
    {
      quote: "Das FFW Fest war ein Highlight mit großartiger Live-Musik.",
      name: "FFW Fest Mendorferbuch 2013",
      designation: "Feuerwehrfest",
      src: "/images/referenzen/2013-ffw-fest-mendorferbuch.jpg",
    },
    {
      quote: "Pink Panther Hiatberg - ein unvergessliches Event mit The End.",
      name: "Pink Panther Hiatberg 2011",
      designation: "Event",
      src: "/images/referenzen/2011-pink-panther-hiatberg.png",
    },
  ];

  return (
    <div className="min-h-screen bg-rock-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background/50 to-rock-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-rock text-4xl md:text-6xl font-bold text-glow mb-6 text-split-media">
              Media
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Erlebe unsere Live-Energie in Bildern und Videos. 
              Von Backstage-Momenten bis zu explosiven Live-Performances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-rock text-3xl md:text-4xl font-bold text-glow mb-4">
              Photo Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Impressionen von der Bühne und hinter den Kulissen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <DirectionAwareHover
                  imageUrl={photo.imageUrl}
                  className="parallax-media card-wiggle"
                >
                  <div className="bg-black/50 px-3 py-1 rounded text-sm mb-2 inline-block">
                    {photo.category}
                  </div>
                  <h3 className="font-rock text-lg font-bold">{photo.title}</h3>
                </DirectionAwareHover>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referenzen Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-rock text-3xl md:text-4xl font-bold text-glow mb-4">
              Referenzen
            </h2>
            <p className="text-lg text-muted-foreground">
              Unsere vergangenen Events und Auftritte
            </p>
          </div>

          <AnimatedTestimonials testimonials={referenzen} autoplay={false} />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-rock text-3xl md:text-4xl font-bold text-glow mb-4">
              Live Videos
            </h2>
            <p className="text-lg text-muted-foreground">
              Unsere besten Live-Performances auf YouTube
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {videos.map((video, index) => (
              <div key={video.id}>
                <Card className="bg-card border-border shadow-rock transition-rock hover-rock overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="aspect-video bg-secondary relative overflow-hidden group cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-rock">
                            <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                          <Video className="h-3 w-3" />
                          <span>YouTube</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <CardContent className="p-6">
                        <h3 className="font-rock text-xl font-bold mb-3">
                          {video.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {video.description}
                        </p>
                        <div className="flex items-center space-x-2 text-primary">
                          <Play className="h-4 w-4" />
                          <span className="font-semibold">Auf YouTube ansehen</span>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center bg-card border border-border rounded-lg p-8 shadow-rock"
          >
            <h2 className="font-rock text-2xl font-bold text-glow mb-4">
              <TextScramble
                as="span"
                speed={0.03}
                trigger={isTrigger}
                onHoverStart={() => setIsTrigger(true)}
                onScrambleComplete={() => setIsTrigger(false)}
              >
                Folgt uns für mehr Content!
              </TextScramble>
            </h2>
            <p className="text-muted-foreground mb-6">
              Verpasst keine Updates, Behind-the-Scenes Momente und neuen Videos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://www.instagram.com/Die_Band_The_End" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold transition-rock hover-rock text-center"
              >
                Instagram
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-rock hover-rock text-center"
              >
                YouTube
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100063827957058" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-rock hover-rock text-center"
              >
                Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;