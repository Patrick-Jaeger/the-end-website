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
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  1. Datenschutz auf einen Blick
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="font-rock text-lg font-semibold">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  2. Datenerfassung auf dieser Website
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="font-rock text-lg font-semibold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                  <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                  
                  <h3 className="font-rock text-lg font-semibold">Wie erfassen wir Ihre Daten?</h3>
                  <p>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p>
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  3. Hosting
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                  </p>
                  <p>
                    <strong>Externes Hosting</strong><br />
                    Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  4. Kontaktformular
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  5. Ihre Rechte
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Sie haben jederzeit das Recht:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                    <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
                    <li>eine Einschränkung der Datenverarbeitung zu verlangen</li>
                    <li>der Datenverarbeitung zu widersprechen</li>
                    <li>sich bei einer Aufsichtsbehörde zu beschweren</li>
                  </ul>
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

export default Datenschutz;