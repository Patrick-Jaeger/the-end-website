import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Guitar, Mic, Music } from "lucide-react";
import { useTextSplit, useParallax } from "@/hooks/useGSAP";
import BandCarousel from "@/components/BandCarousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const Band = () => {
  const [isGroupPhotoOpen, setIsGroupPhotoOpen] = useState(false);

  // GSAP Animations
  useTextSplit(".text-split-band", 0.4);
  useParallax(".parallax-band", 0.25);

  const bandMembers = [
    {
      name: "Thomas",
      instrument: "Gitarre & Backing Vocals",
      description:
        "Von klassischen Rock-Sounds bis zu modernen Synthie-Parts - Thomas vervollständigt unseren Sound.",
      icon: Guitar,
    },
    {
      name: "David",
      instrument: "Bass",
      description:
        "Das rhythmische Fundament der Band. David sorgt für den treibenden Groove in jedem Song.",
      icon: Music,
    },
    {
      name: "Martin",
      instrument: "Techniker",
      description:
        "Als unser technisches Mastermind sorgt Martin dafür, dass Sound und Licht immer perfekt sitzen – unsichtbar, aber unverzichtbar.",
      icon: Music,
    },
    {
      name: "Lukas",
      instrument: "Lead Gitarre",
      description:
        "Mit über 10 Jahren Bühnenerfahrung bringt Lukas die Energie und die Riffs, die jeder Rock-Song braucht.",
      icon: Guitar,
    },
    {
      name: "Patrick",
      instrument: "Schlagzeug",
      description:
        "Der kraftvolle Heartbeat der Band. Patrick hält den Takt und sorgt für explosive Drum-Fills.",
      icon: Music,
    },
    {
      name: "Sebastian",
      instrument: "Vocals",
      description:
        "Mit seiner kraftvollen Stimme und Bühnenpräsenz bringt Sebastian jede Show zum Kochen und zieht das Publikum in seinen Bann.",
      icon: Mic,
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
            <h1 className="font-rock text-4xl md:text-6xl font-bold text-glow mb-6 text-split-band">
              Die Band
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sechs Freunde, eine Leidenschaft: Bock auf Rock-Musik.
            </p>
          </motion.div>

          {/* Band Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8 shadow-rock mb-16"
          >
            <h2 className="font-rock text-2xl font-bold text-primary mb-6">
              Our Journey
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  Alles begann in einem Keller in Mendorferbuch – dort haben wir die ersten Akkorde gespielt und die ersten Pläne geschmiedet.
                </p>
                <p className="text-muted-foreground mb-4">
                  Seit 2007 proben wir in Allertshofen, unserem musikalischen Zuhause,
                  wo wir unseren eigenen Sound erarbeitet haben, gemeinsam weiterwachsen und jede Menge unvergessliche Momente erleben.
                </p>
                <p className="text-muted-foreground mb-4">
                  Von den rebellischen Klängen der Punk-Ära über epische Rock-Hymnen
                  bis hin zu den härtesten Metal-Anthems – wir decken das ganze Spektrum ab,
                  aber im Mittelpunkt steht für uns immer eins: 
                </p>
                <p className="text-muted-foreground mb-4">
                  Der Spaß am Spielen.
                  Die Energie auf der Bühne und die Verbindung zum Publikum sind das, was uns antreibt.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  Ein besonderer Dank gilt allen, die uns auf unserem Weg begleiten – unseren treuen Fans, Helfern und Unterstützern.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ganz besonders möchten wir die Mini Mäuse Mendorferbuch, unsere Freunde von B.U.T.T., mit deren Anlage wir damals immer spielen durften, sowie Rudi Jung hervorheben.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ebenso danken wir herzlich für die kostenlose Nutzung unseres Bandraums und den Lagerplatz für unser Equipment.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ohne euch wäre diese Reise nur halb so laut, wild und großartig!
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="#the-crew" className="text-center group cursor-pointer hover:scale-105 transition-transform select-none">
                <div className="text-3xl font-bold text-primary group-hover:text-primary/80 cursor-pointer">6</div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors cursor-pointer">Band-Mitglieder</div>
              </a>
              <Link to="/repertoire" className="text-center group cursor-pointer hover:scale-105 transition-transform select-none">
                <div className="text-3xl font-bold text-primary group-hover:text-primary/80 cursor-pointer">70+</div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors cursor-pointer">Songs im Repertoire</div>
              </Link>
              <Link to="/gigs#referenzen" className="text-center group cursor-pointer hover:scale-105 transition-transform select-none">
                <div className="text-3xl font-bold text-primary group-hover:text-primary/80 cursor-pointer">15+</div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors cursor-pointer">Jahre Banderfahrung</div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Band Members */}
      <section id="the-crew" className="py-20 bg-rock-lighter scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-rock text-3xl md:text-4xl font-bold text-center text-glow mb-16"
          >
            The Crew
          </motion.h2>

          <BandCarousel
            members={bandMembers.map((member) => ({
              name: member.name,
              role: member.instrument,
              image: `/images/band/${member.name.toLowerCase()}.webp`,
              description: member.description,
            }))}
          />
        </div>
      </section>

      {/* Group Photo Section */}
      <section className="relative bg-background py-32">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center bg-background/80 backdrop-blur-md rounded-lg p-8"
          >
            <h2 className="font-rock text-3xl font-bold text-glow mb-8">
              Die Band im Bild
            </h2>

            <div className="flex justify-center">
              <img
                src="/images/band/Gruppenfoto.webp"
                alt="Gruppenfoto der Band"
                className="max-w-full h-auto max-h-[90vh] cursor-pointer rounded-lg hover:ring-4 hover:ring-primary transition-all"
                onClick={() => setIsGroupPhotoOpen(true)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Group Photo Modal */}
      <Dialog open={isGroupPhotoOpen} onOpenChange={setIsGroupPhotoOpen}>
        <DialogContent className="max-w-full max-h-full md:max-w-[95vw] md:max-h-[95vh] w-full h-full md:w-auto md:h-auto p-0 md:p-2 bg-black/95 border-0 md:border border-border flex items-center justify-center">
          <img
            src="/images/band/Gruppenfoto.webp"
            alt="Gruppenfoto vergrößert"
            className="w-full h-full md:w-auto md:h-auto object-contain md:max-h-[90vh]"
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Band;
