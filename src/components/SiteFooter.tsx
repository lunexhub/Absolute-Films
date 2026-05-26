import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <img src="/Logo.png" alt="Absolute Films" className="h-14 w-auto mb-3" />
          <p className="text-sm text-muted-foreground max-w-xs">
            You step up. We set up. Together we tell your story. Video production, branding, PR and corporate communications since 2015.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-gold tracking-widest uppercase text-xs mb-2">Explore</p>
          <Link to="/work" className="text-muted-foreground hover:text-gold transition-colors">Work</Link>
          <Link to="/services" className="text-muted-foreground hover:text-gold transition-colors">Services</Link>
          <Link to="/about" className="text-muted-foreground hover:text-gold transition-colors">About</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors">Contact</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="text-gold tracking-widest uppercase text-xs mb-2">Connect</p>
          <a href="mailto:info.absolutefilms@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
            <Mail className="w-4 h-4" /> info.absolutefilms@gmail.com
          </a>
          <a href="tel:+27652239640" className="text-muted-foreground hover:text-gold transition-colors">+27 065 223 9640</a>
          <p className="text-muted-foreground text-xs mt-1">36 Daeraad Street, Bonaero Park, Kempton Park 1619</p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-gold transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-10 pt-6 border-t border-border/50 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© 2026 Absolute Films (Pty) Ltd. All rights reserved.</p>
        <p>Built by <a href="https://www.lunexweb.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Lunexweb</a></p>
        <p className="tracking-widest uppercase">You step up · We set up</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
