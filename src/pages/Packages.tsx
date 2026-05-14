import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { packages, included } from "@/data/packages";

const Packages = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">Transparent Pricing</p>
          <h1 className="font-serif-display text-5xl md:text-6xl mb-6">
            Production <span className="text-gradient-gold">Packages</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every production is unique. These packages are starting points — we tailor scope,
            crew and deliverables to fit your exact brief and budget.
          </p>
        </div>
      </section>

      {/* Package cards */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
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
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="flex items-center justify-center gap-1.5 bg-gradient-gold py-2 px-4 text-[10px] tracking-[0.3em] uppercase font-semibold text-primary-foreground">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <div className="p-7 md:p-8">
                  {/* Header */}
                  <h2 className="font-serif-display text-2xl mb-1">{pkg.name}</h2>
                  <p className="text-xs text-muted-foreground mb-4">{pkg.desc}</p>

                  <div className="mb-6">
                    <span className="font-serif-display text-4xl text-gradient-gold">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground ml-2">{pkg.duration}</span>
                  </div>

                  <div className="divider-gold mb-6" />

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span className={`text-sm leading-snug ${f.bold ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Add-ons */}
                  {pkg.addons.length > 0 && (
                    <div className="mb-7">
                      <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-2">Options</p>
                      <ul className="space-y-1.5">
                        {pkg.addons.map((a) => (
                          <li key={a} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full border border-gold/50 shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    variant={pkg.popular ? "hero" : "outlineGold"}
                    size="default"
                    className="w-full"
                    asChild
                  >
                    <Link to="/contact">Book Now <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            All prices exclude VAT. Custom quotes available for larger productions.{" "}
            <Link to="/contact" className="text-gold hover:underline">Contact us</Link> to discuss your project.
          </p>
        </div>
      </section>

      {/* What's always included */}
      <section className="py-20 stars-bg">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionTitle eyebrow="Every Package">What's Always Included</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-gradient-card border border-border rounded-xl px-5 py-4 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <Check className="w-5 h-5 text-gold shrink-0" strokeWidth={2.5} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-serif-display text-4xl mb-4">Not sure which package fits?</h2>
          <p className="text-muted-foreground mb-8">
            Tell us about your project and we'll recommend the right scope, crew size and
            delivery timeline — no commitment required.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get a Custom Quote <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Packages;
