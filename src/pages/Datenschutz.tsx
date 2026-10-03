import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useYouTubeConsent } from "@/contexts/YouTubeConsentContext";
import { useSpotifyConsent } from "@/contexts/SpotifyConsentContext";

const Datenschutz = () => {
  const {
    hasConsent: youtubeConsent,
    revokeConsent: revokeYoutubeConsent,
  } = useYouTubeConsent();

  const {
    hasConsent: spotifyConsent,
    revokeConsent: revokeSpotifyConsent,
  } = useSpotifyConsent();

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
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert,
                  wenn Sie diese Website besuchen oder über ein
                  Kontaktformular mit uns Kontakt aufnehmen.
                  Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>

                <p className="text-muted-foreground">
                  Wir verarbeiten personenbezogene Daten nur im Rahmen der
                  geltenden datenschutzrechtlichen Vorschriften und nur,
                  soweit dies für den Betrieb dieser Website, die Bearbeitung
                  von Anfragen oder die von Ihnen gewünschten Funktionen
                  erforderlich ist.
                </p>
              </div>

              {/* 2. Verantwortlicher und Pflichtinformationen */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  2. Allgemeine Hinweise und Pflichtinformationen
                </h2>

                <h3 className="font-rock text-lg font-semibold mb-2">
                  Verantwortlicher
                </h3>

                <p className="text-muted-foreground">
                  Patrick Jäger
                  <br />
                  Allertshofen 3
                  <br />
                  92277 Hohenburg
                  <br />
                  Deutschland
                  <br />
                  E-Mail: mail@die-band-the-end.de
                </p>

                <h3 className="font-rock text-lg font-semibold mt-6 mb-2">
                  Rechtsgrundlagen der Verarbeitung
                </h3>

                <p className="text-muted-foreground">
                  Die Verarbeitung personenbezogener Daten erfolgt insbesondere
                  auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit die
                  Verarbeitung zur Durchführung vorvertraglicher Maßnahmen
                  erforderlich ist, die auf Ihre Anfrage hin erfolgen. Soweit
                  die Voraussetzungen vorliegen, erfolgt die Verarbeitung
                  außerdem auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur
                  Wahrung berechtigter Interessen, insbesondere zur sicheren
                  und zuverlässigen Bereitstellung der Website und zur
                  Bearbeitung von Anfragen.
                </p>

                <p className="text-muted-foreground">
                  Soweit wir für einzelne Verarbeitungen eine Einwilligung
                  einholen, erfolgt die Verarbeitung auf Grundlage von Art. 6
                  Abs. 1 lit. a DSGVO. Eine erteilte Einwilligung kann
                  jederzeit mit Wirkung für die Zukunft widerrufen werden.
                </p>

                <h3 className="font-rock text-lg font-semibold mt-6 mb-2">
                  Widerruf Ihrer Einwilligung
                </h3>

                <p className="text-muted-foreground">
                  Wenn eine Verarbeitung auf Ihrer Einwilligung beruht, können
                  Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft
                  widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
                  erfolgten Verarbeitung bleibt davon unberührt.
                </p>

                <h3 className="font-rock text-lg font-semibold mt-6 mb-2">
                  Beschwerderecht bei der Aufsichtsbehörde
                </h3>

                <p className="text-muted-foreground">
                  Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde
                  über die Verarbeitung Ihrer personenbezogenen Daten zu
                  beschweren. Zuständig ist insbesondere die für Ihren
                  gewöhnlichen Aufenthaltsort, Ihren Arbeitsplatz oder den Ort
                  des mutmaßlichen Verstoßes zuständige Aufsichtsbehörde.
                </p>

                <h3 className="font-rock text-lg font-semibold mt-6 mb-2">
                  SSL- bzw. TLS-Verschlüsselung
                </h3>

                <p className="text-muted-foreground">
                  Diese Website wird über eine verschlüsselte HTTPS-Verbindung
                  bereitgestellt. Dadurch werden Daten bei der Übertragung
                  zwischen Ihrem Browser und den beteiligten Servern
                  verschlüsselt übertragen.
                </p>
              </div>

              {/* 3. Besuch der Website */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  3. Datenerfassung beim Besuch der Website
                </h2>

                <p className="text-muted-foreground">
                  Beim Aufruf dieser Website werden durch die eingesetzten
                  technischen Systeme Informationen verarbeitet, die Ihr
                  Browser beziehungsweise Ihr Endgerät automatisch übermittelt.
                  Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des
                  Zugriffs, aufgerufene Seiten, Browsertyp, Betriebssystem und
                  technische Informationen zur Anfrage gehören.
                </p>

                <p className="text-muted-foreground">
                  Diese Informationen werden insbesondere benötigt, um die
                  Website technisch bereitzustellen, die Sicherheit des
                  Angebots zu gewährleisten und technische Fehler zu erkennen
                  beziehungsweise zu analysieren.
                </p>
              </div>

              {/* 4. GitHub Pages */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  4. Hosting über GitHub Pages
                </h2>

                <p className="text-muted-foreground">
                  Diese Website wird über GitHub Pages bereitgestellt. Anbieter
                  ist GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco,
                  CA 94107, USA.
                </p>

                <p className="text-muted-foreground">
                  GitHub weist darauf hin, dass beim Besuch einer über GitHub
                  Pages bereitgestellten Website die IP-Adresse des Besuchers
                  zu Sicherheitszwecken protokolliert und gespeichert wird.
                </p>

                <p className="text-muted-foreground">
                  Die Verarbeitung erfolgt insbesondere zur sicheren
                  Bereitstellung und zum Schutz der GitHub-Infrastruktur.
                  Weitere Informationen zur Datenverarbeitung durch GitHub
                  finden Sie in der Datenschutzerklärung von GitHub.
                </p>
              </div>

              {/* 5. Cloudflare */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  5. Cloudflare
                </h2>

                <p className="text-muted-foreground">
                  Für die technische Verwaltung der Domain, DNS-Dienste und
                  weitere technische Funktionen wird Cloudflare eingesetzt.
                  Anbieter ist Cloudflare, Inc., 101 Townsend Street,
                  San Francisco, CA 94107, USA.
                </p>

                <p className="text-muted-foreground">
                  Cloudflare verarbeitet im Zusammenhang mit seinen Diensten
                  unter anderem technische Informationen und
                  Verbindungsdaten. Dazu können insbesondere IP-Adressen,
                  Zeitstempel, Informationen über Browser und Endgerät sowie
                  weitere technische Metadaten gehören.
                </p>

                <p className="text-muted-foreground">
                  Cloudflare kann dabei als technischer Dienstleister für die
                  Bereitstellung und Absicherung der Website tätig werden.
                  Für Datenübermittlungen aus dem Europäischen Wirtschaftsraum
                  in Drittländer verwendet Cloudflare unter anderem die
                  Standardvertragsklauseln der Europäischen Kommission und,
                  soweit einschlägig, weitere geeignete Transfermechanismen.
                </p>
              </div>

              {/* 6. Kontaktformulare */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  6. Kontaktformulare
                </h2>

                <p className="text-muted-foreground">
                  Wenn Sie uns über eines der Kontaktformulare Anfragen
                  zukommen lassen, verarbeiten wir die von Ihnen eingegebenen
                  Daten zur Bearbeitung und Beantwortung Ihrer Anfrage.
                </p>

                <p className="text-muted-foreground">
                  Je nach verwendetem Formular können insbesondere folgende
                  Angaben verarbeitet werden:
                </p>

                <ul className="text-muted-foreground">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>Veranstaltungsdatum</li>
                  <li>Veranstaltungsort</li>
                  <li>Veranstaltungsart</li>
                  <li>Betreff</li>
                  <li>Nachricht sowie weitere freiwillige Angaben</li>
                </ul>

                <p className="text-muted-foreground">
                  Die Verarbeitung erfolgt insbesondere zur Bearbeitung Ihrer
                  Anfrage und zur Vorbereitung einer möglichen Beauftragung.
                  Je nach Inhalt der Anfrage erfolgt die Verarbeitung auf
                  Grundlage von Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1
                  lit. f DSGVO.
                </p>

                <h3 className="font-rock text-lg font-semibold mt-6 mb-2">
                  Technische Übermittlung
                </h3>

                <p className="text-muted-foreground">
                  Die über das Formular eingegebenen Daten werden zunächst an
                  einen von uns betriebenen Cloudflare Worker übermittelt.
                  Dieser nimmt die Anfrage technisch entgegen und übermittelt
                  die Nachricht anschließend über den E-Mail-Versanddienst
                  Resend.
                </p>

                <p className="text-muted-foreground">
                  Die Verarbeitung erfolgt nur, soweit sie für die Bearbeitung
                  und Beantwortung der Anfrage sowie die damit verbundene
                  Kommunikation erforderlich ist.
                </p>
              </div>

              {/* 7. Resend */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  7. E-Mail-Versand über Resend
                </h2>

                <p className="text-muted-foreground">
                  Für den Versand der über die Kontaktformulare erzeugten
                  E-Mails verwenden wir den Dienst Resend. Anbieter ist
                  Resend, Inc., USA.
                </p>

                <p className="text-muted-foreground">
                  Die von Ihnen über das Kontaktformular eingegebenen Angaben
                  werden zur technischen Übermittlung der Nachricht an Resend
                  übertragen. Dazu können insbesondere Name, E-Mail-Adresse,
                  Betreff, Nachricht sowie weitere von Ihnen eingegebene
                  Angaben gehören.
                </p>

                <p className="text-muted-foreground">
                  Resend gibt an, Kundendaten einschließlich Nachrichteninhalten
                  und Versandprotokollen in den USA zu speichern. Die von uns
                  ausgewählte EU-Versandregion steuert den Versandweg der
                  E-Mails, nicht den Speicherort der bei Resend gespeicherten
                  Daten.
                </p>

                <p className="text-muted-foreground">
                  Resend gibt an, für Übermittlungen aus dem Europäischen
                  Wirtschaftsraum in die USA unter anderem
                  Standardvertragsklauseln und die Zertifizierung nach dem
                  EU-U.S. Data Privacy Framework einzusetzen.
                </p>

                <p className="text-muted-foreground">
                  Nach Angaben von Resend werden E-Mail- und Logdaten bei den
                  derzeitigen Free-, Pro- und Scale-Tarifen grundsätzlich
                  30 Tage gespeichert. Darüber hinaus können Daten aufgrund
                  gesetzlicher Verpflichtungen oder zur Wahrung von
                  Rechtsansprüchen länger verarbeitet werden.
                </p>
              </div>

              {/* 8. E-Mail-Kommunikation */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  8. E-Mail-Kommunikation
                </h2>

                <p className="text-muted-foreground">
                  Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die
                  von Ihnen übermittelten Angaben zur Bearbeitung und
                  Beantwortung Ihrer Anfrage.
                </p>

                <p className="text-muted-foreground">
                  Die über E-Mail geführte Kommunikation kann personenbezogene
                  Daten enthalten. Die Verarbeitung erfolgt insbesondere zur
                  Bearbeitung von Anfragen, zur Vorbereitung einer möglichen
                  Beauftragung und zur Durchführung einer damit verbundenen
                  Kommunikation.
                </p>

                <p className="text-muted-foreground">
                  Die Daten werden grundsätzlich so lange verarbeitet, wie dies
                  für die Bearbeitung der jeweiligen Anfrage erforderlich ist.
                  Eine darüber hinausgehende Speicherung erfolgt nur, soweit
                  gesetzliche Aufbewahrungspflichten bestehen oder die Daten
                  zur Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen erforderlich sind.
                </p>
              </div>

              {/* 9. Spotify */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  9. Eingebettete Inhalte von Spotify
                </h2>

                <p className="text-muted-foreground">
                  Auf dieser Website können Inhalte des Musikdienstes Spotify
                  eingebettet werden. Anbieter ist Spotify AB, Regeringsgatan
                  19, 111 53 Stockholm, Schweden.
                </p>

                <p className="text-muted-foreground">
                  Der Spotify-Inhalt wird nicht automatisch geladen. Eine
                  Verbindung zu Spotify wird erst hergestellt, wenn Sie der
                  entsprechenden Einbindung aktiv zustimmen und den Inhalt
                  laden.
                </p>

                <p className="text-muted-foreground">
                  Durch das Laden des Spotify-Inhalts können personenbezogene
                  Daten und technische Informationen an Spotify übertragen
                  werden. Auf die anschließende Datenverarbeitung durch Spotify
                  haben wir keinen vollständigen Einfluss. Es gelten ergänzend
                  die Datenschutzbestimmungen von Spotify.
                </p>
              </div>

              {/* 10. YouTube und externe Links */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  10. YouTube, soziale Medien und externe Links
                </h2>

                <p className="text-muted-foreground">
                  Diese Website enthält Links zu externen Internetseiten und
                  sozialen Netzwerken, insbesondere zu Facebook, Instagram,
                  YouTube und weiteren Plattformen.
                </p>

                <p className="text-muted-foreground">
                  Soweit es sich lediglich um normale externe Links handelt,
                  werden beim bloßen Besuch unserer Website keine Inhalte der
                  jeweiligen Plattform automatisch geladen.
                </p>

                <p className="text-muted-foreground">
                  Erst wenn Sie einen solchen Link anklicken, verlassen Sie
                  unsere Website und stellen eine Verbindung mit dem jeweiligen
                  Anbieter her. Für die anschließende Verarbeitung
                  personenbezogener Daten gelten die Datenschutzbestimmungen
                  des jeweiligen Anbieters.
                </p>

                <p className="text-muted-foreground">
                  Soweit auf einzelnen Seiten Inhalte externer Anbieter
                  technisch eingebunden werden, wird dies auf der jeweiligen
                  Seite beziehungsweise durch die entsprechende Einwilligungs-
                  oder Freigabefunktion berücksichtigt.
                </p>
              </div>

              {/* 11. Cookies und lokale Speicherung */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  11. Cookies und lokale Speicherung
                </h2>

                <p className="text-muted-foreground">
                  Unsere Website verwendet nach aktuellem Stand keine
                  Tracking- oder Analyse-Cookies zu Werbe- oder
                  Marketingzwecken.
                </p>

                <p className="text-muted-foreground">
                  Für die von Ihnen ausdrücklich aktivierten externen Inhalte
                  von YouTube und Spotify wird Ihre Einwilligung lokal in Ihrem
                  Browser gespeichert. Dadurch wird verhindert, dass Sie die
                  Einwilligung beim erneuten Besuch der Website erneut erteilen
                  müssen.
                </p>

                <p className="text-muted-foreground">
                  Die Speicherung erfolgt über den lokalen Speicher
                  (Local Storage) Ihres Browsers. Dabei werden keine Inhalte
                  von YouTube oder Spotify geladen, solange Sie der jeweiligen
                  Einbindung nicht ausdrücklich zugestimmt haben.
                </p>

                <h3 className="font-rock text-lg font-semibold mt-6 mb-2">
                  Einwilligungen verwalten
                </h3>

                <p className="text-muted-foreground">
                  Sie können Ihre erteilten Einwilligungen für externe Inhalte
                  jederzeit mit Wirkung für die Zukunft widerrufen. Nach dem
                  Widerruf werden die entsprechenden externen Inhalte auf der
                  Website wieder blockiert, bis Sie sie erneut ausdrücklich
                  laden.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-lg border border-border">
                    <div>
                      <p className="font-semibold">
                        YouTube
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Status:{" "}
                        {youtubeConsent
                          ? "Einwilligung erteilt"
                          : "Keine Einwilligung erteilt"}
                      </p>
                    </div>

                    {youtubeConsent && (
                      <button
                        type="button"
                        onClick={revokeYoutubeConsent}
                        className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
                      >
                        YouTube-Einwilligung widerrufen
                      </button>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-lg border border-border">
                    <div>
                      <p className="font-semibold">
                        Spotify
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Status:{" "}
                        {spotifyConsent
                          ? "Einwilligung erteilt"
                          : "Keine Einwilligung erteilt"}
                      </p>
                    </div>

                    {spotifyConsent && (
                      <button
                        type="button"
                        onClick={revokeSpotifyConsent}
                        className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
                      >
                        Spotify-Einwilligung widerrufen
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  Technisch erforderliche Speicherungen oder Einstellungen
                  können verwendet werden, soweit dies für die Darstellung,
                  Funktionalität oder Sicherheit der Website erforderlich ist.
                </p>
              </div>

              {/* 12. Urheberrecht */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  12. Urheberrechtlich erstellte Inhalte
                </h2>

                <p className="text-muted-foreground">
                  Die auf dieser Website verwendeten Inhalte, insbesondere
                  Texte, Bilder, Grafiken und Videos, wurden von uns selbst
                  erstellt oder rechtmäßig genutzt beziehungsweise lizenziert,
                  soweit nicht anders angegeben.
                </p>

                <p className="text-muted-foreground">
                  Eine Verwendung, Vervielfältigung oder Verbreitung der Inhalte
                  außerhalb der gesetzlichen Grenzen bedarf der vorherigen
                  Zustimmung des jeweiligen Rechteinhabers.
                </p>
              </div>

              {/* 13. Rechte */}
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  13. Ihre Rechte
                </h2>

                <p className="text-muted-foreground">
                  Sie haben im Rahmen der gesetzlichen Voraussetzungen
                  insbesondere folgende Rechte:
                </p>

                <ul className="text-muted-foreground">
                  <li>Recht auf Auskunft über Ihre personenbezogenen Daten</li>
                  <li>Recht auf Berichtigung unrichtiger Daten</li>
                  <li>Recht auf Löschung Ihrer personenbezogenen Daten</li>
                  <li>Recht auf Einschränkung der Verarbeitung</li>
                  <li>
                    Recht auf Datenübertragbarkeit, soweit die gesetzlichen
                    Voraussetzungen erfüllt sind
                  </li>
                  <li>
                    Recht, einer Verarbeitung unter den gesetzlichen
                    Voraussetzungen zu widersprechen
                  </li>
                </ul>

                <p className="text-muted-foreground">
                  Zur Ausübung Ihrer Rechte können Sie sich über die im
                  Impressum angegebenen Kontaktdaten an uns wenden.
                </p>
              </div>

              {/* 14. Änderungen */}
              <div className="bg-card rounded-lg border border-border p-8">
                <h2 className="font-rock text-2xl font-bold mb-4 text-primary">
                  14. Änderung dieser Datenschutzerklärung
                </h2>

                <p className="text-muted-foreground">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                  wenn sich die technische Umsetzung unserer Website, die von
                  uns eingesetzten Dienste oder die gesetzlichen Anforderungen
                  ändern.
                </p>

                <p className="text-muted-foreground">
                  Es gilt jeweils die auf dieser Website veröffentlichte
                  aktuelle Fassung.
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