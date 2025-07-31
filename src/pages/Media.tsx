import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Camera, Video } from "lucide-react";

const Media = () => {
  const photos = [
    { id: 1, title: "Live on Stage", category: "Live" },
    { id: 2, title: "Band Portrait", category: "Portrait" },
    { id: 3, title: "Behind the Scenes", category: "BTS" },
    { id: 4, title: "Crowd Interaction", category: "Live" },
    { id: 5, title: "Sound Check", category: "BTS" },
    { id: 6, title: "Group Shot", category: "Portrait" }
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
            <h1 className="font-rock text-4xl md:text-6xl font-bold text-glow mb-6">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-rock text-3xl md:text-4xl font-bold text-glow mb-4">
              Photo Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Impressionen von der Bühne und hinter den Kulissen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border shadow-rock transition-rock hover-rock overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-secondary relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="h-16 w-16 text-muted-foreground group-hover:text-primary transition-rock" />
                    </div>
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      {photo.category}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-rock" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-rock text-lg font-bold">{photo.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-rock text-3xl md:text-4xl font-bold text-glow mb-4">
              Live Videos
            </h2>
            <p className="text-lg text-muted-foreground">
              Unsere besten Live-Performances auf YouTube
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
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
              </motion.div>
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
              Folgt uns für mehr Content!
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