import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-5">
        <Link to="/" className="font-serif-display text-2xl tracking-wide">
          <span className="text-gradient-gold">Absolute</span> Films
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "transition-colors hover:text-gold",
                  isActive ? "text-gold" : "text-muted-foreground",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-gold"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <div className="container mx-auto py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-base py-2 transition-colors",
                    isActive ? "text-gold" : "text-muted-foreground",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button variant="hero" size="sm" asChild className="mt-2 self-start">
              <Link to="/contact" onClick={() => setOpen(false)}>Book a Call</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
