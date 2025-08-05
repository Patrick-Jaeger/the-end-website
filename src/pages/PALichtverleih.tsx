import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Volume2, Lightbulb, Music, Mic, Settings, Send, Zap, Cable } from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useState } from "react";

const PALichtverleih = () => {
  const [date, setDate] = useState<Date>();

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
              PA- & Lichtverleih
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professionelle PA- und Lichttechnik für Events aller Größenordnungen. 
              Von kleinen Acoustic-Sets bis zu großen Festival-Bühnen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PA Equipment */}
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
              Musikanlage für
            </h2>
            <p className="text-lg text-muted-foreground">
              Professionelle Beschallung für jede Veranstaltungsgröße
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border shadow-rock">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-rock text-xl font-bold mb-3">Kleine Feste</h3>
                <p className="text-2xl font-bold text-primary mb-2">bis 20 Leute</p>
                <p className="text-sm text-muted-foreground">
                  Kompakte Musikanlage für kuschelige Veranstaltungen und kleine Feiern
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-rock">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-rock text-xl font-bold mb-3">Mittlere Feste</h3>
                <p className="text-2xl font-bold text-primary mb-2">bis 50 Leute</p>
                <p className="text-sm text-muted-foreground">
                  Erweiterte Beschallungsanlage für Dorffeste und mittelgroße Events
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-rock">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-rock text-xl font-bold mb-3">Große Feste</h3>
                <p className="text-2xl font-bold text-primary mb-2">bis 150 Leute</p>
                <p className="text-sm text-muted-foreground">
                  Professionelle PA-Anlage für große Veranstaltungen und Festivals
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border shadow-rock">
            <CardContent className="p-6 text-center">
              <h3 className="font-rock text-xl font-bold mb-4">Alternative mit Tablet und Spotify Premium</h3>
              <p className="text-muted-foreground">
                Für Veranstaltungen ohne Live-Musik bieten wir auch Beschallung mit 
                Tablet und Spotify Premium - perfekt für Hintergrundmusik bei Feiern.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lichttechnik */}
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
              Lichttechnik
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unsere Lichter sind energiesparsam und können per DMX und automatisch über die Musik gesteuert werden
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border shadow-rock">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-rock text-xl font-bold mb-3">LED Scheinwerfer einzeln</h3>
                <p className="text-sm text-muted-foreground">
                  Perfekt für indirekte Beleuchtung und Akzentlicht
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-rock">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-rock text-base md:text-lg lg:text-xl font-bold mb-3 leading-tight break-words">LED Scheinwerferleiste auf Ständer</h3>
                <p className="text-sm text-muted-foreground">
                  Je 4 Spots pro Leiste für flächige Beleuchtung
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-rock">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-rock text-xl font-bold mb-3">LED Moving Heads</h3>
                <p className="text-sm text-muted-foreground">
                  Bewegliche Scheinwerfer für dynamische Lichteffekte
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zusätzliches Equipment */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <Card className="bg-card border-border shadow-rock max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="font-rock text-2xl font-bold text-glow mb-6">
                Zusätzliches Equipment
              </h2>
              <p className="text-lg mb-6">
                Du willst eine Rede bei dem nächsten Fest halten? 
              </p>
              <p className="text-lg mb-6">
                Ihr brauchst eine Nebelmaschine für die nächste Feuerwehr Atemschutzübung?
              </p>
              <p className="text-lg mb-6">
                Ihr wollte eure Gstanzeln bei der nächsten Kirwa durch ein Microfon schmettern?
              </p>
              <p className="text-primary font-semibold mb-4">
                → Wir liefern auch zusätzliches Equipment wie Kabel, Mikros, Nebelmaschinen.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center justify-center space-x-2">
                  <Mic className="h-5 w-5 text-primary" />
                  <span className="text-sm">Mikrofone</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Cable className="h-5 w-5 text-primary" />
                  <span className="text-sm">Kabel</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <span className="text-sm">Nebelmaschinen</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-card border-border shadow-rock">
              <CardContent className="p-8">
                <h2 className="font-rock text-2xl font-bold text-center text-glow mb-6">
                  Anfrage stellen
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                  Schildert uns euer Event und wir erstellen euch ein individuelles Angebot.
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Euer Name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input id="email" type="email" placeholder="kontakt@example.com" className="mt-1" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="event-date">Event-Datum</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal mt-1",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP", { locale: de }) : <span>Datum auswählen</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="p-3 pointer-events-auto"
                            locale={de}
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label htmlFor="location">Veranstaltungsort</Label>
                      <Input id="location" placeholder="Ort der Veranstaltung" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="event-type">Art der Veranstaltung</Label>
                    <Input id="event-type" placeholder="z.B. Konzert, Hochzeit, Firmenevent" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="requirements">Anforderungen & Wünsche</Label>
                    <Textarea 
                      id="requirements" 
                      placeholder="Beschreibt euer Event: Anzahl Gäste, Bühne, spezielle Anforderungen..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-rock w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Anfrage senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PALichtverleih;
