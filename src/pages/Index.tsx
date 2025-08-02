import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Music, Users } from "lucide-react";
import { useTextSplit, useParallax } from "@/hooks/useGSAP";
import { useState } from "react";
import EventModal from "@/components/EventModal";

const Index = () => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  
  // GSAP Animations
  useTextSplit('.text-split-home', 0.3);
  useParallax('.parallax-home', 0.2);

  const handleEventCardClick = (e: React.MouseEvent) => {
    // Don't open modal if button was clicked
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) {
      return;
    }
    setIsEventModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-rock-gradient">
      <Navigation />
      
      {/* Hero Section */}
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
            className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8 shadow-rock cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={handleEventCardClick}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 text-primary mb-4">
                  <Calendar className="h-5 w-5" />
                  <span className="font-rock font-semibold">09. Januar 2026</span>
                </div>
                <h3 className="font-rock text-2xl font-bold mb-2">
                  Rock in Bouch
                </h3>
                <p className="text-muted-foreground mb-4">
                  Mendorferbuch, Gasthaus Reis
                </p>
                <p className="mb-6">
                  Freut euch auf einen Abend voller Rock-Klassiker! 
                  Von Green Day bis hin zu Metallica - 
                  wir bringen die größten Hits live auf die Bühne.
                </p>
                <Link to="/gigs">
                  <Button className="btn-rock">
                    Alle Termine anzeigen
                  </Button>
                </Link>
              </div>
              
              <div className="bg-secondary rounded-lg p-6 text-center">
                <Music className="h-16 w-16 text-primary mx-auto mb-4" />
                <h4 className="font-rock text-xl font-bold mb-2">
                  Live Performance
                </h4>
                <p className="text-muted-foreground">
                  Energie pur und authentische Covers eurer Lieblings-Songs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group"
            >
              <div className="bg-card rounded-lg p-8 border border-border shadow-rock transition-rock hover-rock">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-rock text-xl font-bold mb-2">Die Band</h3>
                <p className="text-muted-foreground mb-4">
                  Lernt die Musiker hinter den Covers kennen
                </p>
                <Link to="/band">
                  <Button variant="outline" className="btn-outline-rock">
                    Mehr erfahren
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
            >
              <div className="bg-card rounded-lg p-8 border border-border shadow-rock transition-rock hover-rock">
                <Music className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-rock text-xl font-bold mb-2">Repertoire</h3>
                <p className="text-muted-foreground mb-4">
                  Entdeckt unsere komplette Setlist
                </p>
                <Link to="/repertoire">
                  <Button variant="outline" className="btn-outline-rock">
                    Songs ansehen
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group"
            >
              <div className="bg-card rounded-lg p-8 border border-border shadow-rock transition-rock hover-rock">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-rock text-xl font-bold mb-2">Booking</h3>
                <p className="text-muted-foreground mb-4">
                  Bucht uns für eure Veranstaltung
                </p>
                <Link to="/kontakt">
                  <Button variant="outline" className="btn-outline-rock">
                    Kontakt aufnehmen
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        title="Rock in Bouch"
        date="09. Januar 2026"
        location="Mendorferbuch, Gasthaus Reis"
        description="Freut euch auf einen Abend voller Rock-Klassiker! Von Green Day bis hin zu Metallica - wir bringen die größten Hits live auf die Bühne. Ein unvergesslicher Abend mit authentischen Covers eurer Lieblings-Songs wartet auf euch!"
        flyerImage="/images/rock-in-bouch-flyer.jpg"
      />
    </div>
  );
};

export default Index;
