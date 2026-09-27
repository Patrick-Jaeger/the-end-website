# THE END – Website

Offizielle Website der Coverband **THE END**.

Die Website enthält unter anderem Informationen zur Band, Repertoire, Referenzen, Medien, kommende Auftritte sowie ein Kontaktformular für Booking-Anfragen.

## Technologie

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* React Router
* GSAP
* Framer Motion

## Entwicklung

Voraussetzung ist eine aktuelle Node.js-Version mit npm.

Abhängigkeiten installieren:

```bash
npm install
```

Entwicklungsserver starten:

```bash
npm run dev
```

Die lokale Website ist anschließend über die von Vite angezeigte Adresse erreichbar.

## Build

Die Website wird mit Vite gebaut:

```bash
npm run build
```

Der Produktions-Build wird im Verzeichnis `docs/` erzeugt.

## Veröffentlichung

Die Website wird über **GitHub Pages** veröffentlicht.

Der Quellcode befindet sich im Branch `main`. Das Verzeichnis `docs/` enthält den veröffentlichten Build.

Die Website ist über die eigene Domain erreichbar:

**https://www.die-band-the-end.de**

## Projektstruktur

```text
src/
├── components/     Wiederverwendbare UI-Komponenten
├── hooks/          Eigene React-Hooks
├── pages/          Seiten der Website
└── ...

public/
└── Statische Dateien und Medien

docs/
└── Produktions-Build für GitHub Pages
```

## Hinweise

Externe Dienste werden möglichst sparsam eingesetzt. Eingebettete Inhalte wie YouTube und Spotify werden erst nach entsprechender Einwilligung des Besuchers geladen.

Die Website wird fortlaufend weiterentwickelt und vor der Veröffentlichung auf Desktop und Mobilgeräten getestet.
