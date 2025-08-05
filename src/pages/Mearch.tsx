import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingBag, Shirt, Star, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Mearch = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    size: "",
    quantity: "1",
    message: ""
  });

  const merchandise = [
    {
      id: 1,
      name: "Band T-Shirt",
      description: "100% Baumwolle mit hochwertigem Logo-Print",
      sizes: ["S", "M", "L", "XL", "XXL"],
      image: "shirt"
    },
    {
      id: 2,
      name: "Hoodie",
      description: "Warmer Kapuzenpullover mit Bandlogo auf der Rückseite",
      sizes: ["S", "M", "L", "XL", "XXL"],
      image: "hoodie"
    },
    {
      id: 3,
      name: "Stoffpatch",
      description: "Aufnäher mit Bandlogo - perfekt für Jacken und Rucksäcke",
      sizes: ["One Size"],
      image: "patch"
    },
    {
      id: 4,
      name: "Sticker Pack",
      description: "Set aus 5 verschiedenen Stickern",
      sizes: ["One Size"],
      image: "stickers"
    },
    {
      id: 5,
      name: "Tasse",
      description: "Keramiktasse mit Logo - perfekt für den Morgenkaffee",
      sizes: ["One Size"],
      image: "mug"
    },
    {
      id: 6,
      name: "Vinyl-Sticker",
      description: "Wasserfester Sticker für Auto, Laptop oder Gitarrenkoffer",
      sizes: ["One Size"],
      image: "vinyl-sticker"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bestellung gesendet!",
      description: "Wir melden uns in Kürze bei euch mit den Details.",
    });
    setFormData({
      name: "",
      email: "",
      product: "",
      size: "",
      quantity: "1",
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
              Mearch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Zeigt eure Liebe zur Band! Unser Merchandise ist handverlesen 
              und in bester Qualität - perfekt für echte Rock-Fans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Merchandise Grid */}
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
              Unsere Fanartikel
            </h2>
            <p className="text-lg text-muted-foreground">
              Hochwertige Merchandise-Artikel für echte Rock-Fans
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchandise.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border shadow-rock transition-rock hover-rock overflow-hidden group">
                  <div className="aspect-square bg-secondary relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <ShoppingBag className="h-20 w-20 text-muted-foreground group-hover:text-primary transition-rock mb-4" />
                        <p className="text-muted-foreground font-semibold">{item.name}</p>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-rock text-xl font-bold mb-2">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Größen: {item.sizes.join(", ")}
                      </div>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-rock text-3xl md:text-4xl font-bold text-glow mb-4">
                Informationen zum Mearch
              </h2>
              <p className="text-lg text-muted-foreground">
                Füllt das Formular aus und wir melden uns mit den Details bei euch
              </p>
            </div>

            <Card className="bg-card border-border shadow-rock">
              <CardContent className="p-8">
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
                    <Label htmlFor="product">Produkt *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, product: value})}>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Produkt auswählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {merchandise.map((item) => (
                          <SelectItem key={item.id} value={item.name}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="size">Größe</Label>
                      <Input
                        id="size"
                        value={formData.size}
                        onChange={(e) => setFormData({...formData, size: e.target.value})}
                        placeholder="z.B. L, XL oder One Size"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="quantity">Anzahl</Label>
                      <Select onValueChange={(value) => setFormData({...formData, quantity: value})}>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Anzahl" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Nachricht</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Zusätzliche Wünsche oder Anmerkungen..."
                      className="bg-background border-border"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="btn-rock w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    Anfrage senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center bg-card border border-border rounded-lg p-8 shadow-rock"
          >
            <h2 className="font-rock text-2xl font-bold text-glow mb-6">
              Bestellinformationen
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Shirt className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-rock font-bold mb-2">Qualität</h3>
                <p className="text-sm text-muted-foreground">
                  Hochwertige Materialien und langlebige Prints
                </p>
              </div>
              <div>
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-rock font-bold mb-2">Kontakt</h3>
                <p className="text-sm text-muted-foreground">
                  Wir melden uns innerhalb von 24h mit allen Details
                </p>
              </div>
              <div>
                <ShoppingBag className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-rock font-bold mb-2">Abholung</h3>
                <p className="text-sm text-muted-foreground">
                  Persönliche Übergabe bei Konzerten oder nach Vereinbarung
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mearch;
