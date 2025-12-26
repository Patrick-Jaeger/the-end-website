import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Music, Users } from "lucide-react";
import { useTextSplit, useParallax, useCardWiggle } from "@/hooks/useGSAP";
import { useState } from "react";
import EventModal from "@/components/EventModal";
import { StarBorder } from "@/components/ui/star-border";
import ElectricBorder from "@/components/ui/ElectricBorder";
import ClickSpark from "@/components/ui/click-spark";

const Index = () => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  // GSAP hooks
  useTextSplit(".text-split-home", 0.3);
  useParallax(".parallax-home", 0.2);
  useCardWiggle(".card-wiggle");

  /**
   * Click-Handler für die Event-Karte
   * (öffnet das Modal, außer bei Klick auf Button oder Link)
   */
  const handleEventCardClick = (e: React.MouseEvent) => {
    if (
      (e.target as HTMLElement).closest("button") ||
      (e.target as HTMLElement).closest("a")
    ) {
      return;
    }
    setIsEventModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-rock-gradient">
      <Navigation />
      <Hero />

      {/* Highlight Section */}
      <section className="py-20 bg-gradient-to-b from-background to-rock-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-rock text-3xl md:text-4xl font-bold text-glow mb-4 text-split-home">
              Nächstes Highlight
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Erlebt uns live bei unserem nächsten Auftritt
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <ElectricBorder
              color="#4079ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div
                className="bg-card rounded-lg p-8 cursor-pointer hover:shadow-glow hover:animate-glow transition-all duration-300"
                onClick={handleEventCardClick}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-2 text-primary mb-4">
                      <Calendar className="h-5 w-5" />
                      <span className="font-rock font-semibold">
                        16. Januar 2026
                      </span>
                    </div>

                    <h3 className="font-rock text-2xl font-bold mb-2">
                      Rock in Bouch
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      Mendorferbuch, Gasthaus Reis
                    </p>

                    <p className="mb-6">
                      Freut euch auf einen Abend voller Rock-Klassiker!
                      <br></br>
                      Mit unseren Freunden von Mary Eg.
                    </p>

                    <Link to="/gigs">
                      <ClickSpark
                        sparkColor="#4079ff"
                        sparkSize={12}
                        sparkRadius={25}
                        sparkCount={10}
                        duration={500}
                      >
                        <StarBorder as="div" color="hsl(var(--primary))">
                          Alle Termine anzeigen
                        </StarBorder>
                      </ClickSpark>
                    </Link>
                  </div>

                  <div className="bg-secondary rounded-lg p-6 text-center">
                    <Music className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h4 className="font-rock text-xl font-bold mb-2">
                      Live Performance
                    </h4>
                    <p className="text-muted-foreground">
                      Energie pur und authentische Covers
                    </p>
                  </div>
                </div>
              </div>
            </ElectricBorder>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Die Band Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <div className="card-wiggle bg-card rounded-lg p-8 text-center hover:shadow-glow hover:animate-glow transition-all duration-300 h-full flex flex-col">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-rock text-xl font-bold mb-2">Die Band</h3>
                <p className="text-muted-foreground mb-6">
                  Lerne die Gesichter hinter der Musik kennen
                </p>
                <Link to="/band" className="mt-auto">
                  <ClickSpark sparkColor="#4079ff" sparkSize={12} sparkRadius={25} sparkCount={10} duration={500}>
                    <StarBorder as="div" color="hsl(var(--primary))">
                      Mehr erfahren
                    </StarBorder>
                  </ClickSpark>
                </Link>
              </div>
            </motion.div>

            {/* Repertoire Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="card-wiggle bg-card rounded-lg p-8 text-center hover:shadow-glow hover:animate-glow transition-all duration-300 h-full flex flex-col">
                <Music className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-rock text-xl font-bold mb-2">Repertoire</h3>
                <p className="text-muted-foreground mb-6">
                  Entdecke unsere Song-Auswahl
                </p>
                <Link to="/repertoire" className="mt-auto">
                  <ClickSpark sparkColor="#4079ff" sparkSize={12} sparkRadius={25} sparkCount={10} duration={500}>
                    <StarBorder as="div" color="hsl(var(--primary))">
                      Songs entdecken
                    </StarBorder>
                  </ClickSpark>
                </Link>
              </div>
            </motion.div>

            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-wiggle bg-card rounded-lg p-8 text-center hover:shadow-glow hover:animate-glow transition-all duration-300 h-full flex flex-col">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-rock text-xl font-bold mb-2">Booking</h3>
                <p className="text-muted-foreground mb-6">
                  Buche uns für dein Event
                </p>
                <Link to="/kontakt" className="mt-auto">
                  <ClickSpark sparkColor="#4079ff" sparkSize={12} sparkRadius={25} sparkCount={10} duration={500}>
                    <StarBorder as="div" color="hsl(var(--primary))">
                      Jetzt anfragen
                    </StarBorder>
                  </ClickSpark>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Event Modal */}
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        title="Rock in Bouch"
        date="16. Januar 2026"
        location="Mendorferbuch, Gasthaus Reis"
        description="Freut euch auf einen Abend voller Rock-Klassiker! <br><br> Mit unseren Freunden von Mary Eg."
        flyerImage="/images/gigs/rock_in_bouch.jpg"
      />
    </div>
  );
};

export default Index;
