import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-cream">
      {/* CTA Section */}
      <div className="py-16 text-center">
        <div className="container max-w-4xl">
          <h2 className="mb-6 font-display text-2xl font-semibold text-gradient-gold sm:text-3xl md:text-4xl">
            Relish Brazil With Stick'n'Bite: Explore, Indulge, Celebrate!
          </h2>
          <p className="mb-8 text-muted-foreground leading-relaxed">
            Explore our website to learn more about our menu, read testimonials from delighted clients, 
            and discover the essence of Brazilian cuisine. Contact our friendly team today to discuss 
            your event and let us bring the vibrant spirit of Brazil to your next gathering. Get ready 
            to savor the sizzle and experience the true taste of Brazilian barbecue with Stick'n'Bite.
          </p>
          <Button
            onClick={scrollToQuote}
            size="lg"
            className="bg-gold text-white hover:bg-gold/90 px-10 py-6 text-base font-semibold tracking-wider uppercase"
          >
            Get A Quote
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Office Hours */}
            <div>
              <h4 className="mb-6 font-display text-xl font-semibold text-gold">
                Office Hours
              </h4>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex justify-between border-b border-border pb-3">
                  <span>Monday – Friday</span>
                  <span>8.00AM – 6.00PM</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span>Saturday</span>
                  <span>10.00AM – 3.00PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Logo & Social */}
            <div className="flex flex-col items-center justify-center">
              <div className="mb-6">
                <img src={logo} alt="Stick'n'Bite - the easy way to grill" className="h-16 w-auto" />
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/sticknbitesd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/sticknbite/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="mb-6 font-display text-xl font-semibold text-gold">
                Contact Us
              </h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gold" />
                  <a href="mailto:contact@sticknbite.com" className="hover:text-gold transition-colors">
                    contact@sticknbite.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gold" />
                  <a href="tel:+16197937006" className="hover:text-gold transition-colors">
                    (619) 793-7006
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>3425 Hancock St, San Diego, CA 92110</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © All Rights Reserved: STICKNBITE
      </div>
    </footer>
  );
};

export default Footer;
