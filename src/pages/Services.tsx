import { Link } from "react-router-dom";
import { Film, Radio, Scissors, Target, Camera, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const services = [
  { icon: Film, title: "Video Production", desc: "From concept to delivery — commercials, brand films, and corporate stories shot with cinematic craft.", items: ["Brand films", "Commercials", "Corporate"] },
  { icon: Radio, title: "Live Streaming", desc: "Multi-cam broadcasts for concerts, conferences and launches with broadcast-grade quality.", items: ["Multi-cam", "Concerts", "Conferences"] },
  { icon: Scissors, title: "Post-Production", desc: "High-end editing, color grading and sound design that elevates the final cut.", items: ["Editing", "Color", "Sound"] },
  { icon: Camera, title: "Documentary", desc: "Long-form storytelling that captures truth with intimacy and patience.", items: ["Profiles", "Series", "Films"] },
  { icon: Sparkles, title: "Music Videos", desc: "Visually-driven pieces built around the rhythm and identity of the artist.", items: ["Concepts", "Performance", "Narrative"] },
  { icon: Target, title: "Content Strategy", desc: "We plan content systems that perform across every platform you care about.", items: ["Strategy", "Series", "Social"] },
];

const process = [
  { n: "01", title: "Discovery", desc: "We listen, research, and shape the story before a single frame is shot." },
  { n: "02", title: "Pre-Production", desc: "Treatment, locations, casting and a tight production plan." },
  { n: "03", title: "Production", desc: "On set with a precise crew and the right tools for the moment." },
  { n: "04", title: "Delivery", desc: "Polished cuts, ready for screens of every size." },
];

const Services = () => {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="Capabilities">Services</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group bg-gradient-card border border-border rounded-xl p-8 transition-all duration-500 hover:border-gold/60 hover:-translate-y-2 hover:shadow-gold animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold mb-5 glow-gold">
                  <s.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif-display mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="text-[10px] tracking-[0.2em] uppercase text-gold border border-gold/30 rounded-full px-3 py-1">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 stars-bg">
        <div className="container mx-auto px-6">
          <SectionTitle eyebrow="How we work">Process</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {process.map((p, i) => (
              <div
                key={p.n}
                className="bg-gradient-card border border-border rounded-xl p-8 transition-all duration-500 hover:border-gold/60 hover:shadow-gold animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="block text-gold font-serif-display text-3xl mb-3">{p.n}</span>
                <h3 className="text-xl font-serif-display mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start a Project <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
