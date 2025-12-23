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
   * EIGENTLICHER Click-Handler
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

  /**
   * 🔥 ALIAS-FIX
   * Falls irgendwo noch handleCardClick verwendet wird
   */
  const handleCardClick = handleEventCardClick;

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
                onClick={handleCardClick}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-2 text-primary mb-4">
                      <Calendar className="h-5 w-5" />
                      <span className="font-rock font-semibold">
                        09. Januar 2026
                      </span>
                    </div>

                    <h3 className="font-rock text-2xl font-bold mb-2">
                      Rock in Bouch
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      Mendorferbuch, Gasthaus Reis
                    </p>

                    <p className="mb-6">
                      Freut euch auf einen Abend voller Rock-Klassiker! Von Green
                      Day bis Metallica – wir bringen die größten Hits live auf
                      die Bühne.
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

      <Footer />

      {/* Event Modal */}
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        title="Rock in Bouch"
        date="09. Januar 2026"
        location="Mendorferbuch, Gasthaus Reis"
        description="Freut euch auf einen Abend voller Rock-Klassiker! Von Green Day bis hin zu Metallica – wir bringen die größten Hits live auf die Bühne."
        flyerImage="/images/gigs/rock_in_bouch.jpg"
      />
    </div>
  );
};

export default Index;
