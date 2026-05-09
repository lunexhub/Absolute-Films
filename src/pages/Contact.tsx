import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Twitter, Send, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const DISCOUNT_DAYS = 9;
const STORAGE_KEY = "absolutefilms-discount-deadline";

function getDeadline(): Date {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const d = new Date(stored);
    if (d > new Date()) return d;
  }
  const next = new Date(Date.now() + DISCOUNT_DAYS * 24 * 60 * 60 * 1000);
  localStorage.setItem(STORAGE_KEY, next.toISOString());
  return next;
}

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const deadline = getDeadline();
    const tick = () => {
      const diff = deadline.getTime() - Date.now();
      if (diff <= 0) {
        localStorage.removeItem(STORAGE_KEY);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [eventDate, setEventDate] = useState<Date | undefined>(undefined);
  const [calOpen, setCalOpen] = useState(false);
  const countdown = useCountdown();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Quote request sent!",
        description: "We'll get back to you within one business day.",
      });
    }, 800);
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      {/* Discount banner */}
      <section className="py-16 md:py-20 stars-bg relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
        <div className="container mx-auto px-6 relative text-center max-w-3xl">
          <p className="text-gold tracking-[0.35em] text-xs uppercase font-semibold mb-4">
            Fill Out the Form &amp; Get a Quote
          </p>
          <h1 className="font-serif-display text-4xl md:text-5xl mb-4">
            Secure Your Date &amp; Get a{" "}
            <span className="text-gradient-gold">Custom Quote</span>
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            As a thank you for being part of our journey, we'd love to hear about your project.
            Fill in the form and we'll get back to you with an accurate quote.
          </p>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-6 md:gap-10">
            {[
              { value: countdown.days, label: "Days" },
              { value: countdown.hours, label: "Hours" },
              { value: countdown.minutes, label: "Minutes" },
              { value: countdown.seconds, label: "Seconds" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <span className="font-serif-display text-5xl md:text-6xl text-gradient-gold tabular-nums">
                  {pad(value)}
                </span>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif-display text-3xl mb-3">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Please fill in the form to receive an accurate quote. There is no budget too
                  small or too big — whatever your budget is, we will help.
                </p>
              </div>

              <div className="space-y-5">
                <a href="mailto:info.absolutefilms@gmail.com" className="flex items-start gap-4 group">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-gold glow-gold shrink-0">
                    <Mail className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gold mb-1">Email</p>
                    <p className="group-hover:text-gold transition-colors break-all text-sm">info.absolutefilms@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+27652239640" className="flex items-start gap-4 group">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-gold glow-gold shrink-0">
                    <Phone className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gold mb-1">Phone</p>
                    <p className="group-hover:text-gold transition-colors text-sm">+27 065 223 9640</p>
                  </div>
                </a>

                <a href="https://wa.me/27652239640" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-gold glow-gold shrink-0">
                    <MessageCircle className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gold mb-1">WhatsApp</p>
                    <p className="group-hover:text-gold transition-colors text-sm">+27 065 223 9640</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-gold glow-gold shrink-0">
                    <MapPin className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gold mb-1">Studio</p>
                    <p className="text-sm">36 Daeraad Street<br />Bonaero Park, Kempton Park 1619</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 pt-2">
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: form */}
            <form onSubmit={onSubmit} className="lg:col-span-3 bg-gradient-card border border-border rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" required className="mt-2 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" required className="mt-2 bg-background/50" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" required className="mt-2 bg-background/50" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" required className="mt-2 bg-background/50" />
              </div>

              <div>
                <Label htmlFor="package">Choose Your Package</Label>
                <select
                  id="package"
                  name="package"
                  className="mt-2 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Select a package...</option>
                  <option value="essential">Essential — From R8,999</option>
                  <option value="professional">Professional — From R18,999</option>
                  <option value="elite">Elite — From R35,999</option>
                  <option value="custom">Custom / Not sure yet</option>
                </select>
              </div>

              <div>
                <Label htmlFor="venue">Venue / Location</Label>
                <Input id="venue" name="venue" placeholder="e.g. Sandton Convention Centre" className="mt-2 bg-background/50" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label>Event Date</Label>
                  <Popover open={calOpen} onOpenChange={setCalOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "mt-2 w-full flex items-center justify-between rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-left ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                          !eventDate && "text-muted-foreground"
                        )}
                      >
                        {eventDate ? format(eventDate, "PPP") : "Pick a date"}
                        <CalendarIcon className="w-4 h-4 opacity-50" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={eventDate}
                        onSelect={(d) => { setEventDate(d); setCalOpen(false); }}
                        disabled={(d) => d < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <input type="hidden" name="eventDate" value={eventDate ? format(eventDate, "yyyy-MM-dd") : ""} />
                </div>
                <div>
                  <Label htmlFor="guests">Estimated Number of Guests</Label>
                  <Input id="guests" name="guests" type="number" min="0" placeholder="e.g. 150" className="mt-2 bg-background/50" />
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes <span className="text-muted-foreground">(optional)</span></Label>
                <Textarea id="notes" name="notes" rows={4} className="mt-2 bg-background/50" />
              </div>

              <Button type="submit" variant="hero" size="lg" disabled={sending} className="w-full">
                <Send className="w-4 h-4" />
                {sending ? "Sending..." : "Get My Quote"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting you agree to be contacted about your quote. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
