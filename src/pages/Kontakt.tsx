import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Mail, MapPin, Instagram, Facebook, Youtube, Send, CalendarIcon, PlusIcon, MinusIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useTextSplit, useParallax } from "@/hooks/useGSAP";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { VelocityScroll } from "@/components/ui/scrollbasedvelocity";

const faqItems = [
  {
    id: '1',
    question: 'Wie lange spielt ihr?',
    answer: 'Standard sind 3 Stunden, aber wir können flexibel je nach euren Wünschen variieren.'
  },
  {
    id: '2',
    question: 'Welche Technik braucht ihr?',
    answer: 'Wir bringen unsere komplette Anlage mit. Ihr braucht nur Strom (16A) und eine Bühne von mindestens 4x3 Metern, besser sind 6x6 Meter.'
  },
  {
    id: '3',
    question: 'Wie weit fahrt ihr?',
    answer: 'Hauptsächlich 92277 Hohenburg und Umgebung. Bis 20km kostenfrei, weitere Entfernungen nach Absprache.'
  },
  {
    id: '4',
    question: 'Könnt ihr auch akustisch spielen?',
    answer: 'Ja! Wir haben auch Songs in acoustic Versionen für ruhigere Veranstaltungen im Repertoire.'
  }
];

const Kontakt = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    date: ""
  });

  // GSAP Animations
  useTextSplit('.text-split', 0.5);
  useParallax('.parallax-bg', 0.3);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns in Kürze bei euch zurück.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      date: ""
    });
    setDate(undefined);
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
            <h1 className="font-rock text-4xl md:text-6xl font-bold text-glow mb-6 text-split">
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ihr wollt uns buchen oder habt Fragen?
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schreibt uns! Wir freuen uns auf eure Nachrichten und Booking-Anfragen.
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
                  <h2 className="font-rock text-2xl font-bold text-glow mb-6 text-split">
                    Schreibt uns!
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Name *"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-background border-border"
                        required
                      />
                      <Input
                        label="E-Mail *"
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-background border-border"
                        required
                      />
                    </div>

                    <Input
                      label="Telefonnummer"
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="z.B. 0123 456789"
                      className="bg-background border-border"
                    />

                    <Input
                      label="Betreff (z.B. Booking-Anfrage, Allgemeine Frage, ...)"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="z.B. Booking-Anfrage, Allgemeine Frage..."
                      className="bg-background border-border"
                    />

                    <div>
                      <Label htmlFor="date">Gewünschtes Datum (optional)</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal bg-background border-border",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Datum auswählen</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(selectedDate) => {
                              setDate(selectedDate);
                              setFormData({...formData, date: selectedDate ? format(selectedDate, "PPP") : ""});
                            }}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <Textarea
                      label="Nachricht (Erzählt uns von eurer Veranstaltung...)"
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Erzählt uns von eurer Veranstaltung, stellt eure Fragen oder sendet uns euer Feedback..."
                      className="bg-background border-border"
                      rows={6}
                      required
                    />

                    <Button type="submit" size="lg" className="btn-rock w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Rock On!
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
                <Card className="bg-card border-border shadow-rock mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-rock text-lg font-bold text-primary mb-4">
                      Technical Requirements
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Bühnengröße optimal: 6x6 Meter und 3 Meter hoch</li>
                      <li>• Überdachung</li>
                      <li>• Stromanschluss: 16A oder 9 KW Aggregat</li>
                      <li>• Aufbauzeit: ca. 3 Stunden</li>
                      <li>• Set-Dauer: 3 Stunden (flexibel)</li>
                      <li>• Umkreis: 20km kostenfrei</li>
                    </ul>
                    <Button className="btn-outline-rock mt-4 w-full">
                      Technical Rider
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
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
                      <p className="text-muted-foreground">92277 Hohenburg & Umgebung</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Hauptsächlich Landkreis Amberg-Sulzbach
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Velocity Scroll Effect */}
      <section className="py-12 bg-rock-lighter overflow-hidden">
        <VelocityScroll
          className="font-rock text-2xl md:text-4xl font-bold tracking-tight text-glow"
          text="THE END - Punk, Rock & Metal Cover Band - Live & laut."
          default_velocity={3}
        />
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="font-rock text-xl font-bold text-glow mb-4">
              Social Media
            </h3>
            <p className="text-muted-foreground mb-6">
              Folgt uns für Updates, Behind-the-Scenes Content und neue Videos!
            </p>
            
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.instagram.com/Die_Band_The_End" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transition-rock hover-rock">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100063827957058" 
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
          </motion.div>
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
            className="max-w-4xl mx-auto"
          >
            <div className="mb-12 flex flex-col items-center">
              <Badge
                variant="outline"
                className="border-primary mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase"
              >
                FAQs
              </Badge>
              <h2 className="font-rock text-3xl md:text-4xl font-bold text-glow mb-6 text-center">
                Häufige Fragen
              </h2>
              <p className="text-muted-foreground max-w-2xl text-center">
                Findet Antworten auf die häufigsten Fragen zu unseren Auftritten und technischen Anforderungen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence>
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={cn(
                      'border-border h-fit overflow-hidden rounded-xl border',
                      expandedId === faq.id
                        ? 'shadow-3xl bg-card/50'
                        : 'bg-card/50',
                    )}
                    style={{ minHeight: '88px' }}
                  >
                    <button
                      onClick={() => toggleExpand(faq.id)}
                      className="flex w-full items-center justify-between p-6 text-left"
                    >
                      <h3 className="font-rock text-lg font-medium">
                        {faq.question}
                      </h3>
                      <div className="ml-4 flex-shrink-0">
                        {expandedId === faq.id ? (
                          <MinusIcon className="text-primary h-5 w-5" />
                        ) : (
                          <PlusIcon className="text-primary h-5 w-5" />
                        )}
                      </div>
                    </button>
                    <AnimatePresence>
                      {expandedId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-border border-t px-6 pt-2 pb-6">
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
