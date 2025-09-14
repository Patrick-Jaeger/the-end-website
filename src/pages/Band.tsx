import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BandCarousel from "@/components/BandCarousel";
import BeamsBackground from "@/components/BeamsBackground"; 
import { Music, Guitar, Mic } from "lucide-react";



const Band = () => {
  // Beispiel Band-Mitglieder
  const bandMembers = [
    { name: "Thomas Gründemann", instrument: "Gitarre & Backing Vocals", description: "...", icon: Guitar },
    { name: "David Wood", instrument: "Bass", description: "...", icon: Music },
    { name: "Martin Delling", instrument: "Techniker", description: "...", icon: Music },
    { name: "Lukas Ried", instrument: "Lead Gitarre", description: "...", icon: Guitar },
    { name: "Patrick Jäger", instrument: "Schlagzeug", description: "...", icon: Music },
    { name: "Sebastian Delling", instrument: "Vocals", description: "...", icon: Mic },
  ];

  return (
    <div className="relative">
      {/* Navigation */}
      <Navigation />

      {/* Beams Background */}
      <BeamsBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-rock text-4xl md:text-6xl font-bold text-glow mb-6"
          >
            Die Band
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Sechs Freunde, eine Leidenschaft: Rock-Musik in ihrer reinsten Form.
            Wir leben für die Energie der Bühne und die Verbindung zu unserem Publikum.
          </motion.p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="relative z-10 py-20 bg-background/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8 shadow-rock relative z-10"
          >
            <h2 className="font-rock text-2xl font-bold text-primary mb-6">Our Journey</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  Gegründet aus der gemeinsamen Leidenschaft für zeitlosen Punk, Rock und Metal, 
                  haben wir uns zum Ziel gesetzt, die größten Hits der Rockgeschichte authentisch und energiegeladen zu interpretieren.
                </p>
                <p className="text-muted-foreground mb-4">
                  Von den rebellischen Klängen der Punk-Ära über epische Rock Hymnen bis hin zu den härtesten Metal-Anthems - wir decken das gesamte Spektrum ab und spielen, was das Publikum zum Feiern bringt.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  Authentisch und immer mit vollem Einsatz. Unser Stil ist geprägt von Respekt vor den Originalen,
                  während wir gleichzeitig unsere eigene Energie und Interpretation einbringen.
                </p>
                <p className="text-muted-foreground">
                  Jeder Auftritt ist für uns eine Celebration der Rockmusik - laut, ehrlich und mit ganzem Herzen.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-muted-foreground">Band-Mitglieder</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">70+</div>
                <div className="text-muted-foreground">Songs im Repertoire</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-muted-foreground">Jahre Banderfahrung</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Band Members */}
      <section className="relative z-10 py-20 bg-rock-lighter">
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

          <BandCarousel members={bandMembers.map(member => ({
            name: member.name,
            role: member.instrument,
            image: "/placeholder.svg",
            description: member.description
          }))} />
        </div>
      </section>

      {/* Group Photo Section */}
      <section className="relative z-10 py-32 bg-background overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <iframe
            src="https://my.spline.design/embers-qRRVF9jO002fkB1KZvsr2ozN/"
            frameBorder="0"
            width="100%"
            height="100%"
            loading="lazy"
            className="w-full h-[120%] transform scale-[1.5] translate-x-16 -translate-y-28 pointer-events-auto will-change-transform"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center bg-background/80 backdrop-blur-md rounded-lg p-8"
          >
            <h2 className="font-rock text-3xl font-bold text-glow mb-8">Die Band im Bild</h2>

            <div className="bg-secondary rounded-lg p-16 border border-border">
              <div className="text-center">
                <Music className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">Gruppenfoto der Band</p>
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
