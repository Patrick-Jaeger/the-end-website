import { useSpotifyConsent } from "@/contexts/SpotifyConsentContext";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { Link } from "react-router-dom";

interface SpotifyEmbedProps {
  trackId: string;
  title: string;
}

export function SpotifyEmbed({ trackId, title }: SpotifyEmbedProps) {
  const { hasConsent, giveConsent } = useSpotifyConsent();

  if (!hasConsent) {
    return (
      <div className="mt-6 rounded-xl overflow-hidden bg-card border border-border p-6">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
            <Music className="h-6 w-6 text-green-500" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Durch das Laden der Spotify-Inhalte stimmen Sie der Datenübertragung an Spotify zu.
              Weitere Informationen finden Sie in der{" "}
              <Link to="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </Link>.
            </p>
          </div>
          <Button
            onClick={giveConsent}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Music className="h-4 w-4 mr-2" />
            Spotify laden
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-xl overflow-hidden">
      <iframe
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-xl w-full"
        title={title}
      />
    </div>
  );
}
