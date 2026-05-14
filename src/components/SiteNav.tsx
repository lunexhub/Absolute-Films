import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages", mobileLabel: "Prices" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-5">
        <Link to="/" className="flex items-center">
          <img src="/Logo.png" alt="Absolute Films" className="h-16 w-auto" />
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
        <div className="md:hidden border-t border-gold/20 bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-6 pt-4 pb-5">
            <div className="grid grid-cols-2 gap-x-6">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-2 py-3 text-[11px] tracking-[0.25em] uppercase border-b border-border/30 transition-all",
                      isActive ? "text-gold border-gold/40" : "text-muted-foreground hover:text-gold",
                    )
                  }
                >
                  <span className="w-1 h-1 rounded-full bg-current opacity-70 shrink-0" />
                  <span className="flex-1">{l.mobileLabel ?? l.label}</span>
                  <ChevronRight className="w-3 h-3 opacity-40 shrink-0" />
                </NavLink>
              ))}
            </div>
            <Button variant="hero" size="sm" asChild className="w-full mt-4">
              <Link to="/contact" onClick={() => setOpen(false)}>Book a Call</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
