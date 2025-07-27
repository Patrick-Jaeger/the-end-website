import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Instagram, Facebook, Youtube, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns in Kürze bei euch zurück.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

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
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ihr wollt uns buchen oder habt Fragen? Schreibt uns! 
              Wir freuen uns auf eure Nachrichten und Booking-Anfragen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border shadow-rock">
                <CardContent className="p-8">
                  <h2 className="font-rock text-2xl font-bold text-glow mb-6">
                    Schreibt uns!
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-background border-border"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-background border-border"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Betreff</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="z.B. Booking-Anfrage, Allgemeine Frage..."
                        className="bg-background border-border"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Nachricht *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Erzählt uns von eurer Veranstaltung, stellt eure Fragen oder sendet uns euer Feedback..."
                        className="bg-background border-border"
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="btn-rock w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Nachricht senden
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-rock text-2xl font-bold text-glow mb-6">
                  Kontakt-Info
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-rock font-bold mb-1">E-Mail</h3>
                      <p className="text-muted-foreground">booking@rockband.de</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Für Booking-Anfragen und allgemeine Fragen
                      </p>
                    </div>
                  </div>


                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-rock font-bold mb-1">Region</h3>
                      <p className="text-muted-foreground">Bayern & Umgebung</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Hauptsächlich Süddeutschland
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-rock text-xl font-bold text-glow mb-4">
                  Social Media
                </h3>
                <p className="text-muted-foreground mb-6">
                  Folgt uns für Updates, Behind-the-Scenes Content und neue Videos!
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transition-rock hover-rock">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center transition-rock hover-rock">
                      <Facebook className="h-6 w-6 text-white" />
                    </div>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center transition-rock hover-rock">
                      <Youtube className="h-6 w-6 text-white" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Booking Info */}
              <Card className="bg-card border-border shadow-rock">
                <CardContent className="p-6">
                  <h3 className="font-rock text-lg font-bold text-primary mb-4">
                    Booking-Informationen
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Mindestbühnengröße: 4x3 Meter</li>
                    <li>• Stromanschluss: 16A CEE erforderlich</li>
                    <li>• Aufbauzeit: ca. 2 Stunden</li>
                    <li>• Set-Dauer: 45-90 Minuten (flexibel)</li>
                    <li>• Umkreis: 100km kostenfrei</li>
                  </ul>
                  <Button className="btn-outline-rock mt-4 w-full">
                    Technical Rider anfordern
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-rock text-3xl md:text-4xl font-bold text-glow mb-12">
              Häufige Fragen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="bg-card border-border shadow-rock">
                <CardContent className="p-6">
                  <h3 className="font-rock text-lg font-bold mb-3">
                    Wie lange spielt ihr?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Standard sind 45-60 Minuten, aber wir können flexibel zwischen 
                    30 und 90 Minuten spielen, je nach euren Wünschen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-rock">
                <CardContent className="p-6">
                  <h3 className="font-rock text-lg font-bold mb-3">
                    Welche Technik braucht ihr?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Wir bringen unsere komplette Anlage mit. Ihr braucht nur 
                    Strom (16A CEE) und eine Bühne von mindestens 4x3 Metern.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-rock">
                <CardContent className="p-6">
                  <h3 className="font-rock text-lg font-bold mb-3">
                    Wie weit fahrt ihr?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Hauptsächlich Bayern und Umgebung. Bis 100km kostenfrei, 
                    weitere Entfernungen nach Absprache.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-rock">
                <CardContent className="p-6">
                  <h3 className="font-rock text-lg font-bold mb-3">
                    Könnt ihr auch akustisch spielen?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Ja! Wir haben auch einige Songs in acoustic Versionen 
                    für ruhigere Veranstaltungen im Repertoire.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;