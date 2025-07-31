import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Volume2, Lightbulb, Music, Mic2, Settings, Send } from "lucide-react";

const PALichtverleih = () => {
  const equipment = [
    {
      category: "PA-Technik",
      icon: Volume2,
      items: [
        { name: "JBL EON615 Aktivboxen", description: "2x 1000W Peak, Bluetooth, DSP" },
        { name: "Yamaha MG16XU Mischpult", description: "16-Kanal Mixer mit USB/FX" },
        { name: "Shure SM58 Mikrofone", description: "Professionelle Gesangsmikrofone" },
        { name: "DI-Boxen", description: "Passive/Aktive Direct Injection" },
        { name: "Monitore", description: "Aktive Bühnenmonitore" }
      ]
    },
    {
      category: "Lichttechnik",
      icon: Lightbulb,
      items: [
        { name: "LED Moving Heads", description: "6x RGBW Moving Head Spots" },
        { name: "LED Pars", description: "12x RGB LED Par Strahler" },
        { name: "Lichteffekte", description: "Strobe, Laser, Nebelmaschine" },
        { name: "DMX Controller", description: "Professionelle Lichtsteuerung" },
        { name: "Truss System", description: "Aluminum Traversen-System" }
      ]
    },
    {
      category: "Zusätzliches Equipment",
      icon: Settings,
      items: [
        { name: "Verkabelung", description: "XLR, Klinke, DMX, Strom" },
        { name: "Mikrofonständer", description: "Gerade & Galgen-Ständer" },
        { name: "Boxenständer", description: "Stabile Lautsprecher-Stative" },
        { name: "Power Distribution", description: "CEE/Schuko Stromverteilung" },
        { name: "Transport & Aufbau", description: "Inklusive An-/Abbau Service" }
      ]
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

      {/* Equipment Overview */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-rock text-3xl md:text-4xl font-bold text-center text-glow mb-16"
          >
            Unser Equipment
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {equipment.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <Card className="bg-card border-border shadow-rock h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-rock text-xl font-bold">
                        {category.category}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="border-l-2 border-primary/30 pl-4">
                          <h4 className="font-semibold text-foreground mb-1">
                            {item.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-rock text-3xl font-bold text-center text-glow mb-12">
              Unsere Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-card border-border shadow-rock">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Music className="h-8 w-8 text-primary mr-3" />
                    <h3 className="font-rock text-xl font-bold">Full-Service</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Komplette Planung & Beratung</li>
                    <li>• Anlieferung & Aufbau</li>
                    <li>• Technische Betreuung vor Ort</li>
                    <li>• Abbau & Abtransport</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-rock">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mic2 className="h-8 w-8 text-primary mr-3" />
                    <h3 className="font-rock text-xl font-bold">Dry Hire</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Equipment-Verleih ohne Personal</li>
                    <li>• Flexible Abhol-/Bringservice</li>
                    <li>• Technische Einweisung</li>
                    <li>• 24/7 Support Hotline</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
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
                      <Input id="event-date" type="date" className="mt-1" />
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