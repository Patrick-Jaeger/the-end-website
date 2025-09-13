import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music, Guitar, Mic } from "lucide-react";
import BandCarousel from "@/components/BandCarousel";

const Band = () => {
  const bandMembers = [
    { name: "Thomas Gründemann", instrument: "Gitarre & Backing Vocals", description: "...", icon: Guitar },
    { name: "David Wood", instrument: "Bass", description: "...", icon: Music },
    { name: "Martin Delling", instrument: "Techniker", description: "...", icon: Music },
    { name: "Lukas Ried", instrument: "Lead Gitarre", description: "...", icon: Guitar },
    { name: "Patrick Jäger", instrument: "Schlagzeug", description: "...", icon: Music },
    { name: "Sebastian Delling", instrument: "Vocals", description: "...", icon: Mic }
  ];

  return (
    <div className="min-h-screen bg-rock-gradient">
      <Navigation />

      {/* Hero Section: transparent */}
      <section className="pt-32 pb-20 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-rock text-6xl font-bold text-glow mb-6">
            Die Band
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sechs Freunde, eine Leidenschaft: Rock-Musik in ihrer reinsten Form.
          </p>
        </div>
      </section>

      {/* Band Members */}
      <section className="py-20 bg-rock-lighter">
        <div className="container mx-auto px-4">
          <h2 className="font-rock text-4xl font-bold text-center text-glow mb-16">
            The Crew
          </h2>
          <BandCarousel members={bandMembers.map(m => ({
            name: m.name,
            role: m.instrument,
            image: "/placeholder.svg",
            description: m.description
          }))} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Band;
