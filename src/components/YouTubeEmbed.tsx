import { Play, Video } from "lucide-react";
import { useYouTubeConsent } from "@/contexts/YouTubeConsentContext";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  thumbnail: string;
}

export function YouTubeEmbed({
  videoId,
  title,
  thumbnail,
}: YouTubeEmbedProps) {
  const { hasConsent, giveConsent } = useYouTubeConsent();

  if (!hasConsent) {
    return (
      <div className="aspect-video bg-secondary relative overflow-hidden group">
        {/* Lokales Thumbnail – keine Verbindung zu YouTube */}
        <img
          src={`${import.meta.env.BASE_URL}${thumbnail.replace(/^\/+/, "")}`}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dunkles Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-rock" />

        {/* YouTube Badge */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
          <Video className="h-3 w-3" />
          <span>YouTube</span>
        </div>

        {/* Blauer Play-Button = YouTube laden */}
<button
  type="button"
  onClick={giveConsent}
  aria-label={`YouTube-Video "${title}" laden`}
  className="absolute inset-0 flex items-center justify-center cursor-pointer"
>
  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-rock cursor-pointer">
    <Play
      className="h-8 w-8 text-primary-foreground ml-1"
      fill="currentColor"
    />
  </div>
</button>

        {/* Hinweis */}
        <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
          <span className="inline-block bg-black/60 text-white text-sm px-3 py-1.5 rounded">
            YouTube laden
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video relative overflow-hidden">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}