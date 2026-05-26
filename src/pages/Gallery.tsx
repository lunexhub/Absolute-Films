import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import { galleryImages, galleryCategories, type GalleryImage } from "@/data/gallery";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const [loadedIds, setLoadedIds] = useState<Set<number>>(new Set());
  const [imgKey, setImgKey] = useState(0);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);
  const currentIndex = lightbox ? filtered.findIndex((img) => img.id === lightbox.id) : -1;

  const openLightbox = (img: GalleryImage) => { setLightbox(img); setImgKey((k) => k + 1); };
  const closeLightbox = () => setLightbox(null);

  const prev = useCallback(() => {
    if (currentIndex > 0) { setLightbox(filtered[currentIndex - 1]); setImgKey((k) => k + 1); }
  }, [currentIndex, filtered]);

  const next = useCallback(() => {
    if (currentIndex < filtered.length - 1) { setLightbox(filtered[currentIndex + 1]); setImgKey((k) => k + 1); }
  }, [currentIndex, filtered]);

  useEffect(() => {
    if (lightbox && lightboxRef.current) lightboxRef.current.focus();
  }, [lightbox]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") closeLightbox();
  };

  const markLoaded = (id: number) => setLoadedIds((prev) => new Set(prev).add(id));

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="Photography">Our Work in Frame</SectionTitle>

          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs tracking-widest uppercase border transition-all duration-300",
                  filter === cat
                    ? "border-gold text-gold bg-gold/10"
                    : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto [column-fill:_balance]">
            {filtered.map((img, i) => {
              const loaded = loadedIds.has(img.id);
              return (
                <div
                  key={img.id}
                  className="relative break-inside-avoid mb-4 group overflow-hidden rounded-xl border border-border/60 cursor-pointer animate-fade-up hover:border-gold/40 transition-all duration-500 hover:shadow-gold"
                  style={{ animationDelay: `${Math.min(i * 60, 400)}ms` }}
                  onClick={() => openLightbox(img)}
                >
                  {/* Skeleton shown while loading */}
                  {!loaded && (
                    <div className="img-skeleton w-full aspect-[3/4] rounded-xl" />
                  )}
                  <img
                    src={img.src}
                    alt={img.alt}
                    onLoad={() => markLoaded(img.id)}
                    loading="lazy"
                    className={cn(
                      "w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.04]",
                      loaded ? "opacity-100" : "opacity-0 absolute inset-0",
                    )}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-4 pointer-events-none">
                    <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">{img.category}</span>
                    <ZoomIn className="w-5 h-5 text-white/80" />
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in outline-none"
          onClick={closeLightbox}
          onKeyDown={handleKey}
          tabIndex={0}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={imgKey}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-gold border border-gold/20 animate-slide-img"
            />

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/80 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold/20 hover:scale-110 transition-all duration-200 z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Prev */}
            {currentIndex > 0 && (
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/80 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold/20 hover:scale-110 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Next */}
            {currentIndex < filtered.length - 1 && (
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/80 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold/20 hover:scale-110 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Counter */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/60 border border-border/50 text-xs text-muted-foreground tracking-widest">
              {currentIndex + 1} / {filtered.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
