import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BeamsBackground from "@/components/BeamsBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users, Music } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTextSplit, useParallax } from "@/hooks/useGSAP";
import { useState, useEffect } from "react";
import EventModal from "@/components/EventModal";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ClickSpark from "@/components/ui/click-spark";

type Visibility =
  | "öffentlich"
  | "privat"
  | "Festival"
  | "Dorffest"
  | "Geburtstag"
  | "Club"
  | "Bar"
  | "Vereinsfest"
  | "Firmenfeier"
  | "Open Air"
  | "Sonstiges";

interface Gig {
  date: string;
  title: string;
  venue: string;
  time: string;
  visibility: Visibility;
  description: string;
  flyerImage?: string;
}
const Gigs = () => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Gig | null>(null);
  const location = useLocation();

  // GSAP Animations
  useTextSplit(".text-split-gigs", 0.3);
  useParallax(".parallax-gigs", 0.3);

  // Scroll to hash element on page load
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  const handleEventClick = (event: Gig) => {
    setSelectedEvent(event);
    setIsEventModalOpen(true);
  };

  const upcomingGigs: Gig[] = [
    {
      date: "16. Januar 2026",
      title: "Rock in Bouch",
      venue: "Gasthaus Reis, Mendorferbuch",
      time: "20:00 Uhr",
      visibility: "öffentlich",
      description: "Ein Abend voller Rock-Klassiker in uriger Atmosphäre. Mit unseren Freunden von Mary Eg.",
      flyerImage: "/images/gigs/rock_in_bouch.jpg",
    },
    {
      date: "25. April 2026",
      title: "Rock im Stodl",
      venue: "Gasthaus Reis, Mendorferbuch",
      time: "21:00 Uhr",
      visibility: "öffentlich",
      description: "Frühlingserwachen mit den besten Punk-, Rock- und Metal-Hits.",
      flyerImage: "/images/gigs/rock-im-stodl.jpg",
    },
    {
      date: "24. Mai 2026",
      title: "Sandlochfest",
      venue: "Ehenfeld",
      time: "21:00 Uhr",
      visibility: "Dorffest",
      description: "Abrissparty in idyllischer Umgebung.",
      flyerImage: "/images/gigs/",
    },
  ];

  const referenzen = [
    {
      quote: "Ein riesiges Geburtstags-Festival mit vielen coolen Bands und ausgelassener Stimmung.",
      name: "Das Event Lauterhofen 2025",
      designation: "Open Air Bühne",
      src: "/images/referenzen/2025-das-event-lauterhofen.webp",
    },
    {
      quote: "Top Stimmung und super Leute! Wir glauben ihr hättet ewig weiter feiern können :D",
      name: "2*40. Geburtstagsfeier in Altenricht 2024",
      designation: "Private Feier",
      src: "/images/referenzen/2024-2x40-geburtstag-altenricht.webp",
    },
    {
      quote: "40 Jahre auf dem Tacho – und noch kein bisschen Rost! ;)",
      name: "40. Geburtstag Ehenfeld 2024",
      designation: "Private Feier",
      src: "/images/referenzen/2024-40-geburtstag-ehenfeld.webp",
    },
    {
      quote: "LAAAAUDAAAA!!! Irre, besser kann man's nicht beschreiben.",
      name: "Sandlochfest Ehenfeld 2023",
      designation: "Öffentliche Veranstaltung",
      src: "/images/referenzen/2023-sandlochfest-ehenfeld.webp",
    },
    {
      quote: "An Tagen wie diesen...    Danke fürs Mitrocken!",
      name: "Geburtstagsfeier Hohenburg 2023",
      designation: "Private Feier",
      src: "/images/referenzen/2023-geburtstag-hohenburg.webp",
    },
    {
      quote: "Rock Warrior's und Headbanger's of the World!!",
      name: "Rock in Bouch 2019",
      designation: "Öffentliche Veranstaltung",
      src: "/images/referenzen/2019_rock-in-bouch.webp",
    },
    {
      quote: "Es war uns eine Ehre - THE B.U.T.T.",
      name: "40. Geburtstag Hohenburg 2019",
      designation: "Private Feier",
      src: "/images/referenzen/2019-40-geburtstag-hohenburg.webp",
    },
    {
      quote: "Rock am LKW mit den Buam vom Lautrachtal!",
      name: "Rock am LKW, TuS Hohenburg 2014",
      designation: "Öffentliche Veranstaltung",
      src: "/images/referenzen/2014-rock-am-lkw-tus-hohenburg.webp",
    },
    {
      quote: "Wahnsinns Ambiente auf der alten Schweppermannsburg - unvergessliches Fest!",
      name: "Over the Hills Festival Pfaffenhofen 2014",
      designation: "Festival",
      src: "/images/referenzen/2014-over-the-hills-pfaffenhofen.webp",
    },
    {
      quote: "Rockabend beim 125 Jahre Fest der FFW Mendorferbuch.",
      name: "FFW-Fest Mendorferbuch 2013",
      designation: "Öffentliche Veranstaltung",
      src: "/images/referenzen/2013-ffw-fest-mendorferbuch.webp",
    },
    {
      quote: "Aus dem Fußballtrikot ins Bandshirt geschlüpft und die ganze Nacht abgeockt!",
      name: "Pink Panther Hiatberg 2011",
      designation: "Club/Bar",
      src: "/images/referenzen/2011-pink-panther-hiatberg.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-rock-gradient relative">
      <div className="fixed inset-0 z-0">
        <BeamsBackground />
      </div>
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 bg-background/30">
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
              Hier findet ihr alle unsere kommenden Auftritte. Kommt vorbei und erlebt Rock-Musik live und laut!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Gigs */}
      <section className="relative z-10 py-20 bg-background/30">
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

<div className="space-y-8 max-w-4xl mx-auto cursor-pointer">
  {upcomingGigs.map((gig, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="cursor-pointer"
    >
      <Card
        onClick={() => handleEventClick(gig)}
        className="
          bg-card border-border shadow-rock
          transition-rock hover-rock
          cursor-pointer select-none
        "
      >
        <CardContent className="p-8 cursor-pointer">
          <div className="grid md:grid-cols-3 gap-6 items-center cursor-pointer">
            {/* LINKER BEREICH */}
            <div className="md:col-span-2 cursor-pointer">
              <div className="flex items-center space-x-2 text-primary mb-3 cursor-pointer">
                <Calendar className="h-5 w-5 cursor-pointer" />
                <span className="font-rock font-bold text-lg cursor-pointer">
                  {gig.date}
                </span>
              </div>

              <h3 className="font-rock text-2xl font-bold mb-2 cursor-pointer">
                {gig.title}
              </h3>

<div className="space-y-2 text-muted-foreground mb-4 cursor-pointer">
  <div className="flex items-center space-x-2">
    <MapPin className="h-4 w-4" />
    <span>{gig.venue}</span>
  </div>

  <div className="flex items-center space-x-2">
    <Clock className="h-4 w-4" />
    <span>{gig.time}</span>
  </div>

  <div className="flex items-center space-x-2">
    <Users className="h-4 w-4" />
    <span className="capitalize">{gig.visibility}</span>
  </div>
</div>

<p className="text-muted-foreground cursor-pointer">
  {gig.description}
</p>

            </div>

            {/* RECHTER INFO-BLOCK */}
            <div className="text-center cursor-pointer">
              <div className="
                bg-primary/10 rounded-lg p-6
                border border-primary/20
                cursor-pointer
              ">
                <Users className="h-12 w-12 text-primary mx-auto mb-3 cursor-pointer" />
                <p className="font-rock font-semibold text-primary cursor-pointer">
                  Live Performance
                </p>
                <p className="text-sm text-muted-foreground mt-2 cursor-pointer">
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

      {/* Referenzen Section */}
      <section id="referenzen" className="relative z-10 py-20 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-rock text-3xl md:text-4xl font-bold text-glow mb-4">Referenzen</h2>
            <p className="text-lg text-muted-foreground">Auszug unserer vergangenen Events und Auftritte</p>
          </div>

          <AnimatedTestimonials testimonials={referenzen} autoplay={false} />
        </div>
      </section>

      {/* Booking Info */}
      <section className="relative z-10 py-20 bg-rock-lighter/60">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center bg-card border border-border rounded-lg p-8 shadow-rock"
          >
            <h2 className="font-rock text-3xl font-bold text-glow mb-6">Bucht uns für eure Veranstaltung!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Wir spielen gerne auf Geburtstagen, Feuerwehrfesten & Festivals!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-rock font-bold mb-2">Private Feiern</h3>
                <p className="text-sm text-muted-foreground">Geburtstage, Jubiläen</p>
              </div>
              <div className="text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-rock font-bold mb-2">Vereinsfeste</h3>
                <p className="text-sm text-muted-foreground">Feuerwehrfeste, Dorffeste, Vereinsjubiläen</p>
              </div>
              <div className="text-center">
                <Music className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-rock font-bold mb-2">Festivals</h3>
                <p className="text-sm text-muted-foreground">Open-Air Events, Bars, Festivals</p>
              </div>
            </div>
            <Link to="/kontakt">
              <ClickSpark sparkColor="#4079ff" sparkSize={12} sparkRadius={25} sparkCount={10} duration={500}>
                <Button size="lg" className="btn-rock rounded-full">Jetzt Anfrage stellen</Button>
              </ClickSpark>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>

      {selectedEvent && (
        <EventModal
          isOpen={isEventModalOpen}
          onClose={() => setIsEventModalOpen(false)}
          title={selectedEvent.title}
          date={selectedEvent.date}
          location={selectedEvent.venue}
          description={selectedEvent.description || "Freut euch auf einen unvergesslichen Abend voller Rock-Musik!"}
          flyerImage={selectedEvent.flyerImage || "/images/default-flyer.jpg"} // Fallback optional
        />
      )}
    </div>
  );
};

export default Gigs;
