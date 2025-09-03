import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-rock text-4xl md:text-6xl font-bold text-center mb-8 text-glow">
              Impressum
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">Bandname</h3>
                    <p className="text-muted-foreground">THE-END</p>
                  </div>
                  
                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">Vertretungsberechtigter</h3>
                    <p className="text-muted-foreground">[Name des Bandleiters/Managers]</p>
                  </div>
                  
                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">Adresse</h3>
                    <p className="text-muted-foreground">
                      [Straße und Hausnummer]<br />
                      [PLZ und Ort]<br />
                      [Land]
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  Kontakt
                </h2>
                <div className="space-y-2">
                  <p className="text-muted-foreground">E-Mail: [E-Mail-Adresse]</p>
                  <p className="text-muted-foreground">Telefon: [Telefonnummer]</p>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  Haftungsausschluss
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">Haftung für Inhalte</h3>
                    <p>
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">Haftung für Links</h3>
                    <p>
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">Urheberrecht</h3>
                    <p>
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;