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

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const firstName = data.get("firstName") as string;
    const lastName  = data.get("lastName")  as string;
    const email     = data.get("email")     as string;
    const phone     = data.get("phone")     as string;
    const pkg       = data.get("package")   as string;
    const venue     = data.get("venue")     as string;
    const guests    = data.get("guests")    as string;
    const notes     = data.get("notes")     as string;
    const dateStr   = eventDate ? format(eventDate, "PPP") : "Not specified";

    const lines = [
      `*New Quote Request — Absolute Films*`,
      ``,
      `*Name:* ${firstName} ${lastName}`,
      `*Email:* ${email}`,
      `*Phone:* ${phone}`,
      `*Package:* ${pkg || "Not specified"}`,
      `*Venue:* ${venue || "Not specified"}`,
      `*Event Date:* ${dateStr}`,
      `*Guests:* ${guests || "Not specified"}`,
      notes ? `*Notes:* ${notes}` : null,
    ].filter(Boolean).join("\n");

    const waUrl = `https://wa.me/27652239640?text=${encodeURIComponent(lines)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    form.reset();
    setEventDate(undefined);
    setSending(false);

    toast({
      title: "Opening WhatsApp…",
      description: "Your quote details are pre-filled — just hit Send!",
    });
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
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {sending ? "Opening..." : "Send Quote via WhatsApp"}
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
