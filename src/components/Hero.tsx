import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroCatering from "@/assets/carousel-8.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background py-12 lg:py-20"
    >
      <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <h1 className="font-display text-4xl font-semibold leading-tight text-gradient-gold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            Transform Your Event With Authentic Brazilian BBQ Catering
          </h1>
          
          <p className="max-w-lg text-lg leading-relaxed text-foreground/80 md:text-xl">
            Experience the magic of true Brazilian barbecue at your next big
            event. From weddings to corporate gatherings, our catering service
            brings unique flavors and an unforgettable experience to you and
            your guests.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="coral"
              size="xl"
              onClick={() => {
                const quoteSection = document.getElementById("quote");
                quoteSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              GET A QUOTE
            </Button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative order-first lg:order-last"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-elevated">
            <img
              src={heroCatering}
              alt="Brazilian BBQ Catering Service with meat skewers and traditional side dishes"
              className="aspect-[4/3] h-auto w-full object-cover lg:aspect-video"
              loading="eager"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-gradient-gold opacity-30" />
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-coral/5 blur-3xl" />
    </section>
  );
};

export default Hero;
