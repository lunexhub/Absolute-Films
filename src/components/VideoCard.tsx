import { useState } from "react";
import { Play } from "lucide-react";
import type { VideoItem } from "@/data/videos";

interface Props {
  video: VideoItem;
  className?: string;
}

const VideoCard = ({ video, className = "" }: Props) => {
  const [playing, setPlaying] = useState(false);
  const [thumbIdx, setThumbIdx] = useState(0);
  const [useVideoPreview, setUseVideoPreview] = useState(false);

  const thumbs = [
    `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${video.youtubeId}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
  ];

  return (
    <div
      className={`group relative aspect-video overflow-hidden rounded-xl border border-border cursor-pointer bg-card ${className}`}
      onClick={() => setPlaying(true)}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={video.title}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          frameBorder={0}
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <>
          {useVideoPreview ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${video.youtubeId}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&disablekb=1&fs=0`}
              title={video.title}
              allow="autoplay; encrypted-media"
              frameBorder={0}
              className="absolute inset-0 w-full h-full pointer-events-none scale-[1.35]"
            />
          ) : (
            <img
              src={thumbs[thumbIdx]}
              alt={video.title}
              loading="lazy"
              onLoad={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                // YouTube returns a 120x90 grey placeholder when the thumb is missing
                if (img.naturalWidth <= 120) {
                  if (thumbIdx < thumbs.length - 1) setThumbIdx(thumbIdx + 1);
                  else setUseVideoPreview(true);
                }
              }}
              onError={() => {
                if (thumbIdx < thumbs.length - 1) setThumbIdx(thumbIdx + 1);
                else setUseVideoPreview(true);
              }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />

          <button
            aria-label="Play"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-gold glow-gold transition-transform group-hover:scale-110">
              <Play className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground ml-1" fill="currentColor" />
            </span>
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-1">{video.tag} · {video.year}</p>
            <h3 className="font-serif-display text-xl md:text-2xl">{video.title}</h3>
            {video.client && <p className="text-xs text-muted-foreground mt-1">{video.client}</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoCard;
