import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import hero from "@/assets/hero-cinematic.jpg";

const stats = [
  { n: "20+", label: "Years in craft" },
  { n: "120+", label: "Productions" },
  { n: "40+", label: "Brands served" },
  { n: "10+", label: "Specialists" },
];

const pillars = [
  {
    title: "Strategy before the shutter",
    desc: "Great content starts long before a camera is switched on. We invest time understanding your brand, your audience and your goals — so every frame has a purpose, not just a look.",
  },
  {
    title: "A crew that becomes your partner",
    desc: "Our team embeds into your world. We listen, adapt and move with you. Whether it's a corporate boardroom or an outdoor live broadcast, we bring calm, precision and creative energy to every set.",
  },
  {
    title: "Broadcast pedigree, boutique attention",
    desc: "Rooted in two decades of national broadcast experience across SABC and eNCA, we apply the same standards of excellence to every client — regardless of project size or budget.",
  },
  {
    title: "Delivery that travels",
    desc: "We engineer content to perform across every screen it lands on — from cinema-scale presentations to mobile-first social media campaigns. Your message doesn't just look good; it works.",
  },
];

const differentiators = [
  "Full-service: concept, production, post and distribution under one roof",
  "Broadcast-trained director with 20+ years of national TV experience",
  "Live event capability with multi-camera, real-time switching",
  "Deep understanding of South African media & corporate landscape",
  "Flexible engagement — single projects or long-term retainers",
  "Multilingual production capacity for diverse audiences",
];

const faqs = [
  {
    q: "How long does a typical production take from brief to delivery?",
    a: "It depends on the scope. A corporate brand film typically runs 2–4 weeks from brief to final delivery. Larger documentary or multi-day event productions can take 6–12 weeks including post-production. We always agree on a clear timeline upfront so there are no surprises.",
  },
  {
    q: "What is included in the production process?",
    a: "Every production includes a discovery consultation, creative brief, pre-production planning, on-location shoot days, professional editing, color grading, sound design, and up to the agreed number of revisions. We handle everything — you simply show up and lead your story.",
  },
  {
    q: "Can you handle live broadcasts and real-time streaming?",
    a: "Absolutely. Live broadcasting is one of our core specialities. We have experience managing multi-camera live events — conferences, product launches, concerts and corporate town halls — with real-time switching and professional stream delivery to any platform.",
  },
  {
    q: "Do you work with clients outside South Africa?",
    a: "Yes. While we are based in Kempton Park, Gauteng, we have produced content across southern Africa and work remotely with international brands. Travel for production can be arranged as part of any project scope.",
  },
  {
    q: "What formats do you deliver final content in?",
    a: "We deliver in whatever format your project demands — 4K master files, broadcast-ready formats, compressed web versions, social media cuts and more. We also provide platform-specific edits (YouTube, Instagram, LinkedIn) as an optional add-on.",
  },
  {
    q: "Can I commission just one part of the process — like editing only?",
    a: "Yes. We offer standalone post-production services including editing, color grading, motion graphics and sound design. If you have raw footage that needs a professional finish, we are happy to step in at that stage.",
  },
];

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
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

      {/* Stats */}
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

      {/* Our Approach */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionTitle eyebrow="How we think">Our Approach to Production</SectionTitle>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
            We don't simply point cameras at things and hope for the best. Our approach is deliberate, collaborative and engineered to produce content that actually moves people — and moves the needle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="bg-gradient-card border border-border rounded-xl p-8 hover:border-gold/50 hover:shadow-gold transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="block font-serif-display text-gold text-4xl mb-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-serif-display mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Absolute Films */}
      <section className="py-24 stars-bg border-t border-border/40">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionTitle eyebrow="What sets us apart">Why Absolute Films</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map((d, i) => (
              <div
                key={d}
                className="flex items-start gap-3 bg-gradient-card border border-border rounded-xl px-5 py-4 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-sm leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/packages">View Our Packages <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionTitle eyebrow="Common questions">Everything You Need to Know</SectionTitle>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gradient-card border border-border rounded-xl overflow-hidden transition-colors duration-300 hover:border-gold/40"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="text-sm font-medium leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={cn("w-4 h-4 text-gold shrink-0 transition-transform duration-300", openFaq === i && "rotate-180")}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 stars-bg border-t border-border/40">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-serif-display text-4xl md:text-5xl mb-4">
            Ready to tell your <span className="text-gradient-gold italic">story?</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Whether you have a full creative brief or just a spark of an idea, we are here to shape it into something extraordinary. Let's talk.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Start the Conversation <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
