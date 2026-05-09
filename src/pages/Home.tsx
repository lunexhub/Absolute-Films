import { Link } from "react-router-dom";
import { Play, ArrowRight, Film, Radio, Scissors, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoCard from "@/components/VideoCard";
import SectionTitle from "@/components/SectionTitle";
import { videos } from "@/data/videos";
import heroImg from "@/assets/hero-cinematic.jpg";

const services = [
  { icon: Film, title: "Video Production", desc: "Commercials, brand films & corporate stories" },
  { icon: Radio, title: "Live Broadcasting", desc: "Live-streaming, multi-cam events & stage" },
  { icon: Scissors, title: "Content Production", desc: "Photography, videography & editing" },
  { icon: Target, title: "Branding & PR", desc: "Brand strategy, digital & public relations" },
];

const Home = () => {
  const reel = videos[0];
  const featured = videos.slice(1, 5);

  return (
    <>
      {/* HERO with autoplay video */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
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
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="What We Do">Services</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative bg-gradient-card border border-border rounded-xl p-6 md:p-8 text-center transition-all duration-500 hover:border-gold/60 hover:-translate-y-2 hover:shadow-gold animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold mb-5 glow-gold transition-transform group-hover:scale-110">
                  <s.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif-display mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
