import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Datenschutz = () => {
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
              Datenschutzerklärung
            </h1>

            <div className="prose prose-invert max-w-none">
              {/* 1. Datenschutz auf einen Blick */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  1. Datenschutz auf einen Blick
                </h2>

                <h3 className="font-rock text-lg font-semibold mb-2">
                  Allgemeine Hinweise
                </h3>
                <p className="text-muted-foreground">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber,
                  was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                  Website besuchen. Personenbezogene Daten sind alle Daten, mit
                  denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              {/* 2. Allgemeine Hinweise */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  2. Allgemeine Hinweise und Pflichtinformationen
                </h2>

                <p className="text-muted-foreground">
                  Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen
                  Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                  vertraulich und entsprechend den gesetzlichen
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>

                <h3 className="font-rock text-lg font-semibold mt-4 mb-2">
                  Verantwortliche Stelle
                </h3>
                <p className="text-muted-foreground">
                  THE-END (GbR)
                  <br />
                  Vertretungsberechtigter Gesellschafter: Patrick Jäger
                  <br />
                  Adresse siehe Impressum
                </p>

                <h3 className="font-rock text-lg font-semibold mt-4 mb-2">
                  Widerruf Ihrer Einwilligung
                </h3>
                <p className="text-muted-foreground">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                  ausdrücklichen Einwilligung möglich. Sie können eine bereits
                  erteilte Einwilligung jederzeit widerrufen.
                </p>

                <h3 className="font-rock text-lg font-semibold mt-4 mb-2">
                  Beschwerderecht bei der Aufsichtsbehörde
                </h3>
                <p className="text-muted-foreground">
                  Im Falle von datenschutzrechtlichen Verstößen steht der
                  betroffenen Person ein Beschwerderecht bei einer
                  Aufsichtsbehörde zu.
                </p>

                <h3 className="font-rock text-lg font-semibold mt-4 mb-2">
                  SSL- bzw. TLS-Verschlüsselung
                </h3>
                <p className="text-muted-foreground">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                  Übertragung vertraulicher Inhalte eine SSL- bzw.
                  TLS-Verschlüsselung.
                </p>
              </div>

              {/* 3. Datenerfassung */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  3. Datenerfassung auf dieser Website
                </h2>

                <h3 className="font-rock text-lg font-semibold mb-2">
                  Server-Log-Dateien
                </h3>
                <p className="text-muted-foreground">
                  Der Provider der Seiten erhebt und speichert automatisch
                  Informationen in sogenannten Server-Log-Dateien, die Ihr
                  Browser automatisch übermittelt (z. B. IP-Adresse,
                  Browsertyp, Uhrzeit des Seitenaufrufs).
                </p>
              </div>

              {/* 4. Hosting */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  4. Hosting
                </h2>
                <p className="text-muted-foreground">
                  Diese Website wird extern gehostet. Der konkrete
                  Hosting-Anbieter wird ergänzt, sobald die Website produktiv
                  betrieben wird. Mit dem Hosting-Anbieter wird ein Vertrag über
                  Auftragsverarbeitung (AV-Vertrag) geschlossen.
                </p>
              </div>

              {/* 5. Kontaktformulare */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  5. Kontaktformulare
                </h2>
                <p className="text-muted-foreground">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen (z.
                  B. für Auftritte der Band, PA- und Lichtverleih oder
                  Merch-Anfragen), werden Ihre Angaben zur Bearbeitung der
                  Anfrage per E-Mail verarbeitet. Eine Weitergabe an Dritte
                  erfolgt nicht.
                </p>
              </div>

              {/* 6. Spotify */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  6. Eingebettete Inhalte von Spotify
                </h2>
                <p className="text-muted-foreground">
                  Auf dieser Website sind Inhalte des Musikdienstes Spotify
                  eingebettet. Anbieter ist die Spotify AB, Stockholm,
                  Schweden. Die Einbindung erfolgt nur nach Ihrer Einwilligung
                  durch aktives Laden des Players.
                </p>
              </div>

              {/* 7. Social Media */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  7. Soziale Medien
                </h2>
                <p className="text-muted-foreground">
                  Diese Website enthält Links zu externen sozialen Netzwerken
                  (Facebook, Instagram, YouTube, Linktree). Beim Anklicken eines
                  solchen Links gelten die Datenschutzbestimmungen des jeweiligen
                  Anbieters.
                </p>
              </div>

              {/* 8. Inhalte */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  8. Urheberrechtlich erstellte Inhalte
                </h2>
                <p className="text-muted-foreground">
                  Die auf dieser Website verwendeten Inhalte wurden selbst
                  erstellt oder rechtmäßig lizenziert und lokal auf dem Server
                  gespeichert.
                </p>
              </div>

              {/* 9. Änderungen */}
              <div className="bg-card rounded-lg border border-border p-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  9. Änderung dieser Datenschutzerklärung
                </h2>
                <p className="text-muted-foreground">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                  damit sie stets den aktuellen rechtlichen Anforderungen
                  entspricht.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
