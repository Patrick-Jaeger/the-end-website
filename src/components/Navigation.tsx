import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LimelightNav, NavItem } from "@/components/ui/limelight-nav";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/band", label: "Band" },
    { path: "/gigs", label: "Gigs" },
    { path: "/media", label: "Media" },
    { path: "/repertoire", label: "Repertoire" },
    { path: "/merch", label: "Merch" },
    { path: "/kontakt", label: "Kontakt" },
    { path: "/pa-lichtverleih", label: "PA- & Lichtverleih" },
  ];

  const limelightNavItems: NavItem[] = navItems.map((item) => ({
    id: item.path,
    label: item.label,
    onClick: () => {
      navigate(item.path);
      handleNavClick();
    },
    isActive: location.pathname === item.path,
  }));

  const activeIndex = navItems.findIndex(item => item.path === location.pathname);
  const defaultActiveIndex = activeIndex >= 0 ? activeIndex : 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-rock bg-background/95 backdrop-blur-sm shadow-dark">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-rock" onClick={handleLogoClick}>
            <img src={logo} alt="Rock Band Logo" className="h-16 w-auto cursor-pointer" />
            <span className="hidden sm:block font-rock text-xl font-bold text-glow">
               
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <LimelightNav 
              items={limelightNavItems}
              defaultActiveIndex={defaultActiveIndex}
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-dark z-40">
            <div className="container mx-auto px-4 py-6">
              {navItems.map((item, index) => (
                <div
                  key={item.path}
                >
                  <Link
                    to={item.path}
                    className={`block font-rock font-semibold py-3 px-4 rounded-lg mb-2 transition-rock hover:bg-primary/10 hover:text-primary ${
                      location.pathname === item.path
                        ? "text-primary text-glow bg-primary/5"
                        : "text-foreground"
                    }`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;