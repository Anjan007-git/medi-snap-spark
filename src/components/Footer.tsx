import { Pill, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Pill className="w-4 h-4 text-primary rotate-45" />
          </div>
          <span className="text-lg font-bold text-gradient">MediScan</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/scan" className="text-muted-foreground hover:text-primary transition-colors">Scan</Link>
          <Link to="/search" className="text-muted-foreground hover:text-primary transition-colors">Search</Link>
          <Link to="/history" className="text-muted-foreground hover:text-primary transition-colors">History</Link>
          <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start justify-center gap-2 mb-6 max-w-md mx-auto">
          <Shield className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            MediScan is for informational purposes only. Always consult a qualified healthcare professional before making medical decisions.
          </p>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} MediScan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
