import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-rock-dark border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Rock Band Logo" className="h-12 w-auto" />
              <span className="font-rock text-2xl font-bold text-glow">
                
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Punk, Rock & Metal Cover Band aus der Region.
            </p>
            <p className="text-muted-foreground max-w-md">
              Wir bringen die größten Hits live auf die Bühne – 
              von Rock bis klassischem Metal.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/Die_Band_The_End" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary transition-rock hover-rock"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100063827957058" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary transition-rock hover-rock"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary transition-rock hover-rock"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-rock text-lg font-bold mb-4 text-primary">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/band" 
                  className="text-muted-foreground hover:text-primary transition-rock"
                >
                  Band
                </Link>
              </li>
              <li>
                <Link 
                  to="/gigs" 
                  className="text-muted-foreground hover:text-primary transition-rock"
                >
                  Gigs
                </Link>
              </li>
              <li>
                <Link 
                  to="/media" 
                  className="text-muted-foreground hover:text-primary transition-rock"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link 
                  to="/repertoire" 
                  className="text-muted-foreground hover:text-primary transition-rock"
                >
                  Repertoire
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-rock text-lg font-bold mb-4 text-primary">
              Kontakt
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link 
                  to="/kontakt" 
                  className="hover:text-primary transition-rock"
                >
                  Booking-Anfrage
                </Link>
              </li>
              <li>
                <Link 
                  to="/mearch" 
                  className="hover:text-primary transition-rock"
                >
                  Merchandise
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 THE-END. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/impressum" 
              className="text-sm text-muted-foreground hover:text-primary transition-rock"
            >
              Impressum
            </Link>
            <Link 
              to="/datenschutz" 
              className="text-sm text-muted-foreground hover:text-primary transition-rock"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
