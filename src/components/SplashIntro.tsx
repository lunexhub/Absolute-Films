import { useEffect, useState } from "react";
import { Volume2, VolumeX, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const YT_ID = "pKkj-0fSkLs";

const STORAGE_KEY = "absolutefilms-splash-seen";

const SplashIntro = () => {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) setOpen(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  if (!open) return null;

  const ytSrc = `https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=${YT_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&disablekb=1&fs=0&cc_load_policy=0`;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-up"
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-gold/30 shadow-gold bg-background"
      >
        {/* 16:9 video */}
        <div className="relative aspect-video overflow-hidden">
          <iframe
            key={muted ? "m" : "u"}
            src={ytSrc}
            title="Absolute Films Showreel"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder={0}
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none" />

          {/* Close X */}
          <button
            onClick={close}
            aria-label="Close intro"
            className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-background/70 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Mute toggle */}
          <button
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute" : "Mute"}
            className="absolute top-3 left-3 z-10 w-10 h-10 rounded-full bg-background/70 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold/10 transition-colors"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Bottom content */}
        <div className="relative px-6 py-6 md:px-8 md:py-7 text-center">
          <div className="font-serif-display text-3xl md:text-4xl mb-2 tracking-wide">
            <span className="text-gradient-gold">Absolute</span> Films
          </div>
          <p className="text-gold tracking-[0.4em] text-[10px] uppercase mb-4 animate-shimmer">
            You step up · We set up
          </p>
          <Button variant="hero" size="lg" onClick={close}>
            Enter Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SplashIntro;
