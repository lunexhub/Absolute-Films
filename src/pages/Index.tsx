import { Button } from "@/components/ui/button";
import { Play, Film, Radio, Scissors, Target, ArrowRight, Mail, Instagram, Youtube } from "lucide-react";
import heroImg from "@/assets/hero-cinematic.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const services = [
  { icon: Film, title: "Video Production", desc: "Corporate, commercials, branded content" },
  { icon: Radio, title: "Live Streaming", desc: "Events, conferences, broadcasts" },
  { icon: Scissors, title: "Video Editing", desc: "High-end post-production" },
  { icon: Target, title: "Content Strategy", desc: "We plan content that actually works" },
];

const process = [
  { n: "01", title: "Discovery", desc: "We craft premium visuals that stand out" },
  { n: "02", title: "Production", desc: "Efficient production without compromising quality" },
  { n: "03", title: "Delivery", desc: "Content designed to convert" },
];

const works = [
  { img: work1, title: "On Set / Behind the Lens", tag: "Documentary" },
  { img: work2, title: "Live Concert Broadcast", tag: "Live Event" },
  { img: work3, title: "Color & Post Production", tag: "Editing" },
  { img: work4, title: "Luxury Brand Film", tag: "Commercial" },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-14">
    <div className="star-accent" />
    <h2 className="text-4xl md:text-5xl font-serif-display text-foreground">{children}</h2>
    <div className="divider-gold w-40 mx-auto mt-6" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
        <nav className="container mx-auto flex items-center justify-between py-5">
          <a href="#" className="font-serif-display text-2xl tracking-wide">
            <span className="text-gradient-gold">Lumière</span> Films
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-gold transition-colors">Work</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#process" className="hover:text-gold transition-colors">Process</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Book a Call</a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Cinematic film camera at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 stars-bg opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

        <div className="relative z-10 container mx-auto text-center px-6 animate-fade-up">
          <p className="text-gold tracking-[0.4em] text-xs md:text-sm uppercase mb-6 animate-shimmer">Premium Videography</p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
            Stories told in
            <br />
            <span className="text-gradient-gold italic">light & shadow</span>
          </h1>
          <p className="max-w-xl mx-auto text-muted-foreground text-base md:text-lg mb-10">
            Cinematic films, live broadcasts, and brand content crafted with the precision of a feature production.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#work"><Play className="w-4 h-4" /> Watch Reel</a>
            </Button>
            <Button variant="outlineGold" size="lg" asChild>
              <a href="#contact">Start a Project <ArrowRight className="w-4 h-4" /></a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-widest uppercase animate-float">
          Scroll
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-28 stars-bg">
        <div className="container mx-auto px-6">
          <SectionTitle>What We Do</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative bg-gradient-card border border-border rounded-xl p-6 md:p-8 text-center transition-all duration-500 hover:border-gold/60 hover:-translate-y-2 hover:shadow-gold animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold mb-5 glow-gold transition-transform group-hover:scale-110">
                  <s.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif-display mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK SPEAKS - feature reel */}
      <section id="work" className="relative py-28">
        <div className="container mx-auto px-6">
          <SectionTitle>Our Work Speaks</SectionTitle>

          {/* Featured reel */}
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border shadow-deep group cursor-pointer">
            <div className="aspect-video relative">
              <img
                src={work1}
                alt="Featured showreel"
                width={1280}
                height={736}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
              <button className="absolute inset-0 flex items-center justify-center" aria-label="Play showreel">
                <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-gold glow-gold transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                  <span className="absolute inset-0 rounded-full border border-gold/40 animate-ping" />
                </span>
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-gold text-xs tracking-widest uppercase mb-1">2026 Showreel</p>
                <p className="font-serif-display text-2xl md:text-3xl">A Year in Frames</p>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 max-w-5xl mx-auto">
            {works.map((w, i) => (
              <div
                key={w.title}
                className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-border cursor-pointer animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img
                  src={w.img}
                  alt={w.title}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-1">{w.tag}</p>
                  <h3 className="font-serif-display text-xl">{w.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-28 stars-bg">
        <div className="container mx-auto px-6">
          <SectionTitle>Why Choose Us</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <div
                key={p.n}
                className="bg-gradient-card border border-border rounded-xl p-8 text-center transition-all duration-500 hover:border-gold/60 hover:shadow-gold animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gold/60 text-gold text-sm font-medium">
                    {p.n.replace('0', '')}
                  </span>
                  <h3 className="text-2xl font-serif-display">{p.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 stars-bg" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
          <div className="star-accent" />
          <h2 className="font-serif-display text-4xl md:text-6xl mb-6">
            Let's create something <span className="text-gradient-gold italic">unforgettable</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Tell us about your project. We typically reply within one business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:hello@lumierefilms.co"><Mail className="w-4 h-4" /> hello@lumierefilms.co</a>
            </Button>
            <Button variant="outlineGold" size="lg">Schedule a Call</Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif-display text-lg">
            <span className="text-gradient-gold">Lumière</span> Films
          </p>
          <p className="text-xs text-muted-foreground">© 2026 Lumière Films. Crafted in light.</p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-gold transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
