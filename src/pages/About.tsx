import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import hero from "@/assets/hero-cinematic.jpg";

const stats = [
  { n: "20+", label: "Years in craft" },
  { n: "120+", label: "Productions" },
  { n: "40+", label: "Brands served" },
  { n: "10+", label: "Specialists" },
];

const About = () => {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-deep">
            <img src={hero} alt="Director on set" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div>
            <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">About</p>
            <h1 className="font-serif-display text-4xl md:text-6xl mb-6 leading-tight">
              A studio built on <span className="text-gradient-gold italic">storytelling</span>
            </h1>
            <div className="divider-gold w-32 mb-6" />
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Absolute Films (Pty) Ltd is a dynamic, versatile company specializing in video production, corporate communication, digital media, public relations, branding and advertising.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded in 2005 by Mashudu Eugene Ramachela — a seasoned broadcast luminary whose expertise spans South Africa's premier channels including SABC and ENCA — we focus on creativity, innovation and strategic thinking.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              <span className="text-gold">Our vision:</span> to lead the digital media, audio-visual and corporate communications space globally. <span className="text-gold">Our mission:</span> translate every client's vision into reality with measurable results.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Work With Us <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 stars-bg border-t border-border/40">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="By the numbers">Two decades in frames</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="bg-gradient-card border border-border rounded-xl p-8 text-center animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="text-4xl md:text-5xl font-serif-display text-gradient-gold mb-2">{s.n}</div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
