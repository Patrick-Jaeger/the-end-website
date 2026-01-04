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
              {/* Angaben gemäß DDG */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">Bandname</h3>
                    <p className="text-muted-foreground">THE-END</p>
                  </div>

                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">Rechtsform</h3>
                    <p className="text-muted-foreground">
                      Gesellschaft bürgerlichen Rechts (GbR)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">
                      Vertretungsberechtigter Gesellschafter
                    </h3>
                    <p className="text-muted-foreground">Patrick Jäger</p>
                  </div>

                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">Adresse</h3>
                    <p className="text-muted-foreground">
                      Allertshofen 3
                      <br />
                      92277 Hohenburg
                      <br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </div>

              {/* Kontakt */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  Kontakt
                </h2>
                <p className="text-muted-foreground">
                  E-Mail: mail@die-band-the-end.de
                </p>
              </div>

              {/* Verantwortlicher nach MStV */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h2>
                <p className="text-muted-foreground">
                  Patrick Jäger
                  <br />
                  Allertshofen 3
                  <br />
                  92277 Hohenburg
                  <br />
                  Deutschland
                </p>
              </div>

              {/* Haftungsausschluss */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  Haftungsausschluss
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">
                      Haftung für Inhalte
                    </h3>
                    <p>
                      Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                      Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                      verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                      Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                      gespeicherte fremde Informationen zu überwachen oder nach
                      Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                      hinweisen.
                    </p>
                    <p className="mt-2">
                      Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                      Informationen nach den allgemeinen Gesetzen bleiben hiervon
                      unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                      Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                      möglich. Bei Bekanntwerden von entsprechenden
                      Rechtsverletzungen werden wir diese Inhalte umgehend
                      entfernen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">
                      Haftung für Links
                    </h3>
                    <p>
                      Unser Angebot enthält Links zu externen Websites Dritter, auf
                      deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                      für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                      die Inhalte der verlinkten Seiten ist stets der jeweilige
                      Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                    <p className="mt-2">
                      Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                      mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                      waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente
                      inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                      konkrete Anhaltspunkte einer Rechtsverletzung nicht
                      zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden
                      wir derartige Links umgehend entfernen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-rock text-lg font-semibold mb-2">
                      Urheberrecht
                    </h3>
                    <p>
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke
                      auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                      Beiträge Dritter sind als solche gekennzeichnet.
                    </p>
                    <p className="mt-2">
                      Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                      der Verwertung außerhalb der Grenzen des Urheberrechtes
                      bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                      bzw. Erstellers.
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
