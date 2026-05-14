import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Film, Radio, Scissors, Target, Check, Zap, Camera, Aperture, Clapperboard, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoCard from "@/components/VideoCard";
import SectionTitle from "@/components/SectionTitle";
import MarqueeTicker from "@/components/MarqueeTicker";
import { videos } from "@/data/videos";
import { packages } from "@/data/packages";
import heroImg from "@/assets/hero-cinematic.jpg";

const HERO_WORDS = ["Weddings", "Corporate Events", "Brand Films", "Documentaries", "Live Broadcasts"];

const services = [
  { icon: Film, title: "Video Production", desc: "Commercials, brand films & corporate stories" },
  { icon: Radio, title: "Live Broadcasting", desc: "Live-streaming, multi-cam events & stage" },
  { icon: Scissors, title: "Content Production", desc: "Photography, videography & editing" },
  { icon: Target, title: "Branding & PR", desc: "Brand strategy, digital & public relations" },
];

const statsData = [
  { n: 20, suffix: "+", label: "Years in Craft" },
  { n: 120, suffix: "+", label: "Productions" },
  { n: 40, suffix: "+", label: "Brands Served" },
  { n: 10, suffix: "+", label: "Specialists" },
];

const processSteps = [
  { icon: Camera, n: "01", title: "Discovery", desc: "We learn your story, brand and goals." },
  { icon: Clapperboard, n: "02", title: "Production", desc: "Cinematic crew. Precise execution." },
  { icon: Aperture, n: "03", title: "Post", desc: "Edit, grade, sound design, motion." },
  { icon: MonitorPlay, n: "04", title: "Delivery", desc: "Every screen, every platform." },
];

function StatItem({ n, suffix, label }: { n: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const dur = 1600;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setCount(Math.round(eased * n));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [n]);
  return (
    <div ref={ref} className="text-center px-6 py-8 group border-r border-gold/15 last:border-r-0">
      <div className="font-serif-display text-5xl md:text-6xl text-gradient-gold mb-2 tabular-nums group-hover:scale-110 transition-transform duration-500">
        {count}{suffix}
      </div>
      <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">{label}</p>
    </div>
  );
}

const Home = () => {
  const reel = videos[0];
  const featured = videos.slice(1, 5);

  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % HERO_WORDS.length);
        setWordVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO with autoplay video */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-20 pt-20 hero-scanline">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube-nocookie.com/embed/pKkj-0fSkLs?autoplay=1&mute=1&loop=1&playlist=pKkj-0fSkLs&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&disablekb=1&fs=0&cc_load_policy=0"
            title="Absolute Films Showreel"
            allow="autoplay; encrypted-media"
            frameBorder={0}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 stars-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />

        <div className="relative z-10 container mx-auto text-center px-6 animate-fade-up">
          <p className="text-gold tracking-[0.4em] text-xs md:text-sm uppercase mb-6 animate-shimmer">
            Absolute Films · Since 2005
          </p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
            You step up.
            <br />
            <span className="text-gradient-gold italic">We set up.</span>
          </h1>

          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50 shrink-0" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground">for</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50 shrink-0" />
            </div>
            <span
              className="text-sm tracking-[0.25em] uppercase text-gold font-medium whitespace-nowrap transition-all duration-300"
              style={{
                opacity: wordVisible ? 1 : 0,
                transform: wordVisible ? "translateY(0)" : "translateY(6px)",
              }}
            >
              {HERO_WORDS[wordIdx]}
            </span>
          </div>

          <p className="max-w-xl mx-auto text-muted-foreground text-base md:text-lg mb-10">
            Together we tell your story. Video production, live broadcasting, branding & corporate communications crafted for impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get a Quote <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button variant="outlineGold" size="lg" asChild>
              <Link to="/work"><Play className="w-4 h-4" /> Watch Reel</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeTicker />

      {/* SHOWREEL */}
      <section className="relative py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionTitle eyebrow="Welcome">Our Showreel</SectionTitle>
          <VideoCard video={reel} autoplay className="w-full" />
        </div>
      </section>

      {/* FEATURED VIDEOS */}
      <section className="relative py-24 stars-bg">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="Featured Work">Recent Productions</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {featured.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outlineGold" size="lg" asChild>
              <Link to="/work">View All Work <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES preview */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="What We Do">Services</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative bg-gradient-card border border-border rounded-xl p-4 md:p-8 text-center transition-all duration-500 hover:border-gold/60 hover:-translate-y-2 hover:shadow-gold animate-fade-up overflow-hidden"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-gold rounded-t-xl" />
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-gold mb-3 md:mb-5 glow-gold transition-transform group-hover:scale-110">
                  <s.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-[11px] md:text-xl font-serif-display mb-1 md:mb-2 leading-tight whitespace-nowrap">{s.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outlineGold" size="lg" asChild>
              <Link to="/services">Explore Services <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative border-y border-gold/15 bg-gradient-card overflow-hidden">
        <div className="absolute inset-0 stars-bg opacity-30" />
        <div className="relative container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/15">
          {statsData.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionTitle eyebrow="The Process">From Brief to Screen</SectionTitle>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="absolute hidden md:block top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            {processSteps.map((step, i) => (
              <div
                key={step.n}
                className="group relative bg-gradient-card border border-border rounded-xl p-5 md:p-7 text-center hover:border-gold/50 hover:shadow-gold transition-all duration-500 animate-fade-up overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-xl" />
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-gold mb-3 glow-gold group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-gold font-serif-display text-xs tracking-[0.3em] mb-1">{step.n}</p>
                <h3 className="font-serif-display text-base md:text-lg mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="relative py-24 stars-bg">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="Transparent Pricing">Production Packages</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border overflow-hidden transition-all duration-500 animate-fade-up ${
                  pkg.popular
                    ? "border-gold shadow-gold scale-[1.02] bg-gradient-card"
                    : "border-border bg-gradient-card hover:border-gold/50 hover:shadow-gold"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="flex items-center justify-center gap-1.5 bg-gradient-gold py-2 px-4 text-[10px] tracking-[0.3em] uppercase font-semibold text-primary-foreground">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                <div className="p-7">
                  <h3 className="font-serif-display text-2xl mb-1">{pkg.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{pkg.desc}</p>
                  <div className="mb-5">
                    <span className="font-serif-display text-4xl text-gradient-gold">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground ml-2">{pkg.duration}</span>
                  </div>
                  <div className="divider-gold mb-5" />
                  <ul className="space-y-2.5 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span className={`text-sm leading-snug ${f.bold ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={pkg.popular ? "hero" : "outlineGold"} size="default" className="w-full" asChild>
                    <Link to="/contact">Book Now <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">
            All prices exclude VAT. Custom quotes available.{" "}
            <Link to="/packages" className="text-gold hover:underline">See full package details</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 stars-bg" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
          <div className="star-accent" />
          <h2 className="font-serif-display text-4xl md:text-6xl mb-6">
            Let us help you <span className="text-gradient-gold italic">unlock your vision</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Get in touch today to learn how we can help you achieve your communication and media goals.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Start a Project <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
