import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Volume2, Lightbulb, Music, Mic, Settings, Send, Zap, Cable } from "lucide-react";
import GradientText from "@/components/ui/GradientText";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useTextSplit } from "@/hooks/useGSAP";
import LightRays from "@/components/ui/LightRays";
import { SuccessCheck } from "@/components/ui/spinner";
import { WaveLoader } from "@/components/ui/wave-loader";
import ClickSpark from "@/components/ui/click-spark";
import { useToast } from "@/hooks/use-toast";
import GroundFog from "@/components/ui/ground-fog";

const PALichtverleih = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    eventType: "",
    requirements: ""
  });
  const [buttonState, setButtonState] = useState<"initial" | "loading" | "success">("initial");
  
  // GSAP Animation
  useTextSplit('.text-split-pa', 0.3);

  return (
    <div className="min-h-screen bg-rock-gradient relative">
      {/* Light Rays Background Effect */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00e5ff"
          raysSpeed={2.2}
          lightSpread={0.55}
          rayLength={1.9}
          fadeDistance={1.35}
          saturation={1.35}
          pulsating={true}
          followMouse={true}
          mouseInfluence={0.22}
          noiseAmount={0.04}
          distortion={0.12}
        />
      </div>
      
      {/* Content Wrapper */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-rock text-4xl md:text-6xl font-bold text-glow mb-6 text-split-pa">
              PA- & Lichtverleih
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professionelle PA- und Lichttechnik für Events aller Größenordnungen. 
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von kleinen Geburtstagspartys bis hin zur Hochzeitsbeleuchtung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PA Equipment */}
      <section className="py-20 bg-background/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-rock text-3xl md:text-4xl font-bold text-glow mb-4">
              Musikanlage
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
      <section className="py-20 bg-background/10">
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
              Unsere Lichter sind energiesparsam und können automatisch über die Musik oder per DMX gesteuert gewerden.
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
                  Perfekt für indirekte Beleuchtung und Akzentlicht.
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
                  Je 4 Spots pro Leiste für flächige Beleuchtung.
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
                  Bewegliche Scheinwerfer für dynamische Lichteffekte.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zusätzliches Equipment */}
      <section className="py-20 bg-background/10">
        <div className="container mx-auto px-4">
          <Card className="bg-card border-border shadow-rock max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="font-rock text-2xl font-bold text-glow mb-6">
                Zusätzliches Equipment
              </h2>
              <p className="text-lg">
               - Du willst eine Rede bei dem nächsten Fest halten? 
              </p>
              <p className="text-lg">
               - Ihr brauchst eine Nebelmaschine für eure Feuerwehr Atemschutzübung?
              </p>
              <p className="text-lg mb-6">
               - Ihr wollt eure Gstanzeln beim austanzen durch ein Microfon schmettern?
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
      <section className="py-20 bg-background/10">
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
                  Schildert uns euer Event und wir stellen euch zusammen, was ihr braucht.
                </p>
                
                <form onSubmit={(e) => {
                  e.preventDefault();
                  if (buttonState !== "initial") return;
                  
                  setButtonState("loading");
                  
                  setTimeout(() => {
                    setButtonState("success");
                    toast({
                      title: "Anfrage gesendet!",
                      description: "Wir melden uns in Kürze bei Dir.",
                    });
                    
                    setTimeout(() => {
                      setButtonState("initial");
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        location: "",
                        eventType: "",
                        requirements: ""
                      });
                      setDate(undefined);
                    }, 2000);
                  }, 1500);
                }} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      label="Name *"
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Euer Name" 
                      className="mt-1" 
                    />
                    <Input 
                      label="E-Mail *"
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="kontakt@example.com" 
                      className="mt-1" 
                    />
                  </div>
                  
                  <Input 
                    label="Telefonnummer"
                    id="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="z.B. 0123 456789" 
                    className="mt-1" 
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
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
                    <Input 
                      label="Veranstaltungsort"
                      id="location" 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="Ort der Veranstaltung" 
                      className="mt-1" 
                    />
                  </div>
                  
                  <Input 
                    label="Art der Veranstaltung"
                    id="event-type" 
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                    placeholder="z.B. Konzert, Hochzeit, Firmenevent, Geburtstag, Feuerwehrfest,..." 
                    className="mt-1" 
                  />
                  
                  <Textarea 
                    label="Anforderungen & Wünsche"
                    id="requirements" 
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    placeholder="Beschreibt euer Event: Anzahl Gäste, Raumgröße, Bühne, spezielle Anforderungen..."
                    className="mt-1 min-h-[120px]"
                  />
                  
<ClickSpark sparkColor="#4079ff" sparkSize={12} sparkRadius={25} sparkCount={10} duration={500}>
  <button 
    type="submit" 
    disabled={buttonState !== "initial"}
    className="relative rounded-full border-2 border-primary p-[2px] w-full overflow-hidden disabled:opacity-70 cursor-pointer select-none"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shiny-text" />
    <div className="relative bg-background rounded-full px-6 py-3 flex items-center justify-center hover:bg-primary/5 transition-colors min-h-[52px] cursor-pointer">
      <AnimatePresence mode="wait">

        {buttonState === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center"
          >
            <WaveLoader />
            <span className="ml-2 font-medium">senden…</span>
          </motion.div>
        )}

        {buttonState === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center"
          >
            <div className="flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-emerald-500/15">
              <SuccessCheck className="w-4 h-4 text-emerald-500 pointer-events-none" />
            </div>
            <span className="text-emerald-500 font-bold">
              Anfrage gesendet
            </span>
          </motion.div>
        )}

        {buttonState === "initial" && (
          <motion.div
            key="initial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center"
          >
            <Send className="mr-2 h-5 w-5 text-primary pointer-events-none" />
            <GradientText
              colors={["#4079ff", "#ffffff", "#4079ff", "#ffffff", "#4079ff"]}
              animationSpeed={6}
              showBorder={false}
              className="text-base font-bold pointer-events-none"
            >
              Anfrage senden
            </GradientText>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  </button>
</ClickSpark>

                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
};

export default PALichtverleih;
