import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Guitar, Mic, Music } from "lucide-react";
import { useTextSplit, useParallax, useFlyInEffect, useCardWiggle } from "@/hooks/useGSAP";

const Band = () => {
  // GSAP Animations
  useTextSplit('.text-split-band', 0.4);
  useParallax('.parallax-band', 0.25);
  useFlyInEffect('.fly-in-band', 'bottom');
  useCardWiggle('.wiggle-band-card');

  const bandMembers = [
    {
      name: "Sebastian Delling",
      instrument: "Vocals",
      description: "Mit seiner kraftvollen Stimme und Bühnenpräsenz bringt Sebastian jede Show zum Kochen und zieht das Publikum in seinen Bann.",
      icon: Mic
    },
    {
      name: "Lukas Ried",
      instrument: "Lead Gitarre",
      description: "Mit über 10 Jahren Bühnenerfahrung bringt Lukas die Energie und die Riffs, die jeder Rock-Song braucht.",
      icon: Guitar
    },
    {
      name: "David Wood",
      instrument: "Bass", 
      description: "Das rhythmische Fundament der Band. David sorgt für den treibenden Groove in jedem Song.",
      icon: Music
    },
    {
      name: "Patrick Jäger",
      instrument: "Schlagzeug",
      description: "Der kraftvolle Heartbeat der Band. Patrick hält den Takt und sorgt für explosive Drum-Fills.",
      icon: Music
    },
    {
      name: "Thomas Gründemann",
      instrument: "Gitarre & Backing Vocals",
      description: "Von klassischen Rock-Sounds bis zu modernen Synthie-Parts - Thomas vervollständigt unseren Sound.",
      icon: Guitar
    },
    {
      name: "Martin Delling",
      instrument: "Techniker",
      description: "Als unser technisches Mastermind sorgt Martin dafür, dass Sound und Licht immer perfekt sitzen – unsichtbar, aber unverzichtbar.",
      icon: Music
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
            <h1 className="font-rock text-4xl md:text-6xl font-bold text-glow mb-6 text-split-band">
              Die Band
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sechs Freunde, eine Leidenschaft: Rock-Musik in ihrer reinsten Form. 
              Wir leben für die Energie der Bühne und die Verbindung zu unserem Publikum.
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
                  Gegründet aus der gemeinsamen Leidenschaft für zeitlosen Punk, Rock und Metal, 
                  haben wir uns zum Ziel gesetzt, die größten Hits der Rockgeschichte 
                  authentisch und energiegeladen zu interpretieren.
                </p>
                <p className="text-muted-foreground mb-4">
                  Von den rebellischen Klängen der Punk-Ära über die epischen Balladen 
                  des Classic Rock bis hin zu den härtesten Metal-Anthems - 
                  wir decken das gesamte Spektrum ab.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  Unser Stil ist geprägt von Authentizität und Respekt vor den Originalen, 
                  während wir gleichzeitig unsere eigene Energie und Interpretation einbringen.
                </p>
                <p className="text-muted-foreground">
                  Jeder Auftritt ist für uns eine Celebration der Rockmusik - 
                  laut, ehrlich und mit vollem Herzen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Band Members */}
      <section className="py-20 bg-rock-lighter">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bandMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border shadow-rock transition-rock hover-rock h-full wiggle-band-card fly-in-band">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <member.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-rock text-xl font-bold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      {member.instrument}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Photo Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-rock text-3xl font-bold text-glow mb-8">
              Die Band im Bild
            </h2>
            
            {/* Placeholder for group photo */}
            <div className="bg-secondary rounded-lg p-16 mb-8 border border-border">
              <div className="text-center">
                <Music className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">
                  Gruppenfoto der Band
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Live-Aufnahme vom letzten Konzert
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Band;