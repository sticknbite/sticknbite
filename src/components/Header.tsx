import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Menu", href: "#menu" },
  { name: "Benefits", href: "#benefits" },
  { name: "Packages", href: "#packages" },
  { name: "FAQ", href: "#faq" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(href.replace("#", ""));
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + href);
    }
  };

  const scrollToQuote = () => {
    if (isHomePage) {
      const quoteSection = document.getElementById("quote");
      quoteSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#quote");
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-elevated">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavClick("#home")} className="flex items-center">
          <img src={logo} alt="Stick'n'Bite - the easy way to grill" className="h-12 w-auto md:h-14" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors duration-200 hover:text-gold-light"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button variant="coral" size="lg" onClick={scrollToQuote}>
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-2 text-primary-foreground lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-primary lg:hidden"
          >
            <nav className="container flex flex-col gap-2 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-md px-4 py-3 text-left text-sm font-medium text-primary-foreground/80 transition-colors duration-200 hover:bg-primary-foreground/10 hover:text-gold-light"
                >
                  {link.name}
                </button>
              ))}
              <div className="mt-2 px-4">
                <Button variant="coral" size="lg" className="w-full" onClick={scrollToQuote}>
                  Get a Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
