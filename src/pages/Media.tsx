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
    { id: 1, title: "Live on Stage", category: "Live", imageUrl: "/images/band/Gruppenfoto.jpg" },
    { id: 2, title: "Band Portrait", category: "Portrait", imageUrl: "/images/band/david.jpg" },
    { id: 3, title: "Behind the Scenes", category: "BTS", imageUrl: "/images/band/lukas.jpg" },
    { id: 4, title: "Crowd Interaction", category: "Live", imageUrl: "/images/band/martin.jpg" },
    { id: 5, title: "Sound Check", category: "BTS", imageUrl: "/images/band/patrick.jpg" },
    { id: 6, title: "Group Shot", category: "Portrait", imageUrl: "/images/band/sebastian.jpg" }
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

  const testimonials = [
    {
      quote: "The End hat unser Event mit ihrer energiegeladenen Performance zu einem unvergesslichen Erlebnis gemacht. Absolut professionell und mitreißend!",
      name: "Michael Weber",
      designation: "Event Manager, Rockfestival Bergheim",
      src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "Eine Band, die weiß wie man das Publikum begeistert. Technisch versiert und mit einer unglaublichen Bühnenpräsenz.",
      name: "Sarah Müller",
      designation: "Veranstalterin, Stadthalle Linz",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "The End hat unser Firmenevent zu einem echten Highlight gemacht. Die Stimmung war fantastisch und alle Gäste waren begeistert!",
      name: "Thomas Gruber",
      designation: "HR Director, TechSolutions GmbH",
      src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "Hervorragende Musiker mit einem breiten Repertoire. Von Rock-Klassikern bis zu modernen Hits - alles wurde perfekt dargeboten.",
      name: "Lisa Berger",
      designation: "Kulturbeauftragte, Stadt Wels",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "Die Zusammenarbeit mit The End war von Anfang bis Ende professionell. Eine absolute Empfehlung für jeden, der eine Rock-Band sucht!",
      name: "Andreas Schmidt",
      designation: "Clubbesitzer, Rockhouse Salzburg",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop",
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
              Was unsere Partner und Veranstalter über uns sagen
            </p>
          </div>

          <AnimatedTestimonials testimonials={testimonials} autoplay={false} />
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