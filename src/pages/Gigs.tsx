import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { useTextSplit, useParallax, useFlyInEffect, useCardWiggle } from "@/hooks/useGSAP";

const Gigs = () => {
  // GSAP Animations
  useTextSplit('.text-split-gigs', 0.3);
  useParallax('.parallax-gigs', 0.3);
  useFlyInEffect('.fly-in-gigs', 'left');
  useCardWiggle('.wiggle-gigs-card');

  const upcomingGigs = [
    {
      date: "09. Januar 2026",
      title: "Rock in Bouch",
      venue: "Gasthaus Reis, Mendorferbuch",
      time: "20:00 Uhr",
      description: "Ein Abend voller Rock-Klassiker in gemütlicher Atmosphäre."
    },
    {
      date: "25. April 2026", 
      title: "Rock im Stodl",
      venue: "Gasthaus Reis, Mendorferbuch",
      time: "21:00 Uhr", 
      description: "Frühlingserwachen mit den besten Rock- und Metal-Hits."
    }
  ];

  const pastShows = [
    {
      date: "05. Juli 2025",
      title: "Pink-Panther Fest - Accoustic",
      venue: "Hiatberg, Mendorferbuch"
    },
    {
      date: "07. Juni 2025",
      title: "Das Event",
      venue: "Open Air Bühne, Lauterhofen"
    },
    {
      date: "26. April 2025",
      title: "Rock im Stodl",
      venue: "Gasthaus Reis, Mendorferbuch"
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
            <h1 className="font-rock text-4xl md:text-6xl font-bold text-glow mb-6 text-split-gigs">
              Live Gigs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hier findet ihr alle unsere kommenden Auftritte. 
              Kommt vorbei und erlebt Rock-Musik live und laut!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Gigs */}
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
              Kommende Auftritte
            </h2>
            <p className="text-lg text-muted-foreground">
              Speichert euch die Termine - wir freuen uns auf euch!
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {upcomingGigs.map((gig, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border shadow-rock transition-rock hover-rock fly-in-gigs">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                      <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 text-primary mb-3">
                          <Calendar className="h-5 w-5" />
                          <span className="font-rock font-bold text-lg">{gig.date}</span>
                        </div>
                        
                        <h3 className="font-rock text-2xl font-bold mb-2">
                          {gig.title}
                        </h3>
                        
                        <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{gig.venue}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                          <Clock className="h-4 w-4" />
                          <span>{gig.time}</span>
                        </div>
                        
                        <p className="text-muted-foreground">
                          {gig.description}
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                          <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                          <p className="font-rock font-semibold text-primary">
                            Live Performance
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Freier Eintritt
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Shows */}
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
              Vergangene Shows
            </h2>
            <p className="text-lg text-muted-foreground">
              Ein Rückblick auf unsere letzten Auftritte
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pastShows.map((show, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border shadow-rock transition-rock hover-rock wiggle-gigs-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-sm text-primary font-semibold mb-2">
                      {show.date}
                    </div>
                    <h3 className="font-rock text-lg font-bold mb-2">
                      {show.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {show.venue}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center bg-card border border-border rounded-lg p-8 shadow-rock"
          >
            <h2 className="font-rock text-3xl font-bold text-glow mb-6">
              Bucht uns für eure Veranstaltung!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Wir spielen gerne auf Geburtstagen, Feuerwehrfesten & Festivals!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-rock font-bold mb-2">Private Feiern</h3>
                <p className="text-sm text-muted-foreground">
                  Geburtstage, Jubiläen
                </p>
              </div>
              <div className="text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-rock font-bold mb-2">Vereinsfeste</h3>
                <p className="text-sm text-muted-foreground">
                  Feuerwehrfeste, Dorffeste, Vereinsjubiläen
                </p>
              </div>
              <div className="text-center">
                <Music className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-rock font-bold mb-2">Festivals</h3>
                <p className="text-sm text-muted-foreground">
                  Open-Air Events, Bars, Festivals
                </p>
              </div>
            </div>
            <Link to="/kontakt">
              <Button size="lg" className="btn-rock">
                Jetzt Anfrage stellen
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gigs;