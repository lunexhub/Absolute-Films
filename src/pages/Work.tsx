import { useState } from "react";
import VideoCard from "@/components/VideoCard";
import SectionTitle from "@/components/SectionTitle";
import { videos } from "@/data/videos";
import { cn } from "@/lib/utils";

const categories = ["All", "Featured", "Live Event", "Documentary", "Commercial", "Corporate", "Public Service"];

const Work = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? videos : videos.filter((v) => v.tag === filter);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Portfolio">Our Work Speaks</SectionTitle>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "px-4 py-2 rounded-full text-xs tracking-widest uppercase border transition-all",
                filter === c
                  ? "border-gold text-gold bg-gold/10"
                  : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filtered.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default Work;
