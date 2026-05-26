import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import { galleryImages, galleryCategories, type GalleryImage } from "@/data/gallery";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const currentIndex = lightbox ? filtered.findIndex((img) => img.id === lightbox.id) : -1;
  const prev = () => currentIndex > 0 && setLightbox(filtered[currentIndex - 1]);
  const next = () => currentIndex < filtered.length - 1 && setLightbox(filtered[currentIndex + 1]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") setLightbox(null);
  };

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
                  "px-4 py-2 rounded-full text-xs tracking-widest uppercase border transition-all",
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
            {filtered.map((img, i) => (
              <div
                key={img.id}
                className="relative break-inside-avoid mb-4 group overflow-hidden rounded-xl border border-border cursor-pointer animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-between p-4">
                  <span className="text-xs tracking-[0.2em] uppercase text-gold">{img.category}</span>
                  <ZoomIn className="w-5 h-5 text-white/80" />
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          onKeyDown={handleKey}
          tabIndex={0}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-gold border border-gold/20"
            />

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold/10 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Prev */}
            {currentIndex > 0 && (
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Next */}
            {currentIndex < filtered.length - 1 && (
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Counter */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-muted-foreground tracking-widest">
              {currentIndex + 1} / {filtered.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
