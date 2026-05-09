import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionTitle from "@/components/SectionTitle";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent",
        description: "We'll be in touch within one business day.",
      });
    }, 800);
  };

  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-40 pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <SectionTitle eyebrow="Let's talk">Start a Project</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Whether it's a single spot or a year-long content partnership, we'd love to hear about your vision. Tell us a little and we'll reply within one business day.
            </p>
            <div className="space-y-5">
              <a href="mailto:info.absolutefilms@gmail.com" className="flex items-start gap-4 group">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-gold glow-gold shrink-0">
                  <Mail className="w-4 h-4 text-primary-foreground" />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-gold mb-1">Email</p>
                  <p className="group-hover:text-gold transition-colors break-all">info.absolutefilms@gmail.com</p>
                </div>
              </a>
              <a href="tel:+27652239640" className="flex items-start gap-4 group">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-gold glow-gold shrink-0">
                  <Phone className="w-4 h-4 text-primary-foreground" />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-gold mb-1">Phone</p>
                  <p className="group-hover:text-gold transition-colors">+27 065 223 9640</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-gold glow-gold shrink-0">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-gold mb-1">Studio</p>
                  <p>36 Daeraad Street<br/>Bonaero Park, Kempton Park 1619</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 bg-gradient-card border border-border rounded-2xl p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required className="mt-2 bg-background/50" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required className="mt-2 bg-background/50" />
              </div>
            </div>
            <div>
              <Label htmlFor="project">Project type</Label>
              <Input id="project" name="project" placeholder="Brand film, music video, event..." className="mt-2 bg-background/50" />
            </div>
            <div>
              <Label htmlFor="message">Tell us about it</Label>
              <Textarea id="message" name="message" rows={6} required className="mt-2 bg-background/50" />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={sending} className="w-full md:w-auto">
              <Send className="w-4 h-4" /> {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
