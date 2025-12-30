import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Send,
  CalendarIcon,
  PlusIcon,
  MinusIcon,
} from "lucide-react";
import GradientText from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useTextSplit, useParallax } from "@/hooks/useGSAP";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { VelocityScroll } from "@/components/ui/scrollbasedvelocity";
import { SuccessCheck } from "@/components/ui/spinner";
import { WaveLoader } from "@/components/ui/wave-loader";
import ClickSpark from "@/components/ui/click-spark";

const faqItems = [
  { id: "1", question: "Wie lange spielt ihr?", answer: "Standard sind 3 Stunden, aber wir können flexibel je nach euren Wünschen variieren." },
  { id: "2", question: "Welche Technik braucht ihr?", answer: "Wir bringen unsere komplette Anlage mit. Ihr braucht nur Strom (16A) und Platz von mindestens 4x3 Metern." },
  { id: "3", question: "Wie weit fahrt ihr?", answer: "Hauptsächlich 92277 Hohenburg und Umgebung. Bis 20km kostenfrei." },
  { id: "4", question: "Könnt ihr auch akustisch spielen?", answer: "Ja! Wir haben auch Songs in acoustic Versionen im Repertoire." },
];

const Kontakt = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [buttonState, setButtonState] = useState<"initial" | "loading" | "success">("initial");

  useTextSplit(".text-split", 0.5);
  useParallax(".parallax-bg", 0.3);

  const toggleExpand = (id: string) =>
    setExpandedId(expandedId === id ? null : id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (buttonState !== "initial") return;

    setButtonState("loading");
    setTimeout(() => {
      setButtonState("success");
      toast({
        title: "Nachricht gesendet!",
        description: "Wir melden uns in Kürze bei Dir.",
      });
      setTimeout(() => {
        setButtonState("initial");
        setDate(undefined);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-rock-gradient">
      <Navigation />

      {/* FORM */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <Card className="bg-card border-border shadow-rock">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* DATE */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-background border-border cursor-pointer"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 pointer-events-none" />
                      {date ? format(date, "PPP") : "Datum auswählen"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                {/* SUBMIT */}
                <ClickSpark sparkColor="#4079ff" sparkSize={12} sparkRadius={25}>
                  <button
                    type="submit"
                    className="
                      relative w-full rounded-full border-2 border-primary
                      p-[2px] cursor-pointer select-none
                    "
                  >
                    <div className="absolute inset-0 animate-shiny-text" />
                    <div className="relative flex items-center justify-center px-6 py-3 cursor-pointer">
                      {buttonState === "loading" && (
                        <>
                          <WaveLoader />
                          <span className="ml-2">senden…</span>
                        </>
                      )}

                      {buttonState === "success" && (
                        <>
                          <SuccessCheck className="w-4 h-4 mr-2 pointer-events-none" />
                          Anfrage gesendet
                        </>
                      )}

                      {buttonState === "initial" && (
                        <>
                          <Send className="mr-2 h-5 w-5 pointer-events-none" />
                          <GradientText>Rock On!</GradientText>
                        </>
                      )}
                    </div>
                  </button>
                </ClickSpark>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqItems.map((faq) => (
            <div key={faq.id} className="border rounded-xl mb-4">
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full flex justify-between p-6 cursor-pointer select-none"
              >
                <span>{faq.question}</span>
                {expandedId === faq.id ? (
                  <MinusIcon className="h-5 w-5 pointer-events-none" />
                ) : (
                  <PlusIcon className="h-5 w-5 pointer-events-none" />
                )}
              </button>

              {expandedId === faq.id && (
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-12 bg-rock-lighter">
        <div className="flex justify-center space-x-4">
          {[
            { Icon: Instagram, color: "from-purple-500 to-pink-500" },
            { Icon: Facebook, color: "bg-blue-600" },
            { Icon: Youtube, color: "bg-red-600" },
          ].map(({ Icon, color }, i) => (
            <a key={i} className="cursor-pointer">
              <div
                className={`w-12 h-12 ${color} rounded-full flex items-center justify-center cursor-pointer`}
              >
                <Icon className="h-6 w-6 text-white pointer-events-none" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;

