import { useState } from "react";

{(song.artist === "System Of A Down" && song.title === "Aerials") && (
  <div className="mt-6 rounded-xl overflow-hidden border border-border bg-card p-6">
    {/** STATE: Spotify geladen oder nicht */}
    {(() => {
      const [spotifyEnabled, setSpotifyEnabled] = useState(false);

      return (
        <>
          {!spotifyEnabled ? (
            /* --------- Platzhalter (vor Einwilligung) --------- */
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-muted-foreground text-sm">
                Spotify-Inhalt ist deaktiviert.
                <br />
                Durch Klick auf „Spotify laden“ stimmen Sie der
                Datenübertragung an Spotify zu.
              </p>

              <button
                onClick={() => setSpotifyEnabled(true)}
                className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
              >
                Spotify laden
              </button>
            </div>
          ) : (
            /* --------- Spotify iFrame (nach Einwilligung) --------- */
            <iframe
              src="https://open.spotify.com/embed/track/4e9eGQYsOiBcftrWXwsVco?theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl w-full"
              title="Spotify Player – Aerials by System of a Down"
            />
          )}
        </>
      );
    })()}
  </div>
)}
