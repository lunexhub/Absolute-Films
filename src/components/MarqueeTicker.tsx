const ROW1 = [
  "WEDDINGS", "CORPORATE EVENTS", "LIVE BROADCAST", "BRAND FILMS",
  "DOCUMENTARIES", "PHOTOGRAPHY", "BRANDING & PR", "EVENT COVERAGE",
  "MUSIC VIDEOS", "CONTENT STRATEGY",
];

const ROW2 = [
  "SINCE 2005", "BROADCAST GRADE", "MULTI-CAMERA", "COLOR GRADING",
  "SOUND DESIGN", "SABC PEDIGREE", "4K PRODUCTION", "LIVE STREAMING",
  "GAUTENG & BEYOND", "CONCEPT TO DELIVERY",
];

const Dot = () => (
  <span className="inline-block w-1 h-1 rounded-full bg-gold/60 mx-5 shrink-0 self-center" />
);

const Track = ({ items, slow = false }: { items: string[]; slow?: boolean }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex whitespace-nowrap animate-marquee`} style={slow ? { animationDuration: '52s' } : undefined}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className="text-[10px] tracking-[0.4em] uppercase font-medium text-muted-foreground/70 hover:text-gold transition-colors duration-300 cursor-default">
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
};

const MarqueeTicker = () => (
  <div className="border-y border-gold/15 bg-background/60 backdrop-blur-sm py-3 space-y-2.5 overflow-hidden">
    <Track items={ROW1} />
    <Track items={ROW2} slow />
  </div>
);

export default MarqueeTicker;
